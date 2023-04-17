import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Login
// export const login = createAsyncThunk(
//   "auth/login",
//   async (userData: Login, thunkAPI): Promise<object> => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const url = `${process.env.REACT_APP_VERSION}/auth/signin`;
//       const { data } = await axios.post(url, userData);

//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.response.data.message as string);
//     }
//   }
// );


const initialState = {
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

// export const { setLogOut } = authSlice.actions;
export default productsSlice.reducer;
