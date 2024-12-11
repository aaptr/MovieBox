import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import { fetchMovies } from '@/redux/movies-slice'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { CardMedium } from '@/components/CardMedium'
import { buildSchemePagination } from '@/utils/buildSchemePagination'
import { searchEndpoint } from '@/config/api'

export function SearchResults() {
  const { currentPage, query } = useParams<{ currentPage: string; query: string }>()
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()

  const {
    searchResults,
    isLoading,
    error,
    searchTotalPages,
    searchTotalResults,
  } = useSelector((state: RootState) => state.movies)

  const page = parseInt(currentPage ?? '1', 10) || 1

  useEffect(() => {
    const langParam = localisation[lang].requestLang

    dispatch(
      fetchMovies({
        url: searchEndpoint,
        params: {
          query,
          include_adult: false,
          language: langParam,
          page,
        },
        listType: 'search',
      })
    )
  }, [dispatch, lang, page, query])

  const renderCardMedium = () => {
    return searchResults.map((movie) => <CardMedium key={movie.id} {...movie} />)
  }

  const renderPagination = () => {
    return (
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
              {renderPaginationItems()}
            </nav>
          </div>
        </div>
      </div>
    );
  };

  const renderPaginationItems = () => {
    const page = parseInt(currentPage ?? '1', 10) || 1;
    const scheme = buildSchemePagination(page, searchTotalPages);

    return scheme.map((item, index) => (
      <div key={index}>
        {item === '...' ? (
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300">
            ...
          </span>
        ) : (
          <NavLink
            to={`/search/${query}/${item}`}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${item === currentPage
              ? 'z-10 bg-indigo-600 text-white cursor-default'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200'
              }`}
            aria-disabled={item === currentPage}  // Отключить нажатие на текущую страницу
          >
            {item}
          </NavLink>
        )}
      </div>
    ));
  };

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
      {renderPagination()}
    </div>
  )
}
