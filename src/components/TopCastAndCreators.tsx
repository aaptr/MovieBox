import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { ICastMember, ICrewMember } from '@/types/MoviesTypes'

import { CastList } from '@/components/CastList'
import { CrewMembers } from '@/components/CrewMembers'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface TopCastAndCreatorsProps {
  topCast: ICastMember[]
  creators: ICrewMember[]
}

export function TopCastAndCreators({ topCast, creators }: TopCastAndCreatorsProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.topCastAndCreators


  return (
    <div className="mx-5 my-3 px-10 rounded-3xl
      border border-white dark:border-gray-800 dark:text-indigo-300
      bg-gradient-to-r from-indigo-50 dark:from-gray-800 to-indigo-200 dark:to-gray-700">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-bold">{local.title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between mx-5 p-5 rounded-3xl">
              <div className="w-3/4">
                <h2 className="text-3xl font-bold p-5">{local.topCastLabel}</h2>
                <CastList persons={topCast} />
              </div>
              <div className="w-1/4 ps-10">
                <h2 className="text-3xl font-bold p-5">{local.creativeTeamLabel}</h2>
                <CrewMembers persons={creators} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}