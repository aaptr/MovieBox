import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { RootState } from '@/redux/store'
import { fetchUserAccountDetails, clearUserDetails } from '@/redux/user-slice'
import { fetchRequestToken, logout } from '@/redux/auth-slice'
import { accountEndpoint, imagePath } from '@/config/api'
import { localisation } from '@/config/localisation'
import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover'
import defaultAvatar from '@/assets/default_avatar.svg'

export function UserAvatar() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].header.useravatar
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const sessionId = useSelector((state: RootState) => state.auth.sessionId)
  const accountDetails = useSelector((state: RootState) => state.user.accountDetails)

  const avatarPath = accountDetails?.avatar?.tmdb?.avatar_path
    ? `${imagePath}/w45${accountDetails.avatar.tmdb.avatar_path}`
    : defaultAvatar

  const handleLogin = async () => {
    dispatch(fetchRequestToken())
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearUserDetails())
    navigate('/')
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
              <div className="w-72 p-3">
                <div className="flex justify-start gap-5 py-2">
                  <p className="text-lg">{local.userID}</p>
                  <p className="text-lg font-bold text-indigo-500">{accountDetails?.id}</p>
                </div>
                <div className="flex justify-start gap-5 py-2">
                  <p className="text-lg">{local.name}</p>
                  <p className="text-lg font-bold text-indigo-500">{accountDetails?.name}</p>
                </div>
                <div className="pt-8">
                  <button className="w-full p-2 bg-indigo-500 rounded-full font-bold hover:bg-indigo-600"
                    onClick={handleLogout}>
                    {local.logout}
                  </button>
                </div>
              </div>
            </PopoverContent>
          </div>
        </Popover>
      ) : (
        <button
          className="py-2 px-5 bg-indigo-500 rounded-full font-bold"
          onClick={handleLogin}>
          {local.login}
        </button>
      )}
    </div>
  )
}
