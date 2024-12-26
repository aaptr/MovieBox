import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useParams } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { fetchData, fetchMovieVideos } from '@/redux/movie-details-slice'
import { MovieDetails } from '@/components/MovieDetails'
import { CastList } from '@/components/CastList'
import { CrewMembers } from '@/components/CrewMembers'
import { FullCastAndCrew } from '@/components/FullCastAndCrew'
import { TrailersList } from '@/components/TrailersList'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'
import { getTopCast } from '@/utils/topcast'
import { getWriters } from '@/utils/writers'

export function Movie() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.moviePage
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { movieId } = useParams<{ movieId: string }>()
  const { movieDetails, movieCredits, movieVideos, isLoading, error } = useSelector(
    (state: RootState) => state.movieDetails
  )

  useEffect(() => {
    if (movieId) {
      const movieURL = `${moviesListsEndpoint}${movieId}`
      const creditsURL = `${moviesListsEndpoint}${movieId}/credits`
      const videosURL = `${moviesListsEndpoint}${movieId}/videos`
      const params = { language: lang }

      dispatch(fetchData({ url: movieURL, params }))
      dispatch(fetchData({ url: creditsURL, params }))
      dispatch(fetchMovieVideos({ url: videosURL, params }))
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
      <div className="flex justify-between
        mx-5 p-5 rounded-3xl
        border bg-indigo-100 dark:bg-gray-900
      border-gray-200 dark:border-gray-700">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold p-5">{local.topCastLabel}</h2>
          {movieDetails && movieCredits && <CastList persons={getTopCast(movieCredits)} />}
        </div>
        <div className="w-1/4">
          <h2 className="text-3xl font-bold p-5">{local.creativeTeamLabel}</h2>
          {movieDetails && movieCredits && <CrewMembers persons={getWriters(movieCredits)} />}
        </div>
      </div>
      <div>
        {movieDetails && movieCredits && <FullCastAndCrew credits={movieCredits} />}
      </div>
      <div>
        {movieDetails && movieVideos && <TrailersList videos={movieVideos} />}
      </div>
    </div>
  )
}
