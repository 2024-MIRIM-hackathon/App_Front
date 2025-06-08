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

type QuizData = {
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
    const { todayDone, randomDone } = useQuizProgress();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [today, setToday] = useState<QuizData[]>([])
    const [random, setRandom] = useState<QuizData[]>([])
    const [people, setPeople] = useState<People[]>([])

    const fetch = async() => {
      let res: QuizData
      try {
        for(let i=0; i<4; i++){
          res = await getTodayQuiz()
          setToday(pre => [...pre, res])
          res = await getRandomQuiz()
          setRandom(pre => [...pre, res])
        }
      } catch (error) {
        console.log(error);
      }
    }
    useFocusEffect(
        useCallback(() => {
            fetch();
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
    }, [])

    return (
        <View style={styles.body}>
            <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: '#F6F5FA', position: 'absolute', top: 0, zIndex: 10 }}/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                overScrollMode='never'>
                <Text style={[styles.quizText, {marginTop: StatusBar.currentHeight}]}>퀴즈</Text>
                <Text style={styles.falseQuizText}>많은 사람들이 틀리는 단어</Text>
                <CustomScrollView count={5}>
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
                <TouchableOpacity style={styles.quizContainer} activeOpacity={1} onPress={() => navigation.navigate('WordQuiz', {quizVersion : true, data: today})}>
                    <View style={styles.quizItem}>
                        <TodayQuiz />
                        <Text style={styles.QuizText}>오늘 나온 퀴즈 풀기</Text>
                        <Text style={styles.QuizIng}>{todayDone?'완료':'미완료'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.quizContainer, { marginBottom: 121 }]} activeOpacity={1} onPress={() => navigation.navigate('WordQuiz', {quizVersion : false, data: random})}>
                    <View style={styles.quizItem}>
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