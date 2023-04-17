import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Categories
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/categories`;
      const { data } = await axios.get(url);

      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string);
    }
  }
);

const initialState: {
  loading: boolean;
  categories: Array<object>;
} = {
  loading: false,
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories.push(...(payload as Array<object>));
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = true;
      });
  },
});

// export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
