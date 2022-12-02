import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import cartReducer from "../features/cart/cartSlice";
import { api } from "./services/api";
import modalReducer from "../features/modal/modalSlice";
import modal2Reducer from "../features/modal/modal2slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    modal: modalReducer,
    modal2: modal2Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
