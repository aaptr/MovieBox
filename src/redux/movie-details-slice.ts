import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestMovies } from '@/services/movies'

import {
  IMovieDetailsState,
  IMovieDetails,
  IMovieCredits,
} from '@/types/MoviesTypes'

const initialState: IMovieDetailsState = {
  movieDetails: null,
  movieCredits: null,
  isLoading: false,
  error: null,
}

export const fetchData = createAsyncThunk<
  IMovieDetails | IMovieCredits,
  { url: string; params?: Record<string, any> },
  { rejectValue: string }
>(
  'movie/fetchData',
  async ({ url, params = {} }, { rejectWithValue }) => {
    try {
      const data = await requestMovies(url, params)
      if (data.hasError) {
        throw new Error(data.message)
      }
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
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<IMovieDetails | IMovieCredits>) => {
        state.isLoading = false

        if ('title' in action.payload) {
          state.movieDetails = action.payload as IMovieDetails
        } else {
          state.movieCredits = action.payload as IMovieCredits
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching data'
      })
  },
})

export const movieDetailsReducer = movieDetailsSlice.reducer
