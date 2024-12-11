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
  const imageSrc = poster_path ? `${imagePath}${poster_path}` : imagePlaceholder
  // const releaseDate = formatDate(release_date, localisation[lang].requestLang)

  return (
    <div className="w-wull p-4">
      <Link to={`/movie/${id}`}>
        <div className="w-full flex justify-between gap-3">
          <div className="max-w-32">
            <img className="rounded-xl" src={imageSrc} alt="" />
          </div>
          <div className="w-full">
            <div className="pt-1 flex gap-2 justify-start">
              <p className="text-xl font-bold">{title}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {title === original_title ? '' : original_title}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{release_date}</p>
            <p className="pt-3 line-clamp-4">{overview}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}