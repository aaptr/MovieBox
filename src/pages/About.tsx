import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'

export function About() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch()

  const local = localisation[lang].about

  return (
    <div className="pt-20 w-4/5 m-auto">
      <h1 className="text-4xl font-bold">{local.title}</h1>
      <p className="pt-16 text-xl">{local.text}</p>
    </div>
  )
}