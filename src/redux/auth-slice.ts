import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  createGuestSession,
  createRequestToken,
  createSession
} from '@/services/auth'
import { sessions } from '@/utils/sessions'

import { IAuthState, ICreateSessionBody } from '@/types/authTypes'

const initialState: IAuthState = {
  guestSession: sessions.getFromLocalStorageGuestSession() || null,
  requestToken: null,
  sessionId: sessions.getFromLocalStorageSessionId() || null,
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
    sessions.setToLocalStorageRequestToken(data)
    return data
  }
)

export const fetchSession = createAsyncThunk(
  'auth/fetchSession',
  async (body: ICreateSessionBody) => {
    const data = await createSession(body)
    sessions.setToLocalStorageSessionId(data)
    return data
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.sessionId = null
      sessions.removeSessionIdFromLocalStorage()
    }
  },
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

      // FETCH SESSION
      .addCase(fetchSession.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchSession.fulfilled,
        (state, action) => {
          state.isLoading = false
          state.requestToken = null
          sessions.removeRequestTokenFromLocalStorage()
          sessions.removeGuestSessionFromLocalStorage()
          state.sessionId = action.payload
        })
      .addCase(fetchSession.rejected, (state, action) => {
        console.error('Fetch Session Error:', action.payload)
        state.isLoading = false
        state.error = 'Error fetching session'
      })
  }
})

export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer
