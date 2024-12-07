import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { setLang } from '@/redux/lang-slice'
import './LanguageSwitcher.css'

import USAFlag from '@/assets/flag_icons/USAFlag.svg'
import PolandFlag from '@/assets/flag_icons/PolandFlag.svg'
import RussiaFlag from '@/assets/flag_icons/RussiaFlag.svg'

export function LanguageSwitcher() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch()

  const handleClickEn = () => { dispatch(setLang('en')) }
  const handleClickPl = () => { dispatch(setLang('pl')) }
  const handleClickRu = () => { dispatch(setLang('ru')) }

  return (
    <div className="flex justify-between gap-2">
      <img src={USAFlag} alt="English"
        className={`flag-icon ${lang !== 'en' ? 'lang-disabled' : ''}`}
        onClick={handleClickEn} />
      <img src={PolandFlag} alt="Polski"
        className={`flag-icon ${lang !== 'pl' ? 'lang-disabled' : ''}`}
        onClick={handleClickPl} />
      <img src={RussiaFlag} alt="Русский"
        className={`flag-icon ${lang !== 'ru' ? 'lang-disabled' : ''}`}
        onClick={handleClickRu} />
    </div>
  )
}