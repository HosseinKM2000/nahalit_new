import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./action";

const initialState = {};

const userPanelSlice = {
    name:'userPanel',
    initialState,
    extraReducer : (builder) => [
        builder
        .addCase(updateUser.fulfilled, (state,action) => {
            
        })
        .addCase(updateUser.pending, (state,action) => {

        })
        .addCase(updateUser.rejected, (state,action) => {

        })
    ]
}