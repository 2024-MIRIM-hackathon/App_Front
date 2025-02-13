import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#F6F5FA',
    },
    header: {
        width: '100%',
        height: 220,
        backgroundColor: '#FFE400',
        borderBottomRightRadius: 38,
        borderBottomLeftRadius: 38,
        paddingLeft: 29,
    },
    headerImg: {
        width: 244,
        height: 136,
        position: 'absolute',
        top: 51,
        right: 9,
    },
    mypageText: {
        marginTop: 46,
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
    },
    dateText: {
        fontSize: 17,
        fontFamily: 'Pretendard-Medium',
        color: '#GUILAP과 함께한지',
        marginTop: 37,
    },
    date: {
        fontSize: 30,
        fontFamily: 'Pretendard-SemiBold',
        marginTop: 3,
    },
    ContainerView: {
        paddingHorizontal: 29,
        marginTop: 41,
    },
    containerText: {
        fontSize: 18,
        fontFamily: 'Pretendard-SemiBold',
    },
    accountContainer: {
        width: Dimensions.get('screen').width - 58,
        alignSelf: 'center',
        height: 192,
        marginTop: 58,
        marginBottom: 60,
        borderRadius: 18,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#DDDDDD',
        elevation: 10,
    },
    name: {
        alignSelf: 'center',
        marginTop: 59,
        fontSize: 17,
        fontFamily: 'Pretendard-SemiBold',
    },
    accountInfoContainer: {
        width: 272,
        marginHorizontal: 30,
        paddingVertical: 2.5,
        marginTop: 32,
        alignItems: 'center',
        flexDirection: 'row',
    },
    profileView: {
        width: 84,
        height: 84,
        backgroundColor: 'white',
        borderRadius: 42,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -41,
        shadowColor: '#EDEDED',
        elevation: 10,
    },
    infoText: {
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
        color: '#343434',
        lineHeight: 23,
    },
    info: {
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
        color: '#424242',
        lineHeight: 23,
        marginTop: 2,
    },
    activityContainer: {
        borderRadius: 14,
        backgroundColor: 'white',
        paddingVertical: 26,
        paddingHorizontal: 25,
        shadowColor: '#DDDDDD',
        elevation: 5,
    },
    activityText: {
        color: '#424242',
        fontSize: 17,
        fontFamily: 'Pretendard-Medium',
        marginBottom: 2,
    },
    activityInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityNumber: {
        fontSize: 32,
        fontFamily: 'Pretendard-SemiBold',
    },
    activityNumberText: {
        color: '#424242',
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
        marginTop: 7,
        marginLeft: 4,
    },
    logout: {
        fontSize: 12,
        fontFamily: 'Pretendard-Light',
        color: '#BCBCBC',
        textDecorationLine: 'underline',
    }
});

export default styles;