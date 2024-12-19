import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { Link } from 'react-router-dom'

import { imagePath } from '@/config/api'
import { IMovieListItem } from '@/types/MoviesTypes'
import { formatDate } from '@/utils/formatDate'
import { localisation } from '@/config/localisation'
import imagePlaceholder from '@/assets/image-placeholder.webp'

interface CardProps extends IMovieListItem { }

export function CardMedium({ id, poster_path, title, original_title, release_date, overview }: CardProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const releaseDate = formatDate(release_date, localisation[lang].requestLang)
  const imageSrc = poster_path ? `${imagePath}/w185${poster_path}` : imagePlaceholder

  return (
    <div className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-xl my-3">
      <Link to={`/movie/${id}`}>
        <div className="w-full flex justify-between gap-4">
          <div className="max-w-32">
            <img className="rounded-xl transform
              transition-transform duration-300 hover:scale-105"
              src={imageSrc} alt="" />
          </div>
          <div className="w-full px-1">
            <div className="flex gap-2 justify-start items-center">
              <p className="text-2xl font-bold">{title}</p>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {title === original_title ? '' : `(${original_title})`}
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">{releaseDate}</p>
            <p className="pt-3 text-lg line-clamp-4">{overview}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}