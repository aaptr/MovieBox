import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { NavLink } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { fetchMovies } from '@/redux/movies-slice'
import { MoviesListRow } from '@/components/MoviesListRow'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'

export function Home() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].homePage
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const {
    popular: { list: popularList },
    top_rated: { list: topRatedList },
    upcoming: { list: upcomingList },
    isLoading,
    error,
  } = useSelector((state: RootState) => state.movies)

  useEffect(() => {
    const langParam = localisation[lang].requestLang;

    dispatch(
      fetchMovies({
        url: `${moviesListsEndpoint}popular`,
        params: { language: langParam, page: 1 },
        listType: 'popular',
      })
    )
    dispatch(
      fetchMovies({
        url: `${moviesListsEndpoint}top_rated`,
        params: { language: langParam, page: 1 },
        listType: 'top_rated',
      })
    )
    dispatch(
      fetchMovies({
        url: `${moviesListsEndpoint}upcoming`,
        params: { language: langParam, page: 1 },
        listType: 'upcoming',
      })
    )
  }, [dispatch, lang])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="p-10">
      <div className="pb-12">
        <h1 className="text-5xl font-bold py-3" >{local.title}</h1>
        <p className="pt-3 text-2xl">{local.subtitle}</p>
      </div>
      <div className="mt-3">
        <NavLink to="/movies/popular/1">
          <h2 className="w-80 text-nowrap px-5 py-2 rounded-full text-center
          text-2xl font-bold bg-indigo-200 dark:bg-indigo-400 text-gray-800
          transform transition-transform duration-300 hover:scale-105">{local.popular}</h2>
        </NavLink>
        <MoviesListRow movies={popularList} />
      </div>
      <div className="mt-3">
        <NavLink to="/movies/top_rated/1">
          <h2 className="w-80 text-nowrap px-5 py-2 rounded-full text-center
          text-2xl font-bold bg-indigo-200 dark:bg-indigo-400 text-gray-800
          transform transition-transform duration-300 hover:scale-105">{local.top_rated}</h2>
        </NavLink>
        <MoviesListRow movies={topRatedList} />
      </div>
      <div className="mt-3">
        <NavLink to="/movies/upcoming/1">
          <h2 className="w-80 text-nowrap px-5 py-2 rounded-full text-center
          text-2xl font-bold bg-indigo-200 dark:bg-indigo-400 text-gray-800
          transform transition-transform duration-300 hover:scale-105">{local.upcoming}</h2>
        </NavLink>
        <MoviesListRow movies={upcomingList} />
      </div>
    </div >
  )
}