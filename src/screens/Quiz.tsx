import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    ScrollView,
} from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from '../styles/QuizStyles';
import CustomScrollView from '../components/CustomScrollView';

import QuizBook from '../assets/svg/quizBook';
import TodayQuiz from '../assets/svg/TodayQuiz';

import { useQuizProgress } from '../context/QuizProgressContext';

import { getTodayQuiz, getRandomQuiz, getPeopleWrong } from '../api/quizApi';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type QuizData = {
  word_id: number,
  question: string,
  options: {
    word: string
  }[],
  correct_answer: string
}
type People = {
    word: string,
    meaning: string,
    first_example: string,
    last_example: string
}

function Quiz() {
    // const { todayDone, randomDone } = useQuizProgress();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [today, setToday] = useState<QuizData[]>([])
    const [random, setRandom] = useState<QuizData[]>([])
    const [people, setPeople] = useState<People[]>([])
    const [todayDone, setTodayDone] = useState(false)
    const [randomDone, setRandomDone] = useState(false)

    const fetchToday = async () => {
      try {
        const res = await axios.get('http://192.168.45.135:3000/api/quiz/today')
        const data = res.data
        setToday(data);
      } catch (error) {
        console.log('오늘 퀴즈 에러');
      }
    };
    const fetchRandom = async () => {
      try {
        const res = await axios.get('http://192.168.45.135:3000/api/quiz/random')
        const data = res.data
        console.log(res.data);
        setRandom(data);
      } catch (error) {
        console.log('랜덤 퀴즈 에러');
      }
    };

    const fetchDone = async() => {
      try {
        const userId = await AsyncStorage.getItem('userId')
        const todayRes = await axios.get(`http://192.168.45.135:3000/api/date?user_id=${userId}&date=${new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0]}`)
        const todayData = todayRes.data.status.quiz_done
        setTodayDone(todayData?true:false)
        console.log(todayRes.data.status.quiz_done);
        const randomRes = await axios.get(`http://192.168.45.135:3000/api/quiz/random-status?user_id=${userId}&date=${new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0]}`)
        const randomData = randomRes.data.quiz_done
        console.log(randomRes.data);
        setRandomDone(randomData?true:false)
      } catch (error) {
        console.log(error);
      }
    }
    
    useFocusEffect(
      useCallback(() => {
        fetchDone();
        fetchToday();
        fetchRandom();
        return () => {
          setToday([])
          setRandom([])
        }
      }, [])
    );

    useEffect(() => {
        const fetchPeople = async() => {
            const res = await getPeopleWrong()
            setPeople(res)
        }
        fetchPeople()
        fetchDone()
    }, [])

    const goTodayQuiz = () => {
      const checkInterval = setInterval(() => {
        if (today.length > 0) {
          console.log(today);
          clearInterval(checkInterval);
          navigation.navigate('WordQuiz', { quizVersion: true, data: today })
        }
      }, 500);
    };
    const goRandomQuiz = () => {
        const checkInterval = setInterval(() => {
          if (random.length > 0) {
            clearInterval(checkInterval);
            navigation.navigate('WordQuiz', {quizVersion : false, data: random})
          }
        }, 500);
    }

    return (
        <View style={styles.body}>
            <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: '#F6F5FA', position: 'absolute', top: 0, zIndex: 10 }}/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                overScrollMode='never'>
                <Text style={[styles.quizText, {marginTop: StatusBar.currentHeight}]}>퀴즈</Text>
                <Text style={styles.falseQuizText}>많은 사람들이 틀리는 단어</Text>
                <CustomScrollView count={people.length}>
                    {people.map((item, i) => (
                        <View style={styles.falseQuizContainer} key={i}>
                            <Text style={styles.word}>{item.word}</Text>
                            <Text style={styles.mean}>{item.meaning}</Text>
                            <Text style={styles.example}>예문</Text>
                            <Text style={styles.exampleSentence}>{item.first_example}{item.word}{item.last_example}</Text>
                        </View>
                    ))}
                </CustomScrollView>
                <Text style={styles.learningQuizText}>학습 퀴즈</Text>
                <TouchableOpacity style={styles.quizContainer} activeOpacity={1} onPress={goTodayQuiz}>
                    <View style={[styles.quizItem, todayDone && {backgroundColor: '#FFE400'}]}>
                        <TodayQuiz />
                        <Text style={styles.QuizText}>오늘 나온 퀴즈 풀기</Text>
                        <Text style={styles.QuizIng}>{todayDone?'완료':'미완료'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.quizContainer, { marginBottom: 121 }]} activeOpacity={1} onPress={goRandomQuiz}>
                    <View style={[styles.quizItem, randomDone && {backgroundColor: '#FFE400'}]}>
                        <QuizBook />
                        <Text style={styles.QuizText}>지금까지 나온 단어 퀴즈 풀기</Text>
                        <Text style={styles.QuizIng}>{randomDone?'완료':'미완료'}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Quiz;