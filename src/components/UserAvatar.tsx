import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchGuestSession } from '@/redux/auth-slice'
import { RootState } from '@/redux/store'

export function UserAvatar() {

  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()

  const handleToken = () => {
    dispatch(fetchGuestSession())
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