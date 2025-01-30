import React from 'react';

import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import styles from '../styles/LearningStyles';
import ScrollViewCarousel from '../components/ScrollViewCarousel';

function Learning() {
    return (
        <View style={styles.body}>
            <StatusBar barStyle="dark-content" backgroundColor="#F6F5FA" />
            <Text style={styles.learningActivity}>책 문장 단어학습</Text>
            <View style={styles.appBackground}>
                <View style={styles.carouselBox}>
                    <ScrollViewCarousel />
                </View>
            </View>
            <TouchableOpacity style={styles.leave} activeOpacity={1}>
                <View style={styles.leaveContainer}>
                    <Text style={styles.leaveText}>학습 중에 나가기</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Learning;