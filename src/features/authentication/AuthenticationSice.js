import { createSlice } from "@reduxjs/toolkit";
import { register } from "./action";

const initialState = {
    loading:false,
    token:'',
}

const authenticationSlice = createSlice({
    name:'authentication',
    initialState,
    extraReducers:( builder ) => {
        builder
        .addCase(register.fulfilled,(state,action) => {
            state.loading = false;
            alert('register-successfully')
        })
        .addCase(register.pending,(state) => {
            state.loading = true;
        })
        .addCase(register.rejected,(state,action) => {
            state.loading = false;
            alert('register-failed')
        })
    }
})

export default authenticationSlice.reducer;