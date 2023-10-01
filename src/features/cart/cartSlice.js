import { createSlice } from "@reduxjs/toolkit";
import { getBaskets , addBasket , deleteBasket , getBasketsByUserId , addOrder , getOrderById } from "./action";
import { toast } from "react-toastify";
import { data } from "autoprefixer";

const initialState = {
    discount: "",
    loading:false,
    baskets:[],
    success:false,
    successOrder:false,
    orderProducts:[],
    order:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setDiscount : (state,action) => {
            state.discount = action.payload;
        },
    },
    extraReducers : (builder) => {
      builder
      .addCase(getBaskets.fulfilled, (state,action) => {
        state.baskets = action.payload;
      })
      .addCase(getBaskets.pending, (state,action) => {
      })
      .addCase(getBaskets.rejected, (state,action) => {
        console.error("error in getting baskets =>",action)
      })
      .addCase(getBasketsByUserId.fulfilled, (state,action) => {
        state.baskets = action.payload;
      })
      .addCase(getBasketsByUserId.pending, (state,action) => {
      })
      .addCase(getBasketsByUserId.rejected, (state,action) => {
        console.error("error in getting baskets by userId =>",action)
      })
      .addCase(addBasket.fulfilled, (state,action) => {
        state.loading = false;
        toast.success(action.payload.massage);
        state.success = !state.success;
        console.log(action)
      })
      .addCase(addBasket.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(addBasket.rejected, (state,action) => {
        state.loading = false;
        toast.info("این محصول در سبد خرید موجود است")
        console.log(action)
      })
      .addCase(deleteBasket.fulfilled, (state,action) => {
        toast.success(action.payload.massage)
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(deleteBasket.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(deleteBasket.rejected, (state,action) => {
        state.loading = false;
        console.log(action)
      })
      .addCase(addOrder.fulfilled, (state,action) => {
        state.loading = false;
        state.success = !state.success;
        state.successOrder = true;
      })
      .addCase(addOrder.pending, (state,action) => {
        state.loading = true;
        state.successOrder = false;
      })
      .addCase(addOrder.rejected, (state,action) => {
        state.loading = false;
        console.log(action)
      })
      .addCase(getOrderById.fulfilled, (state,action) => {
        state.orderProducts = action.payload.products;
        state.order = action.payload.order;
        state.loading = false;
        console.log(action)
      })
      .addCase(getOrderById.pending, (state,action) => {
        state.orderProducts = [];
        state.order = [];
        state.loading = true;
      })
      .addCase(getOrderById.rejected, (state,action) => {
        console.log(action)
        state.loading = false;
      })
    }
})

export const  {
    setCart,
    setDiscount
              } = cartSlice.actions;
export default cartSlice.reducer;