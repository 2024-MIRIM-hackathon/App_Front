import React from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    Linking,
    TouchableOpacity,
} from 'react-native';
import Logo from '../assets/svg/logo';
import Book from '../assets/svg/book';
import Write from '../assets/svg/write';

import CustomScrollView from '../components/CustomScrollView';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from '../styles/HomeStyles';

function Home() {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View style={styles.body}>
            <StatusBar barStyle="dark-content" backgroundColor="#F6F5FA" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Logo style={styles.logo}/>
                <Text style={styles.issuesText}>요즘 문학이슈</Text>
                <CustomScrollView>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.example.com')} >
                        <View style={styles.issuesContainer}>
                            <Text style={styles.newsTitle}>한강, 한국작가 첫 노벨문학상 수상</Text>
                            <Text style={styles.newsDetail} numberOfLines={3} ellipsizeMode="tail">
                                소설가 한강(54)이 한국 작가 최초로 노벨 문학상을
                                수상했다. 한국인이 노벨상을 받은 것은 2000년
                                노벨 평화상을 수상한 고 김대중 전 대통ㄹㅇㄹ아러어라어라어라어라ㅓ아러ㅏ어라어라어라어라어라어라ㅓ랑라어라어라어라어라//
                            </Text>
                            <Text style={styles.newsSource}>동아일보</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.example.com')} >
                        <View style={styles.issuesContainer}>
                            <Text style={styles.newsTitle}>한강, 한국작가 첫 노벨문학상 수상</Text>
                            <Text style={styles.newsDetail} numberOfLines={3} ellipsizeMode="tail">
                                소설가 한강(54)이 한국 작가 최초로 노벨 문학상을
                                수상했다. 한국인이 노벨상을 받은 것은 2000년
                                노벨 평화상을 수상한 고 김대중 전 대통ㄹㅇㄹ아러어라어라어라어라ㅓ아러ㅏ어라어라어라어라어라어라ㅓ랑라어라어라어라어라//
                            </Text>
                            <Text style={styles.newsSource}>동아일보</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.example.com')}>
                        <View style={styles.issuesContainer}>
                            <Text style={styles.newsTitle}>한강, 한국작가 첫 노벨문학상 수상</Text>
                            <Text style={styles.newsDetail} numberOfLines={3} ellipsizeMode="tail">
                                소설가 한강(54)이 한국 작가 최초로 노벨 문학상을
                                수상했다. 한국인이 노벨상을 받은 것은 2000년
                                노벨 평화상을 수상한 고 김대중 전 대통ㄹㅇㄹ아러어라어라어라어라ㅓ아러ㅏ어라어라어라어라어라어라ㅓ랑라어라어라어라어라//
                            </Text>
                            <Text style={styles.newsSource}>동아일보</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </CustomScrollView>
                <Text style={styles.learningText}>학습</Text>
                <TouchableOpacity style={styles.learningContainer} activeOpacity={1} onPress={() => navigation.navigate("Learning")}>
                    <View style={styles.learningItem}>
                        <Book />
                        <Text style={styles.learningActivity}>책 문장 단어학습</Text>
                        <Text style={styles.learningIng}>4/2 진행 중</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.learningContainer, {marginBottom: 107}]} activeOpacity={1}>
                    <View style={styles.learningItem}>
                        <Write />
                        <Text style={styles.learningActivity}>글 읽기 연습</Text>
                        <Text style={styles.learningIng}>미완료</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Home;