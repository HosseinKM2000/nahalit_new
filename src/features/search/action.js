import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios_config/axios";

export const searchBlogs = createAsyncThunk('search/searchBlogs', async (value) => {
     const response = await instance.get(`/blogs/search/${value}`);
     return response;
})

export const searchProducts = createAsyncThunk('search/searchProducts', async (value) => {
     const response = await instance.get(`/products/search/${value}`);
     return response;
})