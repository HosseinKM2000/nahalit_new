import { createSlice } from "@reduxjs/toolkit";

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
    categories :[
        {
            title:'محصولات',
            children:[
                {
                    title:'سایت های آماده',
                    children:["سایت آماده لاراول"]
                },
                {
                    title:'اسکریپت ها',
                    children:["اسکرپیت لاراول"]
                },
                
            ]
        },
        {
            title:'ثبت سفارش',
            children:[]
        },
        {
            title:'بلاگ',
            children:[]
        },
        {
            title:'نمونه کارها',
            children:[
                {
                    title:'نمونه کار پریمیر',
                    children:[]
                },
                {
                    title:'نمونه کار طراحی سایت',
                    children:[]
                },
                {
                    title:'نمونه کار گرافیک',
                    children:["نمونه کار موشن گرافیک","نمونه کار لوگو","نمونه کار بروشور"]
                }
            ]
        },
        {
            title:'آموزش ورود',
            children:[]
        },
        {
            title:'استخدام',
            children:[]
        },
        {
            title:'خدمات ما',
            children:[
                {
                    title:'فروش قالب سایت',
                    children:[]
                },
                {
                    title:'موشن گرافیک',
                    children:[]
                },
                {
                    title:'خدمات گرافیک',
                    children:[]
                },
                {
                    title:'اپلیکیشن موبایل',
                    children:[]
                }
            ]
        },
        {
            title:'تماس با ما',
            children:[]
        }
    ]
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
            state.categoriesSwitch = {key,value,index};
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
    }
})


export const {setContent , setSwitch , addParentCategory , deleteParentCategory , addChildren_2Category , deleteChildren_2Category , editeChildren_2Category , editeParentCategory , setSwitchCategories , deleteChildren_1Category , editeChildren_1Category , addChildren_1Category , setSwitchCategories_2} = dashboardSlice.actions;
export default dashboardSlice.reducer;