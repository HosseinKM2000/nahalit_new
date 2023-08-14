import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./article/articleSlice";
import articlesPostReducer from './articleComments/articleCommentsSlice';
import authenticationReducer from "./authentication/AuthenticationSlice";
import cartReducer from "./cart/cartSlice";
import dashboardReducer from "./dashboard/dashboardSlice";
import newsSliceReducer from "./news/newsSlice";
import productReducer from "./products/productSlice";
import searchReducer from "./search/searchSlice";

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articlesPostReducer,
        news:newsSliceReducer,
        dashboard:dashboardReducer,
        products:productReducer,
        authentication:authenticationReducer,
        cart:cartReducer,
        search:searchReducer
    }
})

export default store;