import { Provider } from 'react-redux'
import { RouterProvider, } from 'react-router-dom'
import { router } from '@/router'
import { store } from '@/redux/store'

import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
