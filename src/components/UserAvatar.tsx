import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'

import { fetchUserAccountDetails } from '@/redux/user-slice'
import { fetchRequestToken } from '@/redux/auth-slice'

import { accountEndpoint, imagesEndpoint } from '@/config/api'
import defaultAvatar from '@/assets/default_avatar.svg'

export function UserAvatar() {
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const sessionId = useSelector((state: RootState) => state.auth.sessionId)
  const accountDetails = useSelector((state: RootState) => state.user.accountDetails)

  const avatarPath = accountDetails?.avatar?.tmdb?.avatar_path
    ? `${imagesEndpoint}w45${accountDetails.avatar.tmdb.avatar_path}`
    : defaultAvatar

  const handleLogin = async () => {
    dispatch(fetchRequestToken())
  }

  useEffect(() => {
    if (sessionId) {
      const accountURL = `${accountEndpoint}?session_id=${sessionId.session_id}`
      dispatch(fetchUserAccountDetails(accountURL))
    }
  }, [dispatch, sessionId])

  return (
    <div>
      {sessionId ? (
        <span
          onClick={() => navigate('/logout')}
        >
          <img src={avatarPath} alt="User Avatar" className="rounded-full" />
        </span>
      ) : (
        <span
          className="p-2 bg-indigo-400 rounded-md"
          onClick={handleLogin}
        >
          LOGIN
        </span>
      )}
    </div>
  )
}
