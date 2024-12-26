import { ICrewMember } from '@/types/MoviesTypes'

interface ICrewMemberNoPhotoProps {
  person: ICrewMember
}

export function CrewMemberNoPhoto({ person }: ICrewMemberNoPhotoProps) {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-lg">{person.name}</p>
      <p className="text-md">{person.job}</p>
    </div>
  )
}