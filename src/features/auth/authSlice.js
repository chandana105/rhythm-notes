import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helper";
import { setupAuthHeaderForServiceCalls } from "./utils/serviceHandler";
import {
  setLocalStorage,
  getLocalStorage,
  clearLocalStorage,
} from "./utils/localStorage";

export const signup = createAsyncThunk("auth/signup", async (formData) => {
  const response = await axios.post(`${BASE_URL}/auth/sign-up`, formData);
  return response.data;
});

export const signin = createAsyncThunk("auth/signin", async (formData) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, formData);
  setupAuthHeaderForServiceCalls(response.data.token);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    error: null,
    token: getLocalStorage("token") || null,
  },
  reducers: {
    logout: (state) => {
      state.status = "idle";
      state.token = "";
      setupAuthHeaderForServiceCalls(null);
      clearLocalStorage("token");
    },
  },
  extraReducers: {
    [signup.pending]: (state) => {
      state.status = "pending";
    },
    [signup.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [signup.rejected]: (state, action) => {
      state.status = "error";
      state.error =
        action.error.message === "Request failed with status code 409"
          ? "Email Already Exists"
          : action.error.message;
    },
    [signin.pending]: (state) => {
      state.status = "pending";
    },
    [signin.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.token = action.payload.token;
      setLocalStorage("token", action.payload.token);
    },
    [signin.rejected]: (state, action) => {
      state.status = "error";
      state.error =
        action.error.message === "Request failed with status code 401"
          ? "Email or password incorrect"
          : action.error.message;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

//  then on login ektoh navigate dosra , token save krwayenge usse humen user fetch kn ,and ussi user ka home pr add a post krwayenge, ie on /home, and on /profiel ie on base of username /sandy etc
