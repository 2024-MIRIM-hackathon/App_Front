import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native';

import Svg, { Circle, G } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/CalendarStyles';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { getDate } from '../api/calendarApi';
import { getInfo } from '../api/userApi';
import { LearnRes, Words, TextType } from '../types/learnType';
import { InfoData } from '../types/userType';
import { useFocusEffect } from '@react-navigation/native';
interface DateRes extends LearnRes {
    status: {
        word_count: number;
        read_done: number;
        quiz_done: number;
    }
}

const date = new Date();
const offset = 9 * 60;
const today = new Date(date.getTime() + offset * 60 * 1000);

const wordContainerWidth = Dimensions.get('window').width - 58;
const circle_length = 295.31;
const R = circle_length / (2*Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function Calendar() {
    const [todayText, setTodayText] = useState(() => {
        return today.toISOString().split('T')[0];
    })
    const [userId, setUserId] = useState<string|null>(null)
    useEffect(() => {
      const fetchUserId = async () => {
        const id = await AsyncStorage.getItem('userId');
        setUserId(id);
      };

      fetchUserId();
    }, []);
    const [statusBarColor, setStatusBarColor] = useState('white'); 
    const [statusBarHeight, setStatusBarHeight] = useState(374); 
    
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        
        if (scrollY < statusBarHeight) {
            setStatusBarColor('white');
        } else {
            setStatusBarColor('#F6F5FA');
        } 
    };

    const [wordIng, setWordIng] = useState(0);
    const [writeIng, setWriteIng] = useState(0);
    const [quizIng, setQuizIng] = useState(0);
    
    const [currentMonth, setCurrentMonth] = useState(today);
    const [checkDate, setCheckDate] = useState(todayText);

    const [words, setWords] = useState<Words[]>([])
    const [text, setText] = useState<TextType>()
    const [joinText, setJoinText] = useState('')
    const [name, setName] = useState('')

    const fetchDay = async(date: string) => {
        try {
            if (!userId) throw new Error('userId가 존재하지 않음')
            const res:DateRes = await getDate({
                userId,
                date
            })
            setWords(res.words)
            setText(res.text)
            setWordIng(res.status.word_count * 0.25)
            setWriteIng(res.status.read_done * 1)
            setQuizIng(res.status.quiz_done * 1)
        } catch (error) {
            setWords([])
            setText(undefined)
            setWordIng(0)
            setWriteIng(0)
            setQuizIng(0)
            console.log(userId);
        }
    }

    useEffect(() => {
        console.log('dddddddddddddddddddddddddd');
        console.log(writeIng);
    }, [writeIng])

    const fetchInfo = async() => {
        try {
            if (!userId) throw new Error('userId가 존재하지 않음')
                console.log('sdfasdfasdfasdfasdfa');
                // console.log(res);
            const res:InfoData = await getInfo()
            setJoinText((res.join_date).split('T')[0])
            setName(res.nickname)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!userId) return;
        fetchDay(todayText)
        fetchInfo()
    }, [userId])

    useEffect(() => {
        fetchDay(checkDate)
    }, [checkDate])

    useEffect(() => {
        console.log('아아아아ㅏ');
        console.log(joinText);
    }, [joinText])

    useFocusEffect(
        useCallback(() => {
            const today = new Date()
            const offset = today.getTimezoneOffset()
            const koreaTime = new Date(today.getTime() - offset * 60 * 1000)
            const day = koreaTime.toISOString().split('T')[0]
            setCheckDate(day)
            return;
        }, [])
    )

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()+1, 1));
    }
    const previousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()-1, 1));
    }

    const getTextStyle = (date: string) => {
        let backgroundStyle = {};
        let isDisabled = 0;
        let textStyle = '#424242';
        if(date <= joinText || date > todayText){
            textStyle = '#9E9E9E'
            isDisabled = 1
            return [backgroundStyle, isDisabled, textStyle]
        } else if(date == todayText) {
            backgroundStyle = {backgroundColor: '#FFF828'};
            textStyle = '#424242';
        }
        return [backgroundStyle, isDisabled, textStyle];
    }

    const generateMatrix = () => {
        let matrix: { date: string, day: string }[][] = [];
        let year = currentMonth.getFullYear();
        let month = currentMonth.getMonth();
        let firstDay = new Date(year, month, 1).getDay();  
        let maxDays = new Date(year, month + 1, 0).getDate();  
        let counter = 1 - firstDay;  
        
        for (let row = 0; row < 6; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                let dateText = '';
                let cellValue = counter > 0 && counter <= maxDays ? counter : ''; 
                if(cellValue !== ''){
                    dateText = `${year}-${String(month + 1).padStart(2, '0')}-${String(cellValue).padStart(2, '0')}`;
                }
                matrix[row][col] = { date: dateText, day: cellValue.toString() };
                counter++;
            }
        }
        if (matrix[5].every(cell => cell.date === '')) {
            matrix.pop();
        }
        return matrix;
    }
    
    const renderCalendar = () => {
        let matrix = generateMatrix();
        let rowItemsKey = 0;
        let rows = matrix.map((row) => {
            let rowItems = row.map((item, colIndex) => {
                let textStyle = '#FFFFFF';
                const [backgroundStyle, isDisabled, textColor] = getTextStyle(item.date);
                if (typeof textColor === 'string') {
                    textStyle = textColor;
                }
                return (
                    <TouchableOpacity
                        style={[styles.cell, {backgroundColor: checkDate===item.date?'black':'white'}, backgroundStyle]}
                        key={colIndex}
                        onPress={() => setCheckDate(item.date)}
                        disabled={isDisabled?true:false}
                        activeOpacity={1}>
                        <Text style={[{color: todayText===item.date?'black':checkDate===item.date?'#FFE400':textStyle}, styles.dayText]}>
                            {item.day}
                        </Text> 
                    </TouchableOpacity>
                );
            })
            return <View style={styles.row} key={rowItemsKey++}>{rowItems}</View>;
        })
        return <View style={styles.dateContainer} key={rowItemsKey++}>{rows}</View>;
    }

    useEffect(() => {
        let matrix = generateMatrix();
        (matrix.length === 5) ? setStatusBarHeight(374) : setStatusBarHeight(417);
        setStatusBarColor('white');
    }, [currentMonth]);

    const wordProgress = useSharedValue(0);
    const writeProgress = useSharedValue(0);
    const quizProgress = useSharedValue(0);

    useEffect(() => {
        wordProgress.value = withTiming(wordIng, { duration: 2000 })
        writeProgress.value = withTiming(writeIng, { duration: 2000 })
        quizProgress.value = withTiming(quizIng, { duration: 2000 })
    },[quizIng]);
    
    const wordAnimatedProgress = useAnimatedProps(() => ({
        strokeDashoffset: circle_length * (1 - wordProgress.value),
    }))
    const writeAnimatedProgress = useAnimatedProps(() => ({
        strokeDashoffset: circle_length * (1 - writeProgress.value),
    }))
    const quizAnimatedProgress = useAnimatedProps(() => ({
        strokeDashoffset: circle_length * (1 - quizProgress.value),
    }))

    const [currentIndex, setCurrentIndex] = useState(0);

    const onScroll = (e: { nativeEvent: { contentOffset: { x: number } } }) => {
        const xOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / wordContainerWidth);
        setCurrentIndex(index);
    };

    const indexToOffset = () => {
        return { x: currentIndex * (wordContainerWidth + 9), y: 0 };
    };

    const getWidth = (str: string) => {
        let len = str.length;
        let nu = str.split(' ').length - 1;
        return (len-nu)*16 + nu*4;
    }

    return (
        <View style={styles.body}>
        <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: statusBarColor, position: 'absolute', top: 0, zIndex: 10 }}/>
        <ScrollView
            style={{paddingTop: StatusBar.currentHeight}}
            showsVerticalScrollIndicator={false}
            overScrollMode='never'
            onScroll={handleScroll}>
            <View style={styles.calendarContainer}>
                <View style={styles.calendarHeader}>
                    <Text style={styles.calendarMonth}>{currentMonth.getFullYear()} . {String(currentMonth.getMonth()+1).padStart(2, '0')}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={previousMonth}><Image source={require('../assets/images/leftImg.png')} style={{width: 9, height: 12, marginRight: 23}} /></TouchableOpacity>
                        <TouchableOpacity onPress={nextMonth}><Image source={require('../assets/images/rightImg.png')} style={{width: 9, height: 12}} /></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dayContainer}>
                    <Text style={styles.day}>일</Text>
                    <Text style={styles.day}>월</Text>
                    <Text style={styles.day}>화</Text>
                    <Text style={styles.day}>수</Text>
                    <Text style={styles.day}>목</Text>
                    <Text style={styles.day}>금</Text>
                    <Text style={styles.day}>토</Text>
                </View>
                {renderCalendar()}
            </View>
            <Text style={styles.greeting}>{name}님!{'\n'}정말 열심히 한 날이네요!</Text>
            <View style={styles.IngContainer}>
                <View style={styles.IngItemContainer}>
                    <Text style={styles.IngText}>단어 학습</Text>
                    <View style={styles.perContainer}>
                        <View style={styles.perTextContainer}>
                            <Text style={styles.perText}>{wordIng*100}%</Text>
                        </View>
                        <Svg width={100} height={100}>
                            <G rotation={90} origin="50,50" scaleX={-1}>
                                <AnimatedCircle cx={50} cy={50} r={R}
                                    stroke={'#FFE400'}
                                    strokeWidth={5.36}
                                    strokeDasharray={circle_length}
                                    strokeDashoffset={circle_length * (1-wordIng)}
                                    strokeLinecap={'round'}
                                    fill='none'/>
                            </G>
                        </Svg>
                    </View>
                </View>
                <View style={styles.IngItemContainer}>
                    <Text style={styles.IngText}>읽기 학습</Text>
                    <View style={styles.perContainer}>
                        <View style={styles.perTextContainer}>
                            <Text style={styles.perText}>{writeIng*100}%</Text>
                        </View>
                        <Svg width={100} height={100}>
                            <G rotation={90} origin="50,50" scaleX={-1}>
                                <AnimatedCircle cx={50} cy={50} r={R}
                                    stroke={'#FFE400'}
                                    strokeWidth={5.36}
                                    strokeDasharray={circle_length}
                                    strokeDashoffset={circle_length * (1-writeIng)}
                                    strokeLinecap={'round'}
                                    fill='none'/>
                            </G>
                        </Svg>
                    </View>
                </View>
                <View style={styles.IngItemContainer}>
                    <Text style={styles.IngText}>퀴즈</Text>
                    <View style={styles.perContainer}>
                        <View style={styles.perTextContainer}>
                            <Text style={styles.perText}>{quizIng}%</Text>
                        </View>
                        <Svg width={100} height={100}>
                            <G rotation={90} origin="50,50" scaleX={-1}>
                                <AnimatedCircle cx={50} cy={50} r={R}
                                    stroke={'#FFE400'}
                                    strokeWidth={5.36}
                                    strokeDasharray={circle_length}
                                    strokeDashoffset={circle_length * (1-quizIng)}
                                    strokeLinecap={'round'}
                                    fill='none'/>
                            </G>
                        </Svg>
                    </View>
                </View>
            </View>
            <Text style={styles.IngThat}>단어 학습</Text>
            <View style={{marginBottom: 59}}>
                <ScrollView
                    style={styles.wordContainerScroll}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentOffset={indexToOffset()}
                    onScroll={onScroll}
                    decelerationRate={10}
                    snapToInterval={wordContainerWidth + 9}
                    contentContainerStyle={{ width: 7 * 3 + 29 * 2 + wordContainerWidth * 4 }}>
                    {words.map((word, index) => 
                        <View key={index}>
                            <View style={styles.wordContainer}>
                                <View style={styles.wordBox}>
                                    <Text style={styles.word}>{word.word}</Text>
                                    <View style={[styles.wordHighlight, {width: getWidth(word.word)+4}]}/>
                                </View>
                                <Text style={styles.mean}>{word.meaning}</Text>
                                <Text style={styles.bookText}>
                                    {word.first_example}
                                    <View>
                                        <Text style={styles.bookWord}>{word.word}</Text>
                                    </View>
                                    {word.last_example}
                                </Text>
                                <View style={{marginHorizontal: 1, flexDirection: 'row'}}>
                                    <Text style={styles.title}>{word.title}</Text>
                                    <Text style={styles.author}>{word.writer}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>
                <View style={styles.dotContainer}>
                    {words.map((_, index) => {
                        const isFocused = currentIndex === index;
                        return (
                            <View
                                key={index}
                                style={[styles.dot, isFocused && styles.dotFocused]}
                            />
                        );
                    })}
                </View>
            </View>
            <Text style={styles.IngThat}>그날의 읽기 학습</Text>
            <View style={[styles.writeContainer, {marginBottom: StatusBar.currentHeight}]}>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>{text?.title}</Text>
                    <Text style={styles.bookWriter}>{text?.writer}</Text>
                </View>
                    <Text style={styles.bookWrite}>{text?.text}</Text>
            </View>
            <View style={{height: 131}}/>
        </ScrollView>
        </View>
    );
}

export default Calendar;