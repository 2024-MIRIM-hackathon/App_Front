import { StyleSheet } from "react-native";

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
        paddingBottom: 50,
        marginBottom: 81,
    },
    carouselBox: {
        width: '100%',
        minHeight: 406,
        maxHeight: undefined,
        overflow: 'hidden',
    },
});
    
export default styles;