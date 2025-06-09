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
    const { todayDone, randomDone } = useQuizProgress();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [today, setToday] = useState<QuizData[]>([])
    const [random, setRandom] = useState<QuizData[]>([])
    const [people, setPeople] = useState<People[]>([])

const fetchToday = async () => {
  const arr: QuizData[] = [];
  try {
    while (arr.length < 4) {
      const res = await getTodayQuiz();
      if (arr.some(item => item.correct_answer === res.correct_answer)) {
        continue;
      }
      arr.push(res);
    }
    setToday(arr);
  } catch (error) {
    console.log(error);
  }
};
const fetchRandom = async () => {
  const arr: QuizData[] = [];
  try {
    while (arr.length < 4) {
      const res = await getRandomQuiz();
      if (arr.some(item => item.correct_answer === res.correct_answer)) {
        continue;
      }
      arr.push(res);
    }
    setRandom(arr);
  } catch (error) {
    console.log(error);
  }
};
    useFocusEffect(
        useCallback(() => {
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
    }, [])

    const goTodayQuiz = () => {
      const checkInterval = setInterval(() => {
        if (today.length === 4) {
          console.log(today);
          clearInterval(checkInterval);
          navigation.navigate('WordQuiz', { quizVersion: true, data: today })
        }
      }, 500);
    };
    const goRandomQuiz = () => {
        const checkInterval = setInterval(() => {
          if (random.length === 4) {
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
                <TouchableOpacity style={styles.quizContainer} activeOpacity={1} onPress={goTodayQuiz}>
                    <View style={styles.quizItem}>
                        <TodayQuiz />
                        <Text style={styles.QuizText}>오늘 나온 퀴즈 풀기</Text>
                        <Text style={styles.QuizIng}>{todayDone?'완료':'미완료'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.quizContainer, { marginBottom: 121 }]} activeOpacity={1} onPress={goRandomQuiz}>
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