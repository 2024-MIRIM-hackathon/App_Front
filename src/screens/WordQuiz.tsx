import React, { useState, useRef, useEffect } from 'react';
import { View, StatusBar, Text, ScrollView, Image, Dimensions, TouchableNativeFeedback, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/WordQuizStyles';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from "../App";
import { Easing } from 'react-native-reanimated';

type Props = StackScreenProps<RootStackParamList, "WordQuiz">;

const data = [
    {
        mean: '모든 것에 두루 미치거나 통함.또는 그런 것.',
        words: [{ word: '보편', answer: true }, { word: '이름', answer: false }, { word: '이름', answer: false }, { word: '이름', answer: false }]
    },
    {
        mean: '모든 것에 두루 미치거나 통함.또는 그런 것.',
        words: [{ word: '이름', answer: false }, { word: '보편', answer: true }, { word: '이름', answer: false }, { word: '이름', answer: false }]
    },
    {
        mean: '모든 것에 두루 미치거나 통함.또는 그런 것.',
        words: [{ word: '이름', answer: false }, { word: '이름', answer: false }, { word: '보편', answer: true }, { word: '이름', answer: false }]
    },
    {
        mean: '모든 것에 두루 미치거나 통함.또는 그런 것.',
        words: [{ word: '이름', answer: false }, { word: '이름', answer: false }, { word: '이름', answer: false }, { word: '보편', answer: true }]
    },
];

const Answer = ({ answer }: { answer: boolean }) => {
    return (
        <Image
            style={styles.answerImg}
            source={answer ? require('../assets/images/answerTrueImg.png') : require('../assets/images/answerFalseImg.png')}
        />
    );
};

const interval = (Dimensions.get('window').width - 332) / 2;

const WordQuiz: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation();

    const { quizVersion } = route.params;
    const [quizStart, setQuizStart] = useState(true);
    const [scroll, setScroll] = useState(true);
    const [answer, setAnswer] = useState<boolean | null>(null);
    const [check, setCheck] = useState<Number | null>(null);
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const getStyle = (index: number, answer: boolean) => {
        if (answer === true) {
            return { borderColor: '#00CF28', color: '#00CF28' };
        } else if (check === index) {
            return { borderColor: '#FF0000', color: '#FF0000' };
        }
        return {}; 
    };

    const answerPress = (index: number) => {
        setCheck(index);
    };

    const refAnimation = useRef(new Animated.Value(0)).current;
    const timeAnimation = useRef(new Animated.Value(15)).current;
    const [displayTime, setDisplayTime] = useState(15);
    const scrollViewRef = useRef<ScrollView | null>(null);
    const indexToOffset = (index: number) => {
        return index * (332 + 13);
    };
    useEffect(() => {
        const listener = timeAnimation.addListener(({ value }) => {
            setDisplayTime(Math.round(value));
        });
        return () => {
            timeAnimation.removeListener(listener);
        };
    }, [timeAnimation]);
    useEffect(() => {
        const offset = indexToOffset(currentIndex);
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: offset, animated: true });
        }
        if(currentIndex === 5){
            setQuizStart(true);
        }

        timeAnimation.setValue(15);
        Animated.timing(timeAnimation, {
            toValue: 0,
            useNativeDriver: false,
            duration: 15000,
            easing: Easing.linear,
        }).start(({ finished }) => {
            if (finished && !scroll) {
                setAnswer(false);
                setCheck(-1);
                next();
            }
        });

        refAnimation.setValue(0);
        Animated.timing(refAnimation, {
            toValue: 288,
            useNativeDriver: false,
            duration: 15000, 
            easing: Easing.linear,
        }).start();
    }, [currentIndex]);    

    const next = () => {
        setTimeout(() => {
            setCheck(null);
            setAnswer(null);
            setCurrentIndex((pre)=>pre+1);
        }, 2000);
    };

    const oneMore = () => {
        setQuizStart(true);
        setScroll(true);
        setCheck(null);
        setAnswer(null);
        setCurrentIndex(0);
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor={quizStart ? '#FFE400' : '#FFFFFF'} />
            <LinearGradient
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={quizStart ? ['#FFE400', '#FFE400'] : ['#FFFFFF', '#EBEBEB', '#EBEBEB']}
            >
                <Text style={styles.quizText}>퀴즈</Text>
                <Text style={styles.quizVersionText}>{quizVersion ? '지금까지 나온 단어 퀴즈 풀기' : '틀린 문제 다시풀기'}</Text>
                <View style={styles.quizScrollContainer}>
                    <ScrollView style={styles.quizScroll}
                        ref={scrollViewRef}
                        horizontal={true}
                        contentContainerStyle={{ width: 13 * 5 + interval * 2 + 332 * 6 }}
                        showsHorizontalScrollIndicator={false}
                        onScrollBeginDrag={() => {setTimeout(() => setQuizStart((pre) => !pre), 300); setCurrentIndex((pre)=>pre+1); setScroll(false)}}
                        scrollEnabled={scroll}
                        decelerationRate={10}
                        snapToInterval={332 + 13}
                    >
                        <View style={styles.quizStartImg}>
                            <Image style={styles.quizStartImg} source={require('../assets/images/quizStartImg.png')} />
                            <Text style={styles.quizStartText}>준비가 다 되셨으면{'\n'}넘겨주세요!</Text>
                        </View>
                        {data.map((item, index) => (
                            <View key={index}>
                                <View style={styles.quizContainer}>
                                    {answer !== null && <Answer answer={answer} />}
                                    <Text style={styles.quizQ}>{item.mean}</Text>
                                    <View style={styles.wordContainer}>
                                        <View style={styles.row}>
                                            <TouchableNativeFeedback onPress={() => { setAnswer(item.words[0].answer); answerPress(0); next();}} disabled={answer === null ? false : true}><View style={[styles.wordView, answer !== null && getStyle(0, item.words[0].answer)]}><Text style={[styles.wordText, answer !== null && getStyle(0, item.words[0].answer)]}>{item.words[0].word}</Text></View></TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={() => { setAnswer(item.words[1].answer); answerPress(1); next();}} disabled={answer === null ? false : true}><View style={[styles.wordView, answer !== null && getStyle(1, item.words[1].answer)]}><Text style={[styles.wordText, answer !== null && getStyle(1, item.words[1].answer)]}>{item.words[1].word}</Text></View></TouchableNativeFeedback>
                                        </View>
                                        <View style={styles.row}>
                                            <TouchableNativeFeedback onPress={() => { setAnswer(item.words[2].answer); answerPress(2); next();}} disabled={answer === null ? false : true}><View style={[styles.wordView, answer !== null && getStyle(2, item.words[2].answer)]}><Text style={[styles.wordText, answer !== null && getStyle(2, item.words[2].answer)]}>{item.words[2].word}</Text></View></TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={() => { setAnswer(item.words[3].answer); answerPress(3); next();}} disabled={answer === null ? false : true}><View style={[styles.wordView, answer !== null && getStyle(3, item.words[3].answer)]}><Text style={[styles.wordText, answer !== null && getStyle(3, item.words[3].answer)]}>{item.words[3].word}</Text></View></TouchableNativeFeedback>
                                        </View>
                                    </View>
                                    {answer === null && <View style={{ height: 84, paddingTop: 62, paddingBottom: 16, justifyContent: 'flex-end' }}>
                                        <Text style={styles.timeText}>{displayTime}초</Text>
                                        <View style={styles.timeContainer}><Animated.View style={[styles.time, {width: refAnimation}]} /></View>
                                    </View>}
                                </View>
                            </View>
                        ))}
                        <View style={{width: 332, height: 466, borderRadius: 18, backgroundColor: 'white', alignItems: 'center'}}>
                            <Text style={styles.quizEndText}>모두 완료!{'\n'}수고했어요!</Text>
                            <TouchableNativeFeedback onPress={() => navigation.goBack()}><View style={[styles.endView, {backgroundColor: '#FFE400'}]}><Text style={styles.endText}>나가기</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => oneMore()}><View style={styles.endView}><Text style={styles.endText}>한 번 더 하기</Text></View></TouchableNativeFeedback>
                        </View>
                    </ScrollView>
                    {!quizStart && <View style={styles.dotContainer}>
                        {data.map((_, index) => {
                            const isFocused = currentIndex >= index+1;
                            return (
                                <View
                                    key={index}
                                    style={[styles.dot, isFocused && styles.dotFocused]}
                                />
                            );
                        })}
                    </View>}
                </View>
            </LinearGradient>
        </View>
    );
}

export default WordQuiz;
