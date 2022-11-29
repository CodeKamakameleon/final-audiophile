import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
};

const getQuantity = (acc, curr) => {
  return acc + curr.quantity;
};

const getTotal = (acc, curr) => {
  return acc + curr.price;
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

    deleteAll: (state, action) => {
      state.products = state.products.filter((p) => p === action.payload);
      state.count = state.products.reduce(getQuantity, 0);
    },

    updateQuantity: (state, action) => {
      state.products = state.products.map((p) => {
        if (p.id !== action.payload.id) {
          return p;
        }
        return {
          ...p,
          quantity: action.payload.quantity,
        };
      });
      state.count = state.products.reduce(getQuantity, 0);
    },

    updateTotal: (state, action) => {
      state.products = state.products.map((p) => {});
    },
  },
});
export const { addToCart, removeFromCart, deleteAll, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
