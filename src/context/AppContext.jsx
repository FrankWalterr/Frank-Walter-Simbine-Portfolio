import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const AppContext = createContext(null)

function getInitialTheme() {
  const stored = localStorage.getItem('portfolio-theme')
  if (stored) return stored
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)')?.matches) return 'dark'
  return 'light'
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-lang') || 'pt')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    document.documentElement.lang = lang === 'pt' ? 'pt' : 'en'
    localStorage.setItem('portfolio-theme', theme)
    localStorage.setItem('portfolio-lang', lang)
  }, [theme, lang])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) value = value?.[k]
    return value != null ? value : key
  }

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  const toggleLang = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))

  return (
    <AppContext.Provider value={{ theme, lang, setTheme, setLang, toggleTheme, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
