import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content : 'categories',
    articlesSwitch:'all',
    homeSwitch:'mainSlider',
    productsSwitch:'all',
    categoriesSwitch:{
        key:'PARENT',
        value:''
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
                children:[
                    {
                        title:'',
                        children:[]
                    },
                    
                ]
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
            let { key , value } = action.payload;
            state.categoriesSwitch = {key,value};
        }
    }
})


export const {setContent , setSwitch , addParentCategory , deleteParentCategory , editeParentCategory , setSwitchCategories} = dashboardSlice.actions;
export default dashboardSlice.reducer;