import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { RatingLabel } from '@/components/RatingLabel'
import imagePlaceholder from '@/assets/image-placeholder.webp'
import { formatDate } from '@/utils/formatDate'
import { localisation } from '@/config/localisation'
import { cardImagePathBig } from '@/config/api'
import { IMovieListItem } from '@/types/MoviesTypes'

interface CardProps extends IMovieListItem { }

export function Card({ id, poster_path, title, release_date, vote_average }: CardProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const releaseDate = formatDate(release_date, localisation[lang].requestLang)
  const imageSrc = poster_path ? `${cardImagePathBig}${poster_path}` : imagePlaceholder

  return (
    <div className="w-60 p-4 transform transition-transform duration-300 hover:scale-110">
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
          <p className="text-sm">{releaseDate}</p>
        </div>
      </Link>
    </div>
  )
}