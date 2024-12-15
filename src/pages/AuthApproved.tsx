import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useNavigate } from 'react-router'

import { RootState } from '@/redux/store'
import { fetchSession } from '@/redux/auth-slice'
import { localisation } from '@/config/localisation'
import { sessions } from '@/utils/sessions'

export function AuthApproved() {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const navigate = useNavigate()
  const [timer, setTimer] = useState(5)

  useEffect(() => {
    const requestToken = { request_token: sessions.getFromLocalStorageRequestToken() }
    console.log(requestToken)
    dispatch(fetchSession(requestToken))

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    const timeout = setTimeout(() => {
      navigate('/')
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [dispatch, navigate])


  return (
    <div>
      <h1>Approved</h1>
      <button type="button"
        onClick={() => navigate('/')}
        className="borderfont-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
        Go to Home Page ({timer})
      </button>
    </div>
  )
}