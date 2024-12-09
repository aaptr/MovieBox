import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestMovieDetails } from '@/services/moviedetails'

import { IMovieDetailsState, IMovieDetails } from '@/types/MoviesTypes'

const initialState: IMovieDetailsState = {
  movieDetails: null,
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
        return data;
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
  },
})

export const movieDetailsReducer = movieDetailsSlice.reducer;
