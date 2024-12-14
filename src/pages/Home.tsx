import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { NavLink, useNavigate } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { fetchMovies } from '@/redux/movies-slice'
import { MoviesListRow } from '@/components/MoviesListRow'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'

export function Home() {
  const navigate = useNavigate()
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const {
    popular: { list: popularList },
    top_rated: { list: topRatedList },
    upcoming: { list: upcomingList },
    isLoading,
    error,
  } = useSelector((state: RootState) => state.movies)
  const { requestToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (requestToken) {
      const authURL = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/approved`
      window.location.href = authURL
    }
  }, [requestToken])

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
    <div>
      <h1 className="text-5xl font-bold py-3" >{localisation[lang].homePage.title}</h1>
      <p className="pt-3 text-2xl">{localisation[lang].homePage.subtitle}</p>
      <div className="mt-3">
        <NavLink to="/movies/popular/1">
          <h2>Popular Movies</h2>
        </NavLink>
        <MoviesListRow movies={popularList} />
      </div>
      <div className="mt-3">
        <NavLink to="/movies/top_rated/1">
          <h2>Top Rated Movies</h2>
        </NavLink>
        <MoviesListRow movies={topRatedList} />
      </div>
      <div className="mt-3">
        <NavLink to="/movies/upcoming/1">
          <h2>Upcoming Movies</h2>
        </NavLink>
        <MoviesListRow movies={upcomingList} />
      </div>
    </div>
  )
}