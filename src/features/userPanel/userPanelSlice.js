import { createSlice } from "@reduxjs/toolkit";
import { changeUserPassword, updateUserInfo } from "./action";
import { toast } from "react-toastify";

const initialState = {
    isLoading:false,
};

const userPanelSlice = createSlice({
    name:'userPanel',
    initialState,
    extraReducer : builder => [
        builder
        .addCase(updateUserInfo.fulfilled, (state,action) => {
            state.isLoading = false;
        })
        .addCase(updateUserInfo.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(updateUserInfo.rejected, (state,action) => {
            state.isLoading = false;
        })
        .addCase(changeUserPassword.fulfilled, (state,action) => {
            state.isLoading = false;
            console.log(action)
            toast.success("ok")
        })
        .addCase(changeUserPassword.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(changeUserPassword.rejected, (state,action) => {
            state.isLoading = false;
            console.log(action)
        })
    ]
})

export default userPanelSlice.reducer;