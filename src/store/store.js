import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../reducers/todolist/todolist'


export const store = configureStore({
  reducer: {
    sanduk:counterSlice
  },
})