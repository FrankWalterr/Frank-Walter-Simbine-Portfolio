import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import profilePhoto from '../assets/Foto1.webp'
import { config } from '../data/config'
import { TechBackdrop } from './TechBackdrop'

export function Hero() {
  const { t } = useApp()
  return (
    <section id="inicio" className="section hero">
      <div className="hero-bg" aria-hidden="true" />
      <TechBackdrop variant="hero" />
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting hero-anim">{t('hero.greeting')}</p>
          <h1 className="hero-name hero-anim hero-anim-3">Frank Walter Simbine</h1>
          <p className="hero-title hero-anim hero-anim-4">{t('hero.title')}</p>
          <p className="hero-intro hero-anim hero-anim-5">{t('hero.intro')}</p>
          <div className="hero-buttons hero-anim hero-anim-6">
            <a href="#projetos" className="btn btn-primary hero-primary-button">
              <span>{t('hero.btnProjects')}</span>
            </a>
            <a href="#contacto" className="btn btn-secondary hero-secondary-button">
              <span>{t('hero.btnContact')}</span>
            </a>
          </div>
          <div className="hero-quick-links hero-anim hero-anim-7">
            <a href={`mailto:${config.email}`} className="hero-quick-link" aria-label="Enviar email" data-tooltip="Email">
              <Icon name="mail" size={18} />
            </a>
            <a href={config.links?.github} target="_blank" rel="noopener noreferrer" className="hero-quick-link" aria-label="Abrir GitHub" data-tooltip="GitHub">
              <Icon name="github" size={18} />
            </a>
            <a href={config.links?.linkedin} target="_blank" rel="noopener noreferrer" className="hero-quick-link" aria-label="Abrir LinkedIn" data-tooltip="LinkedIn">
              <Icon name="linkedin" size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual hero-anim hero-anim-6">
          <div className="hero-avatar">
            <img
              src={profilePhoto}
              alt="Foto de perfil de Frank Walter Simbine"
              className="hero-avatar-img"
              width="360"
              height="447"
              fetchPriority="high"
              decoding="async"
            />
            <span className="avatar-glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
