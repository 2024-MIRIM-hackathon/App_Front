import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import styles from '../styles/StartStyles';

import { postLoginUser } from '../api/userApi';

interface StartProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const LoginScreen: React.FC<StartProps> = ({ setIsLoggedIn }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.body}>
        <StatusBar barStyle={'dark-content'} backgroundColor='transparent' translucent={true} />
        <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: 'rgba(255, 255, 255, 0.95)', position: 'absolute', top: 0 }}/>
        <Image source={require('../assets/images/StartImg.png')} style={styles.LoginImg} />
        <Image source={require('../assets/images/StartLogo.png')} style={styles.Logo} />
        <Text style={styles.LoginText}>누구보다 쉽고{'\n'}누구든지 즐겁게</Text>
        <View style={{position: 'absolute', bottom: 39, paddingHorizontal: 29, width: '100%'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}><View style={[styles.Signup, styles.LoginBtn]}><Text style={styles.logintext}>회원가입</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><View style={[styles.Login, styles.LoginBtn]}><Text style={styles.logintext}>로그인</Text></View></TouchableOpacity>
            <View style={{width: '100%', height: 13, flexDirection: 'row', marginTop: 17, marginBottom: 14, alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                <View style={{borderTopWidth: 1, borderTopColor: '#ACACAC', width: '100%', marginTop: 4}}/>
                <Text style={{marginHorizontal: 11.5, fontSize: 11, fontFamily: 'Pretendard-Medium', color: '#ACACAC'}}>또는</Text>
                <View style={{borderTopWidth: 1, borderTopColor: '#ACACAC', width: '100%', marginTop: 4}}/>
            </View>
            <TouchableOpacity><View style={[styles.Google, styles.LoginBtn]}><Text style={styles.logintext}>구글계정으로 로그인</Text></View></TouchableOpacity>
            <TouchableOpacity><View style={[styles.Naver, styles.LoginBtn]}><Text style={[styles.logintext, {color: 'white'}]}>네이버 계정으로 로그인</Text></View></TouchableOpacity>
        </View>
    </View>
  );
};

export default LoginScreen;
