import { createBrowserRouter } from 'react-router-dom'

//PAGES
import { Home } from '@/pages/Home'
import { Movies } from '@/pages/Movies'
import { MyMovies } from '@/pages/MyMovies'
import { Movie } from '@/pages/Movie'
import { PopularMovies } from '@/pages/PopularMovies'
import { TopRatedMovies } from '@/pages/TopRatedMovies'
import { UpcomingMovies } from '@/pages/UpcomingMovies'
import { FavoriteMovies } from '@/pages/FavoriteMovies'
import { RatedMovies } from '@/pages/RatedMovies'
import { Watchlist } from '@/pages/Watchlist'
import { SearchMovies } from '@/pages/SearchMovies'
import { AuthApproved } from '@/pages/AuthApproved'
import { About } from '@/pages/About'

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
        path: '/approved',
        element: <AuthApproved />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  },
])

