import { IMovieVideo } from '@/types/MoviesTypes'
interface ITrailerProps {
  video: IMovieVideo
}

export function Trailer({ video }: ITrailerProps) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        allowFullScreen
      />
    </div>
  )
}