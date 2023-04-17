import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Categories
export const login = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/categories`;
      const { data } = await axios.get(url);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string);
    }
  }
);

const initialState = {};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

// export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
