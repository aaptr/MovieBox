import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestMoviesList } from '@/services/movies'

import {
  IMoviesState,
  FetchMoviesListArgs,
  FetchMoviesListResponse
} from '@/types/MoviesTypes'

const initialState: IMoviesState = {
  popularList: [],
  topRatedList: [],
  upcomingList: [],
  isLoading: false,
  error: null,
  popularPageCount: null,
  ordering: 'date'
}

export const fetchMoviesList = createAsyncThunk<
  FetchMoviesListResponse, FetchMoviesListArgs, { rejectValue: string }
>(
  'movies/fetchMoviesList',
  async ({ endpoint, listType }, { rejectWithValue }) => {
    try {
      const data = await requestMoviesList(endpoint)
      return { listType, data }
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMoviesList.fulfilled, (state, action: PayloadAction<FetchMoviesListResponse>) => {
        const { listType, data } = action.payload
        state.isLoading = false

        switch (listType) {
          case 'popular':
            state.popularList = data.results
            state.popularPageCount = data.total_pages
            break
          case 'topRated':
            state.topRatedList = data.results
            break
          case 'upcoming':
            state.upcomingList = data.results
            break
          default:
            break
        }
      })
      .addCase(fetchMoviesList.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching movies list'
      })
  }
})

export const moviesReducer = moviesSlice.reducer