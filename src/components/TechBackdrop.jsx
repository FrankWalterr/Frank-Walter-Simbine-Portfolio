const ELEMENTS = {
  brackets: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M22 14 10 32l12 18M42 14l12 18-12 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  braces: (
    <svg viewBox="0 0 56 40" fill="none" aria-hidden="true">
      <path d="M20 8c-6 0-8 4-8 12s2 12 8 12M36 8c6 0 8 4 8 12s-2 12-8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  parens: (
    <svg viewBox="0 0 48 40" fill="none" aria-hidden="true">
      <path d="M16 8c-6 6-6 18 0 24M32 8c6 6 6 18 0 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  binary: (
    <svg viewBox="0 0 88 36" fill="none" aria-hidden="true">
      <text x="2" y="26" fill="none" stroke="currentColor" strokeWidth="0.9" fontSize="16" fontFamily="ui-monospace, Consolas, monospace">01001</text>
    </svg>
  ),
  npm: (
    <svg viewBox="0 0 64 36" fill="none" aria-hidden="true">
      <text x="4" y="26" fill="none" stroke="currentColor" strokeWidth="0.9" fontSize="16" fontFamily="ui-monospace, Consolas, monospace">npm</text>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="34" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 14h12M14 18v8c0 4 4 8 10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="62" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="48" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="66" cy="54" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 20 35 45M58 19 41 45M42 51l20 3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 72 48" fill="none" aria-hidden="true">
      <ellipse cx="36" cy="12" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 12v16c0 4 8 7 18 7s18-3 18-7V12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 20c0 4 8 7 18 7s18-3 18-7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path d="M18 30h28a10 10 0 0 0 1-20 14 14 0 0 0-26-3A9 9 0 0 0 18 30z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 80 44" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="72" height="32" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.1" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="24" cy="16" r="2.1" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="32" cy="16" r="2.1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  circuit: (
    <svg viewBox="0 0 104 80" fill="none" aria-hidden="true">
      <path d="M8 18h24l10 10h20l12-12h22M18 62h20l12-12h16l12 12h18M42 28v22M74 16v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="96" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="62" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="96" cy="62" r="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="37" y="23" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="69" y="35" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="17" y="17" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="25" y="25" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 10v7m8-7v7m8-7v7M24 47v7m8-7v7m8-7v7M10 24h7m-7 8h7m-7 8h7M47 24h7m-7 8h7m-7 8h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 72 56" fill="none" aria-hidden="true">
      <rect x="10" y="8" width="52" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="32" width="52" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="16" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="40" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M29 16h21M29 40h21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
}

const VARIANTS = {
  hero: ['brackets', 'terminal', 'circuit', 'chip', 'git', 'binary'],
  about: ['git', 'chip', 'braces', 'cloud', 'parens', 'server'],
  skills: ['brackets', 'npm', 'braces', 'git', 'binary', 'chip'],
  projects: ['network', 'database', 'cloud', 'terminal', 'circuit', 'server'],
  certs: ['git', 'braces', 'terminal', 'npm', 'chip', 'binary'],
  contact: ['network', 'terminal', 'cloud', 'brackets', 'server', 'circuit'],
}

export function TechBackdrop({ variant = 'hero' }) {
  const keys = VARIANTS[variant] || VARIANTS.hero

  return (
    <div className={`tech-backdrop tech-backdrop-${variant}`} aria-hidden="true">
      {keys.map((key, index) => (
        <span key={`${variant}-${key}`} className={`tech-deco tech-zone-${index + 1}`}>
          {ELEMENTS[key]}
        </span>
      ))}
    </div>
  )
}
