import { StyleSheet, Dimensions } from "react-native";
const interval = (Dimensions.get('window').width - 332) / 2;

const styles = StyleSheet.create({
    quizText: {
        marginTop: 46,
        marginLeft: 29, 
        marginBottom: 8,
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
    },
    quizVersionText: {
        marginLeft: 29, 
        color: '#616161',
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
    },
    quizScrollContainer: {
        flex: 1,
        marginTop: 71,
        alignItems: 'center',
    },
    quizScroll: {
        paddingLeft: interval,
        paddingRight: interval-13,
        height: undefined,
    },
    quizStartImg: {
        width: 332,
        height: 466,
        marginRight: 13,
    },
    quizStartText: {
        position: 'absolute',
        alignSelf: 'center',
        textAlign: 'center',
        letterSpacing: 0.3,
        lineHeight: 32, 
        marginTop: 127,
        fontSize: 20,
        fontFamily: 'Pretendard-Bold',
    }, 
    quizContainer: {
        width: 332,
        backgroundColor: 'white',
        borderRadius: 18,
        paddingTop: 71,
        paddingHorizontal: 22,
        paddingBottom: 49,
        marginRight: 13,
        alignItems: 'center',
    },
    quizQ: {
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 29,
        letterSpacing: 0.3,
        fontSize: 19,
        fontFamily: 'Pretendard-Bold',
        marginBottom: 46,
    },
    wordContainer: {
        minWidth: 267,
        minHeight: 158,
        rowGap: 14,
    },
    row: {
        flexDirection: 'row',
        columnGap: 11,
    },
    wordView: {
        width: '10%',
        height: '10%',
        minWidth: 128,
        minHeight: 72,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#AEADAD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wordText: {
        fontSize: 18,
        fontFamily: 'Pretendard-Medium',
    },
    timeContainer: {
        width: 288,
        height: 6,
        borderRadius: 10,
        backgroundColor: '#E0E0E0',
        overflow: 'hidden',
    },
    time: {
        width: 0,
        height: 6,
        backgroundColor: '#FFF828',
    },
    timeText: {
        fontSize: 10,
        fontFamily: 'Pretendard-Regular',
        color: '#424242',
        position: 'absolute',
        lineHeight: 31,
        top: 33,
        right: 11,
    },
    answerImg: {
        width: 100,
        height: 48,
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
    }
});

export default styles;