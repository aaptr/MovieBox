import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { fetchSetFavorites } from '@/redux/user-slice'
import { accountEndpoint } from '@/config/api'
import favoriteIcon from '@/assets/favorite.svg'
import notfavoriteIcon from '@/assets/notfavorite.svg'

interface FavoriteButtonProps {
  movieId: number
}

export function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const dispatch = useDispatch<AppDispatch>()
  const userID = useSelector((state: RootState) => state.user.accountDetails?.id)
  const { sessionId } = useSelector((state: RootState) => state.auth)
  const isFavorite = useSelector((state: RootState) => state.user.movieAccountState?.favorite)

  const handleToggleFavorites = () => {
    const url = `${accountEndpoint}/${userID}/favorite?session_id=${sessionId?.session_id}`
    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite: !isFavorite,
    }

    dispatch(fetchSetFavorites({ url, body }))
  }

  return (
    <button onClick={handleToggleFavorites} className="bg-indigo-100 rounded-full p-2">
      <img src={isFavorite ? favoriteIcon : notfavoriteIcon} alt="Favorite" />
    </button>
  )
}
