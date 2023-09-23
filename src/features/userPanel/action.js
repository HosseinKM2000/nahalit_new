import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios_config/axios";

export const updateUserInfo = createAsyncThunk("userPanel/updateUserInfo" , async ({userId,dataObj}) => {
    try{
        const [response1, response2] = await Promise.all([
            await instance.put(`/users/${userId}`,dataObj),
            await instance.get(`/users/show`)
        ]);
    
        return { res:response1.data,
                 newData:response2.data 
               };
    }
    catch(axiosError){
        let err = axiosError;
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
        }
      }
    }
})

export const changeUserPassword = createAsyncThunk("userPanel/changeUserPassword" , async (dataObj) => {
    const response = await instance.post(`/users/changePassword`,dataObj);
    const { data } = response;
    return data;
})

export const showUserInfo = createAsyncThunk("userPanel/showUserInfo" , async () => {
    const { data , status , request } = await instance.get(`/users/show`);
    console.log(status)
})