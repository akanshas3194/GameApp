import { Icon } from '@react-native-material/core';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonComponent from '../Components/buttonComponent';

const Profile=()=>{

    return(
        <View style={{flex:1, backgroundColor:"#fff"}}>
        <View style={{height:150, backgroundColor:"purple", borderBottomEndRadius:22, borderBottomStartRadius:22, paddingLeft:15, paddingTop:15}}>
            <Text style={{color:"#fff",fontWeight:"bold", fontSize:18, marginTop:10}}>
               Profile
            </Text>
        </View>
        <View style={{height:450, backgroundColor:"#fff", bottom:35, marginHorizontal:25, borderRadius:20,borderColor:"#ffebcd", borderWidth:2 }}>
            <View style={{height:120, backgroundColor:"#fff", borderRadius:60, width:120,bottom:70, borderColor:"#ffebcd", borderWidth:2 , alignSelf:"center"}}>
                <Image source={require("../../assets/profile.jpg")} style={{height:120,width:120,borderRadius:60, }}/>
            </View>
       <View style={{bottom:60, justifyContent: 'center', alignItems:"center"}}> 
       <Text style={{fontWeight:"bold", fontSize:17}}>John Cena</Text>
        <Text style={{fontSize:12}}>john123@gmail.com</Text></View>

      <View style={{flex:1,}}> 
          <TouchableOpacity style={{}}> 
          <View style={styles.containerWrapeer}>
          <View style={styles.containerWrapeer2}><Icon name='folder-open' size={18}/>
          <Text style={styles.wrapperHeading}>My Project</Text></View>
          <View><Icon name='arrow-right' size={20}/></View>
          </View>
          </TouchableOpacity>

         <TouchableOpacity>  
         <View style={styles.containerWrapeer}>
         <View style={styles.containerWrapeer2}><Icon name='account' size={20}/>
         <Text style={styles.wrapperHeading}>Account</Text></View>
         <View><Icon name='arrow-right' size={20} />
         </View>
          </View>
          </TouchableOpacity>

         <TouchableOpacity>  
         <View style={styles.containerWrapeer}>
          <View style={styles.containerWrapeer2}>
             <Icon name='bullhorn' size={20}/><Text style={styles.wrapperHeading}>Share With Friends</Text></View>
             <View><Icon name='arrow-right' size={20}/></View>
          </View>
         </TouchableOpacity>

         <TouchableOpacity>  
         <View style={styles.containerWrapeer}>
          <View style={styles.containerWrapeer2}>
             <Icon name="sticker-text" size={20}/><Text style={styles.wrapperHeading}>Review</Text></View>
             <View><Icon name='arrow-right' size={20}/></View>
          </View>
         </TouchableOpacity>

         <TouchableOpacity>  
         <View style={styles.containerWrapeer}>
          <View style={styles.containerWrapeer2}>
             <Icon  name='information' size={20}/><Text style={styles.wrapperHeading}>Info</Text></View>
             <View><Icon name='arrow-right' size={20}/></View>
          </View>
         </TouchableOpacity>

       </View> 
        </View>
      
      <View style={{padding:5, marginBottom:10, marginHorizontal:6}}>
        <ButtonComponent title="Save"/>
      </View>
        </View>
    )

}

const styles=StyleSheet.create({
    containerWrapeer:{flexDirection:"row", justifyContent:"space-between", padding:5, marginVertical:10, borderColor:"#f5f5f5", borderTopWidth:1},
    containerWrapeer2:{flexDirection:"row"},
    wrapperHeading:{paddingLeft:5, fontSize:15},
})

//  <FlatList data={item} renderItem={renderItem}/>
// const item =[{
    //     name:"john Cena",
    //     email:"john123@gmail.com",
    //     MyProject:"ProjectName",
    //     Account:"12354",
    //     ShareWithFriends:"dsa4ss",
    //     Review:"5",
    //     info:"fdfsdsd"},
    
    //     {
    //         name:"john Cena",
    //         email:"john123@gmail.com",
    //         MyProject:"ProjectName",
    //         Account:"12354",
    //         ShareWithFriends:"dsa4ss",
    //         Review:"5",
    //         info:"fdfsdsd"},
    
    //         {
    //             name:"john Cena",
    //             email:"john123@gmail.com",
    //             MyProject:"ProjectName",
    //             Account:"12354",
    //             ShareWithFriends:"dsa4ss",
    //             Review:"5",
    //             info:"fdfsdsd"},   
    
    //             {
    //                 name:"john Cena",
    //                 email:"john123@gmail.com",
    //                 MyProject:"ProjectName",
    //                 Account:"12354",
    //                 ShareWithFriends:"dsa4ss",
    //                 Review:"5",
    //                 info:"fdfsdsd"},
    // ]
    
    // const  renderItem=(({item})=>{
    //    return <View><Text>{item.name}</Text>
    //             <Text>{item.email}</Text>
    //             </View> 
    //     })

export default Profile;