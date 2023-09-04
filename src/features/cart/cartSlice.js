import { createSlice } from "@reduxjs/toolkit";
import { getBaskets , addBasket , deleteBasket , getBasketsByUserId } from "./action";
import { toast } from "react-toastify";

const initialState = {
    discount: "",
    loading:false,
    baskets:[],
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
        console.log(action.payload);
      })
      .addCase(getBasketsByUserId.pending, (state,action) => {
      })
      .addCase(getBasketsByUserId.rejected, (state,action) => {
        console.error("error in getting baskets by userId =>",action)
      })
      .addCase(addBasket.fulfilled, (state,action) => {
        state.loading = false;
        toast.success("محصول به سبد خرید اضافه شد")
      })
      .addCase(addBasket.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(addBasket.rejected, (state,action) => {
        state.loading = false;
        toast.error("خطا در اضافه کردن محصول به سبد خرید")
      })
      .addCase(deleteBasket.fulfilled, (state,action) => {
        toast.success("محصول با موفقیت حذف شد")
        state.loading = false;
      })
      .addCase(deleteBasket.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(deleteBasket.rejected, (state,action) => {
        state.loading = false;
        console.log(action)
      })
    }
})

export const  {
    setCart,
    setDiscount
              } = cartSlice.actions;
export default cartSlice.reducer;