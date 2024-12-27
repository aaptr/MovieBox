import { ICastMember } from '@/types/MoviesTypes'
import { PersonCardBig } from '@/components/PersonCardBig'

interface ICastListProps {
  persons: ICastMember[]
}

export function CastList({ persons = [] }: ICastListProps) {
  return (
    <div className="m-5 flex flex-row gap-5">
      {persons.map((person) => (
        <PersonCardBig key={person.id} person={person} />
      ))}
    </div>
  )
}

