import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StartScreen from "./screens/Start"; 
import SignupScreen from "./screens/Signup";
import LoginScreen from "./screens/Login";
import App from "./App";  // 바텀 네비게이션
import { ActivityIndicator, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

const Stack = createStackNavigator();

const Navigation = () => {
    useEffect(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500); //스플래시 활성화 시간
    });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // 로그인 상태 (null이면 로딩 중)

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        setIsLoggedIn(userId !== null); // userToken이 있으면 로그인 상태 유지
      } catch (error) {
        console.error("로그인 상태 확인 실패:", error);
      }
    };

    checkLoginStatus();
  }, []);

  // 로딩 중이면 스피너 표시
  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FFE400" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        {isLoggedIn ? (
          <Stack.Screen name="App">
            {() => <App setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="StartScreen">
              {() => <StartScreen setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Signup">
              {() => <SignupScreen setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
