import React, { useState } from "react";
import { 
    View, 
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from "react-native";

import styles from "../styles/SignupStyles";
import Left from "../assets/svg/Left";
import Logo from "../assets/svg/logo";
import No from "../assets/svg/no";
import Yes from "../assets/svg/yes"
import Eye from "../assets/svg/eye";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignupProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Signup:React.FC<SignupProps> = ({ setIsLoggedIn }) => {
    const navigate = useNavigation();

    const [check, setCheck] = useState(false);
    const handleLogin = async () => {
      try {
        await AsyncStorage.setItem("userToken", "your_token_here"); // 로그인 정보 저장
        setIsLoggedIn(true); // 로그인 상태 업데이트
      } catch (error) {
        console.error("로그인 저장 실패:", error);
      }
    };

    return (
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never' style={styles.body}>
        <StatusBar backgroundColor={'white'} barStyle={"dark-content"} />
        <View style={styles.LoginHeader}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigate.goBack()}>
            <Left style={{ width: 7, height: 14, marginRight: 10 }} />
            <Text style={styles.back}>나가기</Text>
          </TouchableOpacity>
          <Logo style={{ width: 36, height: 21 }} />
        </View>
        <Text style={styles.LoginText}>회원가입</Text>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Text style={styles.inputInfo}>닉네임</Text>
            <View style={styles.inputText}>
              <TextInput 
                style={styles.text}
                placeholder="닉네임을 입력해주세요"
                placeholderTextColor={'#ACACAC'}
                selectionColor={'#FFE400'}/>
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputInfo}>이메일</Text>
            <View style={styles.inputText}>
              <TextInput 
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
                style={styles.text}
                placeholder="비밀번호를 입력해주세요"
                placeholderTextColor={'#ACACAC'}
                selectionColor={'#FFE400'}/>
              <Eye style={{width: 16, height: 10, marginTop: 1, marginRight: 1}}/>
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputInfo}>비밀번호 확인</Text>
            <View style={styles.inputText}>
              <TextInput 
                style={styles.text}
                placeholder="다시 한 번 비밀번호를 입력해주세요"
                placeholderTextColor={'#ACACAC'}
                selectionColor={'#FFE400'}/>
              <Eye style={{width: 16, height: 10, marginTop: 1, marginRight: 1}}/>
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputInfo}>나이</Text>
              <View style={{flexDirection: 'row'}}>
              <View style={[styles.inputText, {width: '49%'}]}>
                <TextInput 
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
