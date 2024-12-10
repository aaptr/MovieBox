import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { Link } from 'react-router-dom'

import { cardImagePathMedium } from '@/config/api'
import { IMovieListItem } from '@/types/MoviesTypes'
import { formatDate } from '@/utils/formatDate'
import { localisation } from '@/config/localisation'

interface CardProps extends IMovieListItem { }

export function SearchResultCard({ id, poster_path, title, original_title, release_date, overview }: CardProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const releaseDate = formatDate(release_date, localisation[lang].requestLang)

  return (
    <div className="w-60 p-4">
      <Link to={`/movie/${id}`}>
        <div className="w-full overflow-hidden flex justify-between">
          <div className="w-1/5">
            <img className="rounded-xl" src={`${cardImagePathMedium}${poster_path}`} alt="" />
          </div>
          <div className="">
            <div className="pt-1flex gap-2 justify-start">
              <p className="text-xl font-bold">{title}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {title === original_title ? '' : original_title}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{releaseDate}</p>
            <p className="pt-3">{overview}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}