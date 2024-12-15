import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { fetchSetFavorites } from '@/redux/user-slice'

import favoriteIcon from '@/assets/favorite.svg'
import notfavoriteIcon from '@/assets/notfavorite.svg'
import { accountEndpoint } from '@/config/api'

interface FavoriteButtonProps {
  movieId: number
}

export function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const dispatch = useDispatch<AppDispatch>()
  const userID = useSelector((state: RootState) => state.user.accountDetails?.id)
  const { sessionId } = useSelector((state: RootState) => state.auth)
  const isFavorite = useSelector((state: RootState) => state.user.movieAccountState?.favorite)
  const [isFavoriteState, setisFavoriteState] = useState(isFavorite)

  useEffect(() => {
    setisFavoriteState(isFavorite)
  }), [isFavorite]

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
    <button onClick={handleToggleFavorites}
      className="bg-indigo-100 rounded-full p-2">
      <img src={isFavoriteState ? favoriteIcon : notfavoriteIcon} alt="Favorite" />
    </button>
  )
}
