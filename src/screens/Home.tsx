import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
} from 'react-native';

import styles from '../styles/HomeStyles';

function Home() {
    return (
        <View style={styles.body}>
            <StatusBar barStyle="dark-content" backgroundColor="#F6F5FA"/>
            <Image source={require('../assets/images/logo.png')} style={styles.logoImage}/>
            <Text style={styles.text}>요즘 문학이슈</Text>
        </View>
    );
}

export default Home;