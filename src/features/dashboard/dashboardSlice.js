import { createSlice } from "@reduxjs/toolkit";
import { getCategories,
         addParentCategories,
         deleteParentCategories,
         editeParentCategories} from "./action";
import { toast } from "react-toastify";

const initialState = {
    content : 'categories',
    articlesSwitch:'all',
    homeSwitch:'mainSlider',
    productsSwitch:'all',
    categories :null,
    categoriesLoading:false,
    categoriesError:'',
    addSeccess : false,
    deleteSeccess : false,
    editeSeccess : false,
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
            let { key , value } = action.payload;
            switch(key)
            {
                case 'articles' : state.articlesSwitch = value;
                break;
                case 'products' : state.productsSwitch = value;
                break;
                case 'homePage' : state.homeSwitch = value;
                break;
                case 'categories' : state.categoriesSwitch = value;
                break
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
    },
    extraReducers: (builder) => {

        builder
        .addCase(getCategories.fulfilled , (state,action) => {
            state.categoriesLoading = false;
            state.categories = action.payload.data.categories;
        })
        .addCase(getCategories.pending, (state) => {
            state.categoriesLoading = true;
        })
        .addCase(getCategories.rejected, (state) => {
            state.categories = null
            state.categoriesLoading = false;
            state.categoriesError = 'error in get categories';
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
        //  delte parent
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
    }
})


export const { setContent,
               setSwitch,
               setSwitchCategories, 
               setSwitchCategories_2 } = dashboardSlice.actions;

export default dashboardSlice.reducer;