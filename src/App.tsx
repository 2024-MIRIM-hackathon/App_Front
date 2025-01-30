import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer, Route, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import QuizScreen from './screens/Quiz';
import DictionaryScreen from './screens/Dictionary';
import HomeScreen from './screens/Home';
import CalendarScreen from './screens/Calendar';
import MyPageScreen from './screens/MyPage';
import LearningScreen from './screens/Learning';

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
    <Stack.Screen name="Learning" component={LearningScreen} />
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

        // 탭별로 다른 아이콘 및 활성화 상태 적용
        let iconSource;
        if (route.name === '홈') {
          iconSource = isFocused
            ? require('./assets/images/home_active.png')  // 활성화 아이콘
            : require('./assets/images/home_inactive.png');  // 비활성화 아이콘
        } else if (route.name === '퀴즈') {
          iconSource = isFocused
            ? require('./assets/images/quiz_active.png')
            : require('./assets/images/quiz_inactive.png');
        } else if (route.name === '사전') {
          iconSource = isFocused
            ? require('./assets/images/dictionary_active.png')
            : require('./assets/images/dictionary_inactive.png');
        } else if (route.name === '달력') {
          iconSource = isFocused
            ? require('./assets/images/calendar_active.png')
            : require('./assets/images/calendar_inactive.png');
        } else if (route.name === 'My') {
          iconSource = isFocused
            ? require('./assets/images/mypage_active.png')
            : require('./assets/images/mypage_inactive.png');
        }

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={{ alignItems: 'center' }}>
            <Image
              source={iconSource}
              style={{
                width: 22,
                height: 23,
              }}
            />
            <Text style={{ color: isFocused ? '#000000' : '#5B5B5B', fontFamily: 'Pretendard-Regular', marginTop: 8, fontSize: 10, }}>
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
    borderRadius: 100,
    position: 'absolute',
    bottom: 21,
    borderWidth: 0.1,
    borderColor: 'white',
    left: 13,
    paddingHorizontal: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 35.8,
  },
});

const AppTabNavigator = () => (
  <Tab.Navigator
      initialRouteName="홈"
      tabBar={(props) => {
        const routeName = getFocusedRouteNameFromRoute(props.state.routes[props.state.index]) || '홈';
        const validRoutes = ['퀴즈', '사전', '홈', '달력', 'My'];

        if (validRoutes.includes(routeName)) {
          return <CustomTabBar {...props} />;
        }

        return null;
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
    <Tab.Screen name="퀴즈" component={QuizStack} options={{ headerShown: false }} />
    <Tab.Screen name="사전" component={DictionaryStack} options={{ headerShown: false }} />
    <Tab.Screen name="홈" component={HomeStack} options={{ headerShown: false }} />
    <Tab.Screen name="달력" component={CalendarStack} options={{ headerShown: false }} />
    <Tab.Screen name="My" component={MyPageStack} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
};

export default App;

