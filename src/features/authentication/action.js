import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axios_config/axios";

export const register = createAsyncThunk('authentication/register', async (dataObj) => {
        try {
        const response = await axios.post('http://api.nahalit.ir/api/v1/users/register',dataObj)
        return { data: response.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
            },
        }
    }
})

export const login = createAsyncThunk('authentication/login', async (dataObj) => {
        try {
        const response = await axios.post('http://api.nahalit.ir/api/v1/users/login',dataObj)
        return { data: response.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
            },
        }
    }
})

export const sendCode = createAsyncThunk('authentication/sendCode', async () => {
    try {
        const response = await instance.post('/sms/sendVerify');
        return { data: response.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
            }
        }
    }
});

export const forgetPassword = createAsyncThunk('authentication/forgetPassword', async (dataObj) => {
    try {
        const response = await axios.post("http://api.nahalit.ir/api/v1/users/doChangePassword",dataObj);
        return { data: response.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
            }
        }
    }
})