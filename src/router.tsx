import { createBrowserRouter } from 'react-router-dom'

//PAGES
import { Home } from '@/pages/Home'
import { Movies } from '@/pages/Movies'
import { Movie } from '@/pages/Movie'
import { SearchMovies } from '@/pages/SearchMovies'

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
            element: <Movies />,
          },
          {
            path: 'top_rated/:currentPage',
            element: <Movies />,
          },
          {
            path: 'upcoming/:currentPage',
            element: <Movies />,
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
      }
    ]
  },
])

