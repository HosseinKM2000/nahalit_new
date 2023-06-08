import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content : 'categories',
    articleSwitch:'all',
    homeSwitch:'mainSlider'
}



const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        setContent : (state,action) => {
            state.content = action.payload
        },
        setArticleSwitch : (state,action) => {
            state.articleSwitch = action.payload
        },
        setHomeSwitch : (state,action) => {
            state.homeSwitch = action.payload
        }
    }
})


export const {setContent , setArticleSwitch , setHomeSwitch} = dashboardSlice.actions;
export default dashboardSlice.reducer;