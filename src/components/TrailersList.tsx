import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { IMovieVideos, IMovieVideo } from '@/types/MoviesTypes'
import { Trailer } from '@/components/Trailer'

interface ITrailersListProps {
  videos: IMovieVideos
}

export function TrailersList({ videos }: ITrailersListProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie
  const trailers = videos.results || []

  return (
    <div className="w-full p-1 grid gap-x-5 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {trailers.length > 0 ? (
        trailers.map((video: IMovieVideo) => (
          <Trailer key={video.id} video={video} />
        ))
      ) : (
        <p className="pb-5 text-lg italic">{local.noTrailers}</p>
      )}
    </div>
  )
}
