import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../../API/data";
import { toast } from "react-toastify";
import { getArticles } from "./action";

const initialState =
{
    articles:[],
    goalArticle:'',
    isLoading:false,
    shortLink:window.location.href,
}

function foundArticleAction(state,action)
{
    let title = action.payload;
    const target = state.articles.find(item => item.title === title);
    state.goalArticle = target;
}

function copyLinkAction(state,action)
{
    navigator.clipboard.writeText(state.shortLink);
    toast.success('لینک کپی شد' , {
        position: "top-center",
    })
}

const articlesSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{
        foundArticleAction,
        copyLinkAction,
    },
    extraReducers : (builder) => {
        builder
        .addCase(getArticles.fulfilled, (state,action) => {
            state.articles = action.payload.data;
            state.isLoading = false;
        })
        .addCase(getArticles.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(getArticles.rejected, (state,action) => {
            state.isLoading = false;
        })
    }
})

export const {
        foundArticleAction: foundArticle,
        copyLinkAction : copyLink,
     } = articlesSlice.actions;

export default articlesSlice.reducer;