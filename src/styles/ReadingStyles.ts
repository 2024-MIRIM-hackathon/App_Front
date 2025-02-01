import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F6F5FA',
    },
    learningActivity: {
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
        marginTop: 46,
        marginLeft: 29,
    },
    ReadingScroll: {
        width: Dimensions.get('window').width - 58,
        marginTop: 49,
        borderRadius: 18,
        marginLeft: 29,
    },
    ReadingContainer: {
        height: undefined,
        borderRadius: 18,
        backgroundColor: 'white',
        marginBottom: 135,
    },
    ReadingText: {
        marginHorizontal: 24,
        marginTop: 28,
        marginBottom: 60,
        lineHeight: 29,
        fontSize: 15,
        fontFamily: 'NanumMyeongjoBold',
    },
    BookInfo: {
        marginHorizontal: 26,
        marginBottom: 25,
        flexDirection: 'row',
    },
    title: {
        marginRight: 9,
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
        color: '#424242',
    },
    author: {
        fontSize: 11,
        fontFamily: 'Pretendard-Regular',
        color: '#777777',
    },
    leave: {
        width: '100%',
        height: 60,
        paddingHorizontal: 29,
        position: 'absolute',
        bottom: 21,
    },
    leaveContainer: {
        flex: 1,
        backgroundColor: '#FFE400',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    leaveText: {
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
    },
});

export default styles;