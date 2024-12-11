import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { RootState } from '@/redux/store'
import { fetchMovies } from '@/redux/movies-slice'
import { MoviesList } from '@/components/MoviesList'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'

export function Home() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { popularList, topRatedList, upcomingList, isLoading, error } = useSelector((state: RootState) => state.movies)

  useEffect(() => {
    const langParam = localisation[lang].requestLang

    dispatch(
      fetchMovies({
        url: `${moviesListsEndpoint}popular`,
        params: { language: langParam, page: 1 },
        listType: 'popular'
      })
    )
    dispatch(
      fetchMovies({
        url: `${moviesListsEndpoint}top_rated`,
        params: { language: langParam, page: 1 },
        listType: 'topRated'
      })
    )
    dispatch(
      fetchMovies({
        url: `${moviesListsEndpoint}upcoming`,
        params: { language: langParam, page: 1 },
        listType: 'upcoming'
      })
    )
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
      <h1 className="text-5xl font-bold py-3" >{localisation[lang].homePage.title}</h1>
      <p className="pt-3 text-2xl">{localisation[lang].homePage.subtitle}</p>
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