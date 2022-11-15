import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStack from './appStack';
import AuthStack from './authStack';
import Setting from '../Screens/setting';
import Login from '../Screens/login';
import SignUp from '../Screens/signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Onboarding from '../Screens/onboarding';

const DrawerStack=()=>{
    const Stack = createNativeStackNavigator();
   
    const userAuth=useSelector(state=>state.auth.userAuth)


    return(

      
        <NavigationContainer>


<Stack.Navigator screenOptions={{headerShown:false}}>
{userAuth===0 && <Stack.Screen name="onboarding" component={Onboarding} /> }
{userAuth===2 && <Stack.Screen name="App" component={AppStack} />}
{userAuth===1 &&  <Stack.Screen name="Auth" component={AuthStack} />}
     </Stack.Navigator>
      
      </NavigationContainer>
    )
}

export default DrawerStack;