import { configureStore } from '@reduxjs/toolkit'

import { themeReducer } from '@/redux/themeSlice'
import { authReducer } from '@/redux/auth-slice'
import { moviesReducer } from '@/redux/movies-slice'
import { movieDetailsReducer } from '@/redux/movie-details-slice'
import { langReducer } from '@/redux/lang-slice'

import { IMovieDetailsState, IMoviesState } from '@/types/MoviesTypes'


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    lang: langReducer
  },
})

export interface RootState {
  theme: { value: string }

  // todo check auth
  auth: { value: string }
  movieDetails: IMovieDetailsState
  movies: IMoviesState
  lang: { value: string }
}
export type AppDispatch = typeof store.dispatch