import { createSlice } from "@reduxjs/toolkit";
import { updateUserInfo , changeUserPassword } from "./action";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
}

const userPanelSlice = createSlice({
    name:'userPanel',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(updateUserInfo.fulfilled , (state,action) => {
            state.isLoading = false;
            toast.success(action.payload.massage);
        })
        .addCase(updateUserInfo.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase(updateUserInfo.rejected , (state,action) => {
            state.isLoading = false;
            toast.error("خطا در ویرایش اطلاعات")
            console.error(action)
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