import { createSlice} from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  iswelcome: false,
  openDrawer: false
}


const othersSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    isloading: (state, action) => {
      state.loading = action.payload
    },
    setwelcome: (state, action) => {

      state.iswelcome = action.payload
    },
    setDrawer: (state, action) => {

      state.openDrawer = action.payload
    }
  }
}
)



export const { isloading, setwelcome, setDrawer } = othersSlice.actions
export default othersSlice.reducer