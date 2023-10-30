import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { forgetPassword, login, register, sendCode, verifyCode } from "./action";

const initialState = {
    loading:false,
    message:'',
    redirect:false,
    loginStatus: Cookies.get('user') ? true : false,
    codeSent:false,
    sendCodeLoading:false,
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
        },
        changeSendCode : (state) => {
            state.codeSent = false;
        }
    },
    extraReducers:( builder ) => {
        builder
        .addCase(register.fulfilled,(state,action) => {
            if(action.payload.error){
                toast.warning(action.payload.error.data.message)
                state.loading = false;
                state.redirect = false;
            }
            else
            {
                state.loading = false;
                state.redirect = true;
                console.log(action)
                toast.success(action.payload.data.massage)
                Cookies.set("user",JSON.stringify(action.payload.data.user))
                localStorage.setItem("access_token",action.payload.data.token)
                state.loginStatus = true;
            }
            console.log(action.payload)
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
            if(action.payload.error){
                state.loading = false;
                state.redirect = false;
                toast.warning(action.payload.error.data?.massage)
                console.log(action)
            }
            else
            {
                state.loading = false;
                state.redirect = true;
                toast.success(action.payload.data?.massage);
                console.log(action)
                localStorage.setItem("access_token",action.payload.data.token);
                Cookies.set("user",JSON.stringify(action.payload.data.user));
                state.loginStatus = true;
            }
        })
        .addCase(login.pending,(state) => {
            state.loading = true;
        })
        .addCase(login.rejected,(state,action) => {
            state.loading = false;
            console.log(action)
        })
        .addCase(forgetPassword.fulfilled,(state,action) => {
            if(action.payload.error) {
                state.loading = false;
                toast.warn(action.payload.error.data.message);
                state.redirect = false;
            }
            else
            {
                state.loading = false;
                toast.success(action.payload.data.massage);
                state.redirect = true;
            }
        })
        .addCase(forgetPassword.pending,(state) => {
            state.loading = true;
        })
        .addCase(forgetPassword.rejected,(state,action) => {
            state.loading = false;
            state.redirect = false;
            console.log(action)
        })
        .addCase(sendCode.fulfilled,(state,action) => {
            state.sendCodeLoading = false;
            if(action.payload.error) {
                toast.warn(action.payload.error.data?.massage);
                state.codeSent = false;
                console.log(action)
            }
            else
            {
                toast.success(action.payload.data.massage);
                state.codeSent = true;
                console.log(action);
            }
        })
        .addCase(sendCode.pending,(state) => {
            state.sendCodeLoading = true;
        })
        .addCase(sendCode.rejected,(state,action) => {
            state.sendCodeLoading = false;
            state.codeSent = false;
            console.log(action)
        })
        .addCase(verifyCode.fulfilled,(state,action) => {
            state.sendCodeLoading = false;
            if(action.payload.error) {
                toast.warn(action.payload.error.data?.massage);
                console.log(action)
            }
            else
            {
                toast.success(action.payload.data.massage);
                state.redirect = true;
                console.log(action);
            }
        })
        .addCase(verifyCode.pending,(state) => {
            state.sendCodeLoading = true;
            state.redirect = false;
        })
        .addCase(verifyCode.rejected,(state,action) => {
            state.sendCodeLoading = false;
            console.log(action)
        })
    }
})

export const  { changeRedirect , changeLoginStatus , changeSendCode } = authenticationSlice.actions; 

export default authenticationSlice.reducer;