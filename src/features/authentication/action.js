import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk('authentication/register', async (dataObj) => {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/users/register',dataObj)
    const { data } = response;
    return data;
})

export const login = createAsyncThunk('authentication/login', async (dataObj) => {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/users/login',dataObj)
    return response
})