import { configureStore } from "@reduxjs/toolkit";
import modal from "~/store/modal";
import auth from "~/store/auth";
import markers from "~/store/markers";

const store = configureStore({
  reducer: {
    modal,
    auth,
    markers,
  },
  devTools: false,
});

export default store;
