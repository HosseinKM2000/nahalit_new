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
        }
    }
})

export const {foundProduct} = productsSlice.actions;
export default productsSlice.reducer;