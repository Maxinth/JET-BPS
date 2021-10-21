import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../services/auth_service";


const token = JSON.parse(sessionStorage.getItem("xys"));
const user = JSON.parse(sessionStorage.getItem("xs"));

export const signin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await login(email, password);
      return { user: data.user };
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signout = createAsyncThunk("auth/logout", async () => {
  await logout()
});

const initialState = token
  ? { user, token: token }
  : { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.user.token;
    },
    [signin.rejected]: (state, action) => {
      state.token = null;
      state.user = null;
    },
    [signout.fulfilled]: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
