import { MoviesList } from '@/components/MoviesList'

export function FavoriteMovies() {
  return (
    <div>
      <MoviesList listType="favorite" path="/mymovies" />
    </div>
  )
}