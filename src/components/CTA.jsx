import { useApp } from '../context/AppContext'
import { Icon } from './Icons'

export function CTA() {
  const { t } = useApp()
  return (
    <section id="cta" className="section cta" aria-labelledby="cta-heading">
      <div className="cta-backdrop" aria-hidden="true">
        <div className="cta-grid-overlay" />
        <span className="cta-orb cta-orb-a" />
        <span className="cta-orb cta-orb-b" />
        <span className="cta-orb cta-orb-c" />
      </div>
      <div className="container cta-inner">
        <div className="cta-panel">
          <p className="cta-section-tagline">{t('cta.tagline')}</p>
          <p className="cta-badge">
            <Icon name="sparkles" size={18} className="cta-badge-icon" aria-hidden="true" />
            <span>{t('cta.badge')}</span>
          </p>
          <h2 id="cta-heading" className="cta-title">
            {t('cta.title')}
          </h2>
          <p className="cta-lead">{t('cta.lead')}</p>
          <p className="cta-text">{t('cta.text')}</p>
          <a href="#contacto" className="btn btn-primary btn-cta">
            <span>{t('cta.btn')}</span>
            <Icon name="arrowRight" size={22} className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
