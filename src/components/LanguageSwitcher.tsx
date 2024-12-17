import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { setLang } from '@/redux/lang-slice'
import { localisation } from '@/config/localisation'
import USAFlag from '@/assets/flag_icons/USAFlag.svg'
import PolandFlag from '@/assets/flag_icons/PolandFlag.svg'
import RussiaFlag from '@/assets/flag_icons/RussiaFlag.svg'

export function LanguageSwitcher() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const dispatch = useDispatch()
  const local = localisation[lang].header.languageswitcher

  const handleClickEn = () => { dispatch(setLang('en')) }
  const handleClickPl = () => { dispatch(setLang('pl')) }
  const handleClickRu = () => { dispatch(setLang('ru')) }

  return (
    <div className="flex justify-center items-center gap-3">
      <img
        src={USAFlag}
        alt="English"
        className={`cursor-pointer w-9 shadow transition
          hover:shadow-indigo-600 hover:shadow-lg hover:scale-125
          ${lang !== 'en' ? 'grayscale-[90%] shadow-none hover:grayscale-[50%]' : ''}`}
        onClick={handleClickEn}
        title={local.en}
      />
      <img
        src={PolandFlag}
        alt="Polski"
        className={`cursor-pointer w-9 shadow transition
          hover:shadow-indigo-600 hover:shadow-lg hover:scale-125
          ${lang !== 'pl' ? 'grayscale-[90%] shadow-none hover:grayscale-[50%]' : ''}`}
        onClick={handleClickPl}
        title={local.pl}
      />
      <img
        src={RussiaFlag}
        alt="Русский"
        className={`cursor-pointer w-9 shadow transition
          hover:shadow-indigo-600 hover:shadow-lg hover:scale-125
          ${lang !== 'ru' ? 'grayscale-[90%] shadow-none hover:grayscale-[50%]' : ''}`}
        onClick={handleClickRu}
        title={local.ru}
      />
    </div>
  )
}



// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '@/redux/store'
// import { setLang } from '@/redux/lang-slice'
// import './LanguageSwitcher.css'

// import USAFlag from '@/assets/flag_icons/USAFlag.svg'
// import PolandFlag from '@/assets/flag_icons/PolandFlag.svg'
// import RussiaFlag from '@/assets/flag_icons/RussiaFlag.svg'

// export function LanguageSwitcher() {
//   const lang = useSelector((state: RootState) => state.lang.value)
//   const dispatch = useDispatch()

//   const handleClickEn = () => { dispatch(setLang('en')) }
//   const handleClickPl = () => { dispatch(setLang('pl')) }
//   const handleClickRu = () => { dispatch(setLang('ru')) }

//   return (
//     <div className="flex justify-between gap-2">
//       <img src={USAFlag} alt="English"
//         className={`flag-icon ${lang !== 'en' ? 'lang-disabled' : ''}`}
//         onClick={handleClickEn} />
//       <img src={PolandFlag} alt="Polski"
//         className={`flag-icon ${lang !== 'pl' ? 'lang-disabled' : ''}`}
//         onClick={handleClickPl} />
//       <img src={RussiaFlag} alt="Русский"
//         className={`flag-icon ${lang !== 'ru' ? 'lang-disabled' : ''}`}
//         onClick={handleClickRu} />
//     </div>
//   )
// }