import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'

import { fetchMovies } from '@/redux/movies-slice'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { CardMedium } from '@/components/CardMedium'
import { Pagination } from '@/components/Pagination'
import { searchEndpoint } from '@/config/api'

export function SearchResults() {
  const { currentPage, query } = useParams<{ currentPage?: string; query?: string }>()
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()

  const {
    search: {
      list: searchResults,
      currentPage: searchCurrentPage,
      totalPages: searchTotalPages,
      totalResults: searchTotalResults
    },
    isLoading,
    error,
  } = useSelector((state: RootState) => state.movies);

  const page = parseInt(currentPage ?? '1', 10) || 1
  const safeQuery = query ?? ''
  const paginationURL = `/search/${safeQuery}/`

  useEffect(() => {
    const langParam = localisation[lang].requestLang

    dispatch(
      fetchMovies({
        url: searchEndpoint,
        params: {
          query: safeQuery,
          include_adult: false,
          language: langParam,
          page,
        },
        listType: 'search',
      })
    )
  }, [dispatch, lang, page, safeQuery])

  const renderCardMedium = () => {
    return searchResults.map((movie) => <CardMedium key={movie.id} {...movie} />)
  }


  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (searchResults.length === 0) {
    return <h1>No movies found</h1>
  }

  return (
    <div className="mt-4 mb-2">
      <div className="w-full">
        {renderCardMedium()}
      </div>
      <Pagination
        currentPage={String(page)}
        link={paginationURL}
        searchTotalPages={searchTotalPages}
        searchTotalResults={searchTotalResults} />
    </div>
  )
}
