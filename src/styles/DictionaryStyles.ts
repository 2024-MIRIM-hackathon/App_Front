import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingHorizontal: 29,
        flexDirection: 'column',
        backgroundColor: '#F3F3F3',
    },
    dictionaryText: {
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
        marginTop: 46,
    },
    searchContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 1,
        marginTop: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#424242',
    },
    searchIcon: {
        width: 20,
        height: 19,
        marginTop: 3,
    },
    searchWord: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
        color: '#424242',
    },
    categoryContainer: {
        marginLeft: 1,
        marginTop: 24,
        marginBottom: 15,
        flexDirection: 'row',
    },
    category: {
        fontSize: 14,
        fontFamily: 'Pretendard-Medium',
    },
    wordContainer: {
        paddingHorizontal: 22,
        paddingTop: 17,
        backgroundColor: 'white',
        marginBottom: 15,
    },
    topContainer: {
        paddingHorizontal: 2, 
        paddingBottom: 18,
        flexDirection: 'row',
    },
    word: {
        flex: 1,
        marginHorizontal: 16,
        fontSize: 16,
        fontFamily: 'Pretendard-Medium',
    },
    moreContainer: {
        paddingTop: 19,
        paddingHorizontal: 13,
        marginBottom: 6,
        borderTopWidth: 1,
        borderTopColor: '#D5D5D5',
    },
    moreText: {
        fontSize: 14,
        fontFamily: 'Pretendard-Medium',
        marginBottom: 6,
    },
    infoText: {
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
        color: '#323232',
        marginBottom: 21,
    }
});

export default styles;