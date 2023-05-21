import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ProductCardType } from "../types";
import { AllProductsType, Products } from "../types/store";

// Get products with categorie id
export const getAllProducts = createAsyncThunk(
  "products/getAllProductsWithCategoryID",
  async (body: Products, thunkAPI): Promise<object> => {
    const { id, type, numPage, filter } = body;
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/products?${type}=${id}&limit=10&page=${numPage}${filter}`;
      const { data } = await axios.get(url);

      return {
        products: data.data,
        total: data.results,
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string);
    }
  }
);

// Get product with id
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: string, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/products/${id}`;
      const { data } = await axios.get(url);

      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string);
    }
  }
);

const initialState: {
  loading: boolean;
  products: Array<ProductCardType>;
  product: ProductCardType | {};
  total: number;
} = {
  loading: false,
  products: [],
  product: {},
  total: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // All products
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, { payload }: { payload: AllProductsType }) => {
          state.loading = false;
          state.products = payload.products as Array<ProductCardType>;
          state.total = payload.total as number;
        }
      )
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
        toast.error("Error please try again!");
      })
      // Get Product
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getProduct.fulfilled,
        (state, { payload }: { payload: ProductCardType | any }) => {
          state.loading = false;
          state.product = payload;
        }
      )
      .addCase(getProduct.rejected, (state) => {
        state.loading = false;
        toast.error("Error please try again!");
      });
  },
});

// export const { setLogOut } = authSlice.actions;
export default productsSlice.reducer;
