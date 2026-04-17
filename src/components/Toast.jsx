import { useEffect } from 'react'

export function Toast({ message, isError = false, onClose, duration = 5000 }) {
  useEffect(() => {
    if (!duration || !onClose) return
    const t = setTimeout(onClose, duration)
    return () => clearTimeout(t)
  }, [duration, onClose])

  return (
    <div
      className={`toast ${isError ? 'toast-error' : 'toast-success'}`}
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  )
}
