import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/login';
import SignUp from '../Screens/signup';

const AuthStack=()=>{

 const Stack = createNativeStackNavigator();
    return(

        
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="signup" component={SignUp} options={{headerShown:false}} />
        </Stack.Navigator>
   
    )
}

export default AuthStack;