import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card } from '@/components/Card'
import { IMoviesListProps } from '@/types/MoviesTypes'

export function MoviesList({ movies = [] }: IMoviesListProps) {

  return (
    <div className="mt-5 mb-2">
      <Carousel plugins={[
        Autoplay({
          delay: 3000
        })
      ]}
        opts={{ loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {movies.map((movie) => (
            <CarouselItem className="basis-1/5 p-2 pl-2 md:pl-4" key={movie.id}>
              <Card {...movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div >
  )
}