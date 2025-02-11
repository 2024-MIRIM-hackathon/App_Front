import { StyleSheet, Dimensions } from "react-native";
const interval = (Dimensions.get('window').width - 334) / 2;

const styles = StyleSheet.create({
    quizText: {
        marginTop: 46,
        marginLeft: 29, 
        marginBottom: 5,
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
    },
    quizStartImg: {
        width: 334,
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
        width: 334,
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
        top: 31,
        right: 11,
    },
    answerImg: {
        width: 100,
        height: 48,
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
    },
    quizEndText: {
        textAlign: 'center',
        letterSpacing: 0.3,
        lineHeight: 29, 
        marginTop: 127,
        marginBottom: 112,
        fontSize: 19,
        fontFamily: 'Pretendard-Bold',
    },
    endView: {
        width: 218,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFE400',
        marginBottom: 4,
    },
    endText: {
        fontSize: 14,
        fontFamily: 'Pretendard-Medium',
    },
    dotContainer: {
        width: 46,
        height: 7,
        justifyContent: 'center',
        columnGap: 6,
        alignItems: 'center',
        marginTop: 22,
        flexDirection: 'row',
        marginBottom: Dimensions.get('window').height - 669,
    }, 
    dot: {
        width: 7,
        height: 7,
        backgroundColor: '#BDBDBD',
        borderRadius: 10,
    },
    dotFocused: {
        backgroundColor: '#424242',
    },
});

export default styles;