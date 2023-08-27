import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk('authentication/register', async (dataObj) => {
    const response = await axios.post('https://api.nahalit.ir/api/v1/users/register',dataObj)
    const { data } = response;
    return data;
})

export const login = createAsyncThunk('authentication/login', async (dataObj) => {
    const response = await axios.post('https://api.nahalit.ir/api/v1/users/login',dataObj)
    const { data } = response;
    return data;
})