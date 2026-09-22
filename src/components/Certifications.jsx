import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import { TechBackdrop } from './TechBackdrop'

function CertCard({ cert, verifiedLabel, inProgressLabel, verifyLabel, index }) {
  const initial = String(cert.issuer || '?').charAt(0).toUpperCase()

  return (
    <article className="cert-card" style={{ '--cert-i': index }}>
      <div className="cert-card-glow" aria-hidden="true" />
      <div className="cert-card-accent" aria-hidden="true" />

      <div className="cert-card-top">
        <div className="cert-issuer-mark" aria-hidden="true">{initial}</div>
        <div className="cert-card-heading">
          <p className="cert-issuer">{cert.issuer}</p>
          <h3 className="cert-title">{cert.title}</h3>
        </div>
        <span className={`cert-verified ${cert.inProgress ? 'cert-in-progress' : ''}`}>
          {cert.inProgress ? inProgressLabel : verifiedLabel}
        </span>
      </div>

      {Array.isArray(cert.tags) && cert.tags.length ? (
        <div className="cert-tags">
          {cert.tags.map((tag) => (
            <span key={tag} className="cert-tag">{tag}</span>
          ))}
        </div>
      ) : null}

      <div className="cert-footer">
        <span className="cert-date">{cert.date}</span>
        {cert.url ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-verify-link"
          >
            {verifyLabel}
            <Icon name="external" size={13} />
          </a>
        ) : cert.code ? (
          <span className="cert-code" title={cert.code}>
            #{String(cert.code).slice(0, 10)}
          </span>
        ) : null}
      </div>
    </article>
  )
}

export function Certifications() {
  const { t } = useApp()
  const items = t('certifications.items')
  const certs = Array.isArray(items) ? items : []

  return (
    <section id="certificacoes" className="section certifications">
      <TechBackdrop variant="certs" />
      <div className="certifications-bg-glow" aria-hidden="true" />
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-icon"><Icon name="graduation" size={28} /></span>
          <span>{t('certifications.title')}</span>
        </h2>
        <p className="section-tagline">{t('certifications.tagline')}</p>

        <div className="certifications-grid reveal">
          {certs.map((cert, index) => (
            <CertCard
              key={cert.title}
              cert={cert}
              index={index}
              verifiedLabel={t('certifications.verified')}
              inProgressLabel={t('certifications.inProgress')}
              verifyLabel={t('certifications.verify')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
