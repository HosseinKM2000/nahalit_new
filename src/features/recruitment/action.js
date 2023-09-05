import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendRecruitment = createAsyncThunk('recruitment/sendRecruitment', async (value) => {
     const response = await axios.get(`http://api.nahalit.ir/api/v1/recruitment`);
     return response;
})