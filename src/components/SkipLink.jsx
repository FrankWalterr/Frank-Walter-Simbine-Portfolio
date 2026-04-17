import { useApp } from '../context/AppContext'

export function SkipLink() {
  const { t } = useApp()
  return (
    <a href="#main-content" className="skip-link">
      {t('a11y.skipContent')}
    </a>
  )
}
