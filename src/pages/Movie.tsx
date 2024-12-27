import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useParams, useNavigate } from 'react-router-dom'
import { RootState } from '@/redux/store'
import { fetchData, fetchMovieImages, fetchMovieVideos } from '@/redux/movie-details-slice'
import { getTopCast } from '@/utils/topcast'
import { getWriters } from '@/utils/writers'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'
import { MovieDetails } from '@/components/MovieDetails'
import { TopCastAndCreators } from '@/components/TopCastAndCreators'
import { FullCastAndCrew } from '@/components/FullCastAndCrew'
import { ImagesList } from '@/components/ImagesList'
import { TrailersList } from '@/components/TrailersList'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'


export function Movie() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { movieId } = useParams<{ movieId: string }>()
  const { movieDetails, movieCredits, movieImages, movieVideos, isLoading, error } = useSelector(
    (state: RootState) => state.movieDetails
  )
  const navigate = useNavigate()

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
    navigate('/error')
  }

  if (isLoading) {
    return <div>{local.moviePage.isLoading}</div>
  }

  if (error) {
    navigate('/error')
  }

  return (
    <div>
      {movieDetails && <MovieDetails {...movieDetails} />}
      <div className="mx-5 mb-4 mt-1 px-10 py-2 rounded-3xl
      border border-white dark:border-gray-800 dark:text-indigo-300
      bg-gradient-to-r from-indigo-100 dark:from-gray-800 to-indigo-200 dark:to-gray-700">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-bold border-b border-indigo-300">
              {local.topCastAndCreators.title}
            </AccordionTrigger>
            <AccordionContent>
              {movieDetails && movieCredits &&
                <TopCastAndCreators topCast={getTopCast(movieCredits)}
                  creators={getWriters(movieCredits)} />}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-bold border-b border-indigo-300">
              {local.fullCastAndCrew.title}
            </AccordionTrigger>
            <AccordionContent>
              {movieDetails && movieCredits && <FullCastAndCrew credits={movieCredits} />}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-bold border-b border-indigo-300">
              {local.images.title}
            </AccordionTrigger>
            <AccordionContent>
              {movieDetails && movieImages && <ImagesList images={movieImages} />}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl font-bold">
              {local.trailers}
            </AccordionTrigger>
            <AccordionContent>
              {movieDetails && movieVideos && <TrailersList videos={movieVideos} />}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
