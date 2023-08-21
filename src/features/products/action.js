import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios_config/axios";


export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await instance.get('/products')
    const { data } = response;
    return data;
})