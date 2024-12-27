import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { fetchAccountStates } from '@/redux/user-slice'
import { formatDate } from '@/utils/formatDate'
import { formatCurrency } from '@/utils/formatCurrency'
import { moviesListsEndpoint, imagePath } from '@/config/api'
import { localisation } from '@/config/localisation'
import { IMovieDetails } from '@/types/MoviesTypes'
import { ImageWithPreview } from '@/components/ImageWithPreview'
import { RatingLabel } from '@/components/RatingLabel'
import { FavoriteButton } from '@/components/FavoriteButton'
import { WatchlistButton } from '@/components/WatchlistButton'
import { UserRating } from '@/components/UserRating'

export function MovieDetails(props: IMovieDetails) {
  const dispatch = useDispatch<AppDispatch>()
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.movieDetails
  const releaseDate = formatDate(props.release_date, localisation[lang].requestLang)
  const { sessionId } = useSelector((state: RootState) => state.auth)
  const backdropURL = `${imagePath}/original${props.backdrop_path}`
  const posterURL = `${imagePath}/original${props.poster_path}`
  const releaseYear = new Date(props.release_date).getFullYear()
  const genreNames = props.genres.map((genre) => genre.name).join(', ')
  const runtime = props.runtime === 0 ? local.noData : `${Math.floor(props.runtime / 60)}${local.hour} ${props.runtime % 60} ${local.minutes}`
  const accountStateURL = `${moviesListsEndpoint}${props.id}/account_states?session_id=${sessionId?.session_id}`

  useEffect(() => {
    dispatch(fetchAccountStates(accountStateURL))
  }, [dispatch, accountStateURL, props.id])

  return (
    <div className="text-white py-4">
      <div style={{
        backgroundImage: `url(${backdropURL})`,
        backgroundSize: '75%',
        backgroundPosition: 'right top',
      }}
        className="w-full">
        <div className="p-5 flex flex-row gap-10
            bg-gradient-to-r from-gray-800 via-indigo-950 via-25% to-transparent">
          <div className="basis-1/5 relative">
            <ImageWithPreview src={posterURL} alt={`poster for ${props.title}`}
              previewTitle={`${local.posterFor}${props.title}`} />
            <div className="absolute top-3 right-3">
              <RatingLabel rating={props.vote_average} />
            </div>
          </div>
          <div className="basis-4/5 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-indigo-300 pb-4">
                {`${props.title} (${releaseYear})`}
              </h1>
              <div className="flex flex-col gap-1 text-lg">
                {[
                  { label: local.originalTitle, value: props.original_title },
                  { label: local.releaseDate, value: releaseDate },
                  { label: local.genres, value: genreNames },
                  { label: local.runtime, value: runtime },
                ].map((item, index) => (
                  <p key={index}>
                    <span className="font-bold text-indigo-300">{item.label}</span>
                    <span className="italic">{item.value}</span>
                  </p>
                ))}
              </div>
              <div className="flex justify-start gap-5 py-6">
                <FavoriteButton movieId={props.id} />
                <WatchlistButton movieId={props.id} />
                <UserRating movieId={props.id} />
              </div>
              <p className="pb-4">
                <span className="font-bold text-indigo-300">{local.tagline}</span>
                <span className="italic">{props.tagline || local.noData}</span>
              </p>
              <p>
                <span className="font-bold text-indigo-300">{local.overview}</span>
              </p>
              <p className="pt-2 pe-60 text-lg line-clamp-7">{props.overview || local.noData}</p>
              <div>
              </div>
            </div>
            <div className="flex justify-start gap-10">
              <p className="pb-4">
                <span className="font-bold text-indigo-300">
                  {local.budget}
                </span>
                <span className="italic">
                  {props.budget ? formatCurrency(props.budget) : local.noData}
                </span>
              </p>
              <p className="pb-4">
                <span className="font-bold text-indigo-300">
                  {local.revenue}
                </span>
                <span className="italic">
                  {props.revenue ? formatCurrency(props.revenue) : local.noData}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}