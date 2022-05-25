import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';

const Person = ({person,handlerPerson}) => {
 
    return (
      <TouchableOpacity onPress={()=>{handlerPerson(person.key)}} >
          <Text style={styles.person} >
           {person.name}
          </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    person:{
      
        backgroundColor:"#fff",
        marginTop:20,
        width:"100%",
        padding:20,
        textAlign:"center",
        borderRadius:15,
        borderWidth:1,
        borderColor:"red",
        borderStyle:"dashed",

        

    }
})

export default Person;
