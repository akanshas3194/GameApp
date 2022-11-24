import React, { useEffect, useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import GameList from '../Components/gameListComponent';
import Switch from '../Components/switchComponent';
import {paidGames, freeGames} from '../Components/Data';
import { requestForGameList, requestForLogoutUser } from '../Store/Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../HOC/loading';


const Home=()=>{
   
    const [gamestab, setGamesTab]= useState(1)
    
    const dispatch = useDispatch();
    const items=useSelector(state=> state.auth.Item)
   
    const onselectSwitch=(value)=>{
    setGamesTab(value)
   }

    useEffect(()=>{ 
 
    dispatch(requestForGameList())
    },[])

  const listHeaderComponent=()=>{
  
  return  <View style={{flex:1}}>
          <View style={styles.headingContainer}>
            <Text style={{marginTop:8}}>Hello John</Text>
            <TouchableOpacity><Image source={require('../../assets/prf.png')} style={styles.imgStyles}/>
            </TouchableOpacity></View>
            <TouchableOpacity onPress={()=>dispatch(requestForLogoutUser())}>
            <Text>Log out</Text></TouchableOpacity>
           <View style={styles.textInputContainer}>
            <TextInput placeholder='search' placeholderTextColor={"#d9d9d9"}/></View>
            <View style={styles.container2}><Text>Upcoming Games</Text>
            <TouchableOpacity><Text style={{color:"blue"}}>See all</Text></TouchableOpacity></View>
           <View style={styles.craouselContainer}>
            <Image source={require('../../assets/game-1.jpeg')} 
            style={{height:147, width:'100%', borderRadius:10, resizeMode:"stretch"}}/></View>
            
            <Switch selectionmode={gamestab} option1='Free to play' 
             option2='Paid games' onselectSwitch={onselectSwitch}/></View>
 }

    return(
        <View style={styles.container}>
        <FlatList
        data={items}
        //gamestab ==1  ? freeGames : paidGames
        renderItem={({item})=><GameList item={item} />}
        keyExtractor={(item) => item.id} ListHeaderComponent={listHeaderComponent}/>
       </View>
        )
}

const styles = StyleSheet.create({
      
    container:{
        flex:1, 
        backgroundColor:"#fff",  
        padding:10
       },
    headingContainer:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        marginHorizontal:15, 
        marginTop:30
      },
    imgStyles:{
        height:40, 
        width:40, 
        borderRadius:10
     },
    textInputContainer:{
        borderWidth:1, 
        borderRadius:5, 
        padding:10, 
        margin:10, 
        marginHorizontal:20, 
        borderColor:"#d9d9d9"
     },
    container2:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        marginHorizontal:15, 
        marginVertical:12
    },
    craouselContainer:{
        borderWidth:1, 
        width:'85%', 
        borderRadius:10, 
        justifyContent:"center", 
        alignSelf:"center", 
        height:150, 
        marginHorizontal:35, 
        marginVertical:10, 
        borderColor:"#fff"
    },
})

export default Loader(Home);