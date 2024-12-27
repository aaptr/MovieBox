import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { SearchResults } from '@/components/SearchResults'

export function SearchMovies() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].search

  return (
    <div className="pt-14 w-3/5 m-auto">
      <h1 className="text-3xl font-bold pb-5 ps-4">
        {local.title}
      </h1>
      <div>
        <SearchResults />
      </div>
    </div>
  )
}