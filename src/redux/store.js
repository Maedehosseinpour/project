import { configureStore } from "@reduxjs/toolkit";
import userPhoneNumber from "../redux/slices/phoneNumber";
import isLogin from "../redux/slices/isLogin";
import setFiltershow from "./slices/setFiltershow";
import showType  from "./slices/showType";
const store = configureStore({
    reducer:{
        userPhoneNumber:userPhoneNumber,
        setFiltershow:setFiltershow,
        showType:showType,
        isLogin:isLogin,
    }
})



export default store;
