import React,{useState} from 'react';
import {View, StyleSheet,FlatList,Alert,TouchableWithoutFeedback} from 'react-native';
import Addperson from './Components/Addperson';
import Header from "./Components/Header";
import Person from './Components/Person';
const App = () => {
    const[ persons,setPersons] = useState([
      {name:"محمد" , key:"1"},
      {name:"علی فدایی" , key:"2"},
      {name:"خسزو حیدری" , key:"3"},
      {name:"فاطمه محبی" , key:"4"},
      {name:"رحیمه فدایی" , key:"5"},
    
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

    return (
        <TouchableWithoutFeedback>
               <View style={styles.conatiner} >
            <Header/>
            <View style={styles.body} >
                <Addperson Sumbithandler={Sumbithandler} setperson={setperson} person={person} />
             <View style={styles.item1} >
                 <FlatList 
                 data={persons}
               
                 renderItem={({item})=>(<Person person={item} handlerPerson={handlerPerson}  />)}

                 />
             </View>
            </View>
           
        </View>
        </TouchableWithoutFeedback>
     
    );
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:"gray",
    },
    body:{
        padding:20,
    
       
    },
    item1:{
       
    }

})

export default App;
