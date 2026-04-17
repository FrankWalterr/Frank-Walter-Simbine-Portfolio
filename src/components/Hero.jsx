import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import profilePhoto from '../assets/foto1.png'
import { config } from '../data/config'

export function Hero() {
  const { t } = useApp()
  return (
    <section id="inicio" className="section hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting hero-anim">{t('hero.greeting')}</p>
          <h1 className="hero-name hero-anim hero-anim-3">Frank Walter Simbine</h1>
          <p className="hero-title hero-anim hero-anim-4">{t('hero.title')}</p>
          <p className="hero-intro hero-anim hero-anim-5">{t('hero.intro')}</p>
          <div className="hero-buttons hero-anim hero-anim-6">
            <a href="#projetos" className="btn btn-primary"><span>{t('hero.btnProjects')}</span><Icon name="arrowRight" size={20} className="btn-arrow"/></a>
            <a href="#contacto" className="btn btn-secondary"><Icon name="mail" size={20} className="btn-arrow"/><span>{t('hero.btnContact')}</span></a>
          </div>
          <div className="hero-quick-links hero-anim hero-anim-7">
            <a href={`mailto:${config.email}`} className="hero-quick-link" aria-label="Enviar email">
              <Icon name="mail" size={18} />
            </a>
            <a href={config.links?.github} target="_blank" rel="noopener noreferrer" className="hero-quick-link" aria-label="Abrir GitHub">
              <Icon name="github" size={18} />
            </a>
            <a href={config.links?.linkedin} target="_blank" rel="noopener noreferrer" className="hero-quick-link" aria-label="Abrir LinkedIn">
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
            />
            <span className="avatar-glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
