import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Switch=({selectionmode, option1, option2, onselectSwitch})=>{

    const[getSelectionmode, setSelectionmode] =useState(selectionmode)

    const updateSwitchData=(value)=>{
        setSelectionmode(value)
        onselectSwitch(value)
       }

    return(
        <View style={styles.toggleContainer}>
            <TouchableOpacity style={{flex:1,backgroundColor: getSelectionmode ==1 ?'#8b008b':'#efd8f0',  
        borderRadius:15,justifyContent:"center",alignItems:'center'}} activeOpacity={1} onPress={()=> updateSwitchData(1)}>
                <Text style={{fontSize:12,fontWeight:"bold",color: getSelectionmode ==1 ?'white':`#8b008b`}}>{option1}</Text>
            </TouchableOpacity>
       <TouchableOpacity style={{flex:1,backgroundColor: getSelectionmode ==2 ?'#8b008b':`#efd8f0` , borderRadius:15,
        justifyContent:"center",
        alignItems:'center'}} activeOpacity={1}  onPress={()=> updateSwitchData(2)}>
                <Text style={{
        fontSize:12,
        fontWeight:"bold",
        color: getSelectionmode ==2 ?'white':`#8b008b` ,
    }    }>{option2}</Text>
                </TouchableOpacity>
               
        </View>
    )
}

const styles = StyleSheet.create({
    toggleContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:10,
        height:40,
        width:'100%',
        borderColor:"#d3d3d3",
        paddingHorizontal:15,
       
    },
   

    
})

export default Switch;