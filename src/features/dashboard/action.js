import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk('dashboard/getCategories', async () => {
    
    const response = await  axios.get('http://127.0.0.1:8000/api/v1/categories');

    return response;

})

export const addParentCategories = createAsyncThunk('dashboard/addParentCategories', async ({title,category_id}) => {

    const post = await axios.post('http://127.0.0.1:8000/api/v1/categories',{
        title,
        category_id ,
    })
    
    return post;
})

export const deleteParentCategories = createAsyncThunk('dashboard/deleteParentCategories', async (id) => {

    const Delete = await axios.delete(`http://127.0.0.1:8000/api/v1/categories/${id}`)
    
    return Delete;
})

export const editeParentCategories = createAsyncThunk('dashboard/editeParentCategories', async ({id,title,category_id}) => {

    const Edite = await axios.put(`http://127.0.0.1:8000/api/v1/categories/${id}`,{
        title,
        category_id
    });
    console.log('edite')
    return Edite;
})