import React, { useState, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, Dimensions, Image, Modal, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const interval = (Dimensions.get('window').width - 334)/2;
const ItemHeight = Dimensions.get('window').height - 254;

import styles from '../styles/LearningStyles';

function Learning() {

    useFocusEffect(
        React.useCallback(() => {
          StatusBar.setBackgroundColor('#F6F5FA');
        }, [])
    );

    const navigation = useNavigation();
    const data = ["종개념은 다양한데, 이 같은 초월적 ‘보편’이 같다는 것은 아리스토텔레스가 이미 ‘유비(類比)의 단일성’ 으로 인식하고 있었다. 종개념은 다양한데, 이 같은 초월적 ‘보편’이 같다는 것은 아리스토텔레스가 이미 ‘유비(類比)의 단일성’ 으로 인식하고 있었다. 종개념은 다양한데, 이 같은 초월적 ‘보편’이 같다는 것은 아리스토텔레스가 이미 ‘유비(類比)의 단일성’ 으로 인식하고 있었다.(類比)의 단일성’ 으로 인식하고 있었다.", 
        '종개념은 다양한데, 이 같은 초월적 이 같은 초월적', 
        '종개념은 다양한데, 이 같은 초월적', 
        '종개념은 다양한데, 이 같은 초월적'];

    const [isLearningCompleted, setIsLearningCompleted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false); // 팝업 상태 관리

    // 팝업 열기
    const openModal = () => {
        setIsModalVisible(true);
    };

    // 팝업 닫기
    const closeModal = () => {
        setIsModalVisible(false);
    };

    const onScroll = (e: { nativeEvent: { contentOffset: { x: number } } }) => {
        const xOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / 334);
        setCurrentIndex(index);
        if (currentIndex === 3) setIsLearningCompleted(true);
        else setIsLearningCompleted(false);
    };

    const indexToOffset = () => {
        return { x: currentIndex * (334 + 9), y: 0 };
    };

    const getWidth = (str: string) => {
        let len = str.length;
        let nu = str.split(' ').length - 1;
        return (len-nu)*20 + nu*5;
    }

    return (
        <View style={styles.body}>
            <StatusBar barStyle="dark-content" backgroundColor="#F6F5FA" />
            <Modal
                visible={isModalVisible}
                animationType="fade" // 팝업 애니메이션 설정
                transparent={true} // 배경을 투명하게
                onRequestClose={closeModal} // 안드로이드에서 백 버튼 눌렀을 때 닫기
            >
                <View style={styles.background}>
                    <View style={styles.warningContainer}>
                        <Image style={styles.warningImg} source={require('../assets/images/warningImg.png')} />
                        <Text style={styles.warningSure}>정말 나가시겠습니까?</Text>
                        <Text style={styles.warningText}>저장이 되지 않아 처음부터{'\n'}다시 해야될 수 있습니다.</Text>
                        <TouchableOpacity style={[styles.yes, styles.button]} onPress={closeModal}><Text>취소</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.no, styles.button]} onPress={() => { closeModal(); navigation.goBack(); }}><Text>학습 중에 나가기</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={styles.learningActivity}>책 문장 단어학습</Text>
            <View style={styles.appBackground}>
                <View style={{ maxHeight: ItemHeight }}>
                    <ScrollView
                        onScroll={onScroll}
                        horizontal
                        contentContainerStyle={{ width: 9 * 3 + interval * 2 + 334 * 4 }}
                        contentOffset={indexToOffset()}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={10}
                        snapToInterval={334 + 9}
                    >
                        <View style={styles.row}>
                            {data.map((item, index) => (
                                <View
                                    key={index}
                                    style={[styles.carouselItemContainer, { width: 334 }]}
                                >
                                    <View style={[styles.carouselItem, { backgroundColor: 'white' }]}>
                                        <ScrollView showsVerticalScrollIndicator={false}>
                                            <View>
                                            <Text style={styles.bookText}>
                                                {item}
                                                <View>
                                                    <Text style={styles.bookWord}>
                                                        보편
                                                    </Text>
                                                </View>
                                                않으려고 해서 조직 운영이 효과적이지 않다는 평가를 받는 리더들의 흔히 하는 질문은 "위임하는 것이 내가 직접 관리하는 것보다 더 나을까요?"라는 것입니다. 아직 해보지도 않았다면 어떤 결과가 있을지 알 수 없습니다. 않으려고 해서 조직 운영이 효과적이지 않다는 평가를 받는 리더들의 흔히 하는 질문은 "위임하는 것이 내가 직접 관리하는 것보다 더 나을까요?"라는 것입니다. 아직 해보지도 않았다면 어떤 결과가 있을지 알 수 없습니다.
                                            </Text>
                                            <View style={styles.bookInfo}>
                                                <Text style={styles.bookTitle}>채식주의자</Text>
                                                <Text style={styles.bookWrite}>한강</Text>
                                            </View>
                                            </View>
                                            <View style={styles.wordContainer}>
                                                <Text style={styles.word}>보편</Text>
                                                <View style={[styles.wordShadow, {width: getWidth('보편')+6}]} />
                                            </View>
                                            <Text style={styles.mean}>모든 것에 두루 미치거나 통함. 또는 그런 것.</Text>
                                            <Text style={styles.example}>예문</Text>
                                            <Text style={styles.exampleSentence}>사람들은 보편적으로 사랑하는 사람을 행복하게 하고싶어 해</Text>
                                        </ScrollView>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.dotContainer}>
                        {data.map((_, index) => {
                            const isFocused = currentIndex >= index;
                            return (
                                <View
                                    key={index}
                                    style={[styles.dot, isFocused && styles.dotFocused]}
                                />
                            );
                        })}
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.leave} activeOpacity={1}
                onPress={() => {
                    if (isLearningCompleted) {
                        navigation.goBack();
                    } else {
                        openModal();
                    }
                }}
            >
                <View style={styles.leaveContainer}>
                    <Text style={styles.leaveText}>
                        {isLearningCompleted ? "단어 학습 완료" : "학습 중에 나가기"}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Learning;
