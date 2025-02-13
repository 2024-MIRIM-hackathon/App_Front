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
    marginBottom: 17,
    fontSize: 18,
    color: 'black',
  },
  issuesContainer: {
    borderRadius: 18,
    backgroundColor: 'white',
    paddingTop: 23,
    paddingBottom: 22,
    paddingHorizontal: 27,
  },
  newsTitle: {
    fontSize: 17,
    fontFamily: 'Pretendard-Medium',
    paddingBottom: 13,
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 0.5,
  },
  newsDetail: {
    fontSize: 12,
    fontFamily: 'Pretendard-Regular',
    lineHeight: 20, 
    marginTop: 11,
    marginBottom: 16,
  },
  newsSource: {
    fontSize: 11,
    fontFamily: 'Pretendard-Regular',
    color: '#757575',
  },
  learningText: {
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',  
    marginTop: 46,
    marginBottom: 17,
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
    marginTop: 11.5,
    marginBottom: 7,
  },
  learningIng: {
    fontSize: 11,
    fontFamily: 'Pretendard-Medium',
    color: '#424242',
  }
});

export default styles;
