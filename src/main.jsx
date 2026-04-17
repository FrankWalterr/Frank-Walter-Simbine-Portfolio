import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './context/AppContext'
import { ToastProvider } from './context/ToastContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ToastProvider>
        <Suspense fallback={<div className="app-loading" aria-hidden="true" />}>
          <App />
        </Suspense>
      </ToastProvider>
    </AppProvider>
  </React.StrictMode>
)
