import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

import { localisation } from '@/config/localisation'
import { toggleTheme } from '@/redux/themeSlice'
import darkModeIcon from '@/assets/dark-mode.svg'
import lightModeIcon from '@/assets/light-mode.svg'

export function ThemeToggler() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].header.themetoggler
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className="transform transition-transform duration-300 hover:scale-110">
      <button className="p-2"
        onClick={handleToggleTheme}>
        {isDarkMode ?
          <img src={lightModeIcon} alt="light mode" title={local.tolight} /> :
          <img src={darkModeIcon} alt="dark mode" title={local.todark} />}
      </button>
    </div>
  )
}