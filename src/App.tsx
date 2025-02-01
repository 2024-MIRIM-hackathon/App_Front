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
import ReadingScreen from './screens/Reading';

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
    <Stack.Screen name="Reading" component={ReadingScreen} />
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
      const route = props.state.routes[props.state.index];
      let routeName = getFocusedRouteNameFromRoute(route) || route.name;

      if (routeName === 'Learning' || routeName === 'Reading') {
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
    <Tab.Screen name="My" component={MyPageStack} />
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

