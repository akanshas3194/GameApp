import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/login';
import SignUp from '../Screens/signup';
import Setting from '../Screens/setting';

const AuthStack=()=>{

  const Stack = createNativeStackNavigator();
    return(

        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={SignUp}/>
        </Stack.Navigator>
    )
}

export default AuthStack;