import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  isOpen: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _setModal: (state, action) => {
      state.modal = action.payload;
      state.isOpen = true;
    },
    _setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    _destroyModal: (state) => {
      state.modal = false;
      state.isOpen = false;
    },
  },
});

export const { _destroyModal, _setModal, _setIsOpen } = modal.actions;
export default modal.reducer;
