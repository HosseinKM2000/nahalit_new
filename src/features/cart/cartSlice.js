import { createSlice } from "@reduxjs/toolkit";
import { getBaskets , addBasket , deleteBasket } from "./action";
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
        console.error("error in upload baskets =>",action)
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
        console.log(action.payload)
      })
      .addCase(deleteBasket.pending, (state,action) => {
      })
      .addCase(deleteBasket.rejected, (state,action) => {
      })
    }
})

export const  {
    setCart,
    setDiscount
              } = cartSlice.actions;
export default cartSlice.reducer;