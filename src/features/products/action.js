import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await axios.get('http://api.nahalit.ir/api/v1/products')
    const { data } = response;
    return data;
})