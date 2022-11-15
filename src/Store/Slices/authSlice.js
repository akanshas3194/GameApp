import {createSlice, createAction} from "@reduxjs/toolkit"


const initialState= {
    Item:{}
}
export const authAction = createAction('apiCallStart')

const Authslice =createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
    checkAuthentication:(state, action)=>{
        state.Item=action.payload
        console.log(action.payload, "in state")
    }
}
})

export const{checkAuthentication} = Authslice.actions;
export default Authslice.reducer;


export const requestForLoginUser=(data)=> authAction({
    url: "https://62e8c790249bb1284eb3a622.mockapi.io/data",
    method: "POST",
    onSuccess: checkAuthentication.type,
    data: { userEmail: data.username, password: data.password },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})