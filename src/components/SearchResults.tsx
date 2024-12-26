import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'

import { fetchMovies } from '@/redux/movies-slice'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { CardMedium } from '@/components/CardMedium'
import { Pagination } from '@/components/Pagination'
import { SelectComponent } from '@/components/SelectComponent'
import { discoverEndpoint } from '@/config/api'

export function SearchResults() {
  const { currentPage, query } = useParams<{ currentPage?: string, query?: string }>()
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].search
  const localSortBy = localisation[lang].movies.sortSelectOptions
  const [sortBy, setSortBy] = useState<string>('popularity.desc')
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const {
    search: {
      list: searchResults,
      totalPages: searchTotalPages,
      totalResults: searchTotalResults
    },
    isLoading,
    error,
  } = useSelector((state: RootState) => state.movies)
  const selectOptions = [
    { value: "title.asc", label: localSortBy.titleAsc },
    { value: "title.desc", label: localSortBy.titleDesc },
    { value: "popularity.asc", label: localSortBy.popularAsc },
    { value: "popularity.desc", label: localSortBy.popularDesc },
    { value: "primary_release_date.asc", label: localSortBy.releaseDateAsc },
    { value: "primary_release_date.desc", label: localSortBy.releaseDateDesc },
    { value: "vote_average.asc", label: localSortBy.ratingAsc },
    { value: "vote_average.desc", label: localSortBy.ratingDesc },
    { value: "vote_count.asc", label: localSortBy.voteCountAsc },
    { value: "vote_count.desc", label: localSortBy.voteCountDesc }
  ]
  const page = parseInt(currentPage ?? '1', 10) || 1
  const safeQuery = query ?? ''
  const paginationURL = `/search/${safeQuery}/`

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  useEffect(() => {
    const langParam = localisation[lang].requestLang

    dispatch(
      fetchMovies({
        url: discoverEndpoint,
        params: {
          with_text_query: safeQuery,
          include_adult: false,
          language: langParam,
          page,
          sort_by: sortBy
        },
        listType: 'search',
      })
    )
  }, [dispatch, lang, page, safeQuery, sortBy])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const renderCardMedium = () => {
    return searchResults.map((movie) => <CardMedium key={movie.id} {...movie} />)
  }


  if (isLoading) {
    return <h1>{local.isLoading}</h1>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (searchResults.length === 0) {
    return <h1>{local.noResults}</h1>
  }

  return (
    <div className="mt-4 mb-2">
      <div className="pt-3 pb-8 flex items-center justify-end gap-3">
        <p>Sort by: </p>
        <SelectComponent
          value={sortBy}
          onChange={handleSortChange}
          options={selectOptions}
        />
      </div>
      <div className="w-full">
        {renderCardMedium()}
      </div>
      <Pagination
        currentPage={String(page)}
        link={paginationURL}
        totalPages={searchTotalPages}
        totalResults={searchTotalResults} />
    </div>
  )
}
