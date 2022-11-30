import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    handleBurgerOpen: (state) => {
      state.isOpen = true;
    },
    handleBurgerClosed: (state) => {
      state.isOpen = false;
    },
    toggleburger: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleBurgerOpen, handleBurgerClosed, toggleburger } =
  burgerSlice.actions;
export default burgerSlice.reducer;
