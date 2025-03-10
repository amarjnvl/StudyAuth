import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialiseState = {
  totalItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : 0,
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialiseState,
  reducers: {
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalItems += 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
      toast.success(`${action.payload.name} added to cart`);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems -= 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      toast.success(`${removedItem.name} removed from cart`);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      localStorage.removeItem("cart");
      toast.success("Cart cleared");
    },
  },
});
export const { setTotalItems, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
