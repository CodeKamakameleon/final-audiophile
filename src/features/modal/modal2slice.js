import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modal2Slice = createSlice({
  name: "modal2",
  initialState,
  reducers: {
    handleModal2Open: (state) => {
      state.isOpen = true;
    },
    handleModal2Closed: (state) => {
      state.isOpen = false;
    },
    toggleModal2: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleModal2Open, handleModal2Closed, toggleModal2 } =
  modal2Slice.actions;

export default modal2Slice.reducer;
