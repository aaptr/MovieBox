import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'

import { fetchMovies } from '@/redux/movies-slice'
import { Card } from '@/components/Card'
import { Pagination } from '@/components/Pagination'
import { SelectComponent } from '@/components/SelectComponent'
import { IMovieListItem } from '@/types/MoviesTypes'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { getCurrentDate, adjustDateByMonthsFromStart } from '@/utils/getDates'
import { discoverEndpoint, accountEndpoint } from '@/config/api'

interface IMoviesListProps {
  listType: 'now_playing' | 'popular' | 'top_rated' | 'upcoming' | 'search' | 'favorite' | 'rated' | 'watchlist'
  path: string
}

export function MoviesList({ listType, path }: IMoviesListProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { currentPage } = useParams<{ currentPage?: string }>()
  const userID = useSelector((state: RootState) => state.user.accountDetails?.id)
  const [sortBy, setSortBy] = useState<string>(() => {
    return localStorage.getItem('moviesSortBy') || 'popularity.desc'
  })
  const nowPlayingLimit = adjustDateByMonthsFromStart(getCurrentDate(), -1)
  const upcomingLimit = adjustDateByMonthsFromStart(getCurrentDate(), 2)
  const {
    list: moviesList,
    currentPage: stateCurrentPage,
    totalPages,
    totalResults,
  } = useSelector((state: RootState) => state.movies[listType])
  const page = parseInt(currentPage ?? `${stateCurrentPage}`, 10) || 1
  const localSortBy = localisation[lang].movies.sortSelectOptions
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
    { value: "vote_count.desc", label: localSortBy.voteCountDesc },
  ]

  const handleSortChange = (value: string) => {
    setSortBy(value)
    localStorage.setItem('moviesSortBy', value)
  }

  useEffect(() => {
    const langParam = localisation[lang].requestLang
    const url = ['favorite', 'rated', 'watchlist'].includes(listType) ?
      `${accountEndpoint}/${userID}/${listType}/movies` :
      discoverEndpoint

    let params: Record<string, any> = {
      language: langParam,
      page,
      sort_by: sortBy
    }

    switch (listType) {
      case 'now_playing':
        params['primary_release_date.gte'] = nowPlayingLimit
        params['primary_release_date.lte'] = getCurrentDate()
        break
      case 'popular':
        params['popularity_threshold'] = 500
        break
      case 'top_rated':
        params['vote_average.gte'] = 8
        params['vote_count.gte'] = 500
        break
      case 'upcoming':
        params['primary_release_date.gte'] = getCurrentDate()
        params['primary_release_date.lte'] = upcomingLimit
        setSortBy('primary_release_date.asc')
        break
    }

    dispatch(
      fetchMovies({
        url,
        params,
        listType,
      })
    )
  }, [dispatch, lang, listType, page, sortBy])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])


  const renderCard = (movie: IMovieListItem) => {
    return <Card key={movie.id} {...movie} />
  }

  return (
    <div className="py-5">
      <div className="pe-20 pt-3 pb-8 flex items-center justify-end gap-3">
        <p>Sort by: </p>
        <SelectComponent
          value={sortBy}
          onChange={handleSortChange}
          options={selectOptions}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-3 gap-x-3 w-10/12">
          {moviesList.map((movie, index) => (
            <div key={index}>
              {renderCard(movie)}
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={String(page)}
        link={`${path}/${listType}/`}
        totalPages={totalPages}
        totalResults={totalResults}
      />
    </div>
  )
}