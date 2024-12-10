import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestMoviesList, requestSearchMovies } from '@/services/movies'

import {
  IMoviesState,
  FetchMoviesListArgs,
  FetchMoviesListResponse,
  IMovieList
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
  searchTotalResults: 0
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

export const fetchSearchMovies = createAsyncThunk<
  IMovieList,
  string,
  { rejectValue: string }>(
    'searchResults/fetchSearchMovies',
    async (url: string, { rejectWithValue }) => {
      try {
        const data: IMovieList = await requestSearchMovies(url)
        return data
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

      .addCase(fetchSearchMovies.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action: PayloadAction<IMovieList>) => {
        state.isLoading = false
        state.searchResults = action.payload.results
        state.searchCurrentPage = action.payload.page
        state.searchTotalPages = action.payload.total_pages
        state.searchTotalResults = action.payload.total_results
      })
      .addCase(fetchSearchMovies.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching search results'
      })
  }
})

export const moviesReducer = moviesSlice.reducer