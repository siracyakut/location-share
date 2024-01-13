import { configureStore } from "@reduxjs/toolkit";
import modal from "~/store/modal";
import auth from "~/store/auth";

const store = configureStore({
  reducer: {
    modal,
    auth,
  },
  devTools: false,
});

export default store;
