import React from 'react';
import { View, Image } from 'react-native';

const Banner=(props)=>{
    const {item} =props
    console.log(props)
    return(
          <View style={{borderWidth:1, width:'85%', borderRadius:10, justifyContent:"center", alignSelf:"center", height:150, marginHorizontal:35, marginVertical:10}}>

            <Image source={item.image} style={{height:50, width:50}}/>
          </View>

    )
}

export default Banner;