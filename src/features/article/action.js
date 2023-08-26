import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import instance from "../../axios_config/axios";

export const  getArticles = createAsyncThunk('articles/getArticles', async () => {
    const response = await instance.get("/blogs");
    const { data } = response;
    return data;
})