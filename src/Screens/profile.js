import React from 'react';
import { Icon } from '@react-native-material/core';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonComponent from '../Components/buttonComponent';

const Profile=({navigation})=>{

    return(
        <View style={{flex:1, backgroundColor:"#fff"}}>
          <View style={styles.mainContainer}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{top:8}}>
          <Icon name='arrow-left' size={32} color={"#fff"}/></TouchableOpacity>
          <Text style={styles.headingText}>Profile</Text></View>
           
          <View style={styles.subContainer}>
          <View style={styles.imgContainer}>
          <Image source={require("../../assets/profile.jpg")} 
          style={styles.image}/></View>

          <View style={styles.profileContainer}> 
          <Text style={{fontWeight:"bold", fontSize:17}}>John Cena</Text>
          <Text style={{fontSize:12}}>john123@gmail.com</Text></View>

          <View style={{flex:1,}}> 
          <TouchableOpacity style={{}}> 
          <View style={styles.containerWrapeer}>
          <View style={styles.containerWrapeer2}>
          <Icon name='folder-open' size={18}/>
          <Text style={styles.wrapperHeading}>My Project</Text></View>
          <View><Icon name='arrow-right' size={20}/></View>
          </View>
          </TouchableOpacity>

         <TouchableOpacity>  
         <View style={styles.containerWrapeer}>
         <View style={styles.containerWrapeer2}>
         <Icon name='account' size={20}/>
         <Text style={styles.wrapperHeading}>Account</Text></View>
         <View><Icon name='arrow-right' size={20} />
         </View> </View>
          </TouchableOpacity>

         <TouchableOpacity>  
         <View style={styles.containerWrapeer}>
          <View style={styles.containerWrapeer2}>
          <Icon name='bullhorn' size={20}/>
          <Text style={styles.wrapperHeading}>Share With Friends</Text></View>
          <View><Icon name='arrow-right' size={20}/></View>  
          </View>
         </TouchableOpacity>

         <TouchableOpacity>  
         <View style={styles.containerWrapeer}>
         <View style={styles.containerWrapeer2}>
         <Icon name="sticker-text" size={20}/>
         <Text style={styles.wrapperHeading}>Review</Text></View>
         <View><Icon name='arrow-right' size={20}/></View>
         </View>
         </TouchableOpacity>

          <TouchableOpacity>  
          <View style={styles.containerWrapeer}>
          <View style={styles.containerWrapeer2}>
          <Icon  name='information' size={20}/>
          <Text style={styles.wrapperHeading}>Info</Text></View>
          <View><Icon name='arrow-right' size={20}/></View>
          </View>
          </TouchableOpacity> </View> 
        </View>

        <View style={{padding:5, marginBottom:10, marginHorizontal:6}}>
        <ButtonComponent title="Save"/>
        </View>
        </View>
    )

}
           

const styles=StyleSheet.create({
    mainContainer:{height:150, backgroundColor:"purple", borderBottomEndRadius:22, borderBottomStartRadius:22, paddingLeft:15, paddingTop:15, flexDirection:"row"},
    subContainer:{height:450, backgroundColor:"#fff", bottom:35, marginHorizontal:25, borderRadius:20,borderColor:"#ffebcd", borderWidth:2 },
    imgContainer:{height:120, backgroundColor:"#fff", borderRadius:60, width:120,bottom:70, borderColor:"#ffebcd", borderWidth:2 , alignSelf:"center"},
    image:{height:120,width:120,borderRadius:60, },
    containerWrapeer:{flexDirection:"row", justifyContent:"space-between", padding:5, marginVertical:10, borderColor:"#f5f5f5", borderTopWidth:1},
    containerWrapeer2:{flexDirection:"row"},
    wrapperHeading:{paddingLeft:5, fontSize:15},
    headingText:{color:"#fff",fontWeight:"bold", fontSize:18, marginTop:10, marginLeft:10},
    profileContainer:{bottom:60, justifyContent: 'center', alignItems:"center"},

})


export default Profile;