import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import Home from '../Screens/home';
import Setting from '../Screens/setting';

const AppStack=()=>{

 const Drawer = createDrawerNavigator ();
    return(

     
        <Drawer.Navigator>
           <Drawer.Screen name="home" component={Home} options={{headerShown:false}}  />
           <Drawer.Screen name="Setting" component={Setting} options={{headerShown:false}} />
        </Drawer.Navigator>
      
    )
}

export default AppStack;