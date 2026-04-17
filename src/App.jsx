import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { SeoHead } from './components/SeoHead'
import { SkipLink } from './components/SkipLink'
import { WhatsAppFloat } from './components/WhatsAppFloat'

const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))

const SECTIONS = ['inicio', 'sobre', 'skills', 'projetos', 'contacto']

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const updateActiveSection = useCallback(() => {
    const scrollY = window.pageYOffset
    let active = 'inicio'
    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) {
        const top = el.offsetTop - 100
        const height = el.offsetHeight
        if (scrollY >= top && scrollY < top + height) active = id
      }
    }
    setActiveSection(active)
  }, [])

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(updateActiveSection)
    window.addEventListener('scroll', onScroll, { passive: true })
    updateActiveSection()
    return () => window.removeEventListener('scroll', onScroll)
  }, [updateActiveSection])

  useEffect(() => {
    const reveal = () => {
      const els = document.querySelectorAll('.reveal')
      const h = window.innerHeight
      const point = 120
      els.forEach((el) => {
        const top = el.getBoundingClientRect().top
        if (top < h - point) el.classList.add('visible')
      })
    }
    reveal()
    window.addEventListener('scroll', reveal, { passive: true })
    window.addEventListener('load', reveal)
    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('load', reveal)
    }
  }, [])

  // Garantir que ao dar refresh a página começa sempre no início
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <SeoHead />
      <SkipLink />
      <Navbar activeSection={activeSection} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={null}>
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppFloat />
    </>
  )
}
