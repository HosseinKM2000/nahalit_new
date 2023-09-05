import { createSlice } from "@reduxjs/toolkit";
import { sendRecruitment } from "./action";
import { toast } from "react-toastify";

const initialState = {
    loading:false,
}

const recruitmentSlice = createSlice({
    initialState,
    name:'recruitment',
    extraReducers:(builder) => {
        builder
        .addCase(sendRecruitment.fulfilled, (state,action) => {
            state.loading = false;
            toast.success(action.payload.massage)
        })
        .addCase(sendRecruitment.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(sendRecruitment.rejected, (state,action) => {
            state.loading = false;
            toast.error(action.error.message)
        })
    }
})

export default recruitmentSlice.reducer;