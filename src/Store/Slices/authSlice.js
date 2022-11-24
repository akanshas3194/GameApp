import {createSlice, createAction} from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState= {
    Item:[],
    userAuth:0,
    isloading:false
}
export const authAction = createAction('apiCallStart')

const Authslice =createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
    getToken:(state, action)=>{
        state.Item=action.payload
        state.isloading=false
     
    },
    checkAuthentication:(state, action)=>{
        state.userAuth=action.payload
       
    },
    getLogout:(state, action)=>{
        AsyncStorage.removeItem('Token_Key1')
        state.userAuth=1
        
    },
    addCardLoaderStart:(load, action)=>{
        load.isloading=true
      }
}
})

export const{checkAuthentication, getToken, getLogout,addCardLoaderStart } = Authslice.actions;
export default Authslice.reducer;


export const requestForLoginUser=(data)=> authAction({
    url: "https://62e8c790249bb1284eb3a622.mockapi.io/data",
    method: "POST",
    onSuccess: getToken.type,
    data: { userEmail: data.username, password: data.password },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    onSuccess: async (dispatch, res) => {
        await AsyncStorage.setItem('Token_Key1', res)
    dispatch(checkAuthentication(2))}

})

export const requestForLogoutUser=()=> authAction({
    url: "https://62e8c790249bb1284eb3a622.mockapi.io/data",
    onSuccess:getLogout.type,

})

export const requestForGameList=()=> authAction({
    url:"https://62e8c790249bb1284eb3a622.mockapi.io/Education",
    onSuccess:getToken.type,
    onRequestStart:addCardLoaderStart.type
})