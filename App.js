import React,{useState} from 'react';
import {View, StyleSheet,FlatList,Alert,TouchableWithoutFeedback} from 'react-native';
import Addperson from './Components/Addperson';
import Header from "./Components/Header";
import Person from './Components/Person';
import styles from "./Components/Styles/globalStyle";
const App = () => {
    const[ persons,setPersons] = useState([
      {name:"محمد" , key:"1", completed: false},
      {name:"علی فدایی" , key:"2", completed: false},
      {name:"خسزو حیدری" , key:"3", completed: false},
      {name:"فاطمه محبی" , key:"4", completed: false},
      {name:"رحیمه فدایی" , key:"5", completed: false},
    
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



export default App;
