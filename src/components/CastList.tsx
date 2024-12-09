import { PersonCardBig } from '@/components/PersonCardBig'
import { ICastMember } from '@/types/MoviesTypes'

interface ICastListProps {
  persons: ICastMember[]
}

export function CastList({ persons = [] }: ICastListProps) {
  return (
    <div className="mt-5 mx-5">
      <h2 className="text-3xl font-bold p-5">Top Cast</h2>
      <div className="flex flex-row gap-4">
        {persons.map((person) => (
          <PersonCardBig person={person} />
        ))}
      </div>
    </div>
  )
}

