import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'

import { fetchSearchMovies } from '@/redux/movies-slice'
import { RootState } from '@/redux/store'
import { SearchResultCard } from '@/components/SearchResultCard'

export function SearchResults() {
  const { currentPage, query } = useParams()
  const dispatch = useDispatch()
  const lang = useSelector((state: RootState) => state.lang.value)
  const {
    searchResults,
    isLoading,
    error,
    searchCurrentPage,
    searchTotalPages,
    searchTotalResults
  } = useSelector((state: RootState) => state.movies)

  const searchURL = ''

  useEffect(() => {
    dispatch(fetchSearchMovies(searchURL))

  }