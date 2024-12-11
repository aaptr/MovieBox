import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestMovies } from '@/services/movies'

import {
  IMoviesState,
  IMovieList,
  IRequestError
} from '@/types/MoviesTypes'

const initialState: IMoviesState = {
  popularList: [],
  topRatedList: [],
  upcomingList: [],
  isLoading: false,
  error: null,
  searchResults: [],
  searchCurrentPage: 1,
  searchTotalPages: 1,
  searchTotalResults: 0,
}

export const fetchMovies = createAsyncThunk<
  { listType: string; data: IMovieList },
  { url: string; params?: Record<string, any>; listType: string },
  { rejectValue: string }
>(
  'movies/fetchMovies',
  async ({ url, params = {}, listType }, { rejectWithValue }) => {
    const response = await requestMovies(url, params)

    if ('hasError' in response && response.hasError) {
      return rejectWithValue(response.message)
    }

    return { listType, data: response }
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<{ listType: string; data: IMovieList }>) => {
        const { listType, data } = action.payload
        state.isLoading = false

        switch (listType) {
          case 'popular':
            state.popularList = data.results
            break
          case 'topRated':
            state.topRatedList = data.results
            break
          case 'upcoming':
            state.upcomingList = data.results
            break
          case 'search':
            state.searchResults = data.results
            state.searchCurrentPage = data.page
            state.searchTotalPages = data.total_pages
            state.searchTotalResults = data.total_results
            break
          default:
            break
        }
      })
      .addCase(fetchMovies.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching movies'
      })
  }
})

export const moviesReducer = moviesSlice.reducer