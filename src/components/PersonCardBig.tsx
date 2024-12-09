// todo link to Person Details

import { ICrewMember, ICastMember } from '@/types/MoviesTypes'
import { cardImagePathMedium } from '@/config/api'

export function PersonCardBig({ person }: { person: ICrewMember | ICastMember }) {


  return (
    <div className="flex flex-col gap-2">
      <div>
        <img src={`${cardImagePathMedium}${person.profile_path}`} alt="" />
      </div>
      <p className="text-lg font-bold">{person.name}</p>
      <p className="text-sm">{'character' in person ? person.character : person.job}</p>
    </div>
  )

}