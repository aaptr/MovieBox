import { ICrewMember } from '@/types/MoviesTypes'

interface ICrewMemberNoProtoProps {
  person: ICrewMember
}

export function CrewMemberNoProto({ person }: ICrewMemberNoProtoProps) {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-lg">{person.name}</p>
      <p className="text-md">{person.job}</p>
    </div>
  )
}