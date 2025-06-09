import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image, Modal, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import { useLearnProgress } from '../context/LearnProgressContext';
import { LearningStackParam } from '../App';
type Props = StackScreenProps<LearningStackParam, 'Learning'>;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { postLearn } from '../api/learnApi';

const interval = (Dimensions.get('window').width - 334)/2;
const ItemHeight = Dimensions.get('window').height - 254;

import styles from '../styles/LearningStyles';
import { Words } from '../types/learnType';

const Learning: React.FC<Props> = ({route}) => {

    const navigation = useNavigation();
    const [data, setData] = useState<Words[]>([])
    const [userId, setUserId] = useState<string>('');
    const {words} = route.params;
    const {learnWord, setLearnWord} = useLearnProgress()
    const [isLearningCompleted, setIsLearningCompleted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false); // 팝업 상태 관리

    // 팝업 열기
    const openModal = () => {
        setIsModalVisible(true);
    };

    // 팝업 닫기
    const closeModal = () => {
        setIsModalVisible(false);
    };

    const onScroll = (e: { nativeEvent: { contentOffset: { x: number } } }) => {
        const xOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / 334);
        setCurrentIndex(index);
    };
    
    useEffect(() => {
        const fetch = async() => {
            const res = await postLearn({
                user_id: Number(userId),
                t_type: 'word',
                thing: data[currentIndex].word,
                learn_date: (new Date()).toISOString().split('T')[0]
            })
            console.log(res);
            if(currentIndex+1 > learnWord){
                setLearnWord(currentIndex+1)
            }
        }
        if (currentIndex === 3) setIsLearningCompleted(true);
        else setIsLearningCompleted(false);
        fetch();
    }, [currentIndex])

    const indexToOffset = () => {
        return { x: currentIndex * (334 + 9), y: 0 };
    };

    const getWidth = (str: string) => {
        let len = str.length;
        let nu = str.split(' ').length - 1;
        return (len-nu)*20 + nu*5;
    }

    useEffect(() => {
        setData(words)
        console.log(words);
    }, words)

    useEffect(() => {
        const loadUserId = async () => {
            const id = await AsyncStorage.getItem('userId');
            setUserId(id??'');
        };
        loadUserId();
    }, [])

    return (
        <View style={styles.body}>
            <Modal
                visible={isModalVisible}
                animationType="fade" // 팝업 애니메이션 설정
                transparent={true} // 배경을 투명하게
                onRequestClose={closeModal} // 안드로이드에서 백 버튼 눌렀을 때 닫기
            >
                <View style={styles.background}>
                    <View style={styles.warningContainer}>
                        <Image style={styles.warningImg} source={require('../assets/images/warningImg.png')} />
                        <Text style={styles.warningSure}>정말 나가시겠습니까?</Text>
                        <Text style={styles.warningText}>저장이 되지 않아 처음부터{'\n'}다시 해야될 수 있습니다.</Text>
                        <TouchableOpacity style={[styles.yes, styles.button]} onPress={closeModal}><Text>취소</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.no, styles.button]} onPress={() => { closeModal(); navigation.goBack(); }}><Text>학습 중에 나가기</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={[styles.learningActivity, {marginTop: StatusBar.currentHeight}]}>책 문장 단어학습</Text>
            <View style={styles.appBackground}>
                <View style={{ maxHeight: ItemHeight }}>
                    <ScrollView
                        onScroll={onScroll}
                        horizontal
                        contentContainerStyle={{ width: 9 * 3 + interval * 2 + 334 * 4 }}
                        contentOffset={indexToOffset()}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={10}
                        snapToInterval={334 + 9}
                    >
                        <View style={styles.row}>
                            {data.map((item, index) => (
                                <View
                                    key={index}
                                    style={[styles.carouselItemContainer, { width: 334 }]}
                                >
                                    <View style={[styles.carouselItem, { backgroundColor: 'white' }]}>
                                        <ScrollView showsVerticalScrollIndicator={false}>
                                            <View>
                                            <Text style={styles.bookText}>
                                                {item.first_example}
                                                <View>
                                                    <Text style={styles.bookWord}>
                                                        {item.word}
                                                    </Text>
                                                </View>
                                                {item.last_example}
                                            </Text>
                                            <View style={styles.bookInfo}>
                                                <Text style={styles.bookTitle}>{item.title}</Text>
                                                <Text style={styles.bookWrite}>{item.writer}</Text>
                                            </View>
                                            </View>
                                            <View style={styles.wordContainer}>
                                                <Text style={styles.word}>{item.word}</Text>
                                                <View style={[styles.wordShadow, {width: getWidth(item.word)+6}]} />
                                            </View>
                                            <Text style={styles.mean}>{item.meaning}</Text>
                                            <Text style={styles.example}>예문</Text>
                                            <Text style={styles.exampleSentence}>{item.example}</Text>
                                        </ScrollView>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.dotContainer}>
                        {data.map((_, index) => {
                            const isFocused = currentIndex >= index;
                            return (
                                <View
                                    key={index}
                                    style={[styles.dot, isFocused && styles.dotFocused]}
                                />
                            );
                        })}
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.leave} activeOpacity={1}
                onPress={() => {
                    if (isLearningCompleted) {
                        navigation.goBack();
                    } else {
                        openModal();
                    }
                }}
            >
                <View style={styles.leaveContainer}>
                    <Text style={styles.leaveText}>
                        {isLearningCompleted ? "단어 학습 완료" : "학습 중에 나가기"}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Learning;
