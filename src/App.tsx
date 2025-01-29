import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import QuizScreen from './screens/Quiz'; 
import DictionaryScreen from './screens/Dictionary'; 
import HomeScreen from './screens/Home'; 
import CalendarScreen from './screens/Calendar'; 
import MyPageScreen from './screens/MyPage'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 각 화면에서 열 수 있는 페이지
const QuizStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Quiz" component={QuizScreen} />
  </Stack.Navigator>
);

const DictionaryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dictionary" component={DictionaryScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Quiz" component={QuizScreen} />
  </Stack.Navigator>
);

const CalendarStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Calendar" component={CalendarScreen} />
  </Stack.Navigator>
);

const MyPageStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MyPage" component={MyPageScreen} />
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
  const windowWidth = Dimensions.get('window').width;
  return (
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

        let iconSource;
        if (route.name === '홈') {
          iconSource = require('./assets/images/logo.png');
        } else if (route.name === '퀴즈') {
          iconSource = require('./assets/images/logo.png');
        } else if (route.name === '사전') {
          iconSource = require('./assets/images/logo.png');
        } else if (route.name === '달력') {
          iconSource = require('./assets/images/logo.png');
        } else if (route.name === 'My') {
          iconSource = require('./assets/images/logo.png');
        }

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={{ alignItems: 'center' }}>
            <Image
              source={iconSource}
              style={{
                width: 30,
                height: 30,
                tintColor: isFocused ? '#3498db' : '#7f8c8d',
              }}
            />
            <Text style={{ color: isFocused ? '#000000' : '#5B5B5B', fontFamily: 'Pretendard-Regular', marginTop: 8 }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 26,
    height: 74,
    backgroundColor: '#fff',
    borderRadius: 36,
    position: 'absolute',
    bottom: 33,
    left: 13,
    paddingHorizontal: 45,
    borderWidth: 2,
    borderColor: '#F2F1F6',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="홈" tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="퀴즈" component={QuizStack} options={{ headerShown: false }} />
        <Tab.Screen name="사전" component={DictionaryStack} options={{ headerShown: false }} />
        <Tab.Screen name="홈" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="달력" component={CalendarStack} options={{ headerShown: false }} />
        <Tab.Screen name="My" component={MyPageStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
