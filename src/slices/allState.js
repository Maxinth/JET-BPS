import { createSlice} from "@reduxjs/toolkit";


export const initialState = {
  loading:false }


const othersSlice = createSlice({
  name: "state",
  initialState,
  reducers:{
    isloading:(state,action)=>{
      state.loading=action.payload
    }
  }
}
)



export const {isloading}=othersSlice.actions
export default othersSlice.reducer