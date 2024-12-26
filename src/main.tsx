import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from '@/redux/store.ts'
import App from '@/App.tsx'
import '@/output.css'
import '@/index.css'

createRoot(document.getElementById('root')! as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
