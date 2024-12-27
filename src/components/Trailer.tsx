import { IMovieVideo } from '@/types/MoviesTypes'

interface ITrailerProps {
  video: IMovieVideo
}

export function Trailer({ video }: ITrailerProps) {
  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
