import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'

import { fetchUserAccountDetails, clearUrerDetails } from '@/redux/user-slice'
import { fetchRequestToken, logout } from '@/redux/auth-slice'

import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover'

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

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearUrerDetails())
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
        <Popover>
          <div className="flex items-center">
            <PopoverTrigger>
              <img src={avatarPath} alt="User Avatar" className="rounded-full" />
            </PopoverTrigger>
            <PopoverContent className="bg-gray-700 text-indigo-50">
              <div className="w-52 p-3">
                <div className="flex justify-start gap-5">
                  <p className="text-lg">User ID:</p>
                  <p className="text-lg">{accountDetails?.id}</p>
                </div>
                <div className="flex justify-start gap-5">
                  <p className="text-lg">Name:</p>
                  <p className="text-lg">{accountDetails?.name}</p>
                </div>
                <div className="pt-4">
                  <button className="w-full p-2 bg-indigo-400 rounded-xl font-bold hover:bg-indigo-600"
                    onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </PopoverContent>
          </div>
        </Popover>
      ) : (
        <button
          className="py-2 px-5 bg-indigo-600 rounded font-bold"
          onClick={handleLogin}>
          LOGIN
        </button>
      )}
    </div>
  )
}
