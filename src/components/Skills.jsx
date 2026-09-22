import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import { SkillIcon } from './SkillIcon'
import { TechBackdrop } from './TechBackdrop'

const skillGroups = [
  {
    id: 'frontend',
    icon: 'code',
    items: [
      { name: 'HTML5', icon: 'skill-html', color: '#E34F26' },
      { name: 'CSS3', icon: 'skill-css', color: '#663399' },
      { name: 'React Native', icon: 'react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'nextjs', color: '#E2E8F0' },
      { name: 'Tailwind CSS', icon: 'tailwind', color: '#38BDF8' },
    ],
  },
  {
    id: 'backend',
    icon: 'server',
    items: [
      { name: 'Java', icon: 'skill-java', color: '#F89820' },
      { name: 'Python', icon: 'skill-python', color: '#3776AB' },
      { name: 'Spring Boot', icon: 'spring', color: '#6DB33F' },
      { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
    ],
  },
  {
    id: 'fullstack',
    icon: 'package',
    items: [
      { name: 'JavaScript', icon: 'skill-js', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'Node.js', icon: 'nodejs', color: '#339933' },
      { name: 'REST APIs', icon: 'api', color: '#38BDF8' },
    ],
  },
]

export function Skills() {
  const { t } = useApp()
  return (
    <section id="skills" className="section skills">
      <TechBackdrop variant="skills" />
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-icon"><Icon name="code" size={28}/></span>
          <span>{t('skills.title')}</span>
        </h2>
        <p className="section-tagline">{t('skills.tagline')}</p>

        <div className="skills-groups reveal">
          {skillGroups.map((group) => (
            <section key={group.id} className="skills-group" aria-labelledby={`skills-${group.id}`}>
              <header className="skills-group-header">
                <span className="skills-group-icon" aria-hidden="true">
                  <Icon name={group.icon} size={20} />
                </span>
                <h3 id={`skills-${group.id}`}>{t(`skills.${group.id}`)}</h3>
              </header>
              <div className="skills-group-grid">
                {[...group.items]
                  .sort((a, b) => a.name.localeCompare(b.name, 'pt', { sensitivity: 'base' }))
                  .map((item) => (
                    <article
                      key={item.name}
                      className="skill-tile"
                      style={{ '--skill-color': item.color }}
                    >
                      <span className="skill-tile-icon" aria-hidden="true">
                        <SkillIcon technology={item.name} size={40} />
                      </span>
                      <span className="skill-tile-name">{item.name}</span>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
