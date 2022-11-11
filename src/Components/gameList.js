import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
 
const GameList=(props)=>{
    const {poster, title, price, isFree, subtitle}=props.item;

    return(
        <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:10, padding:10, alignItems:"center"}}>
        <View style={styles.gamelistContainer}>
              <Image source={poster} style={styles.imgList}/>
           <View style={{flexDirection:"column", marginLeft:4}}><Text numberOfLines={1}>{title}</Text>
            <Text>{subtitle}</Text></View>
        
        </View>
        <TouchableOpacity style={{borderWidth:1, width:80, backgroundColor:'#00ffff', borderRadius:10,borderColor:"#f5f5dc", padding:5}}>
        <Text style={{fontWeight:"bold", fontSize:12, textAlign:"center",}}>{isFree=='No'?price:<Text>play</Text>}</Text>
        </TouchableOpacity>
         </View>
    )
}

const styles = StyleSheet.create({
    gamelistContainer:{
        flexDirection:"row", 
        alignItems:"center", 
        flex:1
    },
    imgList:{
        borderWidth:1, 
        height:40,
        width:60, 
        padding:2, 
        borderColor:"#fff"
    },

})
export default GameList;