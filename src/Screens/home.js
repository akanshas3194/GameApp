import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ScrollView, StyleSheet, FlatList } from 'react-native';
import GameList from '../Components/gameList';
import Switch from '../Components/Switch';
import {paidGames, freeGames} from '../Components/Data';

const Home=()=>{
   
    const [gamestab, setGamesTab]= useState(1)

 const onselectSwitch=(value)=>{
    setGamesTab(value)
 }

    return(
       
        <View style={styles.container}>
             <ScrollView showsVerticalScrollIndicator={false} style={{padding:5}}>
            <View style={styles.headingContainer}>
                <Text style={{marginTop:8}}>Hello John</Text>
                <Image source={require('../../assets/prf.png')} style={styles.imgStyles}/>
            </View>
           <View style={styles.textInputContainer}>
            <TextInput placeholder='search' placeholderTextColor={"#d9d9d9"}/>
           </View>

           <View style={styles.container2}>
                <Text>Upcoming Games</Text>
               <TouchableOpacity><Text style={{color:"blue"}}>See all</Text></TouchableOpacity>
            </View>
        
            <View style={styles.craouselContainer}>
                <Image source={require('../../assets/game-1.jpeg')} style={{height:147, width:'100%', borderRadius:10, resizeMode:"stretch"}}/>
                </View>

            <Switch selectionmode={gamestab} option1='Free to play' option2='Paid games' onselectSwitch={onselectSwitch} />
               
            <FlatList
        data={gamestab ==1  ? freeGames : paidGames}
        renderItem={({item})=><GameList item={item}/>}
        keyExtractor={(item) => item.id}/>

               </ScrollView>
           
            
        </View>
       
    )
}



const styles = StyleSheet.create({
      
    container:{
        flex:1, 
        backgroundColor:"#fff",  
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

export default Home;