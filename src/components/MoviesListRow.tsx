import { IMoviesListProps } from '@/types/MoviesTypes'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card } from '@/components/Card'


export function MoviesListRow({ movies = [] }: IMoviesListProps) {
  return (
    <div className="my-5 px-6 md:px-24 rounded-3xl border border-white dark:border-gray-800
      bg-gradient-to-r from-indigo-50 dark:from-gray-800 to-indigo-200 dark:to-gray-700">
      <Carousel opts={{ loop: true }}>
        <CarouselContent className="flex -ml-2 md:-ml-4">
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="basis-1/5 p-2 pl-2 md:pl-4">
              <Card {...movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="transform transition-transform duration-300 hover:scale-150 hover:text-indigo-600 hover:dark:text-indigo-400" />
        <CarouselNext className="transform transition-transform duration-300 hover:scale-150 hover:text-indigo-600 hover:dark:text-indigo-400" />
      </Carousel>
    </div>
  )
}