import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'

export function QuickSearch() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].header.quicksearch
  const { query: queryParam } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [query, setQuery] = useState<string>(queryParam || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (query.trim()) {
      const encodedQuery = encodeURIComponent(query)
      navigate(`/search/${encodedQuery}/1`)
    }
  }

  useEffect(() => {
    const isSearchPage = location.pathname.startsWith('/search/')
    if (!isSearchPage) {
      setQuery('')
    }
  }, [location.pathname])

  return (
    <div className="h-full rounded-full ps-3
    bg-indigo-50 text-indigo-950 focus-within:bg-indigo-200 
    transition-colors">
      <form
        className="flex justify-between gap-0 h-full w-full"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="search"
            className="form-control h-full w-64
              rounded bg-transparent focus:outline-none"
            placeholder={local.placeholder}
            value={query}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex-none h-full px-4 py-1 rounded-full 
              bg-indigo-500 text-white hover:bg-indigo-700">
            {local.buttontext}
          </button>
        </div>
      </form>
    </div>
  )
}
