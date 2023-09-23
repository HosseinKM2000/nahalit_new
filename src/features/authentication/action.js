import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios, AxiosError } from "axios";
import instance from "../../axios_config/axios";

export const register = createAsyncThunk('authentication/register', async (dataObj) => {
    const response = await axios.post('http://api.nahalit.ir/api/v1/users/register',dataObj)
    const { data } = response;
    return data;
})

export const login = createAsyncThunk('authentication/login', async (dataObj) => {
    const response = await axios.post('http://api.nahalit.ir/api/v1/users/login',dataObj)
    const { data } = response;
    return data;
})

export const sendCode = createAsyncThunk('authentication/sendCode', async () => {
    const response = await instance.post('/sms/sendVerify');
})

// export const login = createAsyncThunk('authentication/login', async (dataObj) => {
//     try {
//         const result = await axios.post('http://api.nahalit.ir/api/v1/users/login',dataObj)
//         return { data: result.data }
//     } catch (axiosError) {
//         let err = axiosError
//         return {
//             error: {
//                 status: err.response?.status,
//                 data: err.response?.data || err.massage,
//             },
//         }
//     }
// })