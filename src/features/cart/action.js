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
export const addOrder = createAsyncThunk("cart/addOrder" , async (dataObj) => {
    const response = await instance.post('/orders',dataObj);
    const { data } = response;
    return data;
    // try{
    //     const [response1, response2] = await Promise.all([
    //         await instance.post('/orders',dataObj),
    //         await instance.delete(`/baskets/${id}`)
    //     ]);
    
    //     return { res:response1.data,
    //              newData:response2.data 
    //            };
    // }
    // catch(axiosError){
    //     let err = axiosError;
    //     return {
    //         error: {
    //             status: err.response?.status,
    //             data: err.response?.data || err.massage,
    //     }
    //   }
    // }
})
export const getOrderById = createAsyncThunk("cart/getOrderById" , async (id) => {
    const response = await instance.get(`/orders/${id}`);
    const { data } = response
    return data;
})
