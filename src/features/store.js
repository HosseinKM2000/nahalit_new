import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./article/articleSlice";
import articelesPostReducer from './articleComments/articleCommentsSlice';
import newsSliceReducer from "./news/newsSlice";

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articelesPostReducer,
        news:newsSliceReducer
    }
})

export default store;