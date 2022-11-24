import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@react-native-material/core';
import SwitchToggleComponent from '../Components/switchToggleComponent';

const Setting=({navigation})=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);

    const toggleSwitch = (key) => {
             if(key=='Theme Dark')
             {setIsEnabled(previousState=> !previousState)}
             else if(key=='Account Active')
             {setIsEnabled1(previousState=> !previousState)}
             };
    return(
        
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name='arrow-left' size={32} color={"#fff"}/></TouchableOpacity>
            <Text style={styles.headingText}>Setting</Text></View>
            <View style={styles.containerList}>
             
            <TouchableOpacity><View style={styles.List}>
            <Text>Change Password</Text>
            <Icon name='arrow-right' size={24}/>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.List}>
            <Text>Content Setting</Text>
            <Icon name='arrow-right' size={24}/>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.List}>
            <Text>Social</Text>
            <Icon name='arrow-right' size={24}/>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.List}>
            <Text>Language</Text>
            <Icon name='arrow-right' size={24}/>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.List}>
           <Text>Privacy and Security</Text>
            <Icon name='arrow-right' size={24}/>
            </View></TouchableOpacity>

            <View>
            <SwitchToggleComponent name={"Theme Dark"}
            value={isEnabled} 
            onValueChange={toggleSwitch} 
            keyName={"Theme Dark"}/></View> 

            <View>
            <SwitchToggleComponent name={"Account Active"}
            value={isEnabled1} 
            onValueChange={toggleSwitch} 
            keyName={"Account Active"}/></View> 

            <TouchableOpacity><View style={styles.List}>
            <Text>Downloads</Text>
            <Icon name='arrow-down-circle-outline' size={26}/>
            </View></TouchableOpacity>
            </View>

      </SafeAreaView>
        
    )
}
        

 
            

const styles = StyleSheet.create({
    containerList:{
        height:480, 
        backgroundColor:"#fff",  
        paddingHorizontal:10, 
        marginHorizontal:15, 
        top:20, 
        borderRadius:10
    },
    switchList:{
        flexDirection:"row", 
        marginVertical:15, 
        justifyContent:"space-between"
    },
    List:{
        flexDirection:"row", 
        marginVertical:15, 
        justifyContent:"space-between"
    },
    container:{
        marginTop:35,
        height:60, 
        backgroundColor:"purple", 
        paddingTop:15 , 
        justifyContent: 'flex-start', 
        paddingHorizontal:10, 
        flexDirection:"row"
    },
    headingText:{
        color:"white", fontSize:20, fontWeight:"bold", marginLeft:8
    },

})

export default Setting;