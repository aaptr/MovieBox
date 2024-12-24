import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { NavLink } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { fetchMovies } from '@/redux/movies-slice'
import { MoviesListRow } from '@/components/MoviesListRow'
import { localisation } from '@/config/localisation'
import { getCurrentDate, adjustDateByMonthsFromStart } from '@/utils/getDates'
import { discoverEndpoint } from '@/config/api'

export function Home() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].homePage
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const {
    now_playing: { list: nowPlayingList },
    popular: { list: popularList },
    top_rated: { list: topRatedList },
    upcoming: { list: upcomingList },
    isLoading,
    error,
  } = useSelector((state: RootState) => state.movies)

  const nowPlayingLimit = adjustDateByMonthsFromStart(getCurrentDate(), -2)
  const upcomingLimit = adjustDateByMonthsFromStart(getCurrentDate(), 0)

  useEffect(() => {
    const langParam = localisation[lang].requestLang;

    dispatch(
      fetchMovies({
        url: discoverEndpoint,
        params: {
          language: langParam,
          page: 1,
          'primary_release_date.gte': nowPlayingLimit,
          'primary_release_date.lte': getCurrentDate(),
          sort_by: 'popularity.desc'
        },
        listType: 'now_playing',
      })
    )

    dispatch(
      fetchMovies({
        url: discoverEndpoint,
        params: {
          language: langParam,
          page: 1,
          sort_by: 'popularity.desc'
        },
        listType: 'popular',
      })
    )
    dispatch(
      fetchMovies({
        url: discoverEndpoint,
        params: {
          language: langParam,
          page: 1,
          'vote_count.gte': 500,
          'vote_average.gte': 8.4,
          sort_by: 'vote_average.desc'
        },
        listType: 'top_rated',
      })
    )
    dispatch(
      fetchMovies({
        url: discoverEndpoint,
        params: {
          language: langParam,
          page: 1,
          'primary_release_date.gte': upcomingLimit,
          sort_by: 'popularity.desc'
        },
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
        <NavLink to="/movies/now_playing/1">
          <h2 className="w-80 text-nowrap px-5 py-2 rounded-full text-center
          text-2xl font-bold bg-indigo-200 dark:bg-indigo-400 text-gray-800
          transform transition-transform duration-300 hover:scale-105">{local.now_playing}</h2>
        </NavLink>
        <MoviesListRow movies={nowPlayingList} />
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