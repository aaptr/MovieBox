import { MoviesList } from '@/components/MoviesList'

export function NowPlayingMovies() {
  return (
    <div>
      <MoviesList listType="now_playing" path="/movies" />
    </div>
  )
}