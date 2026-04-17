import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from './Icons'

const navItems = [
  { id: 'inicio', href: '#inicio', icon: 'home' },
  { id: 'sobre', href: '#sobre', icon: 'user' },
  { id: 'skills', href: '#skills', icon: 'code' },
  { id: 'projetos', href: '#projetos', icon: 'folder' },
  { id: 'contacto', href: '#contacto', icon: 'mail' },
]

export function Navbar({ activeSection }) {
  const { t, toggleTheme, toggleLang, theme } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)

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
          {navItems.map(({ id, href, icon }) => (
            <a
              key={id}
              href={href}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              data-section={id}
              onClick={(e) => handleNavClick(e, href)}
            >
              <Icon name={icon} size={18} className="nav-icon"/>
              <span>{t(`nav.${id}`)}</span>
            </a>
          ))}
        </nav>
        <div className="navbar-actions">
          <button type="button" className="btn-icon btn-theme" onClick={toggleTheme} aria-label={t('a11y.toggleTheme')}>
            <span className="icon-sun"><Icon name="sun" size={20}/></span>
            <span className="icon-moon"><Icon name="moon" size={20}/></span>
          </button>
          <button type="button" className="btn-icon btn-lang" onClick={toggleLang} aria-label={t('a11y.toggleLang')}>PT | EN</button>
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
