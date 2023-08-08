import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    addBlog,
    addGallery,
    addParentCategories,
    addProduct,
    addProject,
    deleteBlog,
    deleteParentCategories,
    editBlog,
    editProduct,
    editProject,
    editeParentCategories,
    getBlogs,
    getCategories,
    getPermissions,
    getProducts,
    getProjects
} from "./action";

const initialState = {
    content : 'categories',
    articlesSwitch:'all',
    gallerySwitch:'all',
    productsSwitch:'all',
    rolesSwitch:'all',
    workSampleSwitch:'all',
    projectSwitch:'all',
    discountSwitch:'all',
    productId:null,
    products:null,
    productsLoading:false,
    projectsLoading:false,
    blogsLoading : false,
    permissionsLoading : false,
    blogsDeleteLoading : false,
    categories :null,
    blogs:[],
    categoriesLoading:false,
    categoriesError:'',
    addSeccess : false,
    scrollUp:false,
    deleteSeccess : false,
    editeSeccess : false,
    articleLoading:false,
    categoriesSwitch:
    {
        key:'PARENT',
        title:'',
        id:'',
        title_2:'',
        id_2:''
    }
}

const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        setContent : (state,action) => {
            state.content = action.payload
        },
        setSwitch : (state,action) => {
            let { key , value , id } = action.payload;
            switch(key)
            {
                case 'articles' : {
                    state.articlesSwitch = value
                    state.articleId = id
                }
                break;
                case 'products' : 
                {
                    state.productsSwitch = value
                    state.productId = id
                }
                break;
                case 'categories' : state.categoriesSwitch = value;
                break;
                case 'gallery' : {
                    state.gallerySwitch = value;
                    state.galleryId = id;
                }
                break;
                case 'roles' : state.rolesSwitch = value;
                break;
                case 'workSample' : state.workSampleSwitch = value;
                break;
                case 'projects' : state.projectSwitch = value;
                break;
                case 'discount' : state.discountSwitch = value;
                break;
                default : console.log('non value')
            }
        },
        setSwitchCategories: (state,action) => {
            let { key , title , id } = action.payload;
            // let { key , title , id } = action.payload;
            state.categoriesSwitch = {key,title,id};
            // state.categoriesSwitch = {key,title,id};
        },
        setSwitchCategories_2: (state,action) => {
            let { key , title_2 , id_2 } = action.payload;
            state.categoriesSwitch = {key,title:state.categoriesSwitch.title,id:state.categoriesSwitch.id,title_2,id_2}
        },
        setScrollUp: (state,action) => {
            state.scrollUp = !state.scrollUp
        },
      },
    extraReducers: (builder) => {

        builder
        // get categories
        .addCase(getCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            state.categories = action.payload.data.category === undefined ? null : [{id:1,category_id:null,title:"محصولات"},{id:2,category_id:null,title:"خدمات"},{id:3,category_id:null,title:"نمونه کارها"},{id:4,category_id:null,title:"مقالات"}];
            console.log(action.payload.data.category)
        })
        .addCase(getCategories.pending, (state) => {
            state.categoriesLoading = true;
        })
        .addCase(getCategories.rejected, (state) => {
            state.categories = null
            state.categoriesLoading = false;
            state.categoriesError = 'خطا در دریافت دسته بندی ها';
        })
        //  add parent
        .addCase(addParentCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            if(action.payload.status === 200)
            {
                toast.success('دسته بندی با موفقیت اضافه شد')
            }
            state.addSeccess = !state.addSeccess;
        })
        .addCase(addParentCategories.pending, (state,action) => {
        })
        .addCase(addParentCategories.rejected, (state,action) => {
            toast.error('خطا در اضافه کردن دسته بندی')
            state.categoriesLoading = false;
        })
        //  delete parent
        .addCase(deleteParentCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            toast.success(action.payload.data.massage)
            state.deleteSeccess = !state.deleteSeccess;
        })
        .addCase(deleteParentCategories.pending, (state,action) => {
        })
        .addCase(deleteParentCategories.rejected, (state,action) => {
            state.categoriesLoading = false;
            toast.error('ابتدا باید زیر شاخه ها را حذف کنید')
        })
        // edite parent
        .addCase(editeParentCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            toast.success(action.payload.data.massage)
            state.editeSeccess = !state.editeSeccess;
        })
        .addCase(editeParentCategories.pending, (state,action) => {
        })
        .addCase(editeParentCategories.rejected, (state,action) => {
            state.categoriesLoading = false;
            toast.error('خطا در ویرایش دسته بندی')
        })
        // get products
        .addCase(getProducts.fulfilled , (state,action) => {
            state.productsLoading = false;
            // state.products = action.payload.data.data;
            state.products = [];
        })
        .addCase(getProducts.pending , (state,action) => {
            state.productsLoading = true;
        })
        .addCase(getProducts.rejected , (state,action) => {
            state.productsLoading = false;
            toast.error('خطا در بارگیری محصولات')
        })
        // add product
        .addCase(addProduct.fulfilled, (state,action) => {
            state.productsLoading = false;
            toast.success('محصول با موفقیت ذخیره شد')
        })
        .addCase(addProduct.pending, (state,action) => {
            state.productsLoading = true;
        })
        .addCase(addProduct.rejected, (state,action) => {
            state.productsLoading = false;
            console.log(action.payload)
            toast.error("خطا در ذخیره محصول")
        })
        // edit product
        .addCase(editProduct.fulfilled,(state,action) => {
            state.productsLoading = false;
            toast.success('ویرایش محصول با موفقیت انجام شد')
        })
        .addCase(editProduct.pending,(state,action) => {
            state.productsLoading = true;
        })
        .addCase(editProduct.rejected,(state,action) => {
            state.productsLoading = false;
            toast.error("خطا در ویرایش محصول")
        })
        // get projects
        .addCase(getProjects.fulfilled , (state,action) => {
            state.projectsLoading = false;
            // state.products = action.payload.data.data;
            state.products = [];
        })
        .addCase(getProjects.pending , (state,action) => {
            state.projectsLoading = true;
        })
        .addCase(getProjects.rejected , (state,action) => {
            state.projectsLoading = false;
            toast.error('خطا در بارگیری پروژه ها')
        })
        // add projects
        .addCase(addProject.fulfilled, (state,action) => {
            state.projectsLoading = false;
            toast.success('پروژه با موفقیت ذخیره شد')
        })
        .addCase(addProject.pending, (state,action) => {
            state.projectsLoading = true;
        })
        .addCase(addProject.rejected, (state,action) => {
            state.projectsLoading = false;
            console.log(action.payload)
            toast.error("خطا در ذخیره پروژه")
        })
        // edit projects
        .addCase(editProject.fulfilled,(state,action) => {
            state.projectsLoading = false;
            toast.success('ویرایش پروژه با موفقیت انجام شد')
        })
        .addCase(editProject.pending,(state,action) => {
            state.projectsLoading = true;
        })
        .addCase(editProject.rejected,(state,action) => {
            state.projectsLoading = false;
            toast.error("خطا در ویرایش پروژه")
        })
        // add gallery
        .addCase(addGallery.fulfilled,(state,action) => {
            if(action.payload.status === 200)
            {
                toast.success('گالری ذخیره شد')
            }
        })
        .addCase(addGallery.rejected, (state,action) => {
                toast.error("گالری ذخیره نشد")
        })
        // get blogs
        .addCase(getBlogs.fulfilled,(state,action) => {
            state.blogsLoading = false;
            state.blogs = action.payload.data.data
        })
        .addCase(getBlogs.pending,(state,action) => {
            state.blogsLoading = true;
        })
        .addCase(getBlogs.rejected,(state,action) => {
            state.blogsLoading = false;
            toast.error("خطا در بارگیری مقاله ها")
        })
        // add blog
        .addCase(addBlog.fulfilled,(state,action) => {
            state.blogsLoading = false;
            toast.success('مقاله با موفقیت ذخیره شد')
        })
        .addCase(addBlog.pending,(state,action) => {
            state.blogsLoading = true;
        })
        .addCase(addBlog.rejected,(state,action) => {
            state.blogsLoading = false;
            toast.error('خطا در ذخیره مقاله')
        })
        // edit blog
        .addCase(editBlog.fulfilled,(state,action) => {
            state.blogsLoading = false;
            toast.success('مقاله با موفقیت ویرایش شد')
        })
        .addCase(editBlog.pending,(state,action) => {
            state.blogsLoading = true;
        })
        .addCase(editBlog.rejected,(state,action) => {
            state.blogsLoading = false;
            toast.error('خطا در ویرایش مقاله')
        })
        // delete blog
        .addCase(deleteBlog.fulfilled,(state,action) => {
            state.blogsDeleteLoading = false;
            state.articlesSwitch = 'all'
            toast.success('مقاله با موفقیت حذف شد')
        })
        .addCase(deleteBlog.pending,(state,action) => {
            state.blogsDeleteLoading = true;
        })
        .addCase(deleteBlog.rejected,(state,action) => {
            state.blogsDeleteLoading = false;
            toast.error('خطا در حذف مقاله')
        })
        // get permissions
        .addCase(getPermissions.fulfilled,(state,action) => {
            state.permissionsLoading = false;
            console.log(action.payload)
        })
        .addCase(getPermissions.pending,(state,action) => {
            state.permissionsLoading = true;
        })
        .addCase(getPermissions.rejected,(state,action) => {
            state.permissionsLoading = false;
            toast.error('خطا در بارگیری وظایف')
            console.log(action)
        })
    }
})


export const { setContent,
               setSwitch,
               setSwitchCategories, 
               setSwitchCategories_2,
               setScrollUp } = dashboardSlice.actions;

export default dashboardSlice.reducer;