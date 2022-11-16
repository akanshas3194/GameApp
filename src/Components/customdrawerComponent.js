import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer=(props)=>{
    return(

         <View style={{flex:1}}>
        <DrawerContentScrollView contentContainerStyle={{backgroundColor:"purple", color:"white"}}>
        <ImageBackground source={require('../../assets/back.jpeg')} style={{padding:15, }}>
            <Image source={require('../../assets/prf.png')} style={{height:60, width:60, borderRadius:30, marginBottom:10 }}/>
            <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>John Cena</Text>
            </ImageBackground>
            <View style={{flex:1,backgroundColor:"white", paddingTop:10,}}>
            <DrawerItemList {...props}/>
            </View>
           
        </DrawerContentScrollView>

        <View></View>
        </View>

    )

}

// This is alternate Method

//  <View style={{flex:1, paddingTop:30, paddingHorizontal:10, backgroundColor:"red"}}>
//     <Text style={{justifyContent:"center", alignItems:"center", marginVertical:10}}>Home</Text>
//     <Text style={{justifyContent:"center", alignItems:"center", marginVertical:10}}>About Us</Text>
//     <Text style={{justifyContent:"center", alignItems:"center", marginVertical:10}}>Our Project</Text>
//     <Text style={{justifyContent:"center", alignItems:"center", marginVertical:10}}>Setting</Text>
//     <Text style={{justifyContent:"center", alignItems:"center", marginVertical:10}}>Contact Us</Text>

// <View style={{ backgroundColor:"yellow", borderWidth:1, alignSelf:"flex-end",}}>
//     <TouchableOpacity ><Text>Sign Out</Text></TouchableOpacity></View>
//  </View>

export default CustomDrawer;