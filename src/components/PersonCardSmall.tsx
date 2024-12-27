import { imagePath } from '@/config/api'
import { ICrewMember, ICastMember } from '@/types/MoviesTypes'
import imagePlaceholder from '@/assets/image-placeholder.webp'

export function PersonCardSmall({ person }: { person: ICrewMember | ICastMember }) {
  return (
    <div className="flex max-w-72 gap-4 p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-gray-900">
      <img
        src={person.profile_path ? `${imagePath}/w92${person.profile_path}` : imagePlaceholder}
        alt={person.name}
        className="w-12 h-12 rounded-xl object-cover"
      />
      <div>
        <p className="text-md font-bold">{person.name}</p>
        <p className="text-sm">{'character' in person ? person.character : person.job}</p>
      </div>
    </div>
  )
}
