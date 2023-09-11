import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios_config/axios";

export const updateUserInfo = createAsyncThunk("userPanel/updateUserInfo" , async ({userId,dataObj}) => {
    const response = await instance.put(`/users/${userId}`,dataObj);
    const { data } = response;
    return data;
})

export const changeUserPassword = createAsyncThunk("userPanel/changeUserPassword" , async (dataObj) => {
    const response = await instance.post(`/users/changePassword`,dataObj);
    const { data } = response;
    return data;
})