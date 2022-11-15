import { View,Text, TouchableOpacity, Image, SafeAreaView, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthentication } from '../Store/Slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding=({navigation})=>{
 

    const dispatch = useDispatch();

    const checkUserAuth=async()=>{

        const token =  await AsyncStorage.getItem('Token_Key1')

        if (token != null)
        {
            dispatch(checkAuthentication(2))
        }
        else{
            dispatch(checkAuthentication(1))
        }
    }

    useEffect(()=>{

        setTimeout(() => {
            checkUserAuth()
          }, 2000);

    },[])

    return(
      
        <SafeAreaView style={styles.container}>
            <View style={{marginTop:40 }}><Text style={styles.headingText}>GAMEON</Text></View>
            <View  style={styles.imageContainer}>
            <Image source={require('../../assets/logo.png')} style={styles.image}/></View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('home')}style={styles.btn}>
            <Text style={styles.text}>Lest's Begin</Text>
            <Text style={styles.text}>~</Text>
            </TouchableOpacity></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:"center",  
        alignItems: 'center', 
        backgroundColor:"#fff",  
        padding:10
    },
    headingText:{
        fontWeight:"bold", 
        fontSize:22, 
        color:"darkblue"
    },
    imageContainer:{
        flex:1, 
        justifyContent:"center"
    },
    image:{
        height:200, 
        width:200, 
        borderRadius:20, 
        transform: [{rotate: '-10deg'}]
    },
    btnContainer:{ 
        borderRadius: 10, 
        width:'90%', 
        backgroundColor:"purple", 
        marginBottom:20, 
        padding:15
    },
    btn:{ 
        flexDirection:"row",  
        justifyContent:"space-between"
    },
    text:{
        fontWeight:"bold", 
        fontSize:16, 
        color:"white"
    },

})
export default Onboarding;