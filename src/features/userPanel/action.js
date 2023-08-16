import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios_config/axios";

export const updateUser = createAsyncThunk("userPanel/updatePanel" , async (dataObj) => {
    const response = await instance.put("/users",dataObj);
    return response;
})