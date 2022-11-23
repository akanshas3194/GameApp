import React from 'react';
import { View, Text, ActivityIndicator,  } from 'react-native';
import { useSelector } from 'react-redux';

const Loader=(Component)=>{



    const Loading=()=>{
        const isloading=useSelector(state=>state.auth.isloading)
        return(

            <View style={{flex:1,}}>
            <Component/>
           
           {isloading && 
           <View style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "#fff", justifyContent: 'center' }
          ]}><ActivityIndicator>
                <Text>Loading...</Text></ActivityIndicator>
                </View>}
                </View>
        )
    }
    return Loading;
    
}

export default Loader;