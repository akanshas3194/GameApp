import React from 'react';
import { View, TextInput, Text } from 'react-native';

const TextComponent=({value, changeHandler, textplaceHolder,textLabel, keyName})=>{
    return(
        <View style={{backgroundColor:"#fff", margin:5, paddingVertical:10}}>
         
         <Text>{textLabel}</Text>
         <TextInput 
         placeholder={textplaceHolder} 
         placeholderTextColor="#d3d3d3" 
         style={{borderWidth:1, borderRadius:10, borderColor:"lightgrey",height:39,}} 
         value={value} 
         onChangeText={(text)=> changeHandler(text, keyName)}/>
    

        </View>
    )
}

export default TextComponent;