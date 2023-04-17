import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import categories from "./categories";
import products from "./products";

const store = configureStore({
  reducer: {
    auth,
    products,
    categories,
  },
});

export default store;
