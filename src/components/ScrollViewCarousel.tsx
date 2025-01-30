import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';

const ItemW = Dimensions.get('window').width - (29*2);

const ScrollViewCarousel = () => {
  const data = ['white', 'skyblue', 'green', 'yellow'];

  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // onScrollEnd 이벤트로 스크롤이 끝났을 때 인덱스를 업데이트
  const onScrollEnd = (e: { nativeEvent: { contentOffset: { x: number } } }) => {
    const xOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / itemWidth); // 소수점 값을 제거하여 정확한 인덱스를 얻기
    setCurrentIndex(index);
  };

  const indexToOffset = () => {
    return { x: currentIndex * (ItemW+9), y: 0 };
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        style={styles.scrollView}
        onMomentumScrollEnd={onScrollEnd} 
        horizontal
        contentContainerStyle={{ width: 9*3+29*2+ItemW*4 }}
        onContentSizeChange={(w) => setItemWidth(ItemW)}
        contentOffset={indexToOffset()}
        showsHorizontalScrollIndicator={false}
        decelerationRate={10} 
        snapToInterval={ItemW + 9} 
      >
        <View style={styles.row}>
          {data.map((item: string) => {
            return (
              <View key={item} style={[styles.carouselItemContainer, { width: ItemW }]}>
                <View style={[styles.carouselItem, { backgroundColor: 'white' }]}>
                  <Text style={styles.bookText}>종개념은 다양한데, 이 같은 초월적 <Text style={styles.bookWord}>‘보편’</Text>이 같다는 것은 아리스토텔레스가 이미 ‘유비(類比)의 단일성’ 으로 인식하고 있었다.
                  </Text>
                  <View style={styles.wordContainer}>
                    <Text style={styles.word}>보편</Text>
                    <View style={styles.wordShadow} />
                  </View>
                  <Text style={styles.mean}>모든 것에 두루 미치거나 통함. 또는 그런 것.</Text>
                  <Text style={styles.example}>예문</Text>
                  <Text style={styles.exampleSentence}>사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.dotContainer}>
        {data.map((_, index) => {
          const isFocused = currentIndex === index; // isFoused -> isFocused로 수정
          return (
            <View key={index} style={[styles.dot, isFocused && styles.dotFocused]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 24.5,
  },
  carouselItemContainer: {
    width: ItemW,
    height: '100%',
    marginHorizontal: 4.5,
  },
  carouselItem: {
    flex: 1,
    borderRadius: 18,
    paddingHorizontal: 24,
  },
  dotContainer: {
    width: '100%',
    height: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 21,
  },
  dot: {
    width: 7,
    height: 7,
    marginVertical: 0,
    marginHorizontal: 3,
    backgroundColor: '#BDBDBD',
    borderRadius: 10,
  },
  dotFocused: {
    backgroundColor: '#424242',
  },
  bookText: {
    fontSize: 15,
    fontFamily: 'NanumMyeongjo',
    marginTop: 33,
    paddingBottom: 33,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C8C8C8',
  },
  bookWord: {
    fontSize: 15,
    fontFamily: 'NanumMyeongjo',
    backgroundColor: '#FFF828',
  },
  wordContainer: {
    width: 47,
    height: 24,
    marginLeft: 7,
    marginTop: 36,
    marginBottom: 14,
  },
  word: {
    fontSize: 20,
    marginHorizontal: 6,
    fontFamily: 'Pretendard-Bold',
    position: 'absolute',
    zIndex: 2,
  },
  wordShadow: {
    height: 13,
    borderRadius: 10,
    backgroundColor: '#FFF828',
    position: 'static',
    marginTop: 13,
    zIndex: 1,
  },
  mean: {
    fontSize: 15,
    fontFamily: 'Pretendard-Medium',
    marginLeft: 13,
    marginBottom: 33,
    color: '#424242',
  },
  example: {
    fontSize: 14,
    fontFamily: 'Pretendard-Medium',
    marginLeft: 13,
    marginBottom: 7,
    color: '#1C1C1C',
  },
  exampleSentence: {
    fontSize: 13,
    fontFamily: 'Pretendard-Regular',
    marginLeft: 13,
    marginBottom: 36,
    color: '#616161',
  },
});

export default ScrollViewCarousel;