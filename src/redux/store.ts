import { configureStore } from '@reduxjs/toolkit'

import { themeReducer } from '@/redux/themeSlice'
import { authReducer } from '@/redux/auth-slice'
import { moviesReducer } from '@/redux/movies-slice'
import { langReducer } from '@/redux/lang-slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    movies: moviesReducer,
    lang: langReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch