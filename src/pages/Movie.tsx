import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useParams } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { fetchData } from '@/redux/movie-details-slice'
import { MovieDetails } from '@/components/MovieDetails'
import { CastList } from '@/components/CastList'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'
import { getTopCast } from '@/utils/topcast'

export function Movie() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.moviePage
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { movieId } = useParams<{ movieId: string }>()
  const { movieDetails, movieCredits, isLoading, error } = useSelector(
    (state: RootState) => state.movieDetails
  )

  useEffect(() => {
    if (movieId) {
      const movieURL = `${moviesListsEndpoint}${movieId}`
      const creditsURL = `${moviesListsEndpoint}${movieId}/credits`
      const params = { language: lang }

      dispatch(fetchData({ url: movieURL, params }))
      dispatch(fetchData({ url: creditsURL, params }))
    }
  }, [dispatch, lang, movieId])

  if (!movieId) {
    return <div>{local.noID}</div>
  }

  if (isLoading) {
    return <div>{local.isLoading}</div>
  }

  if (error) {
    return <div>{local.error} {error}</div>
  }

  return (
    <div>
      {movieDetails && <MovieDetails {...movieDetails} />}
      {movieDetails && movieCredits && <CastList persons={getTopCast(movieCredits)} />}
    </div>
  )
}
