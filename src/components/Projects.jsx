import { useApp } from '../context/AppContext'
import { Icon } from './Icons'

const projectKeys = ['p1', 'p2', 'p3']
const projectIcons = {
  p1: 'cpu',
  p2: 'graduation'
}

export function Projects() {
  const { t } = useApp()

  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-icon"><Icon name="folder" size={28}/></span>
          <span>{t('projects.title')}</span>
        </h2>
        <p className="section-tagline">{t('projects.tagline')}</p>
        <div className="projects-grid reveal">
          {projectKeys.map((key) => {
            const p = t(`projects.${key}`)
            const name = typeof p === 'object' ? p?.name : ''
            const desc = typeof p === 'object' ? p?.desc : ''
            const previewImage = typeof p === 'object' ? p?.previewImage : ''
            const liveUrl = typeof p === 'object' ? p?.liveUrl : ''
            const liveLabel = typeof p === 'object' ? p?.liveLabel : ''
            const tools = typeof p === 'object' && Array.isArray(p?.tools) ? p.tools : []
            const cardIcon = !previewImage ? projectIcons[key] : ''
            return (
              <article key={key} className={`project-card ${previewImage ? 'has-image' : 'no-image'}`}>
                <div className="project-card-inner">
                  {cardIcon ? (
                    <div className="project-top-icon" aria-hidden="true">
                      <Icon name={cardIcon} size={20} />
                    </div>
                  ) : null}
                  {previewImage ? (
                    <a
                      href={liveUrl || '#'}
                      className="project-preview-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={liveLabel || name}
                    >
                      <img
                        src={previewImage}
                        alt={`Preview do projeto ${name}`}
                        className="project-preview-img"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  ) : null}
                  <h3 className="project-title">{name}</h3>
                  <p className="project-desc">{desc}</p>
                  {tools.length ? (
                    <div className="project-tools" aria-label="Ferramentas do projeto">
                      {tools.map((tool) => (
                        <span key={`${key}-${tool.name}`} className="project-tool">
                          <Icon name={tool.icon} size={14} className="project-tool-icon" />
                          <span>{tool.name}</span>
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-link"
                    >
                      <span>{liveLabel || 'Ver online'}</span>
                      <Icon name="external" size={16} />
                    </a>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
