import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../API/data";

const initialState = {
    products : products,
    goalProduct:''
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
        sortByLatest : (state) => {
            let newList = state.products.sort((a,b) => {
                let dateA = a.date.split('/');
                let dateB = b.date.split('/');

                dateA = dateA[0] + dateA[1] + dateA[2]; 
                dateB = dateB[0] + dateB[1] + dateB[2];

                return dateB - dateA;
            });
            state.products = newList;
        },
        sortByCheapest : (state) => {
            let newList = state.products.sort((a,b) => {
                return a.price - b.price;
            })
            state.products = newList;
        },
        sortByExpensive : (state) => {
            let newList = state.products.sort((a,b) => {
                return b.price - a.price;
            })
            state.products = newList;
        }
    }
})

export const { foundProduct , sortByLatest , sortByCheapest , sortByExpensive } = productsSlice.actions;
export default productsSlice.reducer;