import React from 'react';
import {TouchableOpacity, Text } from 'react-native';

const ButtonComponent=({title, pressHandler})=>{
    return(
        <TouchableOpacity onPress={pressHandler} style={{backgroundColor:"purple", height:45, justifyContent:"center", alignItems:"center", borderRadius:10, marginTop:25,}}>
           <Text style={{color:"#fff", fontWeight:"bold", fontSize:18}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent;