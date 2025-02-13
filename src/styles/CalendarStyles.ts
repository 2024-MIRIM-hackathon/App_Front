import { StyleSheet, Dimensions } from 'react-native';

const wordContainerWidth = Dimensions.get('window').width - 58;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F6F5FA',
    },
    calendarContainer: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        shadowColor: '#CCCCCC',
        elevation: 8,
    },
    calendarHeader: {
        marginTop: 46,
        marginHorizontal: 29,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    calendarMonth: {
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
    },
    dayContainer: {
        marginHorizontal: 29,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 33,
        marginBottom: 17,
    },
    day: {
        fontSize: 15,
        fontFamily: 'Pretendard-Regular',
        color: '#424242',
    },
    dateContainer: {
        marginBottom: 21,
        marginLeft: 20,
        marginRight: 19
    },
    row: {
        flex: 1,
        height: 33,
        flexDirection: 'row',
        justifyContent: 'space-between',        
        marginBottom: 9,
    },
    cell: {
        width: 33,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }, 
    dayText: {
        fontSize: 14,
        fontFamily: 'Pretendard-Regular',
    },
    greeting: {
        fontSize: 23,
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: 35,
        marginTop: 44,
        marginLeft: 29,
    },
    IngContainer: {
        width: 332,
        height: 134,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 51,
        marginBottom: 67,
    },
    IngItemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    IngText: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Pretendard-Medium',
        color: '#282828',
    },
    perContainer: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    perTextContainer: {
        width: 66,
        height: 66,
        position: 'absolute',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
    }, 
    perText: {
        fontSize: 16.56,
        fontFamily: 'Pretendard-Medium',
        color: '#424242',
    },
    IngThat: {
        marginLeft: 29,
        marginBottom: 23,
        fontSize: 18,
        fontFamily: 'Pretendard-SemiBold',
    },
    wordContainerScroll: {
        paddingLeft: 29, 
        paddingRight: 22,
        marginBottom: 20,
    },
    wordContainer: {
        width: wordContainerWidth,
        backgroundColor: 'white',
        borderRadius: 18,
        paddingTop: 20,
        paddingRight: 24, 
        paddingBottom: 29,
        paddingLeft: 23,
        marginRight: 7, 
    },
    word: {
        fontSize: 16,
        fontFamily: 'Pretendard-Medium',
        color: '#202020',
        marginBottom: 4,
        paddingHorizontal: 1,
    }, 
    mean: {
        fontSize: 14,
        fontFamily: 'Pretnedard-Regular',
        color: '#424242',
        paddingHorizontal: 1,
        paddingBottom: 17,
        borderBottomWidth: 0.4,
        borderBottomColor: '#BDBDBD',
    },
    example: {
        fontSize: 13,
        fontFamily: 'Pretendard-Medium',
        color: '#636363',
        paddingHorizontal: 1,
        marginTop: 18,
    }, 
    exampleSentence: {
        fontSize: 13,
        fontFamily: 'Pretendard-Regular',
        color: '#757575',
        lineHeight: 21,
        marginTop: 7,
    }, 
    dotContainer: {
        width: 46,
        height: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    }, 
    dot: {
        width: 7,
        height: 7,
        borderRadius: 10,
        backgroundColor: '#C1C1C1',
    }, 
    dotFocused: {
        backgroundColor: '#FFE400',
    }, 
    writeContainer: {
        width: wordContainerWidth,
        marginLeft: 29,
        backgroundColor: 'white',
        borderRadius: 18,
        paddingTop: 18,
        paddingRight: 24,
        paddingBottom: 26,
        paddingLeft: 23
    },
    bookInfo: {
        paddingHorizontal: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 13,
        borderBottomWidth: 0.4,
        borderBlockColor: '#BDBDBD',
        marginBottom: 16,
    },
    bookTitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-Medium',
        color: '#202020',
        marginRight: 5,
    },
    bookWriter: {
        fontSize: 11,
        fontFamily: 'Pretendard-Regular',
        color:'#424242',
    },
    bookWrite: {
        fontSize: 13,
        fontFamily: 'NanumMyeongjo',
        color:'#424242',
        lineHeight: 23,
    }
});

export default styles;