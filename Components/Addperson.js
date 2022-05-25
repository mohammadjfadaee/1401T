import React from 'react';
import {View, StyleSheet,TextInput,Button} from 'react-native';



const Addperson = ({Sumbithandler,setperson,person}) => {
    return (
        <View  >
            <TextInput 
            placeholder='اسم جدید...'
            style={styles.input}
            placeholderTextColor="#fff"
            onChangeText={setperson}
            value={person}
             />
             <Button
              title='اضافه کردن شخص جدید '
              onPress={Sumbithandler}
              color="orange"
              
              />
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
       
        borderBottomColor:"red",
        borderBottomWidth:1,
        fontSize:17,
        color:"#fff",
        textAlign:"center", 
        marginBottom:15

    }
})

export default Addperson;
