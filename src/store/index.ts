import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import categories from "./categories";
import products from "./products";
import cart from "./cart";

const store = configureStore({
  reducer: {
    auth,
    products,
    categories,
    cart,
  },
});

export default store;
