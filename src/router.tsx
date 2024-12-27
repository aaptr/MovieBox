import { createBrowserRouter } from 'react-router-dom'

//PAGES
import { Home } from '@/pages/Home'
import { Movies } from '@/pages/Movies'
import { MyMovies } from '@/pages/MyMovies'
import { Movie } from '@/pages/Movie'
import { NowPlayingMovies } from '@/pages/NowPlayingMovies'
import { PopularMovies } from '@/pages/PopularMovies'
import { TopRatedMovies } from '@/pages/TopRatedMovies'
import { UpcomingMovies } from '@/pages/UpcomingMovies'
import { FavoriteMovies } from '@/pages/FavoriteMovies'
import { RatedMovies } from '@/pages/RatedMovies'
import { Watchlist } from '@/pages/Watchlist'
import { SearchMovies } from '@/pages/SearchMovies'
import { LoginConfirmation } from '@/pages/LoginConfirmation'
import { About } from '@/pages/About'
import { ErrorPage } from '@/pages/ErrorPage'

import { Layout } from '@/components/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: 'now_playing/:currentPage',
            element: <NowPlayingMovies />,
          },
          {
            path: 'popular/:currentPage',
            element: <PopularMovies />,
          },
          {
            path: 'top_rated/:currentPage',
            element: <TopRatedMovies />,
          },
          {
            path: 'upcoming/:currentPage',
            element: <UpcomingMovies />,
          },
        ]
      },
      {
        path: '/mymovies',
        element: <MyMovies />,
        children: [
          {
            path: 'favorite/:currentPage',
            element: <FavoriteMovies />,
          },
          {
            path: 'rated/:currentPage',
            element: <RatedMovies />,
          },
          {
            path: 'watchlist/:currentPage',
            element: <Watchlist />,
          },
        ]
      },
      {
        path: '/movie/:movieId',
        element: <Movie />,
      },
      {
        path: '/search/:query/:currentPage',
        element: <SearchMovies />,
      },
      {
        path: '/login-confirmation',
        element: <LoginConfirmation />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/error',
        element: <ErrorPage />,
      },
    ]
  },
])

