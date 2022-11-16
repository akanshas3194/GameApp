import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Keyboard } from 'react-native';
import ButtonComponent from '../Components/buttonComponent';
import TextComponent from '../Components/textComponent';
import { requestForLoginUser } from '../Store/Slices/authSlice';
import {useDispatch} from 'react-redux';


function Login({navigation}) {

         const[logindetails, setUserDetails] = useState({username: '', password:''})
         const [isKeyboard, setKeyboard] = useState(Boolean);
         const dispatch = useDispatch();

  const changeHandler=(text, key)=>{
       setUserDetails(logindetails=>({...logindetails, [key]:text}))
  }
 
  const pressHandler=()=>{
       dispatch(requestForLoginUser(logindetails))
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
      <View style={{ height: 150, justifyContent: "center",alignItems: "center", marginTop:40}}>
     <Text style={{fontSize:28, fontWeight:"bold", color:"darkblue"}}>Welcome In GAMEON</Text>
     </View>
   
     <TextComponent
      textLabel="UserName"
      textplaceHolder="Enter Username"
      value={logindetails.username}
      keyName={'username'}
      changeHandler={changeHandler}
      />

     <TextComponent
     textLabel="Password"
     textplaceHolder="Enter Password"
     value={logindetails.password}
     keyName={'password'}
     changeHandler={changeHandler}
     />

     <View style={{alignSelf:"flex-end"}}><Text style={{color:"#a9a9a9"}}>Forget Password?</Text></View>

     <ButtonComponent title="Login" pressHandler={()=>pressHandler()}/>
     
     {!isKeyboard && (  <View style={{flexDirection:"row", bottom:25,  alignSelf: "center",alignItems:"center", position:"absolute"}}>
      <Text>Don't have an account </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')}><Text style={{color:"blue"}}>click here !</Text></TouchableOpacity>
     </View>
      )}
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

export default Login;