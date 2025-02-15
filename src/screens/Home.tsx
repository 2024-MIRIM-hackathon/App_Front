import React, {useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Linking,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {NewsItem} from './types';

import Logo from '../assets/svg/logo';
import Book from '../assets/svg/book';
import Write from '../assets/svg/write';

import CustomScrollView from '../components/CustomScrollView';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import he from 'he';

import styles from '../styles/HomeStyles';

function Home() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [news, setNews] = useState<NewsItem[]>([]);
  const getSourceName = (link: string) => {
    try {
      // 정규식으로 URL에서 도메인 추출
      const matches = link.replace(/^(https?:\/\/)?(?:www\.)?([^\/]+)\..*$/, '$2');
      if (matches) {
        return matches; // 도메인 추출
      } else {
        return '알 수 없음'; // 도메인이 없으면 "알 수 없음"
      }
    } catch (error) {
      console.error('URL 파싱 오류:', error);
      return '알 수 없음'; // 오류 발생 시 "알 수 없음" 반환
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      const client_id = 'HFC2r3LOsWteIzkYgRQ1';
      const client_secret = '4FHtyOFoEC';
      const searchKeyword = '우리나라문학도서';

      try {
        const response = await axios.get<{items: NewsItem[]}>(
          `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(
            searchKeyword,
          )}&start=1&display=3`,
          {
            headers: {
              'X-Naver-Client-Id': client_id,
              'X-Naver-Client-Secret': client_secret,
            },
          },
        );

        const newsList: NewsItem[] = response.data.items.map(item => ({
          title: he.decode(item.title).replace(/<b>|<\/b>/g, ''),
          link: item.link,
          description: he.decode(item.description).replace(/<b>|<\/b>/g, ''),
          source: getSourceName(item.link),
        }));

        setNews(newsList);
      } catch (error) {
        console.error('API 호출 오류:', error);
      }
    };

    fetchNews();
  }, []);

  const linkPress = (url: string) => {
    setTimeout(() => {
      Linking.openURL(url);
    }, 100);
  };

  return (
    <View style={styles.body}>
      <StatusBar barStyle={'dark-content'} backgroundColor='transparent' translucent={true} />
      <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: '#F6F5FA', position: 'absolute', top: 0, zIndex: 10 }}/>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: '#F6F5FA' }}/>
        <Logo style={styles.logo} />
        <Text style={styles.issuesText}>요즘 문학이슈</Text>
        <CustomScrollView>
          {news.map((item, index) => (
            <TouchableOpacity
              onPress={() => linkPress(item.link)}
              key={index}
              activeOpacity={1}>
              <View style={styles.issuesContainer}>
                <TouchableOpacity
                  onPress={() => linkPress(item.link)}
                  activeOpacity={1}>
                  <Text
                    style={styles.newsTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.title}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={styles.newsDetail}
                  numberOfLines={3}
                  ellipsizeMode="tail">
                  {item.description}
                </Text>
                <Text style={styles.newsSource}>{item.source}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </CustomScrollView>
        <Text style={styles.learningText}>학습</Text>
        <TouchableOpacity
          style={styles.learningContainer}
          activeOpacity={1}
          onPress={() => navigation.navigate('Learning')}>
          <View style={styles.learningItem}>
            <Book />
            <Text style={styles.learningActivity}>책 문장 단어학습</Text>
            <Text style={styles.learningIng}>4/2 진행 중</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.learningContainer, {marginBottom: 107}]}
          activeOpacity={1}
          onPress={() => navigation.navigate('Reading')}>
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
