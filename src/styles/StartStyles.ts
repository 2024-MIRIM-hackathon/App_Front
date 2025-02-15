import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
    LoginImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 1.156,
        position: 'absolute',
        top: StatusBar.currentHeight,
        left: 0,
        right: 0,
        zIndex: 0,
    },
    Logo: {
        width: 100.38,
        height: 59.04,
        marginTop: 136,
        marginLeft: 29,
        marginBottom: 15,
    },
    LoginText: {
        fontSize: 25,
        fontFamily: 'Pretendard-Bold',
        lineHeight: 40,
        marginLeft: 29,
    },
    LoginBtn: {
        width: '100%',
        height: 55,
        borderRadius: 100,
        marginBottom: 11,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    Signup: {
        backgroundColor: '#FFE400',
    },
    Login: {
        backgroundColor: '#E3E3E3',
    },
    Google: {
        borderWidth: 0.5,
        borderColor: '#ACACAC',
    },
    Naver: {
        backgroundColor: '#03C75A',
    },
    logintext: {
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
    }
});

export default styles;