import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useParams } from 'react-router-dom'
import { RootState } from '@/redux/store'
import { fetchData, fetchMovieImages, fetchMovieVideos } from '@/redux/movie-details-slice'
import { MovieDetails } from '@/components/MovieDetails'
import { TopCastAndCreators } from '@/components/TopCastAndCreators'
import { FullCastAndCrew } from '@/components/FullCastAndCrew'
import { ImagesList } from '@/components/ImagesList'
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
  const { movieDetails, movieCredits, movieImages, movieVideos, isLoading, error } = useSelector(
    (state: RootState) => state.movieDetails
  )

  useEffect(() => {
    if (movieId) {
      const movieURL = `${moviesListsEndpoint}${movieId}`
      const creditsURL = `${moviesListsEndpoint}${movieId}/credits`
      const imagesURL = `${moviesListsEndpoint}${movieId}/images`
      const videosURL = `${moviesListsEndpoint}${movieId}/videos`
      const params = { language: lang }

      dispatch(fetchData({ url: movieURL, params }))
      dispatch(fetchData({ url: creditsURL, params }))
      dispatch(fetchMovieImages({ url: imagesURL, params }))
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
      <div>
        {movieDetails && movieCredits &&
          <TopCastAndCreators topCast={getTopCast(movieCredits)}
            creators={getWriters(movieCredits)} />}
      </div>
      <div>
        {movieDetails && movieCredits && <FullCastAndCrew credits={movieCredits} />}
      </div>
      <div>
        {movieDetails && movieImages && <ImagesList images={movieImages} />}
      </div>
      <div>
        {movieDetails && movieVideos && <TrailersList videos={movieVideos} />}
      </div>
    </div>
  )
}
