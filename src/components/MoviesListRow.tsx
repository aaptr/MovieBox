import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card } from '@/components/Card'
import { IMoviesListProps } from '@/types/MoviesTypes'

export function MoviesListRow({ movies = [] }: IMoviesListProps) {

  return (
    <div className="my-5 px-24 rounded-3xl border border-white dark:border-gray-800
      bg-gradient-to-r from-white dark:from-gray-800 to-indigo-100 dark:to-gray-700">
      <Carousel opts={{ loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {movies.map((movie) => (
            <CarouselItem className="basis-1/5 p-2 pl-2 md:pl-4" key={movie.id}>
              <Card {...movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="transform transition-transform duration-300
            hover:scale-150 hover:text-indigo-600 hover:dark:text-indigo-400" />
        <CarouselNext
          className="transform transition-transform duration-300
            hover:scale-150 hover:text-indigo-600 hover:dark:text-indigo-400" />
      </Carousel>
    </div >
  )
}