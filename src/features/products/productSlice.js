import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../API/data";
import { getProducts } from "./action";

const initialState = {
    products : [],
    goalProduct:'',
    isLoading:false,
    FilteredProducts:[]
}


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers : {
        setProducts : (state,action) => {
            state.products = action.payload
        },
        foundProduct : (state,action) =>
        {
            let title = action.payload;
            const target = state.products.find(item => item.title === title);
           state.goalProduct = target;
        },
        sortByAll : (state) => {
            state.FilteredProducts = state.products;
        },
        sortByLatest : (state) => {
            let newList = state.products.sort((a,b) => {
                let dateA = a.date.split('/');
                let dateB = b.date.split('/');

                dateA = dateA[0] + dateA[1] + dateA[2]; 
                dateB = dateB[0] + dateB[1] + dateB[2];

                return dateB - dateA;
            });
            state.FilteredProducts = newList;
        },
        sortByCheapest : (state) => {
            let newList = state.products.sort((a,b) => {
                return a.price - b.price;
            })
            state.FilteredProducts = newList;
        },
        sortByExpensive : (state) => {
            let newList = state.products.sort((a,b) => {
                return b.price - a.price;
            })
            state.FilteredProducts = newList;
        },
        sortByPriceRange : (state,action) => {
            let { minValue : minPrice , maxValue : maxPrice }  = action.payload;
            let newList = state.products.filter(product => {
                return product.price >= minPrice && product.price <= maxPrice
            });
            state.FilteredProducts = newList; 
        },
        sortByName : (state,action) => {
            let value = action.payload;
            if(value !== ''){
                let newList = state.products.filter(product => {
                    return product.title.includes(value)
                })
                state.FilteredProducts = newList;
            }else {
                state.FilteredProducts = state.products
            }
        },
        sortByCategory : (state,action) => {
            let ID = action.payload;
            let newList = state.products.filter(product => product.category_id === ID);
            state.FilteredProducts = newList
        },
        deleteAllFilters : (state) => {
            state.FilteredProducts = state.products;
        }
    },
    extraReducers : builder => {

        builder
        .addCase(getProducts.fulfilled , (state,action) => {
            state.isLoading = false;
            state.products = action.payload.data;
            state.FilteredProducts = action.payload.data;
        })
        .addCase(getProducts.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase(getProducts.rejected , (state,action) => {
            state.isLoading = false;
            console.log(action)
        })
    }
})

export const { foundProduct,
               sortByAll,
               sortByLatest,
               sortByCheapest,
               sortByExpensive,
               sortByPriceRange,
               sortByCategory,
               deleteAllFilters,
               sortByName } = productsSlice.actions;

export default productsSlice.reducer;