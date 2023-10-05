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
    return data;
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
    return status;
})



// projects
export const getProjects = createAsyncThunk('dashboard/getProjects', async () => {
    const response = await instance.get('/projects');
    const { data } = response;
    return data.data;
});

export const addProject = createAsyncThunk('dashboard/addProject', async (dataObj) => {
    const response = await instance.post('/projects',dataObj);
    const { data } = response;
    return data;
});

export const editProject = createAsyncThunk('dashboard/editProject', async ({id,dataObj}) => {
    const response = await instance.put(`/projects/${id}`,dataObj);
    const { data } = response;
    return data;
});



// discount
export const addDiscount = createAsyncThunk('dashboard/addDiscount', async ({id,value}) => {
    const response = await instance.post(`/discounts/${id}`,{value});
    const { data } = response;
    return data;
})

export const deleteDiscount = createAsyncThunk('dashboard/deleteDiscount', async (id) => {
    const response = await instance.delete(`/discounts/${id}`);
    const { data } = response;
    return data;
})

export const editDiscount = createAsyncThunk('dashboard/getDiscount', async ({productId,discountValue}) => {
    const response = await instance.patch(`/discounts/${productId}`,{value:discountValue});
    const { data } = response;
    return data;
})



// gallery
export const getGalleries = createAsyncThunk('dashboard/getGalleries', async () => {
    const response = await axios.get(`/galleries`);
    return response;
})

export const addGallery = createAsyncThunk('dashboard/addGallery', async ({id,formdata}) => {
    const response = await instance.post(`/galleries/${id}`,formdata)
    let { status } = response;
    return status;
})

export const deleteGallery = createAsyncThunk('dashboard/deleteGallery', async (id) => {
    const response = await instance.delete(`/galleries/${id}`);
    const {data} = response;
    return data;
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


// work_samples
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
export const deleteSeller = createAsyncThunk("dashboard/deleteSeller" , async (id) => {
    const response = await instance.delete(`/sellers/${id}`);
    const { data } = response;
    return data;
})
export const addSeller = createAsyncThunk("dashboard/addSeller" , async (dataObj) => {
    const response = await instance.post(`/sellers`,dataObj);
    const { data } = response;
    return data;
})



// orders
export const getOrders = createAsyncThunk("dashboard/getOrders" , async () => {
    const response = await instance.get('/orders');
    const { data } = response;
    return data;
})



// coupons
export const getCoupons = createAsyncThunk("dashboard/getCoupons" , async () => {
    const response = await instance.get(`/coupons`);
    const { data } = response;
    return data;
})
export const addCoupon = createAsyncThunk("dashboard/addCoupon" , async (dataObj) => {
    const response = await instance.post(`/coupons`,dataObj);
    const { data } = response;
    return data;
})
export const deleteCoupon = createAsyncThunk("dashboard/deleteCoupon" , async (id) => {
    const response = await instance.delete(`/coupons/${id}`);
    const { data } = response;
    return data;
})
export const editCoupon = createAsyncThunk("dashboard/editCoupon" , async ({id,dataObj}) => {
    const response = await instance.put(`/coupons/${id}`,dataObj);
    const { data } = response;
    return data;
})