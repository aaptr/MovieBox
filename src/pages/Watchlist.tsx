import { MoviesList } from '@/components/MoviesList'

export function Watchlist() {
  return (
    <div>
      <MoviesList listType="watchlist" path="/mymovies" />
    </div>
  )
}