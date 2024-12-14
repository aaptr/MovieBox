import { MoviesList } from '@/components/MoviesList'


export function TopRatedMovies() {
  return (
    <>
      <div>
        <MoviesList listType="top_rated" />
      </div>
    </>
  )
}