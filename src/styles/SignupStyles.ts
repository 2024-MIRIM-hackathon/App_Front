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
        marginLeft: 29,
    },
    inputContainer: {
        marginTop: 21,
        marginBottom: 31,
        marginHorizontal: 29,
        rowGap: 35,
    },
    input: {
        height: 73,
    },
    inputInfo: {
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
        marginBottom: 10,
    },
    inputText: {
        height: 47,
        paddingHorizontal: 16,
        backgroundColor: '#F8F8F8',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 1,
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
    },
    ageText: {
        marginTop: 23,
        marginLeft: 12,
        fontSize: 14,
        fontFamily: 'Pretendard-Medium',
        color: '#ACACAC',
    },
    signupBtnContainer: {
        marginHorizontal: 29,
        height: 140,
        borderTopWidth: 0.7,
        borderTopColor: '#ACACAC',
    },
    consentContainer: {
        marginTop: 12,
        marginBottom: 18,
        height: 18,
        flexDirection: 'row',
    },
    checkbox: {
        marginRight: 12,
        width: 18,
        height: 18,
    },
    consentText: {
        fontSize: 11,
        fontFamily: 'Pretendard-Regular',
        marginTop: 3,
    },
    SignupBtn: {
        height: 53,
        borderRadius: 5,
        backgroundColor: '#FFE400',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SignupBtnText: {
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
    }
});

export default styles;