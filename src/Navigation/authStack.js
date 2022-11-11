import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../Screens/onboarding';
import Login from '../Screens/login';

const AuthStack=()=>{

 const Stack = createNativeStackNavigator();
    return(

        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="onboarding" component={Onboarding} options={{headerShown:false}} />
          <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AuthStack;