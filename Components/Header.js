import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header} >
            <Text style={styles.text} >
                مدیریت کننده اشخاص
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"red",
        height:90,
        alignItems:"center",
        justifyContent:"center"

    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff",

    }
})

export default Header;
