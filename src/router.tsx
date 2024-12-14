import { createBrowserRouter } from 'react-router-dom'

//PAGES
import { Home } from '@/pages/Home'
import { Movies } from '@/pages/Movies'
import { Movie } from '@/pages/Movie'
import { PopularMovies } from '@/pages/PopularMovies'
import { TopRatedMovies } from '@/pages/TopRatedMovies'
import { UpcomingMovies } from '@/pages/UpcomingMovies'
import { SearchMovies } from '@/pages/SearchMovies'
import { AuthApproved } from '@/pages/AuthApproved'

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
    ]
  },
])

