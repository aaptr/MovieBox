import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { fetchSetWatchlist } from '@/redux/user-slice'

import inListIcon from '@/assets/in-watchlist.svg'
import notInListIcon from '@/assets/not-in-watchlist.svg'
import { accountEndpoint } from '@/config/api'

interface WatchlistButtonProps {
  movieId: number
}

export function WatchlistButton({ movieId }: WatchlistButtonProps) {
  const dispatch = useDispatch<AppDispatch>()
  const userID = useSelector((state: RootState) => state.user.accountDetails?.id)
  const { sessionId } = useSelector((state: RootState) => state.auth)
  const inWatchlist = useSelector((state: RootState) => state.user.movieAccountState?.watchlist)
  const [inList, setinList] = useState(inWatchlist)

  useEffect(() => {
    setinList(inWatchlist)
  }), [inWatchlist]

  const handleToggleFavorites = () => {
    const url = `${accountEndpoint}/${userID}/watchlist?session_id=${sessionId?.session_id}`
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: !inWatchlist,
    }

    dispatch(fetchSetWatchlist({ url, body }))
  }

  return (
    <button onClick={handleToggleFavorites}
      className="bg-indigo-100 rounded-full p-2">
      <img src={inList ? inListIcon : notInListIcon} alt="Favorite" />
    </button>
  )
}
