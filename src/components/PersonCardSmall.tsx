import { ICrewMember, ICastMember } from '@/types/MoviesTypes'
import { imagePath } from '@/config/api'
import imagePlaceholder from '@/assets/image-placeholder.webp'

export function PersonCardSmall({ person }: { person: ICrewMember | ICastMember }) {
  const imageSrc = person.profile_path ? `${imagePath}/w92${person.profile_path}` : imagePlaceholder

  return (
    <div className="max-w-72 flex gap-10 rounded-xl
      p-2 border border-gray-200 dark:border-gray-700
      bg-indigo-50 dark:bg-gray-900">
      <div className="max-w-12">
        <img src={imageSrc} alt="" className="w-full rounded-xl" />
      </div>
      <div className="">
        <p className="text-md font-bold">{person.name}</p>
        <p className="text-sm">{'character' in person ? person.character : person.job}</p>
      </div>
    </div>
  )
}
