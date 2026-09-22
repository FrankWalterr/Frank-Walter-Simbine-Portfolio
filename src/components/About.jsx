import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import { TechBackdrop } from './TechBackdrop'

export function About() {
  const { t } = useApp()

  return (
    <section id="sobre" className="section about">
      <TechBackdrop variant="about" />
      <div className="container">
        <div className="about-header">
          <h2 className="section-title about-header-title">
            <span className="section-title-icon"><Icon name="user" size={28}/></span>
            <span>{t('about.title')}</span>
          </h2>
        </div>
        <div className="about-content reveal">
          <div className="about-main">
            <p className="about-text">{t('about.para1')}</p>
            <p className="about-text">{t('about.para2')}</p>
            <p className="about-text">{t('about.para3')}</p>
          </div>
          <div className="about-education">
            <div className="about-education-grid">
              <article className="about-education-card">
                <div className="about-education-icon"><Icon name="book" size={22}/></div>
                <h4>{t('about.education.degree.title')}</h4>
                <p className="about-education-main">{t('about.education.degree.course')}</p>
                <p className="about-education-secondary">{t('about.education.degree.institution')}</p>
                <p className="about-education-period">{t('about.education.degree.period')}</p>
              </article>
              <article className="about-education-card">
                <div className="about-education-icon"><Icon name="globe" size={22}/></div>
                <h4>{t('about.education.languages.title')}</h4>
                <ul>
                  {t('about.education.languages.items').map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="about-education-card about-location-card">
                <div className="about-education-icon">
                  <Icon name="location" size={18}/>
                </div>
                <h4>{t('about.education.location.title')}</h4>
                <p className="about-education-main">{t('about.education.location.value')}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
