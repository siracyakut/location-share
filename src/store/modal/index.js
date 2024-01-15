import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  isOpen: false,
  data: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _setModal: (state, action) => {
      state.modal = action.payload.name;
      state.isOpen = true;
      state.data = action.payload.data;
    },
    _setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    _destroyModal: (state) => {
      state.modal = false;
      state.isOpen = false;
      state.data = false;
    },
  },
});

export const { _destroyModal, _setModal, _setIsOpen } = modal.actions;
export default modal.reducer;
