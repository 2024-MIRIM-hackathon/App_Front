import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Alert
} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from '../styles/MyPageStyles';
import BookRead from '../assets/svg/bookRead';
import WordsLearned from '../assets/svg/wordsLearned';
import WordsReview from '../assets/svg/wordsReview';

import { postLogout, getInfo, getRecord, getLevel } from '../api/userApi';
import { Level } from '../types/userType';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

interface MyPageProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const MyPage: React.FC<MyPageProps> = ({ setIsLoggedIn }) => {

    const [statusBarColor, setStatusBarColor] = useState('#FFE400');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [date, setDate] = useState(0)
    const [learnedWord, setLearnedWord] = useState(-1)
    const [learnedText, setLearnedText] = useState(-1)
    const [wrongWord, setWrongWord] = useState(-1)
    const [rightWord, setRightWord] = useState(-1)
    const [nowLevel, setNowLevel] = useState(-1)
    const [nextLevel, setNextLevel] = useState(-1)
    const [needNum, setNeedNum] = useState(-1)
    const [studied, setStudied] = useState(-1)

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        
        if (scrollY < 222) {
            setStatusBarColor('#FFE400');
        } else {
            setStatusBarColor('#F6F5FA');
        } 
    };

    const handleLogout = async () => {
        try {
            await postLogout()
            await AsyncStorage.removeItem("userId"); // 저장된 로그인 정보 삭제
            setIsLoggedIn(false); // 로그인 상태 해제
        } catch (error) {
            console.error("로그아웃 실패:", error);
        }
    };
    
    useFocusEffect(
        useCallback(() => {
            getInfo()
            getRecord()
            getLevel()
            return;
        }, [])
    )
    
    const getInfo = async() => {
        try {
            const res = await axios.get('http://192.168.45.135:3000/api/mypage/info')
            const data = res.data
            console.log(res);
            setName(data.nickname)
            setAge(data.age)
            setEmail(data.email)
            setDate(data.date + 1)
        } catch (error) {
            console.log(error);
        }
    }
    const getLevel = async() => {
        try {
            const res = await axios.get('http://192.168.45.135:3000/api/user/level')
            const data = res.data
            setNowLevel(data.now_level)
            setNextLevel(data.next_level)
            setNeedNum(data.need_study_num)
            setStudied(data.studied_num)
        } catch (error) {
            console.log(error);
        }
    }
    const getRecord = async() => {
        try {
            const res = await axios.get('http://192.168.45.135:3000/api/mypage/record')
            console.log(res.data);
            const data = res.data
            setLearnedWord(data.learned_word_num)
            setLearnedText(data.learned_text_num)
            setWrongWord(data.wrong_word_num)
            setRightWord(data.right_word_num)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getInfo()
        getLevel()
        getRecord()
    }, [])
    
    return (
        <View style={styles.body}>
        <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: statusBarColor, position: 'absolute', top: 0, zIndex: 10 }}/>
        <ScrollView
            showsVerticalScrollIndicator={false}
            overScrollMode='never'
            onScroll={handleScroll}>
            <View style={[styles.header, {marginTop: StatusBar.currentHeight}]}>
                <Image style={styles.headerImg} source={require('../assets/images/headerImg.png')} />
                <Text style={styles.mypageText}>마이페이지</Text>
                <Text style={styles.dateText}>GUILAP과 함께한지</Text>
                <Text style={styles.date}>{date}일</Text>
            </View>
            <View style={styles.ContainerView}>
                <Text style={styles.containerText}>계정</Text>
                <View style={styles.accountContainer}>
                    <View style={styles.profileView}>
                        <Image style={{width: 20, height: 30}} source={require('../assets/images/profileImg.png')}/>
                    </View>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.accountInfoContainer}>
                        <View style={{width: '20%'}}>
                            <Text style={styles.infoText}>나이</Text>
                            <Text style={styles.info}>{age}세</Text>
                        </View>
                        <View style={{height: '90%', width: 1, borderRadius: 5, backgroundColor: '#DDDDDD', marginRight: 34}} />
                        <View>
                            <Text style={styles.infoText}>이메일</Text>
                            <Text style={styles.info}>{email}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.levelContainer}>
                    <View style={styles.level}>
                        <Text style={styles.levelText}>{nowLevel+1}레벨</Text>
                        <Text style={styles.lack}>{nextLevel+1}레벨까지 {needNum}개가 남았어요!</Text>
                    </View>
                    <View style={styles.levelBox}>
                        <Text style={styles.levelSmall}>{nowLevel+1}레벨</Text>
                        <Text style={styles.levelSmall}>{nextLevel+1}레벨</Text>
                    </View>
                    <View style={styles.levelTrack}>
                        <View style={[styles.levelPercent, {width: `${100/(needNum+studied)*(studied)}%`}]}/>
                    </View>
                </View>
                <Text style={styles.containerText}>활동 기록</Text>
                <View style={{flexDirection: 'row', columnGap: 12, marginTop: 23, height: 441}}>
                    <View style={{rowGap: 13, flex: 1}}>
                        <View style={styles.activityContainer}>
                            <Text style={styles.activityText}>배운 단어</Text>
                            <View style={styles.activityInfo}>
                                <Text style={styles.activityNumber}>{learnedWord>0?learnedWord:0}</Text>
                                <Text style={styles.activityNumberText}>개</Text>
                            </View>
                            <WordsLearned style={{width: 36, height: 52, marginTop: 27}}/>
                        </View>
                        <View style={styles.activityContainer}>
                            <Text style={[styles.activityText, {lineHeight: 27, marginTop: -4}]}>복습해야 하는{'\n'}단어</Text>
                            <View style={styles.activityInfo}>
                                <Text style={styles.activityNumber}>{wrongWord>0?wrongWord:0}</Text>
                                <Text style={styles.activityNumberText}>개</Text>
                            </View>
                            <WordsReview style={{width: 16, height: 29, marginTop: 20, marginLeft: 2, marginBottom: 6}}/>
                        </View>
                    </View>
                    <View style={{rowGap: 13, flex: 1}}>
                        <View style={styles.activityContainer}>
                            <Text style={styles.activityText}>맞은 단어</Text>
                            <View style={styles.activityInfo}>
                                <Text style={styles.activityNumber}>{rightWord>0?rightWord:0}</Text>
                                <Text style={styles.activityNumberText}>개</Text>
                            </View>
                        </View>
                        <View style={styles.activityContainer}>
                            <Text style={styles.activityText}>읽은 책</Text>
                            <View style={styles.activityInfo}>
                                <Text style={styles.activityNumber}>{learnedText>0?learnedText:0}</Text>
                                <Text style={styles.activityNumberText}>개</Text>
                            </View>
                            <BookRead style={{width: 61, height: 47, marginTop: 31, marginBottom: 17}}/>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{marginTop: 62, marginBottom: 162, alignSelf: 'center'}} onPress={handleLogout}>
                <Text style={styles.logout}>로그아웃</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
}

export default MyPage;