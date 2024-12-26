import { MoviesList } from '@/components/MoviesList'

export function UpcomingMovies() {
  return (
    <div>
      <MoviesList listType="upcoming" path="/movies" />
    </div>
  )
}