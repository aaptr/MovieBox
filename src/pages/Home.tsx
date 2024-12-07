import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { RootState } from '@/redux/store'
import { fetchPopularList } from '@/redux/movies-slice'
import { MoviesList } from '@/components/MoviesList'

export function Home() {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { popularlist, isloading, error } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(fetchPopularList())
  }, [dispatch])

  if (isloading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>{error}</div>
  }

  // if (popularlist.length === 0) {
  //   return <h1>No movies found</h1>
  // }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home page</h1>
      <p className="text-green">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, Modi, nihil. Reiciendis et ducimus omnis eligendi dolorem voluptate.
        Ipsam, aspernatur nisi tempora repellendus odio sapiente libero culpa? Totam modi obcaecati assumenda.</p>
      <MoviesList {...popularlist} />

    </div>
  )
}