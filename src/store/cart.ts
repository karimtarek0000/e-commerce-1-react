import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AddToCart, PayloadGetCart, ProductCart } from "../types/store";

// Get cart
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/cart`;
      const { data } = await axios.get(url);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string) as never;
    }
  }
);

// Add to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (id: string, thunkAPI): Promise<AddToCart> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/cart`;
      const { data } = await axios.post(url, { productId: id });

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string) as never;
    }
  }
);

// remove - update count

const initialState: {
  products: ProductCart[];
  loading: boolean;
  totalCartPrice: number;
  numOfCartItems: number;
} = {
  products: [],
  loading: false,
  totalCartPrice: 0,
  numOfCartItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      const { data, numOfCartItems } = payload as PayloadGetCart;
      state.numOfCartItems = numOfCartItems;
      state.products = data.products;
      state.totalCartPrice = data.totalCartPrice;
      state.loading = false;
    });
  },
});

// export const { setLogOut } = authSlice.actions;
export default cartSlice.reducer;
