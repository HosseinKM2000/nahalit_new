import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axios_config/axios";


export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await axios.get('http://api.nahalit.ir/api/v1/products');
    const { data } = response;
    return data;
})
export const getTags = createAsyncThunk("products/getTags" , async () => {
    const response = await instance.get(`/tags`);
    const { data } = response;
    return data;
})