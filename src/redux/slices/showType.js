import { createSlice } from "@reduxjs/toolkit";

const showTypeSlice = createSlice({
    name:"showType",
    initialState:{
        showType:1,
    },
    reducers:{
        onshowTypeChange:(state,action) =>{
            state.showType= action.payload
          
        }
    }
})

export const {onshowTypeChange}=showTypeSlice.actions

export default showTypeSlice.reducer