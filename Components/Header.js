import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import styles from './Styles/globalStyle';
const Header = () => {
    return (
        <View style={styles.header} >
            <Text style={[styles.text]} >
                مدیریت کننده اشخاص
            </Text>
        </View>
    );
}



export default Header;
