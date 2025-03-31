import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../utils/bookSlice'

export const appStore  = configureStore({
    reducer: {
        books: bookReducer,
      },
})
