import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import Svg, { Circle, G } from 'react-native-svg';

import styles from '../styles/CalendarStyles';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

const data = [
    { "date": "2025-01-01", "learn": true },
    { "date": "2025-01-02", "learn": false },
    { "date": "2025-01-03", "learn": true },
    { "date": "2025-01-04", "learn": false },
    { "date": "2025-01-05", "learn": true },
    { "date": "2025-01-06", "learn": false },
    { "date": "2025-01-07", "learn": true },
    { "date": "2025-01-08", "learn": false },
    { "date": "2025-01-09", "learn": true },
    { "date": "2025-01-10", "learn": false },
    { "date": "2025-01-11", "learn": true },
    { "date": "2025-01-12", "learn": true },
    { "date": "2025-01-13", "learn": false },
    { "date": "2025-01-14", "learn": false },
    { "date": "2025-01-15", "learn": true },
    { "date": "2025-01-16", "learn": false },
    { "date": "2025-01-17", "learn": true },
    { "date": "2025-01-18", "learn": false },
    { "date": "2025-01-19", "learn": true },
    { "date": "2025-01-20", "learn": false },
    { "date": "2025-01-21", "learn": true },
    { "date": "2025-01-22", "learn": false },
    { "date": "2025-01-23", "learn": true },
    { "date": "2025-01-24", "learn": false },
    { "date": "2025-01-25", "learn": true },
    { "date": "2025-01-26", "learn": false },
    { "date": "2025-01-27", "learn": true },
    { "date": "2025-01-28", "learn": true },
    { "date": "2025-01-29", "learn": false },
    { "date": "2025-01-30", "learn": true },
    { "date": "2025-01-31", "learn": false },
    { "date": "2025-02-01", "learn": false },
    { "date": "2025-02-02", "learn": true },
    { "date": "2025-02-03", "learn": false },
    { "date": "2025-02-04", "learn": true },
    { "date": "2025-02-05", "learn": true },
    { "date": "2025-02-06", "learn": true },
    { "date": "2025-02-07", "learn": true },
    { "date": "2025-02-08", "learn": true },
    { "date": "2025-02-09", "learn": true }
];

const wordData = ["념은 다양한데, 이 같은 초월적 ‘보편’이 같다는 것은 아리스토텔레스가 이미 ‘유비(類比)의 단일성’ 으로 인식하고 있었다.(類比)의 단일성’ 으로 인식하고 있었다.", 
    '종개념은 다양한데, 이 같은 초월적 이 같은 초월적', 
    '종개념은 다양한데, 이 같은 초월적', 
    '종개념은 다양한데, 이 같은 초월적'
];

const wordContainerWidth = Dimensions.get('window').width - 58;
const circle_length = 295.31;
const R = circle_length / (2*Math.PI);

const firstDay = new Date(data[0].date);
const date = new Date();
const offset = 9 * 60;
const today = new Date(date.getTime() + offset * 60 * 1000);
const todayText = today.toISOString().split('T')[0];

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function Calendar() {

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

    useFocusEffect(
        useCallback(() => {
            StatusBar.setBackgroundColor(statusBarColor);
        }, [statusBarColor])
    );

    const dataObj: Record<string, { date: string; learn: boolean }> = {};
    data.forEach(item => {
        dataObj[item.date] = item;
    });
    const [wordIng, setWordIng] = useState(0.9);
    const [writeIng, setWriteIng] = useState(0.8);
    const [quizIng, setQuizIng] = useState(0.5);
    
    const [currentMonth, setCurrentMonth] = useState(today);
    const [checkDate, setCheckDate] = useState(todayText);

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()+1, 1));
    }
    const previousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()-1, 1));
    }

    const getTextStyle = (item: { day: string | number, done: boolean, date: string}) => {
        let backgroundStyle = {};
        let isDisabled = 0;
        let textStyle = '#424242';

        if(item.date == todayText) {
            backgroundStyle = {backgroundColor: '#FFF828'};
            textStyle = '#424242';
        }
        else if(!item.done || new Date(item.date) < firstDay){
            textStyle = '#424242';
            isDisabled = 1;
        }
        else if(dataObj[item.date].learn){
            textStyle = '#424242';
        }
        else {
            textStyle = 'rgba(255, 137, 137, 0.79)';
        }

        return [backgroundStyle, isDisabled, textStyle];
    }

    const generateMatrix = () => {
        let matrix: { day: string | number, done: boolean, date: string }[][] = [];
        let year = currentMonth.getFullYear();
        let month = currentMonth.getMonth();
        let firstDay = new Date(year, month, 1).getDay();  
        let maxDays = new Date(year, month + 1, 0).getDate();  
        let counter = 1 - firstDay;  
        
        for (let row = 0; row < 6; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                let isDone = false;
                let dateText = '';
                let cellValue = counter > 0 && counter <= maxDays ? counter : ''; 
                if(cellValue !== ''){
                    dateText = `${year}-${String(month + 1).padStart(2, '0')}-${String(cellValue).padStart(2, '0')}`;
                    if(new Date(dateText) <= today){
                        isDone = true;
                    }
                }
                matrix[row][col] = { day: cellValue, done: isDone, date: dateText };
                counter++;
            }
        }
        if (matrix[5].every(cell => cell.day === '')) {
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
                const [backgroundStyle, isDisabled, textColor] = getTextStyle(item);
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
    },[]);
    
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

    return (
        <ScrollView
            style={styles.body}
            showsVerticalScrollIndicator={false}
            overScrollMode='never'
            onScroll={handleScroll}>
            <StatusBar barStyle="dark-content" backgroundColor={statusBarColor} />
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
            <Text style={styles.greeting}>이희진님!{'\n'}정말 열심히 한 날이네요!</Text>
            <View style={styles.IngContainer}>
                <View style={styles.IngItemContainer}>
                    <Text style={styles.IngText}>단어 학습</Text>
                    <View style={styles.perContainer}>
                        <View style={styles.perTextContainer}>
                            <Text style={styles.perText}>90%</Text>
                        </View>
                        <Svg width={100} height={100}>
                            <G rotation={90} origin="50,50" scaleX={-1}>
                                <AnimatedCircle cx={50} cy={50} r={R}
                                    stroke={'#FFE400'}
                                    strokeWidth={5.36}
                                    strokeDasharray={circle_length}
                                    animatedProps={wordAnimatedProgress}
                                    strokeLinecap={'round'}
                                    fill='none'/>
                            </G>
                        </Svg>
                    </View>
                </View>
                <View style={styles.IngItemContainer}>
                    <Text style={styles.IngText}>단어 학습</Text>
                    <View style={styles.perContainer}>
                        <View style={styles.perTextContainer}>
                            <Text style={styles.perText}>90%</Text>
                        </View>
                        <Svg width={100} height={100}>
                            <G rotation={90} origin="50,50" scaleX={-1}>
                                <AnimatedCircle cx={50} cy={50} r={R}
                                    stroke={'#FFE400'}
                                    strokeWidth={5.36}
                                    strokeDasharray={circle_length}
                                    animatedProps={writeAnimatedProgress}
                                    strokeLinecap={'round'}
                                    fill='none'/>
                            </G>
                        </Svg>
                    </View>
                </View>
                <View style={styles.IngItemContainer}>
                    <Text style={styles.IngText}>단어 학습</Text>
                    <View style={styles.perContainer}>
                        <View style={styles.perTextContainer}>
                            <Text style={styles.perText}>90%</Text>
                        </View>
                        <Svg width={100} height={100}>
                            <G rotation={90} origin="50,50" scaleX={-1}>
                                <AnimatedCircle cx={50} cy={50} r={R}
                                    stroke={'#FFE400'}
                                    strokeWidth={5.36}
                                    strokeDasharray={circle_length}
                                    animatedProps={quizAnimatedProgress}
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
                    {wordData.map((word, index) => 
                        <View key={index}>
                            <View style={styles.wordContainer} key={index}>
                                <Text style={styles.word}>보편</Text>
                                <Text style={styles.mean}>{word}</Text>
                                <Text style={styles.example}>예문</Text>
                                <Text style={styles.exampleSentence}>사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해</Text>
                            </View>
                        </View>
                    )}
                </ScrollView>
                <View style={styles.dotContainer}>
                    {wordData.map((_, index) => {
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
            <View style={styles.writeContainer}>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>채식주의자</Text>
                    <Text style={styles.bookWriter}>한강</Text>
                </View>
                    <Text style={styles.bookWrite}>꿈을 꿨어
그렇게 생생할 수 없어, 이빨에 씹히던 날고기의 
감촉이, 내얼굴이, 눈빛이. 처음보는 얼굴 같은데, 분명 내 얼굴이었어. 아니야, 거꾸로, 수없이 봤던 얼굴 같은데, 내 얼굴이 아니었어.
설명할 수 없어. 익숙하면서도 낯선.....
그 생생하고 이상한, 끔찍하게 이상한 느낌을.</Text>
            </View>
            <View style={{height: 131}}/>
        </ScrollView>
    );
}

export default Calendar;