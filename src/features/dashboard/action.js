import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// categories
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
// products
export const getProducts = createAsyncThunk('dashboard/getProducts', async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');

    return response;
})

export const addProduct = createAsyncThunk('dashboard/addProduct', async (data) => {

    const response = await axios.post(`http://127.0.0.1:8000/api/v1/products`,{
        ...data
    });

    return response;
})

export const deleteProduct = createAsyncThunk('dashboard/deleteProduct', async (id) => {

    const response = await axios.delete(`http://127.0.0.1:8000/api/v1/products/${id}`);

    return response;
})

export const editeProduct = createAsyncThunk('dashboard/editeProduct', async (id,newData) => {

    const response = await axios.put(`http://127.0.0.1:8000/api/v1/products/${id}`,{
        ...newData
    });

    return response;
})

// discount
export const getDiscounts = createAsyncThunk('dashboard/getDiscounts', async () => {

    const response = await axios.get(`http://127.0.0.1:8000/api/v1/discounts`);

    return response;
})

export const addDiscount = createAsyncThunk('dashboard/addDiscount', async (data) => {

    const response = await axios.post(`http://127.0.0.1:8000/api/v1/discounts`,{
        ...data
    });

    return response;
})

export const deleteDiscounts = createAsyncThunk('dashboard/deleteDiscounts', async (id) => {

    const response = await axios.delete(`http://127.0.0.1:8000/api/v1/discounts/${id}`);

    return response;
})

export const editeDiscounts = createAsyncThunk('dashboard/getDiscounts', async ({id,}) => {

    const response = await axios.put(`http://127.0.0.1:8000/api/v1/discounts/${id}`,{

    });

    return response;
})

// gallery
export const getGalleries = createAsyncThunk('dashboard/getGalleries', async () => {

    const response = await axios.get(`http://127.0.0.1:8000/api/v1/galleries`);

    return response;
})

export const addGallery = createAsyncThunk('dashboard/addGalleries', async (data) => {

    const response = await axios.post(`http://127.0.0.1:8000/api/v1/galleries`,{
        ...data
    });

    return response;
})

export const deleteGallery = createAsyncThunk('dashboard/deleteGalleries', async (id) => {

    const response = await axios.delete(`http://127.0.0.1:8000/api/v1/galleries/${id}`);

    return response;
})

export const getOneGallery = createAsyncThunk('dashboard/getOneGalleries', async ({id,}) => {

    const response = await axios.get(`http://127.0.0.1:8000/api/v1/galleries/${id}`);

    return response;
})

export const editeGallery = createAsyncThunk('dashboard/getGalleries', async ({id,}) => {

    const response = await axios.put(`http://127.0.0.1:8000/api/v1/galleries/${id}`,{
   
    });

    return response;
})
// roles
export const addRole = createAsyncThunk('dashboard/addRole', async ({formData}) => {
    const response = await axios.post(``)
    
    return response
})