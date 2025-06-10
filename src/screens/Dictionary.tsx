import React, { useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import {disassemble} from 'es-hangul';

import styles from '../styles/DictionaryStyles';

import BookmarkedIcon from '../assets/svg/bookmarkedIcon';
import UnbookmarkedIcon from '../assets/svg/unbookmarkedIcon';
import Spread from '../assets/svg/spread';
import Fold from '../assets/svg/fold';

import { getAllWords, postBookmark } from '../api/wordDictionaryApi';

type WordData = {
  id: number,
  word: string,
  meaning: string,
  example: string,
  bookmarked: boolean
}

function Dictionary() {
  const [wordData, setWordData] = useState<WordData[]>([])
  const [userId, setUserId] = useState('')
  const [searchText, setSearchText] = useState('');
  const [filteredWords, setFilteredWords] = useState<WordData[]>([]);
  const [showTotal, setShowTotal] = useState(true);
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>(
    {},
  );

  useEffect(() => {
    const fetch = async() => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if(userId === null) throw new Error('userId가 존재하지 않음')
        setUserId(userId)
        const res = await getAllWords(userId!)
        console.log(res);
        setWordData(res??[])
      } catch (error) {
        console.log('에러');
      }
    }
    fetch();
  }, [])
  useEffect(() => {
    setFilteredWords(wordData)
  }, [wordData])

  const handleSearch = (text: string) => {
    setSearchText(text);
    let filtered = wordData;
    text = text.trim();
    if(text){
      text = disassemble(text);
      filtered = wordData.filter(item => {
        const match = disassemble(item.word).startsWith(text);
        const bookmarkCheck = showTotal || item.bookmarked;
        return match && bookmarkCheck;
      });
    }
    setFilteredWords(filtered);
  };

  const toggleshowTotal = (bookmarked: boolean) => {
    if (searchText === '') {
      if (bookmarked) {
        const filtered = wordData.filter(
          item => item.bookmarked === bookmarked,
        );
        setFilteredWords(filtered);
      } else {
        setFilteredWords(wordData);
      }
    } else {
      if (bookmarked) {
        const filtered = wordData.filter(
          item =>
            item.word.includes(searchText) && item.bookmarked === bookmarked,
        );
        setFilteredWords(filtered);
      } else {
        const filtered = wordData.filter(item =>
          item.word.includes(searchText),
        );
        setFilteredWords(filtered);
      }
    }
  };

  const toggleShowMore = (index: number) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  const toggleBookmark = async(index: number, id: number) => {
    try {
      await postBookmark({
        userId: Number(userId),
        wordId: id
      })
    } catch (error) {
      console.log(error);
    }
    const updatedWords = [...filteredWords];
    updatedWords[index].bookmarked = !updatedWords[index].bookmarked;
    setFilteredWords(updatedWords);
  };

  return (
    <View style={[styles.body, {paddingTop: StatusBar.currentHeight}]}>
      <Text style={styles.dictionaryText}>사전</Text>
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../assets/images/searchIcon.png')}
        />
        <TextInput
          style={styles.searchWord}
          placeholder="단어를 검색해 보세요"
          placeholderTextColor={'#B8B8B8'}
          selectionColor={'#FFE400'}
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={{marginRight: 8}}
          onPress={() => {
            setShowTotal(true);
            toggleshowTotal(false);
          }}>
          <Text
            style={[
              styles.category,
              {color: showTotal ? '#424242' : '#BDBDBD'},
            ]}>
            전체
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowTotal(false);
            toggleshowTotal(true);
          }}>
          <Text
            style={[
              styles.category,
              {color: showTotal ? '#BDBDBD' : '#424242'},
            ]}>
            북마크
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredWords.length === 0 ? (
          <Text style={styles.nothing}>일치하는 단어가 없어요!</Text>
        ) : (
          filteredWords.map((item, index) => (
            <TouchableOpacity
              onPress={() => toggleShowMore(index)}
              activeOpacity={1}
              key={index}
              style={[
                styles.wordContainer,
                {borderRadius: expandedItems[index] ? 22 : 100},
              ]}>
              <View style={styles.topContainer}>
                <TouchableOpacity
                  onPress={() => toggleBookmark(index, item.id)}
                  activeOpacity={1}>
                  {item.bookmarked ? (
                    <BookmarkedIcon style={{marginTop: 2}} />
                  ) : (
                    <UnbookmarkedIcon style={{marginTop: 2}} />
                  )}
                </TouchableOpacity>
                <Text style={styles.word}>{item.word}</Text>
                <TouchableOpacity>
                  {expandedItems[index] ? (
                    <Fold style={{marginTop: 6}} />
                  ) : (
                    <Spread style={{marginTop: 6}} />
                  )}
                </TouchableOpacity>
              </View>
              {expandedItems[index] && (
                <View style={[styles.moreContainer]}>
                  <Text style={styles.moreText}>의미</Text>
                  <Text style={styles.infoText}>{item.meaning}</Text>
                  <Text style={styles.moreText}>예문</Text>
                  <Text style={styles.infoText}>{item.example}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))
        )}
        <View style={{height: 101}} />
      </ScrollView>
    </View>
  );
}

export default Dictionary;
