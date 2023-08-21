import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axios_config/axios";



// categories
export const getCategories = createAsyncThunk('dashboard/getCategories', async () => {
    const response = await  instance.get('/categories');
    const { data } = response;
    return data.categories
})

export const addParentCategories = createAsyncThunk('dashboard/addParentCategories', async (dataObj) => {
    const post = await instance.post('http://127.0.0.1:8000/api/v1/categories',dataObj);
    const { status } = post;
    return status;
})

export const deleteParentCategories = createAsyncThunk('dashboard/deleteParentCategories', async (id) => {
    const response = await instance.delete(`http://127.0.0.1:8000/api/v1/categories/${id}`) 
    const { data } = response;
    return data.massage;
})

export const editParentCategories = createAsyncThunk('dashboard/editParentCategories', async ({id,title,category_id}) => {
    const Edit = await instance.put(`http://127.0.0.1:8000/api/v1/categories/${id}`,{
        title,
        category_id
    });
    const { data } = Edit;
    return data.massage;
})



// products
export const getProducts = createAsyncThunk('dashboard/getProducts', async () => {
    const response = await instance.get('/products');
    const { data } = response;
    return data.data;
})

export const addProduct = createAsyncThunk('dashboard/addProduct', async (formData) => {
    const response = await instance.post('/products',formData);
    const { status } = response;
    return response;
})

export const deleteProduct = createAsyncThunk('dashboard/deleteProduct', async (id) => {

    const response = await instance.delete(`http://127.0.0.1:8000/api/v1/products/${id}`);

    return response;
})

export const editProduct = createAsyncThunk('dashboard/editProduct', async (id,newData) => {

    const response = await instance.put(`http://127.0.0.1:8000/api/v1/products/${id}`,newData);

    return response;
})



// projects
export const getProjects = createAsyncThunk('dashboard/getProjects', async () => {
    const response = await instance.get('/projects');
    const { data } = response;
    return data.data;
})

export const addProject = createAsyncThunk('dashboard/addProject', async (formData) => {
    const response = await instance.post('/projects',formData);
    return response;
})

export const deleteProject = createAsyncThunk('dashboard/deleteProject', async (id) => {
    const response = await instance.delete(`projects/${id}`);
    return response;
})

export const editProject = createAsyncThunk('dashboard/editProject', async (id,newData) => {
    const response = await instance.put(`/projects/${id}`,newData);
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

export const editDiscounts = createAsyncThunk('dashboard/getDiscounts', async ({id}) => {
    const response = await axios.put(`http://127.0.0.1:8000/api/v1/discounts/${id}`,{});
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

export const editGallery = createAsyncThunk('dashboard/getGalleries', async ({id,}) => {
    const response = await axios.put(`http://127.0.0.1:8000/api/v1/galleries/${id}`,{
    });

    return response;
})



// roles
export const getRoles = createAsyncThunk('dashboard/getRoles', async () => {
    const response = await instance.get('/roles');
    const { data } = response;
    return data;
})

export const getRoleById = createAsyncThunk('dashboard/getRoleById', async (id) => {
    const response = await instance.get(`/roles/${id}`);
    const { data } = response;
    return data;
})

export const addRole = createAsyncThunk('dashboard/addRole', async (formData) => {
    const response = await instance.post(`/roles`,formData);
    return response;
})

export const deleteRole = createAsyncThunk('dashboard/deleteRole', async (id) => {
    const response = await instance.delete(`/roles/${id}`);
    const { data } = response;
    return data.massage;
})

export const updateRole = createAsyncThunk('dashboard/updateRole', async ({id,formData}) => {
    const response = await instance.put(`/roles/${id}`,formData);
    return response;
})



// blogs
export const getBlogs = createAsyncThunk('dashboard/getBlogs' , async () => {
    const response = await instance.get('/blogs');
    return response;
})

export const addBlog = createAsyncThunk('dashboard/addBlog' , async (dataObj) => {
    const response = await instance.post('/blogs',dataObj);
    return response;
})

export const editBlog = createAsyncThunk('dashboard/editBlog' , async ({id,dataObj}) => {
    const response = await instance.put(`http://127.0.0.1:8000/api/v1/blogs/${id}`,dataObj);
    return response;
})

export const deleteBlog = createAsyncThunk('dashboard/deleteBlog' , async (id) => {
    const response = await instance.delete(`http://127.0.0.1:8000/api/v1/blogs/${id}`);
    return response;
})



// users
export const getUsers = createAsyncThunk('dashboard/getUsers', async () => {
    const response = await instance.get('/users');
    return response;
})
export const deleteUser = createAsyncThunk('dashboard/deleteUser', async (id) => {
    const response = await instance.delete(`/users/${id}`);
    return response;
})
