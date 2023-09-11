import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    addBlog,
    addGallery,
    addParentCategories,
    addProduct,
    addProject,
    deleteBlog,
    deleteProduct,
    addRole,
    deleteParentCategories,
    deleteUser,
    editBlog,
    editParentCategories,
    editProduct,
    editProject,
    deleteRole,
    updateRole,
    updateUser,
    getUserRole,
    getWorkSamples,
    getBlogs,
    getCategories,
    getProducts,
    getProjects,
    getRoleById,
    getRoles,
    getUsers
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
    products:[],
    projects:[],
    productsLoading:false,
    deleteProductSuccess:false,
    usersLoading:false,
    users:[],
    projectsLoading:false,
    blogsLoading : false,
    rolesLoading : false,
    blogsDeleteLoading : false,
    categories :[],
    blogs:[],
    categoriesLoading:false,
    categoriesError:'',
    addSuccess : false,
    scrollUp:false,
    deleteSuccess : false,
    editSuccess : false,
    articleLoading:false,
    workSamplesLoading:false,
    roles:[],
    permissions:[],
    userPermissions:[],
    permissionsForEdit:[],
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
            state.categories = action.payload;
        })
        .addCase(getCategories.pending, (state) => {
            state.categoriesLoading = true;
        })
        .addCase(getCategories.rejected, (state) => {
            state.categories = [];
            state.categoriesLoading = false;
            console.error("* error in getting categories *")
            state.categoriesError = 'خطا در دریافت دسته بندی ها';
        })


        //  add parent
        .addCase(addParentCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            if(action.payload === 200)
            {
                toast.success('دسته بندی با موفقیت اضافه شد')
            }
            state.addSuccess = !state.addSuccess;
        })
        .addCase(addParentCategories.pending, (state) => {
            state.categoriesLoading = true;
        })
        .addCase(addParentCategories.rejected, (state) => {
            toast.error('خطا در اضافه کردن دسته بندی')
            console.error("* error in adding category *")
            state.categoriesLoading = false;
        })


        //  delete parent
        .addCase(deleteParentCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            toast.success(action.payload)
            state.deleteSuccess = !state.deleteSuccess;
        })
        .addCase(deleteParentCategories.pending, (state) => {
            state.categoriesLoading = true;
        })
        .addCase(deleteParentCategories.rejected, (state,action) => {
            state.categoriesLoading = false;
            console.log("error in deleting category =>",action.payload)
            toast.error('ابتدا باید زیر شاخه ها را حذف کنید')
        })


        // edit parent
        .addCase(editParentCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            toast.success(action.payload)
            state.editSuccess = !state.editSuccess;
        })
        .addCase(editParentCategories.pending, (state,action) => {
            state.categoriesLoading = true;
        })
        .addCase(editParentCategories.rejected, (state,action) => {
            state.categoriesLoading = false;
            console.error("* error in editing category *")
            toast.error('خطا در ویرایش دسته بندی')
        })


        // get products
        .addCase(getProducts.fulfilled , (state,action) => {
            state.productsLoading = false;
            state.products = action.payload;
        })
        .addCase(getProducts.pending , (state,action) => {
            state.productsLoading = true;
        })
        .addCase(getProducts.rejected , (state,action) => {
            state.productsLoading = false;
            console.error("* error in getting products *")
            toast.error('خطا در بارگیری محصولات')
        })


        // add product
        .addCase(addProduct.fulfilled, (state,action) => {
            state.productsLoading = false;
            toast.success('محصول با موفقیت ذخیره شد');
        })
        .addCase(addProduct.pending, (state,action) => {
            state.productsLoading = true;
        })
        .addCase(addProduct.rejected, (state,action) => {
            state.productsLoading = false;
            console.log("error in adding product with this status =>", action)
            toast.error("خطا در ذخیره محصول")
        })


        // delete product
        .addCase(deleteProduct.fulfilled, (state,action) => {
            state.productsLoading = false;
            state.deleteProductSuccess = !state.deleteProductSuccess;
            toast.success('محصول با موفقیت حذف شد')
        })
        .addCase(deleteProduct.pending, (state,action) => {
            state.productsLoading = true;
        })
        .addCase(deleteProduct.rejected, (state,action) => {
            state.productsLoading = false;
            console.log("error in adding product with this status =>", action)
            toast.error("خطا در حذف محصول")
        })


        // edit product
        .addCase(editProduct.fulfilled,(state,action) => {
            state.productsLoading = false;
            console.log(action.payload)
            toast.success('ویرایش محصول با موفقیت انجام شد')
        })
        .addCase(editProduct.pending,(state,action) => {
            state.productsLoading = true;
        })
        .addCase(editProduct.rejected,(state,action) => {
            state.productsLoading = false;
            toast.error("خطا در ویرایش محصول")
            console.log(action)
        })


        // get projects
        .addCase(getProjects.fulfilled , (state,action) => {
            state.projectsLoading = false;
            state.projects = action.payload;
        })
        .addCase(getProjects.pending , (state,action) => {
            state.projectsLoading = true;
        })
        .addCase(getProjects.rejected , (state,action) => {
            state.projectsLoading = false;
            console.error('* error in getting project *');
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
            state.blogs = action.payload.data
        })
        .addCase(getBlogs.pending,(state,action) => {
            state.blogsLoading = true;
        })
        .addCase(getBlogs.rejected,(state,action) => {
            state.blogsLoading = false;
            console.error(action)
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
            console.log(action)
        })


        // delete blog
        .addCase(deleteBlog.fulfilled,(state,action) => {
            state.blogsDeleteLoading = false;
            state.articlesSwitch = 'all';
            toast.success('مقاله با موفقیت حذف شد')
        })
        .addCase(deleteBlog.pending,(state,action) => {
            state.blogsDeleteLoading = true;
        })
        .addCase(deleteBlog.rejected,(state,action) => {
            state.blogsDeleteLoading = false;
            toast.error('خطا در حذف مقاله')
        })


        // get roles
        .addCase(getRoles.fulfilled,(state,action) => {
            state.rolesLoading = false;
            state.roles = action.payload.roles
            state.permissions = action.payload.permissions
        })
        .addCase(getRoles.pending,(state,action) => {
            state.rolesLoading = true;
        })
        .addCase(getRoles.rejected,(state,action) => {
            state.rolesLoading = false;
            console.log("* error in getting roles *")
        })


        // add role
        .addCase(addRole.fulfilled,(state,action) => {
            state.rolesLoading = false;
            toast.success("نقش با موفقیت اضافه شد")
        })
        .addCase(addRole.pending,(state,action) => {
            state.rolesLoading = true;
        })
        .addCase(addRole.rejected,(state,action) => {
            state.rolesLoading = false;
            console.log("* error in getting roles *")
            toast.error('خطا در افزودن نقش')
        })


        // get roleById
        .addCase(getRoleById.fulfilled,(state,action) => {
            state.rolesLoading = false;
            state.permissionsForEdit = action.payload.permissions
        })
        .addCase(getRoleById.pending,(state,action) => {
            state.rolesLoading = true;
        })
        .addCase(getRoleById.rejected,(state,action) => {
            state.rolesLoading = false;
            console.log("error in getting role by id =>",action);
        })


        // get userRole
        .addCase(getUserRole.fulfilled,(state,action) => {
            let permissionsIds = action.payload.permissions.map(per => per.id);
            state.userPermissions =  permissionsIds;
        })
        .addCase(getUserRole.pending,(state,action) => {
        })
        .addCase(getUserRole.rejected,(state,action) => {
            console.log("error in getting user role =>",action);
        })


        // delete role
        .addCase(deleteRole.fulfilled,(state,action) => {
            state.rolesLoading = false;
            toast.success(action.payload)
        })
        .addCase(deleteRole.pending,(state,action) => {
            state.rolesLoading = true;
        })
        .addCase(deleteRole.rejected,(state,action) => {
            state.rolesLoading = false;
            toast.error("خطا در حذف نقش")
        })


        // update role
        .addCase(updateRole.fulfilled,(state,action) => {
            state.rolesLoading = false;
            toast.success("نقش با موفقیت ویرایش شد")
            console.log(action.payload)
        })
        .addCase(updateRole.pending,(state,action) => {
            state.rolesLoading = true;
        })
        .addCase(updateRole.rejected,(state,action) => {
            state.rolesLoading = false;
            toast.error("خطا در ویرایش نقش")
        })


        // get users
        .addCase(getUsers.fulfilled,(state,action) => {
            state.usersLoading = false;
            state.users = action.payload.users;
        })
        .addCase(getUsers.pending,(state,action) => {
            state.usersLoading = true;
        })
        .addCase(getUsers.rejected,(state,action) => {
            state.usersLoading = false;
            console.error(action)
        })


        // update user
        .addCase(updateUser.fulfilled,(state,action) => {
            state.usersLoading = false;
            console.log(action)
        })
        .addCase(updateUser.pending,(state,action) => {
            state.usersLoading = true;
        })
        .addCase(updateUser.rejected,(state,action) => {
            state.usersLoading = false;
            toast.error('خطا در ویرایش کاربر')
            console.log(action)
        })


        // delete user
        .addCase(deleteUser.fulfilled,(state,action) => {
            state.usersLoading = false;
            toast.success("کاربر با موفقیت حذف شد")
        })
        .addCase(deleteUser.pending,(state,action) => {
            state.usersLoading = true;
        })
        .addCase(deleteUser.rejected,(state,action) => {
            state.usersLoading = false;
            toast.error("خطا در حذف کاربر")
            console.log(action)
        })


        // get work-sample
        .addCase(getWorkSamples.fulfilled,(state,action) => {
            state.workSamplesLoading = false;
            console.log(action.payload)
        })
        .addCase(getWorkSamples.pending,(state,action) => {
            state.workSamplesLoading = true;
        })
        .addCase(getWorkSamples.rejected,(state,action) => {
            state.workSamplesLoading = false;
            toast.error('خطا در بارگیری نمونه کارها')
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