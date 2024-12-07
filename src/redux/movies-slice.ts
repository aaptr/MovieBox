import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestMoviesList } from '@/services/movies'
import {
  popularEndpoint,
  topRatedEndpoint,
  upcomingEndpoint
} from '@/config/api'

import { IMoviesState } from '@/types/MoviesTypes'

const initialState: IMoviesState = {
  popularList: [],
  topRatedList: [],
  upcomingList: [],
  isLoading: false,
  error: null,
  popularPageCount: null,
  ordering: 'date'
}

export const fetchPopularList = createAsyncThunk(
  'movies/fetchPopularList',
  async () => {
    const data = await requestMoviesList(popularEndpoint)
    return data
  }
)



const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //FETCH POPULAR LIST
      .addCase(fetchPopularList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchPopularList.fulfilled,
        (state, action) => {
          state.isLoading = false
          state.popularList = action.payload.results
          state.popularPageCount = action.payload.total_pages
        })
      .addCase(fetchPopularList.rejected, (state, action) => {
        console.error('Fetch Popular List Error:', action.payload)
        state.isLoading = false
        state.error = 'Error fetching popular list'
      })
  }
})

export const moviesReducer = moviesSlice.reducer