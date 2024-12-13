import { NavLink } from 'react-router-dom'
import { buildSchemePagination } from '@/utils/buildSchemePagination'

interface PaginationProps {
  currentPage: string
  query: string
  searchTotalPages: number
  searchTotalResults: number
}

export function Pagination({ currentPage, query, searchTotalPages, searchTotalResults }: PaginationProps) {
  const page = parseInt(currentPage ?? '1', 10) || 1
  const lastRes = page * 20
  const firstRes = lastRes - 19

  const renderPaginationItems = () => {
    const scheme = buildSchemePagination(page, searchTotalPages)

    return scheme.map((item, index) => (
      <div key={index}>
        {item === '...' ? (
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300">
            ...
          </span>
        ) : (
          <NavLink
            to={`/search/${query}/${item}`}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${item == currentPage
              ? 'z-10 bg-gray-900 text-gray-300 dark:bg-gray-300 dark:text-gray-900 cursor-default '
              : 'ring-1 ring-inset ring-gray-400 hover:bg-gray-400'
              }`}
            aria-disabled={item === currentPage}
          >
            {item}
          </NavLink>
        )}
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm">
            Showing{' '}
            <span className="font-bold">{firstRes}</span>
            {' '}to{' '}
            <span className="font-bold">{lastRes}</span>
            {' '}of{' '}
            <span className="font-bold">{searchTotalResults}</span>
            {' '}results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            {renderPaginationItems()}
          </nav>
        </div>
      </div>
    </div>
  )
}