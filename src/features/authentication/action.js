import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(('authentication/register', async () => {
    const response = await axios.post()
    
    return response
}))