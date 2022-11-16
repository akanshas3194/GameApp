import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Keyboard } from 'react-native';
import ButtonComponent from '../Components/buttonComponent';
import TextComponent from '../Components/textComponent';


function SignUp({navigation}) {

  const[signupdetails, setsignupDetails] = useState({fullname:'', mobilenumber:'',username: '', password:'', password2:''})
  const [isKeyboard, setKeyboard] = useState(Boolean);
  
  const changeHandler=(text, key)=>{
    setsignupDetails(signupdetails=>({...signupdetails, [key]:text}))
  }

  const pressHandler=()=>{
    // console.log(signupdetails)
    }

    useEffect(() => {
      const onKeyBoardOn =  Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
      const onKeyBoardOff = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
         return () => {
             onKeyBoardOn &&   onKeyBoardOn.remove() 
             onKeyBoardOff && onKeyBoardOff.remove()
         };
     }, []);
     
     const _keyboardDidShow = () => {
      setKeyboard(true);
  };
  
  const _keyboardDidHide = () => {
      setKeyboard(false);
  };
  

  return (
    <View style={styles.container}>
      <View style={{ height: 120, justifyContent: "center",alignItems: "center", marginTop:20}}>
  <Text style={{fontSize:28, fontWeight:"bold", color:"darkblue"}}>Please fill required details</Text>
  </View>

  <TextComponent
   textLabel="fullname"
   textplaceHolder="Enter fullname"
   value={signupdetails.fullname}
   keyName={'fullname'}
   changeHandler={changeHandler}
   />

<TextComponent
   textLabel="mobilenumber"
   textplaceHolder="Enter mobile number"
   value={signupdetails.mobilenumber}
   keyName={'mobilenumber'}
   changeHandler={changeHandler}
   />
   
   <TextComponent
   textLabel="userName"
   textplaceHolder="Enter Username"
   value={signupdetails.username}
   keyName={'username'}
   changeHandler={changeHandler}
   />

   <TextComponent
   textLabel="Password"
   textplaceHolder="Enter Password"
   value={signupdetails.password}
   keyName={'password'}
   changeHandler={changeHandler}
   />

<TextComponent
   textLabel="Re-confirm Password"
   textplaceHolder="Re-Enter Password"
   value={signupdetails.password2}
   keyName={'password2'}
   changeHandler={changeHandler}
   />

   <ButtonComponent title="Sign Up" pressHandler={pressHandler}/>
     
   {!isKeyboard && (   <View style={{flexDirection:"row", bottom:25,  alignSelf: "center",alignItems:"center", position:"absolute"}}>
      <Text>Already have an account </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text style={{color:"blue"}}>click here !</Text></TouchableOpacity>
     </View> )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:8
  

   
  },
});

export default SignUp;