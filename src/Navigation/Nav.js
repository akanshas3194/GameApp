import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './appStack';
import AuthStack from './authStack';
import DrawerStack from './drawerStack';
import { View } from 'react-native';

const Nav=()=>{

   
    return(
 <View>
       
       <AppStack/>
       <AuthStack/>
       <DrawerStack/>
       </View>
    )
}

export default Nav;