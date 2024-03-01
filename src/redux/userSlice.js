import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged:false,
    username:"",
    password:"",
}

export const userSlice =  createSlice({
    name: "user",
    initialState,
    reducers:{
        login:(state,action) =>{
            console.log("net",state)
            console.log("net",action)
            const {username,password} = action.payload;
            state.logged = true;
            state.username = username;
            state.password = password;
        }
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer