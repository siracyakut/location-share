import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _setModal: (state, action) => {
      state.modal = action.payload;
    },
    _destroyModal: (state) => {
      state.modal = false;
    },
  },
});

export const { _destroyModal, _setModal } = modal.actions;
export default modal.reducer;
