import React, { useState } from "react";
import { 
  View, 
  Text, 
  StatusBar, 
  Image, 
  TouchableOpacity, 
  TextInput, 
} from "react-native";

import styles from "../styles/LoginStyles";
import Left from "../assets/svg/Left";
import Logo from "../assets/svg/logo";
import Eye from "../assets/svg/eye";
import CloseEye from "../assets/svg/closeEye";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem("userToken", "your_token_here"); // 로그인 정보 저장
      setIsLoggedIn(true); // 로그인 상태 업데이트
    } catch (error) {
      console.error("로그인 저장 실패:", error);
    }
  };

  const [eye, setEye] = useState(true);

  const navigate = useNavigation();
  return (
    <View style={styles.body}>
      <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: 'white', position: 'absolute', top: 0 }}/>
      <View style={[styles.LoginHeader, {marginTop: StatusBar.currentHeight}]}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigate.goBack()}>
          <Left style={{ width: 7, height: 14, marginRight: 10 }} />
          <Text style={styles.back}>나가기</Text>
        </TouchableOpacity>
        <Logo style={{ width: 36, height: 21 }} />
      </View>
      <Text style={styles.LoginText}>로그인</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputInfo} placeholder="이메일" placeholderTextColor={'#ACACAC'} selectionColor={'#FFE400'} />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputInfo} placeholder="비밀번호" placeholderTextColor={'#ACACAC'} selectionColor={'#FFE400'} secureTextEntry={eye} />
        <TouchableOpacity activeOpacity={1} style={{width: 16, height: 10, marginTop: 1, marginRight: 1}} onPress={()=>{setEye((pre) => !pre)}}>
          {eye?<CloseEye/>:<Eye />}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.LoginBtn} onPress={handleLogin}><Text style={styles.LoginBtnText}>로그인</Text></TouchableOpacity>
      <View style={{marginHorizontal: 29, height: 13, flexDirection: 'row', marginTop: 62, marginBottom: 12, alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
          <View style={{borderTopWidth: 0.7, borderTopColor: '#ACACAC', width: '100%', marginTop: 4}}/>
          <Text style={{marginHorizontal: 11.5, fontSize: 11, fontFamily: 'Pretendard-Medium', color: '#ACACAC'}}>또는</Text>
          <View style={{borderTopWidth: 0.7, borderTopColor: '#ACACAC', width: '100%', marginTop: 4}}/>
      </View>
      <View style={styles.otherLogin}>
        <TouchableOpacity><Image source={require('../assets/images/Google.png')} style={styles.otherLoginImg}/></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/images/Naver.png')} style={styles.otherLoginImg}/></TouchableOpacity>
      </View>
      <Image source={require('../assets/images/LoginImg.png')} style={[styles.LoginImg, {marginTop: StatusBar.currentHeight}]} />
    </View>      
  );
};

export default Login;
