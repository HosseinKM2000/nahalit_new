import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(('authentication/register', async (dataObj) => {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/users',dataObj)
    
    return response
}))