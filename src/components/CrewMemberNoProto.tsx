import { ICrewMember } from '@/types/MoviesTypes'

interface ICrewMemberNoProtoProps {
  person: ICrewMember
}

export function CrewMemberNoProto({ person }: ICrewMemberNoProtoProps) {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-md">{person.name}</p>
      <p className="text-sm">{person.job}</p>
    </div>
  )
}