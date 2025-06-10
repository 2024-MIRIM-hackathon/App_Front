import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import { useLearnProgress } from '../context/LearnProgressContext';
import { ReadingStackParam } from '../App';
type Props = StackScreenProps<ReadingStackParam, 'Reading'>;
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemWidth = Dimensions.get('window').width - 58;

import styles from '../styles/ReadingStyles';
import { TextType } from '../types/learnType';
import { postLearn } from '../api/learnApi';
import axios from 'axios';

const Learning: React.FC<Props> = ({route}) => {

    const navigation = useNavigation();
    const [data, setData] = useState<TextType>()
    const [userId, setUserId] = useState<string>('');
    const {text} = route.params;
    const { setReading } = useLearnProgress()

    const done = async() => {
        setReading(true)
        console.log('클릭');
        try {
            console.log({
                user_id: userId,
                t_type: 'text',
                thing: data!.text,
                learn_date: (new Date()).toISOString().split('T')[0]
            });
            // const res = await postLearn({
            //     user_id: Number(userId),
            //     t_type: 'text',
            //     thing: data!.text,
            //     learn_date: (new Date()).toISOString().split('T')[0]
            // })
            const res = await axios.post(`http://172.30.4.64:3000/api/learned`, {
                user_id: userId,
                t_type: 'text',
                thing: text.text,
                learn_date: (new Date()).toISOString().split('T')[0]
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        navigation.goBack();
    }

    useEffect(() => {
        setData(text)
    }, [text])

    useEffect(() => {
        const loadUserId = async () => {
            const id = await AsyncStorage.getItem('userId');
            setUserId(id??'');
            console.log(id);
        };
        loadUserId();
    }, [])

    return (
        <View style={styles.body}>
            <Text style={[styles.learningActivity, {marginTop: StatusBar.currentHeight}]}>글 읽기 연습</Text>
            <ScrollView
                style={styles.ReadingScroll}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
            >
                <View style={styles.ReadingContainer}>
                    <Text style={styles.ReadingText}>{data?.text}</Text>
                    <View style={styles.BookInfo}>
                        <Text style={styles.title}>{data?.title}</Text>
                        <Text style={styles.author}>{data?.writer}</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.leave} activeOpacity={1}
                onPress={done}
            >
                <View style={styles.leaveContainer}>
                    <Text style={styles.leaveText}>학습 완료</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Learning;
