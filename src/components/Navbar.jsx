import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from './Icons'

const navItems = [
  { id: 'inicio', href: '#inicio' },
  { id: 'sobre', href: '#sobre' },
  { id: 'skills', href: '#skills' },
  { id: 'projetos', href: '#projetos' },
  { id: 'contacto', href: '#contacto' },
]

export function Navbar({ activeSection }) {
  const { t, toggleTheme, toggleLang, theme, lang } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const languageName = lang === 'pt' ? 'Português' : 'English'
  const languageCode = lang === 'pt' ? 'PT' : 'EN'

  const handleNavClick = (e, href) => {
    if (href === '#') return
    e.preventDefault()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${menuOpen ? 'open' : ''}`} id="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={(e) => handleNavClick(e, '#inicio')}>
          <span>Frank Simbine</span>
        </a>
        <nav className="navbar-menu" id="navbar-menu" aria-label={t('a11y.navLabel')}>
          {navItems.map(({ id, href }) => (
            <a
              key={id}
              href={href}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              data-section={id}
              onClick={(e) => handleNavClick(e, href)}
            >
              <span>{t(`nav.${id}`)}</span>
            </a>
          ))}

          <div className="nav-mobile-controls" aria-label="Preferências">
            <button type="button" className="nav-mobile-theme" onClick={toggleTheme} aria-label={t('a11y.toggleTheme')}>
              <span className="nav-mobile-theme-icon"><Icon name={theme === 'dark' ? 'moon' : 'sun'} size={18} /></span>
              <span>{theme === 'dark' ? 'Modo escuro' : 'Modo claro'}</span>
            </button>
            <button type="button" className="nav-mobile-lang" onClick={toggleLang} aria-label={t('a11y.toggleLang')}>
              <span className="nav-language-code">{languageCode}</span>
              <span className="nav-language-name">{languageName}</span>
            </button>
          </div>
        </nav>
        <div className="navbar-actions">
          <button type="button" className="btn-icon btn-theme btn-desktop-only" onClick={toggleTheme} aria-label={t('a11y.toggleTheme')}>
            <span className="icon-sun"><Icon name="sun" size={20}/></span>
            <span className="icon-moon"><Icon name="moon" size={20}/></span>
          </button>
          <button type="button" className="btn-icon btn-lang btn-desktop-only" onClick={toggleLang} aria-label={`${t('a11y.toggleLang')}: ${languageName}`}>
            <span className="nav-language-code">{languageCode}</span>
            <span className="nav-language-name">{languageName}</span>
          </button>
          <button
            type="button"
            className="btn-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t('a11y.menu')}
            aria-expanded={menuOpen}
            aria-controls="navbar-menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </header>
  )
}
