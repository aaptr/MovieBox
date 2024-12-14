import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'

import { fetchMovies } from '@/redux/movies-slice'
import { Card } from '@/components/Card'
import { Pagination } from '@/components/Pagination'
import { IMovieListItem } from '@/types/MoviesTypes'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { moviesListsEndpoint } from '@/config/api'

interface IMoviesListProps {
  listType: 'popular' | 'topRated' | 'upcoming';
}

export function MoviesList({ listType }: IMoviesListProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { currentPage } = useParams()
  const moviesList = useSelector((state: RootState) => {
    switch (listType) {
      case 'popular':
        return state.movies.popularList
      case 'topRated':
        return state.movies.topRatedList
      case 'upcoming':
        return state.movies.upcomingList
      default:
        return []
    }
  })
  const page = parseInt(currentPage ?? '1', 10) || 1

  useEffect(() => {
    const langParam = localisation[lang].requestLang
    const url = `${moviesListsEndpoint}${listType}`

    dispatch(
      fetchMovies({
        url,
        params: { language: langParam, page: currentPage || 1 },
        listType,
      })
    )
  }, [dispatch, lang, listType, currentPage])

  const renderCard = (movie: IMovieListItem) => {
    return <Card key={movie.id} {...movie} />
  }

  return (
    <div>
      <h2>Title</h2>
      <div className="flex flex-wrap">
        {moviesList.map(renderCard)}
      </div>
      <Pagination
        currentPage={String(page)}
        query={safeQuery}
        searchTotalPages={searchTotalPages}
        searchTotalResults={searchTotalResults} />
    </div>
  )
}