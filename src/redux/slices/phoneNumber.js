import { createSlice } from "@reduxjs/toolkit";

const phoneNumberSlice = createSlice({
    name:'userPhoneNumber',
    initialState:{
        phoneNumber:'',
    },
    reducers:{
        onphoneNumberChange:(state , action)=>{
            state.phoneNumber=action.payload
        }
    }
})

export const {onphoneNumberChange} = phoneNumberSlice.actions

export default phoneNumberSlice.reducer;