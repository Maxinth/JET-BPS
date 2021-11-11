
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const token: any = JSON.parse(sessionStorage.getItem("xys")!);
const user: any = JSON.parse(sessionStorage.getItem("xs")!);

const initialState = token
  ? { user: user, token: token }
  : { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.user;
      state.token = payload.accessToken;
    },

    signout: (state, { payload }: PayloadAction<any | undefined | null>) => {
      state.token = null;
      state.user = null;
    },
  },


});

export const { signin, signout } = authSlice.actions
export default authSlice.reducer;
