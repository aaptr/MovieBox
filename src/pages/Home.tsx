import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '@/redux/store'
import { fetchMovies } from '@/redux/movies-slice'
import { MoviesListRow } from '@/components/MoviesListRow'
import { LinkButton } from '@/components/LinkButton'
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

  const nowPlayingLimit = adjustDateByMonthsFromStart(getCurrentDate(), -1)
  const upcomingLimit = adjustDateByMonthsFromStart(getCurrentDate(), 2)

  useEffect(() => {
    const langParam = localisation[lang].requestLang

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
          'vote_average.gte': 8,
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
          'primary_release_date.gte': getCurrentDate(),
          'primary_release_date.lte': upcomingLimit,
          sort_by: 'popularity.desc'
        },
        listType: 'upcoming',
      })
    )
  }, [dispatch, lang])

  if (isLoading) {
    return <h1>{local.isLoading}</h1>
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
        <LinkButton link="/movies/now_playing/1" text={local.now_playing} />
        <MoviesListRow movies={nowPlayingList} />
      </div>
      <div className="mt-3">
        <LinkButton link="/movies/popular/1" text={local.popular} />
        <MoviesListRow movies={popularList} />
      </div>
      <div className="mt-3">
        <LinkButton link="/movies/top_rated/1" text={local.top_rated} />
        <MoviesListRow movies={topRatedList} />
      </div>
      <div className="mt-3">
        <LinkButton link="/movies/upcoming/1" text={local.upcoming} />
        <MoviesListRow movies={upcomingList} />
      </div>
    </div >
  )
}