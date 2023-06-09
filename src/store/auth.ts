import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Login, SignUpTypes } from "../types";

// Login
export const login = createAsyncThunk(
  "auth/login",
  async (userData: Login, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/auth/signin`;
      const { data } = await axios.post(url, userData);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string);
    }
  }
);

// Signup
export const signUp = createAsyncThunk(
  "auth/signup",
  async (userData: SignUpTypes, thunkAPI): Promise<object> => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = `${process.env.REACT_APP_VERSION}/auth/signup`;
      const { data } = await axios.post(url, userData);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message as string);
    }
  }
);

const initialState = {
  loading: false,
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  token: JSON.parse(localStorage.getItem("token") as string) || null,
  loggedIn: JSON.parse(localStorage.getItem("loggedIn") as string) || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegister(state, actions) {
      const { user, token } = actions.payload;
      state.user = { ...JSON.parse(window.atob(token.split(".")[1])), ...user };
      state.token = token;
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("loggedIn", JSON.stringify(true));
    },
    setLogOut(state) {
      state.user = null;
      state.token = null;
      state.loggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("loggedIn");
    },
  },
  extraReducers(builder) {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, actions) => {
        state.loading = false;
        authSlice.caseReducers.setRegister(state, actions);
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = false;
      })
      // Signup
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, actions) => {
        state.loading = false;
        authSlice.caseReducers.setRegister(state, actions);
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setLogOut } = authSlice.actions;
export default authSlice.reducer;
