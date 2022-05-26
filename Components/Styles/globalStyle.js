import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({

    conatiner:{
        flex:1,
        backgroundColor:"#fff",
    },
    body:{
        padding:40,
    
       
    },
    item1:{
 
       height:"83%"
    },
    person:{
        marginTop:20,
        width:"100%",
        padding:20,
        textAlign:"center",
        borderRadius:15,
        borderWidth:1,
        borderColor:"red",
        borderStyle:"dashed",
        flexDirection:"row",
        justifyContent:"space-between"
     
    },
    personName: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
    },
    input:{
       
        borderBottomColor:"red",
        borderBottomWidth:1,
        fontSize:17,
        color:"#000",
        textAlign:"right", 
        marginBottom:15

    },
    header:{
        backgroundColor:"red",
        height:90,
        alignItems:"center",
        justifyContent:"center",
       
         
    },
    text:{
        fontSize:20,
        color:"#fff",
        fontFamily:"yeKan"
      
        
    }


});

export default styles;
