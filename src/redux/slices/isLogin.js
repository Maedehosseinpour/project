import { createSlice } from "@reduxjs/toolkit";

const isLoginSlice = createSlice({
    name:'isLogin',
    initialState:{
        isLogin:false,
    },
    reducers:{
        onIsLoginChange:(state , action)=>{
            state.isLogin=action.payload
        }
    }
})

export const {onIsLoginChange} = isLoginSlice.actions

export default isLoginSlice.reducer;