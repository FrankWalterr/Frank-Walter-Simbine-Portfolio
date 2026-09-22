import { useState } from 'react'
import { useApp } from '../context/AppContext'

export function WelcomeModal() {
  const { lang } = useApp()
  const [open, setOpen] = useState(() => sessionStorage.getItem('portfolio-welcome-seen') !== 'true')

  const close = () => {
    sessionStorage.setItem('portfolio-welcome-seen', 'true')
    setOpen(false)
  }

  if (!open) return null

  const copy = lang === 'pt'
    ? { title: 'Bem-vindo ao meu portfólio.', text: 'Explora os projetos, as tecnologias e o trabalho que estou a construir.', action: 'Começar a explorar', close: 'Fechar boas-vindas' }
    : { title: 'Welcome to my portfolio.', text: 'Explore the projects, technologies, and work I am building.', action: 'Start exploring', close: 'Close welcome dialog' }

  return (
    <div className="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <button className="welcome-modal-backdrop" onClick={close} aria-label={copy.close} />
      <section className="welcome-panel">
        <button className="welcome-close" onClick={close} aria-label={copy.close}>×</button>
        <div className="welcome-orbit" aria-hidden="true"><span /><span /><span /></div>
        <h2 id="welcome-title">{copy.title}</h2>
        <p>{copy.text}</p>
        <button className="btn btn-primary welcome-action" onClick={close}>{copy.action}<span aria-hidden="true">→</span></button>
      </section>
    </div>
  )
}
