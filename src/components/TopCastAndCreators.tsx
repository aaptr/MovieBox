import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { ICastMember, ICrewMember } from '@/types/MoviesTypes'
import { CastList } from '@/components/CastList'
import { CrewMembers } from '@/components/CrewMembers'

interface TopCastAndCreatorsProps {
  topCast: ICastMember[]
  creators: ICrewMember[]
}

export function TopCastAndCreators({ topCast, creators }: TopCastAndCreatorsProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const { topCastLabel, creativeTeamLabel } = localisation[lang].movie.topCastAndCreators

  return (
    <section className="flex justify-between mx-5 p-5 rounded-3xl">
      <div className="w-3/4">
        <h2 className="text-3xl font-bold p-5">{topCastLabel}</h2>
        <CastList persons={topCast} />
      </div>
      <aside className="w-1/4 ps-10">
        <h2 className="text-3xl font-bold p-5">{creativeTeamLabel}</h2>
        <CrewMembers persons={creators} />
      </aside>
    </section>
  )
}