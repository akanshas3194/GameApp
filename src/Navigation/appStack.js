import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import Home from '../Screens/home';
import Setting from '../Screens/setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const TabStack=()=>{

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
   )
    
}
const AppStack=()=>{


 const Drawer = createDrawerNavigator ();
    return(
         <Drawer.Navigator>
           <Drawer.Screen name="TabStack" component={TabStack} options={{headerShown:false}}  />
           <Drawer.Screen name="Setting" component={Setting} options={{headerShown:false}} />
        </Drawer.Navigator>
       )
}

export default AppStack;