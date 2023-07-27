import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk('dashboard/getCategories', async () => {
    
    const categories =  axios.get('http://127.0.0.1:8000/api/v1/categories')
    .then(res => res.data)
    .catch(err => err.message)
    return categories;
})

export const addParentCategories = createAsyncThunk('dashboard/addParentCategories', async (title) => {

    const post = axios.post('http://127.0.0.1:8000/api/v1/categories',{
        title,
        category_id : null,
    })
    .then(res => res)
    .catch(err => err)
    
    return post;
})

export const deleteParentCategories = createAsyncThunk('dashboard/deleteParentCategories', async (id) => {

    const Delete = axios.delete(`http://127.0.0.1:8000/api/v1/categories/${id}`)
    .then(res => res)
    .catch(err => err)
    
    return Delete;
})

export const editeParentCategories = createAsyncThunk('dashboard/editeParentCategories', async ({id,value}) => {

    const Edite = axios.put(`http://127.0.0.1:8000/api/v1/categories/${id}`,{
        title:value,
        category_id:null
    })
    .then(res => res)
    .catch(err => err)
    
    return Edite;
})

export const addFirstChildrenCategories = createAsyncThunk('dashboard/addFirstChildrenCategories', async (title,category_id) => {

    const post = axios.post('http://127.0.0.1:8000/api/v1/categories',{
        title,
        category_id,
    })
    .then(res => res)
    .catch(err => err)
    
    return post;
})

export const addChildrenCategories = createAsyncThunk('dashboard/addChildrenCategories', async (title,category_id) => {

    const post = axios.post('http://127.0.0.1:8000/api/v1/categories',{
        title,
        category_id,
    })
    .then(res => res)
    .catch(err => err)
    
    return post;
})