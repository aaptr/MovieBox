import { IMovieCredits } from '@/types/MoviesTypes'

export function getTopCast(credits: IMovieCredits): typeof credits.cast {
  return credits.cast.filter(member => member.order < 7)
}
