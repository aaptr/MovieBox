import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useNavigate } from 'react-router'
import { RootState } from '@/redux/store'
import { fetchSession, fetchRequestToken } from '@/redux/auth-slice'
import { localisation } from '@/config/localisation'
import { sessions } from '@/utils/sessions'
import { LinkButton } from '@/components/LinkButton'

export function LoginConfirmation() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const sessionId = useSelector((state: RootState) => state.auth.sessionId)
  const local = localisation[lang].loginConfirm
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>()
  const navigate = useNavigate()
  const [timer, setTimer] = useState(5)

  const handleLogin = async () => {
    dispatch(fetchRequestToken())
  }

  useEffect(() => {
    const requestToken = { request_token: sessions.getFromLocalStorageRequestToken() }
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

  if (sessionId) {
    return (
      <div className="p-10 items-center flex flex-col gap-5">
        <h1 className="text-2xl font-bold my-5">{local.titleApproved}</h1>
        <LinkButton link="/" text={`${local.button.textHome} ${timer}${local.button.suffix}`} />
      </div>
    )
  } else {
    return (
      <div className="p-10 items-center flex flex-col gap-5">
        <h1 className="text-2xl font-bold mb-5">{local.titleDeclined}</h1>
        <div className="flex gap-5">
          <LinkButton link="/" text={`${local.button.textHome} ${timer}${local.button.suffix}`} />
          <button className="w-80 text-nowrap px-5 py-2 rounded-full text-center
          text-2xl font-bold bg-indigo-200 dark:bg-indigo-400 text-gray-800
          transform transition-transform duration-300 hover:scale-105"
            onClick={handleLogin}>
            {local.button.textLogin}
          </button>
        </div>
      </div>
    )
  }
}
