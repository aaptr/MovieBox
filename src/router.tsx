import { createBrowserRouter } from 'react-router-dom'

//PAGES
import { Home } from '@/pages/Home'
import { Movie } from '@/pages/Movie'

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
        path: '/movie/:movieId',
        element: <Movie />,
      }
    ]
  },
])

