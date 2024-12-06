import { useDispatch, useSelector, UseSelector } from "react-redux"

import { toggleTheme } from "@/redux/themeSlice"
import { RootState } from "@/redux/store"



export function ThemeToggler() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

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