import { ICrewMember } from '@/types/MoviesTypes'
import { CrewMemberNoPhoto } from '@/components/CrewMemberNoPhoto'

interface ICrewMemberProps {
  persons: ICrewMember[]
}

export function CrewMembers({ persons }: ICrewMemberProps) {
  return (
    <div className="mt-5 mx-5 flex flex-col gap-2">
      {persons.map((person) => (
        <CrewMemberNoPhoto key={person.id} person={person} />
      ))}
    </div>
  )
}