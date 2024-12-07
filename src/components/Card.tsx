import { cardImagePath } from '@/config/api'
import { IMovieListItem } from '@/types/MoviesTypes'

interface CardProps extends IMovieListItem { }

export function Card({ poster_path, title, release_date }: CardProps) {
  return (
    <div className="w-60 p-4">
      <div className="w-full overflow-hidden">
        <div>
          <img className="rounded-xl" src={`${cardImagePath}${poster_path}`} alt="" />
        </div>
      </div>
      <div className="content w-full pt-3 px-1">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm">{release_date}</p>
      </div>
    </div>
  )
}