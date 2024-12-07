import { useSelector, useDispatch } from 'react-redux'
import { fetchGuestSession } from '@/redux/auth-slice'

export function UserAvatar() {

  const dispatch = useDispatch()

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