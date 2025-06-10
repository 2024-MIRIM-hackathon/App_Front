import React, { useState } from "react";
import { 
    View, 
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert,
} from "react-native";

import styles from "../styles/SignupStyles";
import Left from "../assets/svg/Left";
import Logo from "../assets/svg/logo";
import No from "../assets/svg/no";
import Yes from "../assets/svg/yes"
import Eye from "../assets/svg/eye";
import CloseEye from "../assets/svg/closeEye";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { postUserJoin, postLoginUser } from "../api/userApi";

interface SignupProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Signup:React.FC<SignupProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigation();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password_1, setPassword_1] = useState('');
  const [password_2, setPassword_2] = useState('');
  const [age, setAge] = useState('');
  const [check, setCheck] = useState(false);
  const handleLogin = async () => {
    try {
      if(password_1 != password_2){
        throw new Error('비밀번호가 일치하지 않습니다.');          
      }
      const joinData = {
        nickname,
        email,
        password: password_1,
        age
      }
      await postUserJoin(joinData)
      const response = await postLoginUser({nickname, password: password_1})
      await AsyncStorage.setItem("userId", String(response.user_id));
      await AsyncStorage.setItem('nickname', nickname)
      await AsyncStorage.setItem('password', password_1)
      setIsLoggedIn(true);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('에러', error.message);
      } else {
        Alert.alert('에러', '알 수 없는 오류가 발생했습니다.');
      }
    }
  };
  const [eye1, setEye1] = useState(true);
  const [eye2, setEye2] = useState(true);
  return (
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never' style={styles.body}>
      <StatusBar barStyle={'dark-content'} backgroundColor='transparent' translucent={true} />
      <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: 'white', position: 'absolute', top: 0 }}/>
      <View style={[styles.LoginHeader, {marginTop: StatusBar.currentHeight}]}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: -6 }} onPress={() => navigate.goBack()}>
          <Left style={{ width: 7, height: 14, marginRight: 10 }} />
          <Text style={styles.back}>나가기</Text>
        </TouchableOpacity>
        <Logo width={42} height={25} style={{marginTop: -3}}/>
      </View>
      <Text style={styles.LoginText}>회원가입</Text>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.inputInfo}>닉네임</Text>
          <View style={styles.inputText}>
            <TextInput 
              value={nickname}
              onChangeText={setNickname}
              style={styles.text}
              placeholder="아이디를 입력해주세요"
              placeholderTextColor={'#ACACAC'}
              selectionColor={'#FFE400'}/>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.inputInfo}>이메일</Text>
          <View style={styles.inputText}>
            <TextInput 
              value={email}
              onChangeText={setEmail}
              style={styles.text}
              placeholder="이메일을 입력해주세요"
              placeholderTextColor={'#ACACAC'}
              selectionColor={'#FFE400'}/>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.inputInfo}>비밀번호</Text>
          <View style={styles.inputText}>
            <TextInput 
              value={password_1}
              onChangeText={setPassword_1}
              style={styles.text}
              placeholder="비밀번호를 입력해주세요"
              placeholderTextColor={'#ACACAC'}
              selectionColor={'#FFE400'}
              secureTextEntry={eye1}/>
            <TouchableOpacity activeOpacity={1} style={{width: 16, height: 10, marginTop: 1, marginRight: 1}} onPress={()=>{setEye1((pre) => !pre)}}>
              {eye1?<CloseEye/>:<Eye />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.inputInfo}>비밀번호 확인</Text>
          <View style={styles.inputText}>
            <TextInput 
              value={password_2}
              onChangeText={setPassword_2}
              style={styles.text}
              placeholder="다시 한 번 비밀번호를 입력해주세요"
              placeholderTextColor={'#ACACAC'}
              selectionColor={'#FFE400'}
              secureTextEntry={eye2}/>
            <TouchableOpacity activeOpacity={1} style={{width: 16, height: 10, marginTop: 1, marginRight: 1}} onPress={()=>{setEye2((pre) => !pre)}}>
              {eye2?<CloseEye/>:<Eye />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.inputInfo}>나이</Text>
            <View style={{flexDirection: 'row'}}>
            <View style={[styles.inputText, {width: '49%'}]}>
              <TextInput 
                value={age}
                onChangeText={setAge}
                style={styles.text}
                placeholder="나이를 입력해주세요"
                placeholderTextColor={'#ACACAC'}
                selectionColor={'#FFE400'}/>
            </View>
            <Text style={styles.ageText}>세</Text>
          </View>
        </View>
      </View>
      <View style={styles.signupBtnContainer}>
          <View style={styles.consentContainer}>
              <TouchableOpacity style={styles.checkbox} onPress={() => setCheck((pre) => !pre)}>{check?<Yes/>:<No/>}</TouchableOpacity>
              <Text style={styles.consentText}>개인정보 이용에 동의 하십니까?</Text>
          </View>
          <TouchableOpacity style={styles.SignupBtn} disabled={!check} onPress={handleLogin}>
              <Text style={styles.SignupBtnText}>회원가입</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;
