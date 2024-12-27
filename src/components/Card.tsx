import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '@/redux/store'
import { formatDate } from '@/utils/formatDate'
import { localisation } from '@/config/localisation'
import { imagePath } from '@/config/api'
import { IMovieListItem } from '@/types/MoviesTypes'
import { RatingLabel } from '@/components/RatingLabel'
import imagePlaceholder from '@/assets/image-placeholder.webp'

export function Card({ id, poster_path, title, release_date, vote_average }: IMovieListItem) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const releaseDate = formatDate(release_date, localisation[lang].requestLang)
  const imageSrc = poster_path ? `${imagePath}/w342${poster_path}` : imagePlaceholder

  return (
    <div className="w-60 p-3 transform transition-transform duration-300 hover:scale-105">
      <Link to={`/movie/${id}`}>
        <div className="flex flex-col">
          <div className="relative">
            <img
              className="rounded-xl w-full h-80 object-cover"
              src={imageSrc}
              alt=""
            />
            <div className="absolute top-3 right-3 z-0">
              <RatingLabel rating={vote_average} />
            </div>
          </div>

          <div className="content pt-3 px-1">
            <p className="text-lg font-bold text-wrap">{title}</p>
            <p className="text-sm">{releaseDate}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}