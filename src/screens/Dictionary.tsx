import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {disassemble} from 'es-hangul';

import styles from '../styles/DictionaryStyles';

import BookmarkedIcon from '../assets/svg/bookmarkedIcon';
import UnbookmarkedIcon from '../assets/svg/unbookmarkedIcon';
import Spread from '../assets/svg/spread';
import Fold from '../assets/svg/fold';

const wordData = [
  {
    word: '기사',
    meaning: '특정 목적을 위해 활용되는 지식과 방법.',
    example: '새로운 기술은 항상 세상을 바꿔놓는다.',
    bookmarked: true,
  },
  {
    word: '기술',
    meaning: '특정 목적을 위해 활용되는 지식과 방법.',
    example: '새로운 기술은 항상 세상을 바꿔놓는다.',
    bookmarked: true,
  },
  {
    word: '도전',
    meaning: '어려운 일에 맞서 싸우는 것.',
    example: '그는 항상 도전을 즐긴다.',
    bookmarked: true,
  },
  {
    word: '미래',
    meaning: '앞으로 일어날 시간이나 사건.',
    example: '우리는 더 나은 미래를 위해 노력한다.',
    bookmarked: false,
  },
  {
    word: '문화',
    meaning: '한 사회나 민족이 공유하는 생활 방식.',
    example: '문화는 국가의 정체성을 형성한다.',
    bookmarked: false,
  },
  {
    word: '보편',
    meaning: '모든 것에 두루 미치거나 통함.',
    example: '사람들은 보편적으로 사랑하는 사람을 행복하게 하고 싶어 해.',
    bookmarked: true,
  },
  {
    word: '사랑',
    meaning: '누군가나 무언가에 대해 강한 애정을 느끼는 감정.',
    example: '그는 사랑하는 사람에게 편지를 썼다.',
    bookmarked: false,
  },
  {
    word: '소통',
    meaning: '의사소통을 통해 이해하는 과정.',
    example: '효과적인 소통이 필요하다.',
    bookmarked: false,
  },
  {
    word: '행복',
    meaning: '기쁘고 만족스러운 상태.',
    example: '그는 항상 행복하게 살고 싶어 한다.',
    bookmarked: false,
  },
  {
    word: '철학',
    meaning: '인생, 우주, 인간 존재의 근본 원리를 탐구하는 학문.',
    example: '그는 어릴 때부터 철학에 관심이 많았다.',
    bookmarked: false,
  },
  {
    word: '평화',
    meaning: '전쟁이나 분쟁이 없는 상태.',
    example: '모든 사람은 평화를 원한다.',
    bookmarked: true,
  },
  {
    word: '지혜',
    meaning: '사리분별이 뛰어나고 올바르게 판단하는 능력.',
    example: '그는 지혜로운 결정을 내렸다.',
    bookmarked: false,
  },
  {
    word: '혁신',
    meaning: '낡은 것을 바꾸어 새롭게 함.',
    example: '기업들은 지속적인 혁신을 통해 경쟁력을 유지한다.',
    bookmarked: true,
  },
];

function Dictionary() {
  const [searchText, setSearchText] = useState('');
  const [filteredWords, setFilteredWords] = useState(wordData);
  const [showTotal, setShowTotal] = useState(true);
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>(
    {},
  );

  const handleSearch = (text: string) => {
    setSearchText(text);
    let filtered = wordData;
    if(showTotal){
        if (text.trim() === '') {
            filtered = wordData;
        } else {
            filtered = wordData.filter(item => {
                return disassemble(item.word).startsWith(disassemble(text));
            });
        }
    } else{
        if (text.trim() === '') {
            filtered = wordData.filter(item => {
                return (disassemble(item.word).startsWith(disassemble(text))) && item.bookmarked;
            });
        } else {
            filtered = wordData.filter(item => {
                return (disassemble(item.word).startsWith(disassemble(text))) && item.bookmarked;
            });
        }
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

  const toggleBookmark = (index: number) => {
    const updatedWords = [...filteredWords];
    updatedWords[index].bookmarked = !updatedWords[index].bookmarked;
    setFilteredWords(updatedWords);
  };

  return (
    <View style={styles.body}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F3F3" />
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
            <View
              key={index}
              style={[
                styles.wordContainer,
                {borderRadius: expandedItems[index] ? 22 : 100},
              ]}>
              <View style={styles.topContainer}>
                <TouchableOpacity
                  onPress={() => toggleBookmark(index)}
                  activeOpacity={1}>
                  {item.bookmarked ? (
                    <BookmarkedIcon style={{marginTop: 4}} />
                  ) : (
                    <UnbookmarkedIcon style={{marginTop: 4}} />
                  )}
                </TouchableOpacity>
                <Text style={styles.word}>{item.word}</Text>
                <TouchableOpacity
                  onPress={() => toggleShowMore(index)}
                  activeOpacity={1}>
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
            </View>
          ))
        )}
        <View style={{height: 101}} />
      </ScrollView>
    </View>
  );
}

export default Dictionary;
