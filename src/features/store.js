import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./article/articleSlice";
import articelesPostReducer from './articleComments/articleCommentsSlice';
import newsSliceReducer from "./news/newsSlice";
import dashboardReducer from "./dashboard/dashboardSlice";
import productReducer from "./products/productSlice";

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articelesPostReducer,
        news:newsSliceReducer,
        dashboard:dashboardReducer,
        products:productReducer
    }
})

export default store;