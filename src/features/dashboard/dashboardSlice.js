import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content : 'categories',
    articlesSwitch:'all',
    homeSwitch:'mainSlider',
    productsSwitch:'all'
}



const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        setContent : (state,action) => {
            state.content = action.payload
        },
        setSwitch : (state,action) => {
            let { key , value } = action.payload;
            switch(key)
            {
                case 'articles' : state.articlesSwitch = value;
                break;
                case 'products' : state.productsSwitch = value;
                break;
                case 'homePage' : state.homeSwitch = value;
                break;
                default : console.log('non value')
            }
        },
    }
})


export const {setContent , setSwitch} = dashboardSlice.actions;
export default dashboardSlice.reducer;