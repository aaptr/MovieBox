import { configureStore } from '@reduxjs/toolkit'

import { themeReducer } from '@/redux/themeSlice'
import { authReducer } from '@/redux/auth-slice'
import { moviesReducer } from '@/redux/movies-slice'
import { movieDetailsReducer } from '@/redux/movie-details-slice'
import { langReducer } from '@/redux/lang-slice'
import { userReducer } from '@/redux/user-slice'

import { IMovieDetailsState, IMoviesState } from '@/types/MoviesTypes'
import { IUserState } from '@/types/userAccountTypes'
import { IAuthState } from '@/types/authTypes'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    lang: langReducer,
    user: userReducer
  },
})

export interface RootState {
  theme: { isDarkMode: boolean }
  auth: IAuthState
  movieDetails: IMovieDetailsState
  movies: IMoviesState
  lang: { value: string }
  user: IUserState
}
export type AppDispatch = typeof store.dispatch