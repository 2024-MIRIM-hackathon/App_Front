import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer, Route, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from "react-native-splash-screen";

import QuizScreen from './screens/Quiz';
import DictionaryScreen from './screens/Dictionary';
import HomeScreen from './screens/Home';
import CalendarScreen from './screens/Calendar';
import MyPageScreen from './screens/MyPage';
import LearningScreen from './screens/Learning';
import ReadingScreen from './screens/Reading';
import WordQuiz from './screens/WordQuiz';

import HomeActive from './assets/svg/HomeActive';
import HomeInactive from './assets/svg/HomeInactive';
import QuizActive from './assets/svg/QuizActive';
import QuizInactive from './assets/svg/QuizInactive';
import DictionaryActive from './assets/svg/DictionaryActive';
import DictionaryInactive from './assets/svg/DictionaryInactive';
import CalendarActive from './assets/svg/CalendarActive';
import CalendarInactive from './assets/svg/CalendarInactive';
import MyPageActive from './assets/svg/MyPageActive';
import MyPageInactive from './assets/svg/MyPageInactive';

import { QuizProvider } from './context/QuizProgressContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Words, TextType } from './types/learnType';

type QuizData = {
  question: string,
  options: {
    word: string
  }[],
  correct_answer: string
}
export type RootStackParamList = {
  WordQuiz: { quizVersion: boolean, data: QuizData[] };
};
export type LearningStackParam = {
  Learning: { words: Words[] }
}
export type ReadingStackParam = {
  Reading: { text: TextType }
}

interface AppProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const WordQuizStack = createStackNavigator<RootStackParamList>();
const LearningStack = createStackNavigator<LearningStackParam>()
const ReadingStack = createStackNavigator<ReadingStackParam>()
const MyStack = createStackNavigator<RootStackParamList>();

// 각 화면에서 열 수 있는 페이지
const QuizStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="Quiz" component={QuizScreen} />
    <WordQuizStack.Screen name="WordQuiz" component={WordQuiz} />
  </Stack.Navigator>
);

const DictionaryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="Dictionary" component={DictionaryScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <LearningStack.Screen name="Learning" component={LearningScreen} />
    <ReadingStack.Screen name="Reading" component={ReadingScreen} />
  </Stack.Navigator>
);

const CalendarStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="Calendar" component={CalendarScreen} />
  </Stack.Navigator>
);

// const MyPageStack: React.FC<AppProps> = ({ setIsLoggedIn }) => (
//   <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
//     <Stack.Screen name="MyPage" component={MyPageScreen} setIsLoggedIn={setIsLoggedIn}/>
//   </Stack.Navigator>
// );
const MyPageStack: React.FC<AppProps> = ({ setIsLoggedIn }) => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="MyPage">
      {() => <MyPageScreen setIsLoggedIn={setIsLoggedIn} />}
    </Stack.Screen>
  </Stack.Navigator>
);

// CustomTabBar 컴포넌트
const CustomTabBar = ({
  state,
  descriptors,
  navigation
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  return (
    <View style={{ position: 'relative' }}>
    <View style={{
      position: 'absolute',
      top: -95, left: 12.5, right: 12.5, bottom: 20.5,
      backgroundColor: '#F1F0F4',
      borderRadius: 100,
      opacity: 0.2,
    }} />
    <View style={{
      position: 'absolute',
      top: -98, left: 10, right: 10, bottom: 18,
      backgroundColor: '#EFEEF2',
      borderRadius: 100,
      opacity: 0.1,
    }} />
    <View style={{
      position: 'absolute',
      top: -101, left: 7, right: 7, bottom: 15,
      backgroundColor: '#F0EFF4',
      borderRadius: 100,
      opacity: 0.1,
    }} />
    <View style={{
      position: 'absolute',
      top: -104.5, left: 3.5, right: 3.5, bottom: 11.5,
      backgroundColor: '#F1F0F5',
      borderRadius: 100,
      opacity: 0.1,
    }} />
    <View style={styles.tabBarContainer}>
      {state.routes.map((route: Route<string>, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // 탭을 눌렀을 때 네비게이션을 수행
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // 탭별로 다른 아이콘 및 활성화 상태 적용
        let IconComponent;
        if (route.name === '홈') {
          IconComponent = isFocused ? <HomeActive /> : <HomeInactive />;
        } else if (route.name === '퀴즈') {
          IconComponent = isFocused ? <QuizActive /> : <QuizInactive />;
        } else if (route.name === '사전') {
          IconComponent = isFocused ? <DictionaryActive /> : <DictionaryInactive />;
        } else if (route.name === '달력') {
          IconComponent = isFocused ? <CalendarActive /> : <CalendarInactive />;
        } else if (route.name === 'My') {
          IconComponent = isFocused ? <MyPageActive /> : <MyPageInactive />;
        }

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={{ alignItems: 'center' }}>
            {IconComponent}
            <Text style={{ color: isFocused ? '#000000' : '#5B5B5B', fontFamily: 'Pretendard-Regular', marginTop: 8, fontSize: 10, }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    // width: Dimensions.get('window').width - 26,
    height: 74,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    bottom: 21,
    borderWidth: 0.1,
    borderColor: 'white',
    left: 13,
    right: 13,
    paddingHorizontal: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#EEEEEE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 35.8,
  },
});

const AppTabNavigator: React.FC<AppProps> = ({ setIsLoggedIn }) => (
  <Tab.Navigator
    initialRouteName="홈"
    tabBar={(props) => {
      const route = props.state.routes[props.state.index];
      let routeName = getFocusedRouteNameFromRoute(route) || route.name;

      if (routeName === 'Learning' || routeName === 'Reading' || routeName === 'WordQuiz') {
        return null;
      }

      return <CustomTabBar {...props} />;
    }}
    screenOptions={{ headerShown: false }}
    >
    <Tab.Screen name="퀴즈" component={QuizStack} />
    <Tab.Screen name="사전" component={DictionaryStack} />
    <Tab.Screen name="홈" component={HomeStack} />
    <Tab.Screen name="달력" component={CalendarStack} />
    {/* <Tab.Screen name="My" component={MyPageStack} setIsLoggedIn={setIsLoggedIn} /> */}
    <Tab.Screen name="My">
      {() => <MyPageStack setIsLoggedIn={setIsLoggedIn} />}
    </Tab.Screen>
  </Tab.Navigator>
);

const App: React.FC<AppProps> = ({ setIsLoggedIn }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1000); //스플래시 활성화 시간
  // });
  return (
    <QuizProvider>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-95}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <AppTabNavigator setIsLoggedIn={setIsLoggedIn} />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </QuizProvider>
  );
};

export default App;

