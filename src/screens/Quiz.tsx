import React from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from '../styles/QuizStyles';
import CustomScrollView from '../components/CustomScrollView';

import QuizBook from '../assets/svg/quizBook';
import QuizFalse from '../assets/svg/quizFalse';

function Quiz() {

    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="dark-content" backgroundColor="#F6F5FA" />
                <Text style={styles.quizText}>퀴즈</Text>
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
                <TouchableOpacity style={styles.quizContainer} activeOpacity={1} onPress={() => navigation.navigate('WordQuiz', {quizVersion : true})}>
                    <View style={styles.quizItem}>
                        <QuizBook />
                        <Text style={styles.QuizText}>지금까지 나온 단어 퀴즈 풀기</Text>
                        <Text style={styles.QuizIng}>미완료</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.quizContainer, { marginBottom: 121 }]} activeOpacity={1} onPress={() => navigation.navigate('WordQuiz', {quizVersion : false})}>
                    <View style={styles.quizItem}>
                        <QuizFalse />
                        <Text style={styles.QuizText}>틀린문제 다시풀기</Text>
                        <Text style={styles.QuizIng}>미완료</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Quiz;