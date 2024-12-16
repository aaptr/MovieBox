import { MoviesList } from '@/components/MoviesList'


export function RatedMovies() {
  return (
    <>
      <div>
        <MoviesList listType="rated" />
      </div>
    </>
  )
}