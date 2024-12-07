import { configureStore } from '@reduxjs/toolkit'

import { themeReducer } from '@/redux/themeSlice'
import { authReducer } from '@/redux/auth-slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch