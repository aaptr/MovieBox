import { posterPath } from '@/config/api'
import { IMovieListItem } from '@/types/MoviesTypes'

export function Card(props: IMovieListItem) {
  return (
    <div className="card">
      <div className="image w-full max-h-80 overflow-hidden">
        <div>
          <img src={`${posterPath}${props.poster_path}`} alt="" />
        </div>
      </div>
      <div className="content w-full pt-5 px-1 flex flex-wrap">
        <p>{props.title}</p>
        <p>{props.release_date}</p>
      </div>
    </div>
  )
}