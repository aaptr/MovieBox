import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {
  createGuestSession,
  createRequestToken
} from '@/services/auth'
import { sessions } from '@/utils/sessions'

import { IAuthState } from '@/types/requestTypes'

const initialState: IAuthState = {
  guestSession: sessions.getFromLocalStorageGuestSession() || null,
  requestToken: null,
  isLoading: false,
  error: null
}

export const fetchGuestSession = createAsyncThunk(
  'auth/fetchGuestSession',
  async () => {
    const data = await createGuestSession()

    sessions.setToLocalStorageGuestSession(data)

    return data
  }
)

export const fetchRequestToken = createAsyncThunk(
  'auth/fetchRequestToken',
  async () => {
    const data = await createRequestToken()
    return data
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH GUEST SESSION
      .addCase(fetchGuestSession.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchGuestSession.fulfilled,
        (state, action) => {
          state.isLoading = false
          state.guestSession = action.payload
        })
      .addCase(fetchGuestSession.rejected, (state, action) => {
        console.error('Fetch Guest Session ID Error:', action.payload)
        state.isLoading = false
        state.error = 'Error fetching guest session ID'
      })

      // FETCH REQUEST TOKEN
      .addCase(fetchRequestToken.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchRequestToken.fulfilled,
        (state, action) => {
          state.isLoading = false
          state.requestToken = action.payload
        })
      .addCase(fetchRequestToken.rejected, (state, action) => {
        console.error('Fetch Request Token Error:', action.payload)
        state.isLoading = false
        state.error = 'Error fetching request token'
      })
  }
})

export const authReducer = authSlice.reducer
