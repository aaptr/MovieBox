import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestMovies } from '@/services/movies'

import {
  IMovieDetailsState,
  IMovieDetails,
  IMovieCredits,
  IMovieVideos
} from '@/types/MoviesTypes'

const initialState: IMovieDetailsState = {
  movieDetails: null,
  movieCredits: null,
  movieVideos: null,
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

export const fetchMovieVideos = createAsyncThunk<
  IMovieVideos,
  { url: string; params?: Record<string, any> },
  { rejectValue: string }
>(
  'movie/fetchMovieVideos',
  async ({ url, params = {} }, { rejectWithValue }) => {
    try {
      const data = await requestMovies(url, params)
      if (data.hasError) {
        throw new Error(data.message)
      }
      return data as IMovieVideos
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

      .addCase(fetchMovieVideos.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMovieVideos.fulfilled, (state, action: PayloadAction<IMovieVideos>) => {
        state.isLoading = false
        state.movieVideos = action.payload
      })
      .addCase(fetchMovieVideos.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching video data'
      })

  },
})

export const movieDetailsReducer = movieDetailsSlice.reducer
