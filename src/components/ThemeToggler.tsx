import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { toggleTheme } from '@/redux/themeSlice'
import { localisation } from '@/config/localisation'
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

  const icon = isDarkMode ? lightModeIcon : darkModeIcon
  const title = isDarkMode ? local.tolight : local.todark

  return (
    <button
      className="p-2 transform transition-transform duration-300 hover:scale-110"
      onClick={handleToggleTheme}
      aria-label={title}
      title={title}>
      <img src={icon} alt={title} />
    </button>
  )
}
