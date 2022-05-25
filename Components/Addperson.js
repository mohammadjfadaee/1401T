import React from 'react';
import {View, StyleSheet,TextInput,Button} from 'react-native';
import styles from './Styles/globalStyle';



const Addperson = ({Sumbithandler,setperson,person}) => {
    return (
        <View style={{marginBottom:15}} >
            <TextInput 
            placeholder='اسم جدید...'
            style={styles.input}
            placeholderTextColor="#000"
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


export default Addperson;
