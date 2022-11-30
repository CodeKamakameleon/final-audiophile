import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
  total: 0,
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
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },

    deleteAll: (state, action) => {
      state.products = state.products.filter((p) => p === action.payload);
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
    },
  },
  extraReducers: (builder) => {
    return builder.addMatcher(
      isAnyOf(
        cartSlice.actions.addToCart,
        cartSlice.actions.removeFromCart,
        cartSlice.actions.deleteAll,
        cartSlice.actions.updateQuantity
      ),
      (state) => {
        state.count = state.products.reduce((acc, curr) => {
          return acc + curr.quantity;
        }, 0);

        state.total = state.products.reduce((acc, curr) => {
          return acc + curr.price * curr.quantity;
        }, 0);
      }
    );
  },
});
export const { addToCart, removeFromCart, deleteAll, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
