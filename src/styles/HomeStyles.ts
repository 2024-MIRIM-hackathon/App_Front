import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F5FA',
  },
  logo: {
    marginTop: 32,
    marginLeft: 29,
  },
  issuesText: {
    fontFamily: 'Pretendard-SemiBold',
    marginTop: 30,
    marginLeft: 29,
    marginBottom: 24,
    fontSize: 18,
    color: 'black',
  },
  issuesContainer: {
    borderRadius: 18,
    backgroundColor: 'white',
    paddingVertical: 23,
    paddingHorizontal: 27,
  },
  newsTitle: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
    paddingBottom: 14,
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 0.5,
  },
  newsDetail: {
    fontSize: 12,
    fontFamily: 'Pretendard-Regular',
    marginTop: 13,
    marginBottom: 22,
  },
  newsSource: {
    fontSize: 10,
    fontFamily: 'Pretendard-Regular',
    color: '#757575',
  },
  learningText: {
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',  
    marginTop: 46,
    marginBottom: 24,
    marginLeft: 29,
  },
  learningContainer: {
    paddingHorizontal: 29,
  },
  learningItem: {
    height: 183,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  learningActivity: {
    fontSize: 17,
    fontFamily: 'Pretendard-SemiBold',
    marginTop: 9.5,
    marginBottom: 5,
  },
  learningIng: {
    fontSize: 11,
    fontFamily: 'Pretendard-Medium',
    color: '#424242',
  }
});

export default styles;
