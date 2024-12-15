import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import {
  requestUserAccountDetails,
  setFavorites,
  requestAccountStates
} from '@/services/userAccount'

import {
  IUserAccountDetails,
  IUserState,
  IRequestFavoritesResponse,
  IRequestFavoritesBody,
  IRequestAccountStatesResponse
} from '@/types/userAccountTypes'

const initialState: IUserState = {
  accountDetails: null,
  isLoading: false,
  error: null,
  movieAccountState: null
}

export const fetchUserAccountDetails = createAsyncThunk<
  IUserAccountDetails, string, { rejectValue: string }>(
    'user/fetchUserAccountDetails',
    async (url, { rejectWithValue }) => {
      try {
        const data = await requestUserAccountDetails(url)
        return data
      } catch (error) {
        return rejectWithValue((error as Error).message)
      }
    }
  )

export const fetchSetFavorites = createAsyncThunk<
  IRequestFavoritesResponse,
  { url: string; body: IRequestFavoritesBody },
  { rejectValue: string }
>(
  'user/fetchFavorites',
  async ({ url, body }, { rejectWithValue }) => {
    try {
      const data = await setFavorites(url, body)
      return data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

export const fetchAccountStates = createAsyncThunk<
  IRequestAccountStatesResponse, string, { rejectValue: string }
>(
  'user/fetchAccountStates',
  async (url: string, { rejectWithValue }) => {
    try {
      const data = await requestAccountStates(url)
      return data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserDetails: (state) => {
      state.accountDetails = null
    }
  },
  extraReducers: (builder) => {
    builder
      // fetch user account details
      .addCase(fetchUserAccountDetails.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUserAccountDetails.fulfilled, (state, action: PayloadAction<IUserAccountDetails>) => {
        state.isLoading = false
        state.accountDetails = action.payload
      })
      .addCase(fetchUserAccountDetails.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching user account details'
      })

      // add to favorites / remove from favorites
      .addCase(fetchSetFavorites.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchSetFavorites.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(fetchSetFavorites.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || 'Error adding to favorites'
      })

      // fetch movie account state
      .addCase(fetchAccountStates.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAccountStates.fulfilled, (state, action: PayloadAction<IRequestAccountStatesResponse>) => {
        state.isLoading = false
        state.movieAccountState = action.payload
      })
      .addCase(fetchAccountStates.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching movie account state'
      })
  },
})

export const { clearUserDetails } = userSlice.actions
export const userReducer = userSlice.reducer