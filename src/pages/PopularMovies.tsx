import { MoviesList } from '@/components/MoviesList'


export function PopularMovies() {
  return (
    <>
      <div>
        <MoviesList listType="popular" />
      </div>
    </>
  )
}