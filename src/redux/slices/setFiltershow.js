import { createSlice } from "@reduxjs/toolkit";

const setFiltershowSlice = createSlice({
    name:"setFiltershow",
    initialState:{
        setFiltershow:false,
    },
    reducers:{
        onsetFiltershowChange:(state,action) =>{
            state.setFiltershow = action.payload
        }
    }
})

export const {onsetFiltershowChange} = setFiltershowSlice.actions

export default setFiltershowSlice.reducer