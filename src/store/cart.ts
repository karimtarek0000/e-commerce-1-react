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

// Remove product from cart
export const removeProduct = createAsyncThunk(
  "cart/removeProduct",
  async (id: string, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/cart/${id}`;
      const { data } = await axios.delete(url);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string) as never;
    }
  }
);

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
  reducers: {
    addToProductToCart(state, { payload }: { payload: PayloadGetCart }) {
      const { data, numOfCartItems } = payload as PayloadGetCart;
      state.numOfCartItems = numOfCartItems;
      state.products = data.products;
      state.totalCartPrice = data.totalCartPrice;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        cartSlice.caseReducers.addToProductToCart(state, { payload } as any);
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        cartSlice.caseReducers.addToProductToCart(state, { payload } as any);
      });
  },
});

// export const { } = cartSlice.actions;
export default cartSlice.reducer;
