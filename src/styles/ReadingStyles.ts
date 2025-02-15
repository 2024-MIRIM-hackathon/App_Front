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
        paddingTop: 46,
        marginLeft: 29,
    },
    ReadingScroll: {
        width: 334,
        marginLeft: (Dimensions.get('window').width - 334) / 2,
        marginTop: 49,
        borderRadius: 18,
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
        marginBottom: 65,
        lineHeight: 29,
        fontSize: 15,
        fontFamily: 'NanumMyeongjoBold',
    },
    BookInfo: {
        alignItems: 'flex-end',
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
        paddingHorizontal: (Dimensions.get('window').width - 334)/2,
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