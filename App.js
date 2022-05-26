import React, { useCallback, useEffect, useState } from 'react';
import {View, StyleSheet,FlatList,Alert,TouchableWithoutFeedback} from 'react-native';
import Addperson from './Components/Addperson';
import Header from "./Components/Header";
import Person from './Components/Person';
import styles from "./Components/Styles/globalStyle";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";


const getFonts=()=>{
    return Font.loadAsync({
        yeKan:require('./assets/fonts/byekan.ttf')
    })
}


const App = () => {
    const [fontLoading, setFontLoading] = useState(false);
    const[ persons,setPersons] = useState([
      {name:"محمد" , key:"1", completed: false},
    ]);
   const handlerPerson=(key)=>{
    setPersons((prevPersons)=>prevPersons.filter((p)=>p.key != key));
   };
   const Sumbithandler = ()=>{
       if(person.length>3){
             setPersons((prevPersons)=>[
        ... prevPersons,
        {
            name : person,
            key: Math.floor(Math.random()*1000) ,
            completed: false
        }
    ]) 
    setperson("")

       } else{
        Alert.alert("منو ببین!!!", "اسم نباید کمتر از 3 کاراکتر باشد", [
            { text: "فهمیدم", onPress: () => console.log("Alert closed") },
        ]);
           
       }
 

   };
   const [person,setperson]=useState("");

   const completedHandler = (key) => {
    const allPersons = [...persons];
    const personIndex = allPersons.findIndex((p) => p.key == key);
    const person = allPersons[personIndex];
    person.completed = !person.completed;
    allPersons[personIndex] = person;

    setperson(allPersons);
};
if (fontLoading) {

     return (
        <TouchableWithoutFeedback>
               <View style={styles.conatiner} >
            <Header/>
            <View style={styles.body} >
                <Addperson Sumbithandler={Sumbithandler} setperson={setperson} person={person} />
             <View style={styles.item1} >
                 <FlatList 
                 data={persons}
               
                 renderItem={({item})=>(<Person person={item} handlerPerson={handlerPerson}  completedHandler={completedHandler} />)}

                 />
             </View>
            </View>
           
        </View>
        </TouchableWithoutFeedback>
     
    );
}
else {
    return (
        <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontLoading(true)}
            onError={console.warn}
        />
    );
}
   
}



export default App;
