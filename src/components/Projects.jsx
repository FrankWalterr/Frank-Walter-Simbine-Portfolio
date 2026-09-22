import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import { SkillIcon, hasBrandIcon } from './SkillIcon'
import { TechBackdrop } from './TechBackdrop'

const onlineKeys = ['p3', 'p4']
const offlineKeys = ['p1', 'p2']
const projectIcons = {
  p1: 'cpu',
  p2: 'graduation'
}

function ProjectCard({ projectKey, t }) {
  const p = t(`projects.${projectKey}`)
  const name = typeof p === 'object' ? p?.name : ''
  const desc = typeof p === 'object' ? p?.desc : ''
  // Preview fornecido pelo autor do projecto: apresentar sem filtros ou alterações.
  const previewImage = projectKey === 'p1' ? '/vehicle-detection-preview.png' : (typeof p === 'object' ? p?.previewImage : '')
  const liveUrl = typeof p === 'object' ? p?.liveUrl : ''
  const liveLabel = typeof p === 'object' ? p?.liveLabel : ''
  const tools = typeof p === 'object' && Array.isArray(p?.tools) ? p.tools : []
  const cardIcon = !previewImage ? projectIcons[projectKey] : ''
  const isOnline = Boolean(liveUrl)
  const projectType = t(`projects.${projectKey}.type`)

  return (
    <article
      className={`project-card project-${projectKey} ${previewImage ? 'has-image' : 'no-image'} ${isOnline ? 'is-online' : 'is-offline'}`}
    >
      <div className="project-card-inner">
        {isOnline ? (
          <span className="project-status">
            <span className="project-status-dot" aria-hidden="true" />
            {t('projects.onlineBadge')}
          </span>
        ) : (
          <span className="project-status project-status-offline">
            <span className="project-status-dot" aria-hidden="true" />
            {t('projects.offlineBadge')}
          </span>
        )}
        <div className="project-meta">
          <span className="project-type">{projectType}</span>
        </div>
        {cardIcon ? (
          <div className="project-top-icon" aria-hidden="true">
            <Icon name={cardIcon} size={20} />
          </div>
        ) : null}
        {previewImage ? (
          liveUrl ? (
            <a
              href={liveUrl}
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
                decoding="async"
              />
              <span className="project-preview-browser" aria-hidden="true"><i /><i /><i /></span>
              <span className="project-preview-shine" aria-hidden="true" />
              <span className="project-preview-overlay" aria-hidden="true">
                <span>{t('projects.previewAction')}</span>
                <Icon name="external" size={16} />
              </span>
            </a>
          ) : (
            <div className="project-preview-link" aria-label={name}>
              <img
                src={previewImage}
                alt={`Preview do projeto ${name}`}
                className="project-preview-img"
                loading="lazy"
                decoding="async"
              />
              <span className="project-preview-browser" aria-hidden="true"><i /><i /><i /></span>
              <span className="project-preview-shine" aria-hidden="true" />
            </div>
          )
        ) : (
          <div className="project-no-preview" aria-hidden="true">
            <span className="project-no-preview-grid" />
            <span className="project-no-preview-hud" />
            <Icon name={cardIcon || 'folder'} size={38} />
            <span className="project-no-preview-code">{projectKey === 'p1' ? 'VISION / AI' : 'BUILD / WEB'}</span>
          </div>
        )}
        <h3 className="project-title">{name}</h3>
        <p className="project-desc">{desc}</p>
        {tools.length ? (
          <div className="project-tools" aria-label="Ferramentas do projeto">
            {tools.map((tool) => (
              <span key={`${projectKey}-${tool.name}`} className="project-tool">
                <span className="project-tool-mark" aria-hidden="true">
                  {hasBrandIcon(tool.name) ? <SkillIcon technology={tool.name} size={13} /> : <Icon name={tool.icon || 'code'} size={13} />}
                </span>
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
            <Icon name="external" size={14} className="project-live-icon" />
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function Projects() {
  const { t } = useApp()

  return (
    <section id="projetos" className="section projects">
      <TechBackdrop variant="projects" />
      <div className="projects-bg-grid" aria-hidden="true" />
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-icon"><Icon name="folder" size={28}/></span>
          <span>{t('projects.title')}</span>
        </h2>
        <p className="section-tagline">{t('projects.tagline')}</p>

        <div className="projects-groups reveal">
          <div className="projects-group">
            <p className="projects-group-label">
              <span className="projects-group-prefix" aria-hidden="true">{'//'}</span>
              {t('projects.onlineGroup')}
            </p>
            <div className="projects-row">
              {onlineKeys.map((key) => (
                <ProjectCard key={key} projectKey={key} t={t} />
              ))}
            </div>
          </div>

          <div className="projects-group">
            <p className="projects-group-label">
              <span className="projects-group-prefix" aria-hidden="true">{'//'}</span>
              {t('projects.offlineGroup')}
            </p>
            <div className="projects-row">
              {offlineKeys.map((key) => (
                <ProjectCard key={key} projectKey={key} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
