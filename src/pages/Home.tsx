import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { RootState } from '@/redux/store'
import { fetchMoviesList } from '@/redux/movies-slice'
import { MoviesList } from '@/components/MoviesList'
import { localisation } from '@/config/localisation'
import {
  moviesListsEndpoint
} from '@/config/api'

export function Home() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const popularURL = `${moviesListsEndpoint}popular?language=${localisation[lang].requestLang}&page=1`
  const topRatedURL = `${moviesListsEndpoint}top_rated?language=${localisation[lang].requestLang}&page=1`
  const upcomingURL = `${moviesListsEndpoint}upcoming?language=${localisation[lang].requestLang}&page=1`
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { popularList, topRatedList, upcomingList, isLoading, error } = useSelector((state: RootState) => state.movies)


  useEffect(() => {
    dispatch(fetchMoviesList({ endpoint: popularURL, listType: 'popular' }))
    dispatch(fetchMoviesList({ endpoint: topRatedURL, listType: 'topRated' }))
    dispatch(fetchMoviesList({ endpoint: upcomingURL, listType: 'upcoming' }))
  }, [dispatch, lang])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (popularList.length === 0) {
    return <h1>No movies found</h1>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{localisation[lang].homePage.title}</h1>
      <p className="text-green">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, Modi, nihil. Reiciendis et ducimus omnis eligendi dolorem voluptate.
        Ipsam, aspernatur nisi tempora repellendus odio sapiente libero culpa? Totam modi obcaecati assumenda.</p>
      <div className="mt-5">
        <h2>Popular Movies</h2>
        <MoviesList movies={popularList} />
      </div>
      <div className="mt-5">
        <h2>Top Rated Movies</h2>
        <MoviesList movies={topRatedList} />
      </div>
      <div className="mt-5">
        <h2>Upcoming Movies</h2>
        <MoviesList movies={upcomingList} />
      </div>
    </div>
  )
}