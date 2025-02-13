import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, Dimensions, Image, Modal, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const ItemWidth = Dimensions.get('window').width - 58;

import styles from '../styles/ReadingStyles';

function Learning() {

    useFocusEffect(
        React.useCallback(() => {
          StatusBar.setBackgroundColor('#F6F5FA');
          return () => {
            StatusBar.setBackgroundColor('#F6F5FA');
          }
        }, [])
    );

    const navigation = useNavigation();
    const data = ["꿈을 꿨어 그렇게 생생할 수 없어, 이빨에 씹히던 날고기의 감촉이, 내얼굴이, 눈빛이. 처음보는 얼굴 같은데, 분명 내 얼굴이었어. 아니야, 거꾸로, 수없이 봤던 얼굴 같은데, 내 얼굴이 아니었어. 설명할 수 없어. 익숙하면서도 낯선..... 그 생생하고 이상한, 끔찍하게 이상한 느낌을. 꿈을 꿨어 그렇게 생생할 수 없어, 이빨에 씹히던 날고기의 감촉이, 내얼굴이, 눈빛이. 처음보는 얼굴 같은데, 분명 내 얼굴이었어. 아니야, 거꾸로, 수없이 봤던 얼굴 같은데, 내 얼굴이 아니었어. 설명할 수 없어. 익숙하면서도 낯선..... 그 생생하고 이상한, 끔찍하게 이상한 느낌을. 꿈을 꿨어 그렇게 생생할 수 없어, 이빨에 씹히던 날고기의 감촉이, 내얼굴이, 눈빛이. 처음보는 얼굴 같은데, 분명 내 얼굴이었어. 아니야, 거꾸로, 수없이 봤던 얼굴 같은데, 꿈을 꿨어 그렇게 생생할 수 없어, 이빨에 씹히던 날고기의 감촉이, 내얼굴이, 눈빛이. 처음보는 얼굴 같은데, 분명 내 얼굴이었어. 아니야, 거꾸로, 수없이 봤던 얼굴 같은데, 내 얼굴이 아니었어. 설명할 수 없어. 익숙하면서도 낯선..... 그 생생하고 이상한, 끔찍하게 이상한 느낌을. 익숙하면서도 낯선..... 그 생생하고 이상한, 끔찍하게 이상한 느낌을. ", "채식주의자", "한강"];
    return (
        <View style={styles.body}>
            <StatusBar barStyle="dark-content" backgroundColor="#F6F5FA" />
            <Text style={styles.learningActivity}>글 읽기 연습</Text>
            <ScrollView
                style={styles.ReadingScroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.ReadingContainer}>
                    <Text style={styles.ReadingText}>{data[0]}</Text>
                    <View style={styles.BookInfo}>
                        <Text style={styles.title}>{data[1]}</Text>
                        <Text style={styles.author}>{data[2]}</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.leave} activeOpacity={1}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <View style={styles.leaveContainer}>
                    <Text style={styles.leaveText}>학습 완료</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Learning;
