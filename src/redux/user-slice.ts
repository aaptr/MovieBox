import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { requestUserAccountDetails } from '@/services/userAccount'

import { IUserAccountDetails, IUserState } from '@/types/userAccountTypes'

const initialState: IUserState = {
  accountDetails: null,
  isLoading: false,
  error: null,
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUrerDetails: (state) => {
      state.accountDetails = null
    }
  },
  extraReducers: (builder) => {
    builder
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
  },
})

export const { clearUrerDetails } = userSlice.actions
export const userReducer = userSlice.reducer