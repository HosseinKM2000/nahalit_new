import {createContext} from "react";

const CartContext = createContext({
  discount: "",
  setDiscount: null,
  cart: [
    {
      id: null,
      thumbnail: "",
      title: "",
      seller: "",
      price: null,
      quantity: null
    }
  ],
  setCart: null,
  addSignToMoney: null,
  handleUpdateCart: null,
  handleCheckDiscount: null,
  allPrice: null,
});

export default CartContext;