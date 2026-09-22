import { useApp } from '../context/AppContext'

/* SVGs individuais de marcas oficiais: evitam carregar a fonte inteira do Devicon. */
const ICONS = {
  'CSS3': { src: '/skills/css.svg' },
  'HTML5': { src: '/skills/html5.svg' },
  'Next.js': { src: '/skills/nextdotjs.svg', darkSrc: '/skills/nextdotjs-light.svg' },
  'React': { src: '/skills/react.svg' },
  'React Native': { src: '/skills/react.svg' },
  'Tailwind CSS': { src: '/skills/tailwindcss.svg' },
  'MySQL': { src: '/skills/mysql.svg' },
  'PostgreSQL': { src: '/skills/postgresql.svg' },
  'Python': { src: '/skills/python.svg' },
  'Spring Boot': { src: '/skills/spring.svg' },
  'JavaScript': { src: '/skills/javascript.svg' },
  'Node.js': { src: '/skills/nodedotjs.svg' },
  'REST APIs': { src: '/skills/swagger.svg' },
  'TypeScript': { src: '/skills/typescript.svg' },
}

export const hasBrandIcon = (technology) => technology === 'Java' || Boolean(ICONS[technology])

/** Renderiza marcas do Devicon e mantém um fallback seguro para tecnologias futuras. */
export function SkillIcon({ technology, size = 40 }) {
  const { theme } = useApp()
  const iconClass = ICONS[technology]

  if (technology === 'Java') {
    return <i className="devicon-java-plain colored skill-icon-devicon" style={{ fontSize: size }} aria-label="Java" role="img" />
  }

  if (!iconClass) {
    return (
      <span className="skill-icon-fallback" style={{ width: size, height: size }} aria-label={technology}>
        &lt;/&gt;
      </span>
    )
  }

  return <img src={theme === 'dark' && iconClass.darkSrc ? iconClass.darkSrc : iconClass.src} alt="" width={size} height={size} className="skill-icon-brand" decoding="async" />
}
