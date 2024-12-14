import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"
import { ThunkDispatch } from 'redux-thunk'
import { fetchGuestSession, fetchRequestToken } from '@/redux/auth-slice'
import { RootState } from '@/redux/store'

export function UserAvatar() {
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const { requestToken } = useSelector((state: RootState) => state.auth)

  const handleToken = async () => {
    dispatch(fetchRequestToken())
  }

  return (
    <div>
      <span className="p-2 bg-indigo-400 rounded-md"
        onClick={handleToken}>
        LOGIN
      </span>
    </div>
  )
}