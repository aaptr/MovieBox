import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'
import { requestMovies } from '@/services/movies'

import {
  IMoviesState,
  IMovieList
} from '@/types/MoviesTypes'

type MovieCategoryKeys = 'popular' | 'top_rated' | 'upcoming' | 'search'

const initialState: IMoviesState = {
  popular: {
    list: [],
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
  },
  top_rated: {
    list: [],
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
  },
  upcoming: {
    list: [],
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
  },
  search: {
    list: [],
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
  },
  isLoading: false,
  error: null,
}

export const fetchMovies = createAsyncThunk<
  { listType: MovieCategoryKeys, data: IMovieList },
  { url: string, params?: Record<string, any>, listType: MovieCategoryKeys },
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
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<{ listType: keyof IMoviesState, data: IMovieList }>) => {
        const { listType, data } = action.payload
        state.isLoading = false

        if (listType in state) {
          const target = state[listType as keyof typeof initialState] as WritableDraft<IMovieCategoryState>;

          if (target) {
            target.list = data.results
            target.currentPage = data.page
            target.totalPages = data.total_pages
            target.totalResults = data.total_results
          }
        }
      })
      .addCase(fetchMovies.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload || 'Error fetching movies'
      })
  },
})

export const moviesReducer = moviesSlice.reducer
