import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Playground = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text1} >
                play ground
            </Text>
            <Text style={styles.text2} >
                play ground
            </Text>
            <Text style={styles.text3} >
                play ground
            </Text>
            <Text style={styles.text4} >
                play ground
            </Text>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        backgroundColor:"gray",
        flexDirection:"row",
        justifyContent:"center",
      
    },
    text1:{
        
        backgroundColor:"red",
        padding:5
    },
    text2:{
        backgroundColor:"yellow",
        padding:5
    },
    text3:{
        backgroundColor:"blue",
        padding:5
    },
    text4:{
        backgroundColor:"green",
        padding:5
    },



})

export default Playground;
