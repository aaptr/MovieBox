import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { IMovieVideos, IMovieVideo, ICrewMember } from '@/types/MoviesTypes'

import { Trailer } from '@/components/Trailer'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ITrailersListProps {
  videos: IMovieVideos
}

export function TrailersList({ videos }: ITrailersListProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.trailers

  return (
    <div className="mx-5 my-3 px-10 rounded-3xl
      border border-white dark:border-gray-800 dark:text-indigo-300
      bg-gradient-to-r from-indigo-50 dark:from-gray-800 to-indigo-200 dark:to-gray-700">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-bold">{local}</AccordionTrigger>
          <AccordionContent>
            <div className="w-full p-5
              grid gap-x-5 gap-y-5 grid-cols-3">
              {videos.results.map((videos: IMovieVideo) => (
                <Trailer key={videos.id} video={videos} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}