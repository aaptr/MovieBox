import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useParams } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { fetchMovieDetails, fetchMovieCredits } from '@/redux/movie-details-slice'
import { MovieDetails } from '@/components/MovieDetails'
import { CastList } from '@/components/CastList'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'
import { getTopCast } from '@/utils/topcast'

export function Movie() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { movieId } = useParams<{ movieId: string }>()
  const { movieDetails, movieCredits, isLoading, error } = useSelector((state: RootState) => state.movieDetails)

  useEffect(() => {
    if (movieId) {
      const movieURL = `${moviesListsEndpoint}${movieId}?language=${localisation[lang].requestLang}`
      const creditsURL = `${moviesListsEndpoint}${movieId}/credits?language=${localisation[lang].requestLang}`
      dispatch(fetchMovieDetails(movieURL))
      dispatch(fetchMovieCredits(creditsURL))
    }
  }, [dispatch, lang, movieId])

  if (!movieId) {
    return <div>Invalid Movie ID</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      {movieDetails && <MovieDetails {...movieDetails} />}
      {movieDetails && movieCredits && <CastList persons={getTopCast(movieCredits)} />}
    </div>
  )
}