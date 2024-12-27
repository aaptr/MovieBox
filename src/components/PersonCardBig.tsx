import { ICrewMember, ICastMember } from '@/types/MoviesTypes'
import { imagePath } from '@/config/api'
import imagePlaceholder from '@/assets/image-placeholder.webp'

export function PersonCardBig({ person }: { person: ICrewMember | ICastMember }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-3 border border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-gray-900 max-w-36">
      <img
        src={person.profile_path ? `${imagePath}/w154${person.profile_path}` : imagePlaceholder}
        alt={person.name}
        className="w-full rounded-xl"
      />
      <div>
        <p className="text-md font-bold">{person.name}</p>
        <p className="text-sm">
          {'character' in person ? person.character : person.job}
        </p>
      </div>
    </div>
  )
}
