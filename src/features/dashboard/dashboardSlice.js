import { createSlice } from "@reduxjs/toolkit";
import { getCategories,
         addParentCategories,
         deleteParentCategories,
         editeParentCategories,
         addChildrenCategories,} from "./action";
import { toast } from "react-toastify";

const initialState = {
    content : 'categories',
    articlesSwitch:'all',
    homeSwitch:'mainSlider',
    productsSwitch:'all',
    categoriesSwitch:{
        key:'PARENT',
        value:'',
        index:'',
        value_2:'',
        index_2:''
    },
    categories :null,
    categoriesLoading:false,
    categoriesError:'',
    addSeccess : false,
    deleteSeccess : false,
    editeSeccess : false,
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
        addParentCategory: (state,action) => {
            let cate =   
              {
                title:action.payload,
                children:[]
            }
            state.categories = [...state.categories,cate]
        },
        deleteParentCategory: (state,action) => {
            state.categories = state.categories.filter((cate,index) => index !== action.payload )
        },
        editeParentCategory: (state,action) => {
            let {index , value} = action.payload
            state.categories[index].title = value;
        },
        setSwitchCategories: (state,action) => {
            let { key , value , index } = action.payload;
            // let { key , title , id } = action.payload;
            state.categoriesSwitch = {key,value,index};
            // state.categoriesSwitch = {key,title,id};
        },
        setSwitchCategories_2: (state,action) => {
            let { key , value_2 , index_2 } = action.payload;
            state.categoriesSwitch = {key,value:state.categoriesSwitch.value,index:state.categoriesSwitch.index,value_2,index_2}
        },
        editeChildren_1Category: (state,action) => {
            let {index , value } = action.payload;
            state.categories[state.categoriesSwitch.index].children[index].title = value;
        },
        deleteChildren_1Category: (state,action) => {
           state.categories[state.categoriesSwitch.index].children = state.categories[state.categoriesSwitch.index].children.filter((cate,index) => index !== action.payload)
        },
        addChildren_1Category: (state,action) => {
            let cate = {
                        title:action.payload,
                        children:[]
                    }
                    

            state.categories[state.categoriesSwitch.index].children = [...state.categories[state.categoriesSwitch.index].children,cate]
        },
        addChildren_2Category: (state,action) => {
            let cate = action.payload
                    
            state.categories[state.categoriesSwitch.index].children[state.categoriesSwitch.index_2].children = [...state.categories[state.categoriesSwitch.index].children[state.categoriesSwitch.index_2].children,cate]
        },
        deleteChildren_2Category: (state,action) => {
            state.categories[state.categoriesSwitch.index].children[state.categoriesSwitch.index_2].children = state.categories[state.categoriesSwitch.index].children[state.categoriesSwitch.index_2].children.filter((cate,index) => index !== action.payload)
         },
         editeChildren_2Category: (state,action) => {
            let {index , value } = action.payload;
            state.categories[state.categoriesSwitch.index].children[state.categoriesSwitch.index_2].children[index] = value;
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
            toast.error('خطا در اضفه کردن دسته بندی')
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
        // first children method
        // .addCase(addChildrenCategories.fulfilled , (state,action) => {
        //     state.addPCategoriesLoading = false;
        //     console.log(action.payload)
        // })
        // .addCase(addChildrenCategories.pending, (state,action) => {
        //     state.addPCategoriesLoading = true;
        // })
        // .addCase(addChildrenCategories.rejected, (state,action) => {
        //     state.addPCategoriesError = action.payload;
        // })
        // .addCase(deleteFirstChildrenCategories.fulfilled , (state,action) => {
        //     state.deletePCategoriesLoading = false;
        //     console.log(action.payload)
        // })
        // .addCase(deleteFirstChildrenCategories.pending, (state,action) => {
        //     state.deletePCategoriesLoading = true;
        // })
        // .addCase(deleteFirstChildrenCategories.rejected, (state,action) => {
        //     state.deletePCategoriesError = action.payload;
        // })
        // .addCase(editeFirstChildrenCategories.fulfilled , (state,action) => {
        //     state.editePCategoriesLoading = false;
        //     console.log(action.payload)
        // })
        // .addCase(editeFirstChildrenCategories.pending, (state,action) => {
        //     state.editePCategoriesLoading = true;
        // })
        // .addCase(editeFirstChildrenCategories.rejected, (state,action) => {
        //     state.editePCategoriesError = action.payload;
        // })
    }
})


export const {setContent , setSwitch , addParentCategory , deleteParentCategory , addChildren_2Category , deleteChildren_2Category , editeChildren_2Category , editeParentCategory , setSwitchCategories , deleteChildren_1Category , editeChildren_1Category , addChildren_1Category , setSwitchCategories_2} = dashboardSlice.actions;
export default dashboardSlice.reducer;