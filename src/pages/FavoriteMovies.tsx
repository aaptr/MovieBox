import { MoviesList } from '@/components/MoviesList'


export function FavoriteMovies() {
  return (
    <>
      <div>
        <MoviesList listType="favorite" />
      </div>
    </>
  )
}