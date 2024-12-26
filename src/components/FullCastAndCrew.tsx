import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { IMovieCredits, ICastMember, ICrewMember } from '@/types/MoviesTypes'

import { PersonCardSmall } from '@/components/PersonCardSmall'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FullCastAndCrewProps {
  credits: IMovieCredits
}

export function FullCastAndCrew({ credits }: FullCastAndCrewProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.fullCastAndCrew
  const cast = credits.cast
  const crew = credits.crew

  return (
    <div className="mx-5 my-3 px-10 rounded-3xl
      border bg-indigo-100 dark:bg-gray-900
      border-gray-200 dark:border-gray-700">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-bold">{local.title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between">
              <div className="w-1/2 p-5 flex flex-col
                border-r border-gray-400 dark:border-gray-700">
                <p className="text-lg font-bold pt-1 pb-5">{local.cast}</p>
                <div className="grid gap-x-6 gap-y-2 grid-cols-2">
                  {cast.map((person: ICastMember) => (
                    <PersonCardSmall key={person.id} person={person} />
                  ))}
                </div>
              </div>
              <div className="w-1/2 p-5 flex flex-col">
                <p className="text-lg font-bold pt-1 pb-5">{local.crew}</p>
                <div className="grid gap-x-6 gap-y-2 grid-cols-2">
                  {crew.map((person: ICrewMember) => (
                    <PersonCardSmall key={person.id} person={person} />
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}