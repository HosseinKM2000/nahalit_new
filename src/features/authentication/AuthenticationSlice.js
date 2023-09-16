import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { login, register } from "./action";

const initialState = {
    loading:false,
    message:'',
    redirect:false,
    loginStatus: Cookies.get('user') ? true : false
}

const authenticationSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        changeRedirect : (state,action) => {
            state.redirect = false
        },
        changeLoginStatus : (state) => {
            state.loginStatus = false;
        }
    },
    extraReducers:( builder ) => {
        builder
        .addCase(register.fulfilled,(state,action) => {
            state.loading = false;
            state.redirect = true;
            toast.success(action.payload.massage)
            Cookies.set("user",JSON.stringify(action.payload.user))
            localStorage.setItem("access_token",action.payload.token)
            state.loginStatus = true;
        })
        .addCase(register.pending,(state) => {
            state.loading = true;
        })
        .addCase(register.rejected,(state,action) => {
            state.loading = false;
            toast.error("!خطایی در ثبت نام پیش آمده است")
            console.log(action)
        })
        .addCase(login.fulfilled,(state,action) => {
            state.loading = false;
            state.redirect = true;
            toast.success(action.payload.massage)
            localStorage.setItem("access_token",action.payload.token)
            Cookies.set("user",JSON.stringify(action.payload.user))
            state.loginStatus = true;
            console.log(action)
        })
        .addCase(login.pending,(state) => {
            state.loading = true;
        })
        .addCase(login.rejected,(state,action) => {
            state.loading = false;
            console.log(action)
        })
    }
})

export const  { changeRedirect , changeLoginStatus } = authenticationSlice.actions; 

export default authenticationSlice.reducer;