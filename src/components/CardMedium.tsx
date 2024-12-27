import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '@/redux/store'
import { formatDate } from '@/utils/formatDate'
import { imagePath } from '@/config/api'
import { localisation } from '@/config/localisation'
import { IMovieListItem } from '@/types/MoviesTypes'
import imagePlaceholder from '@/assets/image-placeholder.webp'

export function CardMedium({ id, poster_path, title, original_title, release_date, overview }: IMovieListItem) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const releaseDate = formatDate(release_date, localisation[lang].requestLang)
  const imageSrc = poster_path ? `${imagePath}/w185${poster_path}` : imagePlaceholder
  const displayOriginalTitle = title !== original_title ? `(${original_title})` : ''

  return (
    <div className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-3xl my-3">
      <Link to={`/movie/${id}`}>
        <div className="w-full flex justify-between gap-4">
          <img className="w-32 rounded-xl transform
              transition-transform duration-300 hover:scale-105"
            src={imageSrc} alt="" />
          <div className="w-full px-1">
            <div className="flex gap-2 items-center">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {title}{displayOriginalTitle}
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