import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  products: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push({ ...action.payload, cartId: v4() });
      state.count = state.count + 1;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (p) => p.cartId !== action.payload
      );
      state.count = state.count - 1;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
