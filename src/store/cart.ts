import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  AddToCart,
  OrderCard,
  PayloadGetCart,
  ProductCart,
} from "../types/store";
import toast from "react-hot-toast";
import { Order } from "../types";

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

// Update quantity
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async (
    { productId, count }: { productId: string; count: number },
    thunkAPI
  ): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/cart/${productId}`;
      const { data } = await axios.put(url, { count });

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

// Payment | Cash and Credit
export const checkOutCash = createAsyncThunk(
  "cart/checkOutCash",
  async (
    { id, info }: { id: string; info: Order },
    thunkAPI
  ): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/orders/${id}`;
      const { data } = await axios.post(url, {
        shippingAddress: info,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string) as never;
    }
  }
);

export const checkOutCredit = createAsyncThunk(
  "cart/checkOutCredit",
  async (
    { id, path }: { id: string; path: string },
    thunkAPI
  ): Promise<string> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/orders/checkout-session/${id}?url=${path}`;
      const { data } = await axios.post(url);

      return data.session.url;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string) as never;
    }
  }
);

// Get all orders
export const getAllOrders = createAsyncThunk(
  "cart/getAllOrders",
  async (id: string, thunkAPI): Promise<OrderCard[]> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/orders/user/${id}`;
      const { data } = await axios.get(url);

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
  idsInCart: string[];
  ownerId: string;
  orders: OrderCard[];
} = {
  products: [],
  loading: false,
  totalCartPrice: 0,
  numOfCartItems: 0,
  ownerId: "",
  idsInCart: [],
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToProductToCart(state, { payload }: { payload: PayloadGetCart }) {
      const { data, numOfCartItems } = payload;
      state.numOfCartItems = numOfCartItems;
      state.products = data.products.reverse();
      state.idsInCart = data.products.map((product) => product.product._id);
      state.totalCartPrice = data.totalCartPrice;
      state.ownerId = data._id;
      state.loading = false;
    },
    errorHandler(state, actions) {
      toast.error(actions.payload as string);
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
      })
      .addCase(updateQuantity.fulfilled, (state, { payload }) => {
        const { data } = payload as PayloadGetCart;
        state.totalCartPrice = data.totalCartPrice;
      })
      .addCase(getAllOrders.fulfilled, (state, { payload }) => {
        state.orders = payload.reverse() as OrderCard[];
      })
      // Error handling
      .addCase(getCart.rejected, (state, actions) => {
        state.loading = false;
        state.products = [];
        state.totalCartPrice = 0;
        state.numOfCartItems = 0;
        state.ownerId = "";
        state.idsInCart = [];
      })
      .addCase(removeProduct.rejected, (state, actions) => {
        cartSlice.caseReducers.errorHandler(state, actions);
      })
      .addCase(updateQuantity.rejected, (state, actions) => {
        cartSlice.caseReducers.errorHandler(state, actions);
      });
  },
});

// export const { } = cartSlice.actions;
export default cartSlice.reducer;
