import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Loader=(Component)=>{



    const Loading=()=>{
        const isloading=useSelector(state=>state.auth.isloading)
        return(

            <View style={{flex:1,}}>
                <Text>Hello</Text>
            <Component/>
           
           {isloading && 
           <View style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "#fff", justifyContent: 'center' }
          ]}><ActivityIndicator size="large" />
                </View>}
                </View>
        )
    }
    return Loading;
    
}

export default Loader;


   

 

