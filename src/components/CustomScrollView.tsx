import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import { ReactNode } from 'react';

interface CustomScrollViewProps {
  children: ReactNode[];
  contentWidth?: number;
}

const CustomScrollView = ({ children, contentWidth = 1070 }: CustomScrollViewProps) => {
  const scrollX = useSharedValue(0);
  const windowWidth = Dimensions.get('window').width;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const scrollBarStyle = useAnimatedStyle(() => {
    const scrollBarContainerWidth = windowWidth - 29 * 2;
    const scrollBarWidth = (scrollBarContainerWidth / contentWidth) * windowWidth;
    const translateX = (scrollX.value / (contentWidth - windowWidth)) * (scrollBarContainerWidth - scrollBarWidth);

    return {
      transform: [{ translateX }],
      width: scrollBarWidth,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal={true}
        style={styles.scrollView}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}>

        {children.map((child, index) => (
          <View key={index} style={{ width: 332, height: 178, marginRight: 8 }}>
            {child}
          </View>
        ))}
      </Animated.ScrollView>

      <View style={styles.scrollBarContainer}>
        <Animated.View style={[styles.scrollBar, scrollBarStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 202,
  },
  scrollView: {
    height: 178,
  },
  contentContainer: {
    paddingLeft: 29,
    paddingRight: 21,
    height: 178,
  },
  scrollBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 29,
    right: 29,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  scrollBar: {
    height: 3,
    backgroundColor: '#FFE400',
    borderRadius: 3,
  },
});

export default CustomScrollView;
