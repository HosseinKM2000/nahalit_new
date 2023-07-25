import { createSlice } from "@reduxjs/toolkit";

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
          seller: null,
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
    }
})

export const  {
    setCart,
    setDiscount
              } = cartSlice.actions;
export default cartSlice.reducer;