import { createContext, useContext, useState, useCallback } from 'react'
import { Toast } from '../components/Toast'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message, isError = false) => {
    setToast({ message, isError })
  }, [])

  const hideToast = useCallback(() => setToast(null), [])

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          isError={toast.isError}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  return ctx || { showToast: () => {}, hideToast: () => {} }
}
