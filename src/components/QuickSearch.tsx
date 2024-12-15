import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover'
import icon from '@/assets/search-icon.svg'


export function QuickSearch() {
  const { query: queryParam } = useParams()
  const navigate = useNavigate()
  const [query, setQuery] = useState<string>(queryParam || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const encodedQuery = encodeURIComponent(query)
    navigate(`/search/${encodedQuery}/1`)
  }

  return (
    <div className="h-full rounded-xl px-2
    bg-indigo-50 text-indigo-950 focus-within:bg-indigo-200
    transition-colors">
      <form
        className="flex justify-between gap-0 h-full w-full"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="search"
            className="form-control h-full rounded w-64 px-1 bg-transparent focus:outline-none"
            placeholder="Quick search..."
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="rounded bg-white h-full flex-none px-3 bg-transparent"
          >
            <img src={icon} alt="" />
          </button>
        </div>
      </form>
    </div>
  )
}