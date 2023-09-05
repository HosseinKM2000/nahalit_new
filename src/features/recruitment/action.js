import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendRecruitment = createAsyncThunk('recruitment/sendRecruitment', async (dataObj) => {
     const response = await axios.post(`http://api.nahalit.ir/api/v1/recruitments`,dataObj);
     const { data } = response;
     return data;
})