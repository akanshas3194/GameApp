import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import Home from '../Screens/home';
import Setting from '../Screens/setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../Screens/about';
import Profile from '../Screens/profile';
import Project from '../Screens/project';
import Contact from '../Screens/contact';
import CustomDrawer from '../Components/customdrawerComponent';
import { Icon } from "@react-native-material/core";
import AddGame from '../Screens/addGame';

const TabStack=()=>{

    const Tab = createBottomTabNavigator();

    
    return(
        <Tab.Navigator screenOptions={({route})=>({
         tabBarIcon:({focused, size, colour})=>{
         let iconName;
         if(route.name==='Home'){
            iconName=focused?"home":"home-outline"
         }else if(route.name==='Add'){
            iconName=focused?'plus-circle':'plus-circle-outline'
         }else if(route.name==='profile.'){
            iconName=focused?'account-details':'account-details-outline'
         }else if(route.name==='Settings'){
            iconName=focused?'cog':'cog-outline'
         } return <Icon name={iconName} size={size} colour={colour}/>
        },
        tabBarActiveTintColor:'#8b008b',
        tabBarInactiveTintColor:'#efd8f0',
        tabBarShowLabel:false,
            headerShown:false

        })} style={{backgroundColor:"#efd8f0"}}
         >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Add" component={AddGame}/>
        <Tab.Screen name="profile." component={Profile}/>
        <Tab.Screen name="Settings" component={Setting}/>
        </Tab.Navigator>
   )}
const AppStack=()=>{


 const Drawer = createDrawerNavigator ();
    return(
         <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=><CustomDrawer{...props}/>}>
            
           <Drawer.Screen name="Home." component={TabStack} options={{
            drawerIcon:({color})=>{ return <Icon name="home-outline" size={28} color={color}/>}}}/>
           <Drawer.Screen name="About Us" component={About} options={{
            drawerIcon:({color})=>{ return <Icon name="sticker-text" size={28} color={color}/>}}}/>
           <Drawer.Screen name="Profile" component={Profile} options={{
            drawerIcon:({color})=>{ return <Icon name="account-edit-outline" size={28} color={color}/>}}}/>
           <Drawer.Screen name="Our Project" component={Project} options={{
            drawerIcon:({color})=>{ return <Icon name="book-search-outline" size={28} color={color}/>}}}/>
           <Drawer.Screen name="Contact" component={Contact} options={{
            drawerIcon:({color})=>{ return <Icon name="account-box-outline" size={28} color={color}/>}}}/>
           <Drawer.Screen name="Setting" component={Setting} options={{
            drawerIcon:({color})=>{ return <Icon name="cog-outline" size={28} color={color}/>}}}/> 
           
        </Drawer.Navigator>
       )
}

export default AppStack;