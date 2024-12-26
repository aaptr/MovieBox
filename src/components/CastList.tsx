import { PersonCardBig } from '@/components/PersonCardBig'
import { ICastMember } from '@/types/MoviesTypes'

interface ICastListProps {
  persons: ICastMember[]
}

export function CastList({ persons = [] }: ICastListProps) {
  return (
    <div className="m-5">
      <div className="flex flex-row gap-5">
        {persons.map((person) => (
          <PersonCardBig key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

