import React from 'react';
import { View, Text, Switch,StyleSheet } from 'react-native';

const SwitchToggleComponent=({name, keyName, onValueChange, value})=>{

    return(
        <View style={styles.List} >
        <Text style={{top:12}}>{name}</Text>
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value.isEnabled ? "#800080" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>onValueChange( keyName)}
        value={value} size={30}/>
        </View>


    )



}
const styles = StyleSheet.create({
    List:{
    flexDirection:"row", 
        marginVertical:10, 
        justifyContent:"space-between",
    },
})
export default SwitchToggleComponent;