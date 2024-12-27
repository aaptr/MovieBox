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

  return (
    <div className="w-full p-1 grid gap-x-5 gap-y-5 grid-cols-3">
      {videos.results && videos.results.length > 0 ? (
        videos.results.map((videos: IMovieVideo) => (
          <Trailer key={videos.id} video={videos} />
        ))) : (
        <p className="pb-5 text-lg italic text-nowrap">{local.noTrailers}</p>
      )}
    </div>
  )
}