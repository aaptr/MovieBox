import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useNavigate } from 'react-router'

import { RootState } from '@/redux/store'
import { fetchSession } from '@/redux/auth-slice'
import { localisation } from '@/config/localisation'
import { sessions } from '@/utils/sessions'

export function AuthApproved() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].authApproved
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
    <div className="p-10">
      <h1 className="text-2xl font-bold">{local.title}</h1>
      <button type="button"
        onClick={() => navigate('/')}
        className="border border-gray-200 rounded-full text-lg px-5 py-2.5 mr-2 mb-2">
        `${local.button.text} {timer}${local.button.suffix}`
      </button>
    </div>
  )
}