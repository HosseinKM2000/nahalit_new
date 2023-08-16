import { createSlice } from "@reduxjs/toolkit";
import { getBaskets , addBasket , deleteBasket } from "./action";
import { toast } from "react-toastify";

const initialState = {
    discount: "",
    cart: [
        {
          id: 1,
          thumbnail: "https://placehold.co/50",
          title: "قالب HTML تک صفحه ای شرکتی خدمات نظافتی کلین، Clean",
          seller: "سعید غزلباش",
          price: 340000,
          quantity: 2
        },
        {
          id: 2,
          thumbnail: "https://placehold.co/50",
          title: "یواست سئو",
          seller: "حسین معصومی",
          price: 290000,
          quantity: 3
        },
        {
          id: 3,
          thumbnail: "https://placehold.co/50",
          title: "افزونه صفحه ساز المنتور",
          seller: "حسین مرادی",
          price: 79000,
          quantity: 1
        }
      ],
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
        setCart : (state,action) => {
            state.cart = action.payload;
        }
    },
    extraReducers : (builder) => {
      builder
      .addCase(getBaskets.fulfilled, (state,action) => {
        state.baskets = action.payload.data.data
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
        toast.error("خطا در اضافه کردن محصول , لطفا کمی بعد تلاش کنید")
      })
      .addCase(deleteBasket.fulfilled, (state,action) => {
        toast.success("محصول با موفقیت حذف شد")
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