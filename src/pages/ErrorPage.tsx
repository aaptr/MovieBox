import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { LinkButton } from '@/components/LinkButton'

export function ErrorPage() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].errorPage

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h1 className="text-4xl font-bold pb-10">{local.title}</h1>
      <p className="text-xl pb-8">{local.text}</p>
      <LinkButton link="/" text={local.buttontext} />
    </div>
  )
}