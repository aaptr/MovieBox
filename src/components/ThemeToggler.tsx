import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

import { toggleTheme } from '@/redux/themeSlice'
import darkModeIcon from '@/assets/dark-mode.svg'
import lightModeIcon from '@/assets/light-mode.svg'

export function ThemeToggler() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div>
      <button className="p-2"
        onClick={handleToggleTheme}>
        {isDarkMode ?
          <img src={lightModeIcon} alt="light mode" title="Switch to light mode" /> :
          <img src={darkModeIcon} alt="dark mode" title="Switch to dark mode" />}
      </button>
    </div>
  )
}