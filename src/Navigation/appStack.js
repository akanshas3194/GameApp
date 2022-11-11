import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../Screens/onboarding';
import Home from '../Screens/home';

const AppStack=()=>{

 const Stack = createNativeStackNavigator();
    return(

        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="onboarding" component={Onboarding} options={{headerShown:false}} />
          <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AppStack;