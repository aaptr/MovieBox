import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { IMovieCredits, ICastMember, ICrewMember } from '@/types/MoviesTypes'
import { PersonCardSmall } from '@/components/PersonCardSmall'

interface FullCastAndCrewProps {
  credits: IMovieCredits
}

export function FullCastAndCrew({ credits }: FullCastAndCrewProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const { cast, crew } = credits
  const local = localisation[lang].movie.fullCastAndCrew

  const renderSection = (title: string, people: Array<ICastMember | ICrewMember>) => (
    <div className="w-1/2 py-5 px-8 flex flex-col">
      <p className="text-lg font-bold pt-1 pb-5">{title}</p>
      <div className="grid gap-x-3 gap-y-2 grid-cols-4">
        {people.map((person) => (
          <PersonCardSmall key={person.id} person={person} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex justify-between">
      {renderSection(local.cast, cast)}
      {renderSection(local.crew, crew)}
    </div>
  )
}