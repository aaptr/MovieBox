import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { fetchSetWatchlist } from '@/redux/user-slice'
import { accountEndpoint } from '@/config/api'
import inListIcon from '@/assets/in-watchlist.svg'
import notInListIcon from '@/assets/not-in-watchlist.svg'

interface WatchlistButtonProps {
  movieId: number
}

export function WatchlistButton({ movieId }: WatchlistButtonProps) {
  const dispatch = useDispatch<AppDispatch>()
  const userID = useSelector((state: RootState) => state.user.accountDetails?.id)
  const { sessionId } = useSelector((state: RootState) => state.auth)
  const inWatchlist = useSelector((state: RootState) => state.user.movieAccountState?.watchlist)

  const handleToggleFavorites = async () => {
    if (!userID || !sessionId?.session_id) return;

    const url = `${accountEndpoint}/${userID}/watchlist?session_id=${sessionId.session_id}`
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: !inWatchlist,
    }

    try {
      await dispatch(fetchSetWatchlist({ url, body }))
    } catch (error) {
      console.error('Error updating watchlist:', error)
    }
  }

  return (
    <button onClick={handleToggleFavorites} className="bg-indigo-100 rounded-full p-2">
      <img src={inWatchlist ? inListIcon : notInListIcon} alt="Watchlist" />
    </button>
  )
}
