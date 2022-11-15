import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import Setting from '../Screens/setting';

const AppStack=()=>{

 const Stack = createNativeStackNavigator();
    return(

     
        <Stack.Navigator>
           <Stack.Screen name="home" component={Home} options={{headerShown:false}}  />
           <Stack.Screen name="Setting" component={Setting} options={{headerShown:false}} />
        </Stack.Navigator>
      
    )
}

export default AppStack;