import { configureStore } from '@reduxjs/toolkit'
import reducer from '../slices/auth'
import others from '../slices/allState'


export default configureStore({
  reducer: {
    auth:reducer,
    other:others
   
  },
  devTools: true,
})
