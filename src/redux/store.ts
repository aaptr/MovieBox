import { configureStore } from '@reduxjs/toolkit'

import { themeReducer } from '@/redux/themeSlice'
import { authReducer } from '@/redux/auth-slice'
import { moviesReducer } from '@/redux/movies-slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    movies: moviesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch