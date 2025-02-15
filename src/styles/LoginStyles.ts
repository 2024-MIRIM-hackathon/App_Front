import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    LoginHeader: {
        marginTop: 44,
        marginLeft: 29, 
        marginRight: 29,
        height: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    back: {
        fontSize: 14,
        fontFamily: 'Pretendard-Regular',
    },
    LoginText: {
        fontSize: 17,
        fontFamily: 'Pretendard-SemiBold',
        marginTop: 27,
        marginBottom: 19,
        marginLeft: 29,
    },
    inputView: {
        marginHorizontal: 29,
        height: 47,
        borderRadius: 5,
        paddingHorizontal: 16,
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 11,
    },
    inputInfo: {
        flex: 1,
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
    },
    LoginBtn: {
        marginHorizontal: 29,
        height: 53,
        backgroundColor: '#FFE400',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        borderRadius: 5,
    },
    LoginBtnText: {
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
    },
    otherLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 9,
    },
    otherLoginImg: {
        width: 48,
        height: 48,
        marginHorizontal: 12.5,
    },
    LoginImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.641,
        position: 'absolute',
        top: Dimensions.get('window').height - (Dimensions.get('window').width * 0.641),
        left: 0,
        right: 0,
        zIndex: 0,
    }
});

export default styles;