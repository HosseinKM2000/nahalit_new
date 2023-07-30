import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, register } from "./action";

const initialState = {
    loading:false,
    message:'',
    loginStatus:false,
}

const authenticationSlice = createSlice({
    name:'authentication',
    initialState,
    extraReducers:( builder ) => {
        builder
        .addCase(register.fulfilled,(state,action) => {
            state.loading = false;
            toast.success(action.payload.data.massage)
            localStorage.setItem("user",action.payload.data.user)
            localStorage.setItem("access_token",action.payload.data.token)
        })
        .addCase(register.pending,(state) => {
            state.loading = true;
        })
        .addCase(register.rejected,(state,action) => {
            state.loading = false;
            toast.error("متاسفانه ثبت نام با خطا مواجه شد")
        })
        .addCase(login.fulfilled,(state,action) => {
            state.loading = false;
            toast.success(action.payload.data.massage)
            localStorage.setItem("access_token",action.payload.data.token)
            localStorage.setItem("user",action.payload.data.user)
            state.loginStatus = true;
        })
        .addCase(login.pending,(state) => {
            state.loading = true;
        })
        .addCase(login.rejected,(state,action) => {
            state.loading = false;
            toast.error('متاسفانه خطایی در ورود پیش آمده است')
        })
    }
})

export default authenticationSlice.reducer;