import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content : 'dashboard'
}



const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        setContent : (state,action) => {
            state.content = action.payload
        }
    }
})


export const {setContent} = dashboardSlice.actions;
export default dashboardSlice.reducer;