import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"

import { toggleTheme } from "@/redux/themeSlice"

export function ThemeToggler() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div>
      <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded"
        onClick={handleToggleTheme}>Toggle theme</button>
    </div>
  )
}