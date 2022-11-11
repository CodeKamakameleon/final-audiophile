import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModalOpen: (state) => {
      state.isOpen = true;
    },
    handleModalClosed: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleModalOpen, handleModalClosed, toggleModal } =
  modalSlice.actions;

export default modalSlice.reducer;
