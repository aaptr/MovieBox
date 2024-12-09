import { RatingLabel } from './RatingLabel'
import { imagePath } from '@/config/api'
import { IMovieDetails } from '@/types/MoviesTypes'


export function MovieDetails(props: IMovieDetails) {
  const backdropURL = `${imagePath}${props.backdrop_path}`
  const posterURL = `${imagePath}${props.poster_path}`
  const releaseYear = new Date(props.release_date).getFullYear()
  const genreNames = props.genres.map((genre) => genre.name).join(', ')
  const runtime = `${Math.floor(props.runtime / 60)}h ${props.runtime % 60} min`

  return (
    <div className="text-white pt-2">
      <div style={{
        backgroundImage: `url(${backdropURL})`,
        backgroundSize: '75%',
        backgroundPosition: 'right top',
      }}
        className="w-full">
        <div style={{
          backgroundImage: 'linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%)'
        }}
          className="p-5 flex flex-row gap-10">
          <div className="basis-1/5 relative">
            <img src={posterURL} alt={`poster for ${props.title}`}
              className="rounded-2xl" />
            <div className="absolute top-3 right-3">
              <RatingLabel rating={props.vote_average} />
            </div>
          </div>
          <div className="basis-4/5">
            <h1>{`${props.title} (${releaseYear})`}</h1>
            <div className="flex gap-2 justify-start">
              <p>{props.release_date}</p>
              <p className="font-extrabold">·</p>
              <p>{genreNames}</p>
              <p className="font-extrabold">·</p>
              <p>{runtime}</p>
            </div>
            <div className="flex justify-start gap-2">

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
    </div >
  )
}