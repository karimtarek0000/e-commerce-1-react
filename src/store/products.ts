import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductCardType } from "../types";
import { AllProductsType } from "../types/store";

// Get products with categorie id
export const getAllProducts = createAsyncThunk(
  "products/getAllProductsWithCategoryID",
  async (categoryId: string, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/products?category=${categoryId}`;
      const { data } = await axios.get(url);

      return {
        products: data.data,
        pagination: data.metadata,
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string);
    }
  }
);

const initialState: {
  loading: boolean;
  products: Array<ProductCardType>;
  pagination: object;
} = {
  loading: false,
  products: [],
  pagination: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, { payload }: { payload: AllProductsType }) => {
          state.loading = false;
          state.products = payload.products as Array<ProductCardType>;
          state.pagination = payload.pagination as object;
        }
      )
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

// export const { setLogOut } = authSlice.actions;
export default productsSlice.reducer;
