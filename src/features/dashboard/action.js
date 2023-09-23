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
    const post = await instance.post('/categories',dataObj);
    const { status } = post;
    return status;
})

export const deleteParentCategories = createAsyncThunk('dashboard/deleteParentCategories', async (id) => {
    const response = await instance.delete(`/categories/${id}`) 
    const { data } = response;
    return data.massage;
})

export const editParentCategories = createAsyncThunk('dashboard/editParentCategories', async ({id,title,category_id}) => {
    const Edit = await instance.put(`/categories/${id}`,{
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
})

export const deleteProduct = createAsyncThunk('dashboard/deleteProduct', async (id) => {
    const response = await instance.delete(`/products/${id}`);
    return response;
})

export const editProduct = createAsyncThunk('dashboard/editProduct', async ({id,formdata}) => {
    const response = await instance.post(`/products/${id}?_method=PATCH`,formdata);
    const { status } = response;
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
    const response = await axios.get(`/discounts`);
    return response;
})

export const addDiscount = createAsyncThunk('dashboard/addDiscount', async (data) => {

    const response = await axios.post(`/discounts`,{
        ...data
    });
    return response;
})

export const deleteDiscounts = createAsyncThunk('dashboard/deleteDiscounts', async (id) => {
    const response = await axios.delete(`/discounts/${id}`);
    return response;
})

export const editDiscounts = createAsyncThunk('dashboard/getDiscounts', async ({id}) => {
    const response = await axios.put(`/discounts/${id}`,{});
    return response;
})



// gallery
export const getGalleries = createAsyncThunk('dashboard/getGalleries', async () => {
    const response = await axios.get(`/galleries`);
    return response;
})

export const addGallery = createAsyncThunk('dashboard/addGalleries', async (data) => {
    const response = await axios.post(`/galleries`,{
        ...data
    });

    return response;
})

export const deleteGallery = createAsyncThunk('dashboard/deleteGalleries', async (id) => {

    const response = await axios.delete(`/galleries/${id}`);

    return response;
})

export const getGalleryById = createAsyncThunk('dashboard/getGalleryById', async (id) => {
    const response = await instance.get(`/galleries/${id}`);
    const { data } = response
    return data;
})

export const editGallery = createAsyncThunk('dashboard/getGalleries', async ({id,}) => {
    const response = await axios.put(`/galleries/${id}`,{
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

export const getUserRole = createAsyncThunk('dashboard/getUserRole', async (id) => {
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
    const { data } = response;
    return data;
})

export const addBlog = createAsyncThunk('dashboard/addBlog' , async (dataObj) => {
    const response = await instance.post('/blogs',dataObj);
    return response;
})

export const editBlog = createAsyncThunk('dashboard/editBlog' , async ({id,dataObj}) => {
    const response = await instance.put(`/blogs/${id}`,dataObj);
    return response;
})

export const deleteBlog = createAsyncThunk('dashboard/deleteBlog' , async (id) => {
    const response = await instance.delete(`/blogs/${id}`);
    return response;
})



// users
export const getUsers = createAsyncThunk('dashboard/getUsers', async () => {
    const response = await instance.get('/users');
    const { data } = response;
    return data;
})
export const updateUser = createAsyncThunk('dashboard/updateUser', async (id,dataObj) => {
    const response = await instance.put(`/users/${id}`,dataObj);
    const { data } = response;
    return data;
})
export const deleteUser = createAsyncThunk('dashboard/deleteUser', async (id) => {
    const response = await instance.delete(`/users/${id}`);
    return response;
})



export const getWorkSamples = createAsyncThunk('dashboard/getWorkSamples' , async () => {
    const response = await instance.get('/work-sample');
    return response;
})



// seller
export const getSellers = createAsyncThunk("dashboard/getSellers" , async () => {
    const response = await instance.get('/sellers');
    const { data } = response;
    return data;
})