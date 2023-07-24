import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./article/articleSlice";
import articelesPostReducer from './articleComments/articleCommentsSlice';
import authenticationReducer from "./authentication/AuthenticationSice";
import dashboardReducer from "./dashboard/dashboardSlice";
import newsSliceReducer from "./news/newsSlice";
import productReducer from "./products/productSlice";

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articelesPostReducer,
        news:newsSliceReducer,
        dashboard:dashboardReducer,
        products:productReducer,
        authentication:authenticationReducer
    }
})

export default store;