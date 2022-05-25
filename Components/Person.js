import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './Styles/globalStyle';
const Person = ({person,handlerPerson,completedHandler}) => {
 
    return (
      <TouchableOpacity onPress={()=>{completedHandler}} >
          <View style={styles.person} >
              <Text>
               <AntDesign name="delete" size={24} color="red" onPress={()=>{handlerPerson(person.key)}}  />
              </Text>
            
              <Text
                    style={[
                        styles.personName,
                        person.completed
                            ? { textDecorationLine: "line-through" }
                            : {},
                    ]}
                >
                    {person.name}
                </Text>
          </View>
          
      </TouchableOpacity>
    );
}

export default Person;
