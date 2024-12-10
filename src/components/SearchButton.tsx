import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover'
import icon from '@/assets/search-icon.svg'


export function SearchButton() {
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
    <div className="w-96">
      <Popover>
        <PopoverTrigger>
          <img src={icon} alt="" className="img-fluid" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="w-80 p-2">
            <form className="flex justify-between gap-3"
              onSubmit={handleSubmit}>
              <div>
                <input type="search"
                  className="form-control px-2 py-1 border border-gray-500 rounded"
                  placeholder="Search..."
                  onChange={handleChange} />
              </div>
              <div>
                <button type="submit"
                  className="px-3 py-1 border border-gray-500 rounded">
                  Search
                </button>
              </div>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}