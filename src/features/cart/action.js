import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios_config/axios";

export const getBaskets = createAsyncThunk('cart/getBaskets', async () => {
    const response = await instance.get('/baskets');
    const { data } = response;
    return data.data;
})
export const getBasketsByUserId = createAsyncThunk('cart/getBasketsByUserId', async (id) => {
    const response = await instance.get(`/baskets/${id}`);
    const { data } = response;
    return data.data;
})
export const addBasket = createAsyncThunk('cart/addBasket', async (dataObj) => {
    const response = await instance.post("/baskets",dataObj);
    const { data } = response;
    return data;
})
export const deleteBasket = createAsyncThunk('cart/deleteBasket', async (id) => {
    const response = await instance.delete(`/baskets/${id}`);
    const { data } = response;
    return data;
})