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

import { getTodayQuiz, getRandomQuiz } from '../api/quizApi';

type QuizData = {
  question: string,
  options: {
    word: string
  }[],
  correct_answer: string
}

function Quiz() {
    const { todayDone, randomDone } = useQuizProgress();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [today, setToday] = useState<QuizData[]>([])
    const [random, setRandom] = useState<QuizData[]>([])

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

    return (
        <View style={styles.body}>
            <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: '#F6F5FA', position: 'absolute', top: 0, zIndex: 10 }}/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                overScrollMode='never'>
                <Text style={[styles.quizText, {marginTop: StatusBar.currentHeight}]}>퀴즈</Text>
                <Text style={styles.falseQuizText}>많은 사람들이 틀리는 단어</Text>
                <CustomScrollView>
                    <View style={styles.falseQuizContainer}>
                        <Text style={styles.word}>보편</Text>
                        <Text style={styles.mean}>모든 것에 두루 미치거나 통함. 또는 그런 것.</Text>
                        <Text style={styles.example}>예문</Text>
                        <Text style={styles.exampleSentence}>사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해</Text>
                    </View>
                    <View style={styles.falseQuizContainer}>
                        <Text style={styles.word}>보편</Text>
                        <Text style={styles.mean}>모든 것에 두루 미치거나 통함. 또는 그런 것.</Text>
                        <Text style={styles.example}>예문</Text>
                        <Text style={styles.exampleSentence}>사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해</Text>
                    </View>
                    <View style={styles.falseQuizContainer}>
                        <Text style={styles.word}>보편</Text>
                        <Text style={styles.mean}>모든 것에 두루 미치거나 통함. 또는 그런 것. 모든 것에 두루 미치거나 통함. 또는 그런 것.</Text>
                        <Text style={styles.example}>예문</Text>
                        <Text style={styles.exampleSentence}>사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해 사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해</Text>
                    </View>
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