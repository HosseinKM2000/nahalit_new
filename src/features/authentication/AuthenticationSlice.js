import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { login, register } from "./action";

const initialState = {
    loading:false,
    message:'',
    redirect:false,
    loginStatus: Cookies.get('user') === undefined || Cookies.get('user') === 'null' ? false : true,
}

const authenticationSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        changeRedirect : (state,action) => {
            state.redirect = false
        }
    },
    extraReducers:( builder ) => {
        builder
        .addCase(register.fulfilled,(state,action) => {
            state.loading = false;
            state.redirect = true;
            toast.success(action.payload.data.massage)
            Cookies.set("user",JSON.stringify(action.payload.data.user))
            localStorage.setItem("access_token",action.payload.data.token)
        })
        .addCase(register.pending,(state) => {
            state.loading = true;
        })
        .addCase(register.rejected,(state,action) => {
            state.loading = false;
            Cookies.set("user",'null')
            toast.error("متاسفانه ثبت نام با خطا مواجه شد")
        })
        .addCase(login.fulfilled,(state,action) => {
            state.loading = false;
            state.redirect = true;
            toast.success(action.payload.data.massage)
            localStorage.setItem("access_token",action.payload.data.token)
            Cookies.set("user",JSON.stringify(action.payload.data.user))
        })
        .addCase(login.pending,(state) => {
            state.loading = true;
        })
        .addCase(login.rejected,(state,action) => {
            state.loading = false;
            Cookies.set("user",'null')
            toast.error('متاسفانه خطایی در ورود پیش آمده است')
        })
    }
})

export const  { changeRedirect } = authenticationSlice.actions; 

export default authenticationSlice.reducer;