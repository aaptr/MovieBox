import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { router } from '@/router'
import { store, RootState } from '@/redux/store'

import './index.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all">
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App
