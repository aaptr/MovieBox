import { CrewMemberNoProto } from './CrewMemberNoProto'
import { ICrewMember } from '@/types/MoviesTypes'

interface ICrewMemberProps {
  persons: ICrewMember[]
}

export function CrewMembers({ persons = [] }: ICrewMemberProps) {
  return (
    <div className="mt-5 mx-5">
      <div className=" flex flex-col gap-2">
        {persons.map((person) => (
          <CrewMemberNoProto key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}