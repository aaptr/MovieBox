import { Link } from 'react-router-dom'
import { RatingLabel } from '@/components/RatingLabel'
import { cardImagePathBig } from '@/config/api'
import { IMovieListItem } from '@/types/MoviesTypes'
import imagePlaceholder from '@/assets/image-placeholder.webp'

interface CardProps extends IMovieListItem { }

export function Card({ id, poster_path, title, release_date, vote_average }: CardProps) {
  const imageSrc = poster_path ? `${cardImagePathBig}${poster_path}` : imagePlaceholder

  return (
    <div className="w-60 p-4">
      <Link to={`/movie/${id}`}>
        <div className="w-full overflow-hidden">
          <div className="relative">
            <img className="rounded-xl" src={imageSrc} alt="" />
            <div className="absolute top-2 right-2 z-0">
              <RatingLabel rating={vote_average} />
            </div>
          </div>
        </div>
        <div className="content w-full pt-3 px-1">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm">{release_date}</p>
        </div>
      </Link>
    </div>
  )
}