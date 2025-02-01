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
    carouselContainer: {
        marginTop: 50,
    },
    item: {
        backgroundColor: '#FF6347',
        borderRadius: 5,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 86,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 24.5,
    },
    carouselItemContainer: {
        width: Dimensions.get('window').width - (29 * 2),
        marginHorizontal: 4.5,
    },
    carouselItem: {
        borderRadius: 18,
        paddingHorizontal: 24,
    },
    bookText: {
        fontSize: 15,
        fontFamily: 'NanumMyeongjo',
        marginTop: 33,
        paddingBottom: 33,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C8C8C8',
        lineHeight: 29,
    },
    bookWord: {
        fontSize: 15,
        fontFamily: 'NanumMyeongjo',
        backgroundColor: '#FFF828',
    },
    wordContainer: {
        width: 47,
        height: 24,
        marginLeft: 7,
        marginTop: 36,
        marginBottom: 14,
    },
    word: {
        fontSize: 20,
        marginHorizontal: 6,
        fontFamily: 'Pretendard-Bold',
        position: 'absolute',
        zIndex: 2,
    },
    wordShadow: {
        height: 13,
        borderRadius: 10,
        backgroundColor: '#FFF828',
        position: 'static',
        marginTop: 13,
        zIndex: 1,
    },
    mean: {
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
        marginLeft: 13,
        marginBottom: 33,
        color: '#424242',
    },
    example: {
        fontSize: 14,
        fontFamily: 'Pretendard-Medium',
        marginLeft: 13,
        marginBottom: 7,
        color: '#1C1C1C',
    },
    exampleSentence: {
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
        marginLeft: 13,
        marginBottom: 36,
        color: '#616161',
    },
    dotContainer: {
        width: '100%',
        height: 7,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 21,
    },
    dot: {
        width: 7,
        height: 7,
        marginVertical: 0,
        marginHorizontal: 3,
        backgroundColor: '#BDBDBD',
        borderRadius: 10,
    },
    dotFocused: {
        backgroundColor: '#424242',
    },
});

export default styles;