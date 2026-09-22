import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import { config } from '../data/config'
import { TechBackdrop } from './TechBackdrop'

export function Footer() {
  const { t, lang } = useApp()
  const isPt = lang === 'pt'

  return (
    <footer className="footer">
      <TechBackdrop variant="contact" />
      <div className="container footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-brand-title">Frank Walter Simbine</h3>
            <p className="footer-brand-subtitle">
              {isPt ? 'A sua evolução vem primeiro.' : 'Your growth comes first'}
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">{isPt ? 'Ligações rápidas' : 'Quick links'}</h4>
            <nav className="footer-nav" aria-label={isPt ? 'Navegação de rodapé' : 'Footer navigation'}>
              <a href="#inicio">{t('nav.inicio')}</a>
              <a href="#sobre">{t('nav.sobre')}</a>
              <a href="#skills">{t('nav.skills')}</a>
              <a href="#projetos">{t('nav.projetos')}</a>
              <a href="#contacto">{t('nav.contacto')}</a>
            </nav>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">{t('nav.contacto')}</h4>
            <div className="footer-contact-list">
              <a href={`tel:${config.phone}`} className="footer-contact-item">
                <Icon name="phone" size={16} />
                <span>{config.phone}</span>
              </a>
              <a href={`mailto:${config.email}`} className="footer-contact-item">
                <Icon name="mail" size={16} />
                <span>{config.email}</span>
              </a>
            </div>
            <div className="footer-social-links" aria-label={isPt ? 'Redes sociais' : 'Social media'}>
              <a href={config.links?.github} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub" data-tooltip="GitHub">
                <Icon name="github" size={19} />
              </a>
              <a href={config.links?.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn" data-tooltip="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a href={config.links?.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram" data-tooltip="Instagram">
                <Icon name="instagram" size={19} />
              </a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-copy">
            © {new Date().getFullYear()} Frank Walter Simbine. {isPt ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
