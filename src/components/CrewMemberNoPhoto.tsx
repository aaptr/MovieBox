import { ICrewMember } from '@/types/MoviesTypes'

interface ICrewMemberNoPhotoProps {
  person: ICrewMember
}

export function CrewMemberNoPhoto({ person: { name, job } }: ICrewMemberNoPhotoProps) {
  return (
    <>
      <p className="font-bold text-lg">{name}</p>
      <p className="text-md">{job}</p>
    </>
  )
}