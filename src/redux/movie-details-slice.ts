import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestMovieDetails } from '@/services/moviedetails'

import {
  IMovieDetailsState,
  IMovieDetails,
  IMovieCredits
} from '@/types/MoviesTypes'

const initialState: IMovieDetailsState = {
  movieDetails: null,
  movieCredits: null,
  isLoading: false,
  error: null
}

export const fetchMovieDetails = createAsyncThunk<
  IMovieDetails,
  string,
  { rejectValue: string }>(
    'movieDetails/fetchMovieDetails',
    async (url: string, { rejectWithValue }) => {
      try {
        const data: IMovieDetails = await requestMovieDetails(url)
        return data
      } catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
      }
    }
  )

export const fetchMovieCredits = createAsyncThunk<
  IMovieCredits,
  string,
  { rejectValue: string }>(
    'movieCredits/fetchMovieCredits',
    async (url: string, { rejectWithValue }) => {
      try {
        const data: IMovieCredits = await requestMovieDetails(url)
        return data
      } catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
      }
    }
  )

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH MOVIE DETAILS
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<IMovieDetails>) => {
        state.isLoading = false
        state.movieDetails = action.payload
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error fetching movie details';
      })

      // FETCH MOVIE CREDITS
      .addCase(fetchMovieCredits.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action: PayloadAction<IMovieCredits>) => {
        state.isLoading = false
        state.movieCredits = action.payload
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error fetching movie details';
      })
  },
})

export const movieDetailsReducer = movieDetailsSlice.reducer;
