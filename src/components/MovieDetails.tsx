
import { RatingLabel } from './RatingLabel'
import { imagePath } from '@/config/api'
import { IMovieDetails } from '@/types/MoviesTypes'

interface MovieDetailsProps extends IMovieDetails { }

export function MovieDetails(props: MovieDetailsProps) {
  const backdropURL = `${imagePath}${props.backdrop_path}`
  const posterURL = `${imagePath}${props.poster_path}`
  const releaseYear = new Date(props.release_date).getFullYear()
  const genreNames = props.genres.map((genre) => genre.name).join(', ')
  const runtime = `${Math.floor(props.runtime / 60)}h ${props.runtime % 60} min`

  return (
    <div>
      <div className={`w-full bg-[url(${backdropURL})]`}>
        <div className="flex flex-row">
          <div className="basis-1/4">
            <img src={posterURL} alt={`poster for ${props.title}`} />
          </div>
          <div className="basis-3/4">
            <h1>{`${props.title} (${releaseYear})`}</h1>
            <div className="flex gap-2 justify-start">
              <p>{props.release_date}</p>
              <p className="font-extrabold">·</p>
              <p>{genreNames}</p>
              <p className="font-extrabold">·</p>
              <p>{runtime}</p>
            </div>
            <div className="flex justify-start gap-2">
              <RatingLabel rating={props.vote_average} />
              <div>Your Rating</div>
            </div>
            <div className="flex justify-start gap-3">
              {/* TODO: Add to favorites/ watchlist */}
              {/* TODO: Add trailer */}
            </div>
            <p>{props.tagline}</p>
            <p>Overview / Opis / Описание</p>
            <p>{props.overview}</p>
            <div>
              {/* TODO: Crew/ obsada */}
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* TODO: cast */}
      </div>

      <div>
        {/* TODO: media */}
      </div>

      <div>
        {/* TODO: similar films */}
      </div>
    </div>
  )
}