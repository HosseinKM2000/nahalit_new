import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./article/articleSlice";
import articelesPostReducer from './articleComments/articleCommentsSlice';
import newsSliceReducer from "./news/newsSlice";
import dashboardReducer from "./dashboard/dashboardSlice";

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articelesPostReducer,
        news:newsSliceReducer,
        dashboard:dashboardReducer
    }
})

export default store;