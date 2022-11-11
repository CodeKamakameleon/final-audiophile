import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
};

const getQuantity = (acc, curr) => {
  return acc + curr.quantity;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.products.findIndex(
        (i) => i.id === action.payload.id
      );

      if (itemIndex > -1) {
        state.products[itemIndex].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      state.count = state.products.reduce(getQuantity, 0);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
      state.count = state.products.reduce(getQuantity, 0);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
