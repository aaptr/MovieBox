import { SearchResults } from '@/components/SearchResults'

export function SearchMovies() {
  return (
    <div className="pt-10 w-3/4 m-auto">
      <h1>Search Results</h1>
      <div>
        <SearchResults />
      </div>
    </div>
  )
}