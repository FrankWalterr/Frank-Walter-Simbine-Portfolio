import { useApp } from '../context/AppContext'
import { Icon } from './Icons'

const skillGroups = [
  { id: 'frontend', icon: 'code', items: [{ name: 'CSS3', icon: 'skill-css' }, { name: 'HTML5', icon: 'skill-html' }, { name: 'Next.js', icon: 'nextjs' }, { name: 'React Native', icon: 'react' }, { name: 'Tailwind CSS', icon: 'tailwind' }] },
  { id: 'backend', icon: 'server', items: [{ name: 'Java', icon: 'skill-java' }, { name: 'MySQL', icon: 'mysql' }, { name: 'PostgreSQL', icon: 'postgresql' }, { name: 'Python', icon: 'skill-python' }, { name: 'Spring Boot', icon: 'spring' }] },
  { id: 'fullstack', icon: 'package', items: [{ name: 'JavaScript', icon: 'skill-js' }, { name: 'Node.js', icon: 'nodejs' }, { name: 'REST APIs', icon: 'api' }, { name: 'TypeScript', icon: 'typescript' }] },
]

export function Skills() {
  const { t } = useApp()
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-icon"><Icon name="code" size={28}/></span>
          <span>{t('skills.title')}</span>
        </h2>
        <p className="section-tagline">{t('skills.tagline')}</p>
        <div className="skills-grid reveal">
          {skillGroups.map((group) => (
            <div key={group.id} className="skill-group">
              <h3 className="skill-group-title">
                <Icon name={group.icon} size={22} className="skill-group-icon"/>
                <span>{t(`skills.${group.id}`)}</span>
              </h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item.name} className="skill-tag">
                    <Icon name={item.icon} size={18} className="skill-tag-icon"/>
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
