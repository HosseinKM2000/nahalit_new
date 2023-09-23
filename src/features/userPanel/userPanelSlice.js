import { createSlice } from "@reduxjs/toolkit";
import { updateUserInfo , changeUserPassword } from "./action";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const initialState = {
    isLoading: false,
    criterion: false,
}

const userPanelSlice = createSlice({
    name:'userPanel',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(updateUserInfo.fulfilled , (state,action) => {
            const {res, newData} = action.payload;
            state.isLoading = false;
            state.criterion = !state.criterion;
            // Cookies.set("user",JSON.stringify(newData.user));
            console.log(action)
            if(action.payload.error)
            {
                toast.warning(action.payload.error.data.massage)
            }
            else if(action.payload?.res){
                toast.success(action.payload.res.massage);
                Cookies.set("user",JSON.stringify(action.payload.newData.user))
            }
        })
        .addCase(updateUserInfo.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase(updateUserInfo.rejected , (state,action) => {
            state.isLoading = false;
            toast.error("خطا در ویرایش اطلاعات")
            console.error(action.error)
        })
        .addCase(changeUserPassword.fulfilled, (state,action) => {
            state.isLoading = false; 
            toast.success(action.payload.massage);
        })
        .addCase(changeUserPassword.pending, (state,action) => {
            state.isLoading = true; 
        })
        .addCase(changeUserPassword.rejected, (state,action) => {
            state.isLoading = false; 
            toast.error("لطفا صحت اطلاعات وارد شده را بررسی کنید")
            console.error(action)
        })
    }
});

export default userPanelSlice.reducer;