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
import { moviesListsEndpoint, accountEndpoint } from '@/config/api'

interface IMoviesListProps {
  listType: 'popular' | 'top_rated' | 'upcoming' | 'search' | 'favorite' | 'rated' | 'watchlist'
}

export function MoviesList({ listType }: IMoviesListProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { currentPage } = useParams<{ currentPage?: string }>()
  const userID = useSelector((state: RootState) => state.user.accountDetails?.id)
  const sessionID = useSelector((state: RootState) => state.auth.sessionId?.session_id)

  const {
    list: moviesList,
    currentPage: stateCurrentPage,
    totalPages,
    totalResults,
  } = useSelector((state: RootState) => state.movies[listType])

  const page = parseInt(currentPage ?? `${stateCurrentPage}`, 10) || 1

  useEffect(() => {
    const langParam = localisation[lang].requestLang
    const url = ['favorite', 'rated', 'watchlist'].includes(listType) ?
      `${accountEndpoint}/${userID}/${listType}/movies` :
      `${moviesListsEndpoint}${listType}`

    dispatch(
      fetchMovies({
        url,
        params: { language: langParam, page },
        listType,
      })
    )
  }, [dispatch, lang, listType, page])

  const renderCard = (movie: IMovieListItem) => {
    return <Card key={movie.id} {...movie} />
  }

  return (
    <div className="py-5">
      <div className="flex items-center justify-center">
        <div className="flex justify-between flex-wrap gap-y-3 w-9/12">
          {moviesList.map(renderCard)}
        </div>
      </div>
      <Pagination
        currentPage={String(page)}
        link={`/movies/${listType}/`}
        totalPages={totalPages}
        totalResults={totalResults}
      />
    </div>
  )
}