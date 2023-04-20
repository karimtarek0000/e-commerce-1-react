import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ProductCardType } from "../types";
import { AllProductsType } from "../types/store";

// Get products with categorie id
export const getAllProducts = createAsyncThunk(
  "products/getAllProductsWithCategoryID",
  async (
    body: { categoryId: string; numPage: number },
    thunkAPI
  ): Promise<object> => {
    const { categoryId, numPage } = body;
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/products?category=${categoryId}&limit=10&page=${numPage}`;
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

const initialState: {
  loading: boolean;
  products: Array<ProductCardType>;
  total: number;
} = {
  loading: false,
  products: [],
  total: 0,
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
          state.total = payload.total as number;
        }
      )
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
        toast.error("Error please try again!");
      });
  },
});

// export const { setLogOut } = authSlice.actions;
export default productsSlice.reducer;
