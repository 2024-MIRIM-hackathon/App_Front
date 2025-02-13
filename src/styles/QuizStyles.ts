import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F6F5FA',
    },
    quizText: {
        marginTop: 46,
        marginLeft: 29, 
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
    },
    falseQuizText: {
        color: '#424242',
        marginTop: 17,
        marginLeft: 29, 
        marginBottom: 17,
        fontSize: 18,
        fontFamily: 'Pretendard-SemiBold',
    },
    falseQuizContainer: {
        borderRadius: 18,
        backgroundColor: 'white',
        paddingHorizontal: 23,
        paddingTop: 24,
        paddingBottom: 29,
    },
    word: {
        color: '#202020',
        fontSize: 16,
        fontFamily: 'Pretendard-Medium',
        marginBottom: 8,
        marginHorizontal: 1,
    },
    mean: {
        color: '#424242',
        fontSize: 14,
        fontFamily: 'Pretendard-Regular',
        paddingBottom: 17,
        borderBottomWidth: 0.4,
        borderBottomColor: '#BDBDBD',
        marginHorizontal: 1,
    },
    example: {
        fontSize: 13,
        fontFamily: 'Pretendard-Medium',
        color: '#424242',
        marginTop: 18,
        marginHorizontal: 1,
    },
    exampleSentence: {
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
        color: '#757575',
        marginTop: 7,
        marginHorizontal: 1,
    },
    learningQuizText: {
      marginTop: 40,
      marginLeft: 29,
      marginBottom: 17,
      color: '#424242',
      fontSize: 18,
      fontFamily: 'Pretendard-SemiBold',
    },
    quizContainer: {
        marginHorizontal: 29,
        marginBottom: 14,
        height: 183,
    },
    quizItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 18,
    },
    QuizText: {
        fontSize: 17,
        fontFamily: 'Pretendard-SemiBold',
        marginTop: 11.5,
        marginBottom: 7,
    }, 
    QuizIng: {
        fontSize: 11,
        fontFamily: 'Pretendard-Medium',
        color: '#424242',
    }
});

export default styles;