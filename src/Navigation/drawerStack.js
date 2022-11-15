import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStack from './appStack';
import AuthStack from './authStack';
import Setting from '../Screens/setting';
import Login from '../Screens/login';
import SignUp from '../Screens/signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DrawerStack=()=>{
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    return(

        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="onboarding" component={Onboarding} options={{headerShown:false}} /> 
          </Stack.Navigator>
          
        <Drawer.Navigator screenOptions={{headerShown:false}}>
          <Drawer.Screen name="Home" component={AppStack} />
          <Drawer.Screen name="Setting" component={AuthStack} />
          <Drawer.Screen name="Profile" component={Setting}/>
          <Drawer.Screen name="Login" component={Login}/>
          <Drawer.Screen name="Signup" component={SignUp}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default DrawerStack;