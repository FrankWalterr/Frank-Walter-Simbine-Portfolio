import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import { config } from '../data/config'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { t } = useApp()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState({ msg: '', isError: false })

  useEffect(() => {
    if (!feedback.msg) return
    const timeoutId = window.setTimeout(() => {
      setFeedback({ msg: '', isError: false })
    }, 7000)
    return () => window.clearTimeout(timeoutId)
  }, [feedback.msg])

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }))
  }

  const validate = () => {
    const v = t('contact.validation')
    const err = {}
    if (!form.name.trim()) err.name = v.nameRequired
    if (!form.email.trim()) err.email = v.emailRequired
    else if (!emailRe.test(form.email)) err.email = v.emailInvalid
    if (!form.message.trim()) err.message = v.messageRequired
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      setFeedback({ msg: t('contact.error'), isError: true })
      return
    }
    const subject = (t('nav.contacto') === 'Contacto' ? 'Contacto' : 'Contact') + ' do portfólio - ' + form.name
    const body = form.message + (form.phone ? '\n\nTelefone: ' + form.phone : '') + '\n\nEnviado por: ' + form.email
    window.location.href = 'mailto:' + config.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
    setFeedback({ msg: t('contact.emailSuccess'), isError: false })
  }

  const handleWhatsApp = () => {
    if (!validate()) {
      setFeedback({ msg: t('contact.error'), isError: true })
      return
    }
    const prefix = t('contact.whatsappDirectMessage')
    const text =
      prefix +
      '\n\n' +
      form.message +
      (form.phone ? '\n\nTelefone: ' + form.phone : '') +
      '\n\n' +
      (t('nav.contacto') === 'Contacto' ? 'Enviado por: ' : 'Sent by: ') +
      form.name +
      ' (' +
      form.email +
      ')'
    window.open('https://wa.me/' + (config.whatsappNumber || '351912345678') + '?text=' + encodeURIComponent(text), '_blank')
    setFeedback({ msg: t('contact.whatsappSuccess'), isError: false })
  }

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-icon"><Icon name="mail" size={28}/></span>
          <span>{t('contact.title')}</span>
        </h2>
        <div className="contact-intro reveal">
          <p className="section-tagline contact-tagline">{t('contact.tagline')}</p>
        </div>
        <div className="contact-wrapper reveal">
          <div className="contact-info visible contact-panel">
            <h3 className="contact-info-title">{t('contact.infoTitle')}</h3>
            <p className="contact-info-lead">{t('contact.infoLead')}</p>
            <ul className="contact-list">
              <li><a href={'mailto:' + config.email}><span className="contact-icon"><Icon name="mail" size={20}/></span><span>{config.email}</span></a></li>
              <li><a href={'tel:' + config.phone}><span className="contact-icon"><Icon name="phone" size={20}/></span><span>{config.phone}</span></a></li>
              <li><a href={config.links?.github} target="_blank" rel="noopener noreferrer"><span className="contact-icon contact-icon-brand"><Icon name="github" size={20}/></span><span>GitHub</span></a></li>
              <li><a href={config.links?.linkedin} target="_blank" rel="noopener noreferrer"><span className="contact-icon contact-icon-brand"><Icon name="linkedin" size={20}/></span><span>LinkedIn</span></a></li>
              <li><a href={config.links?.instagram} target="_blank" rel="noopener noreferrer"><span className="contact-icon contact-icon-brand"><Icon name="instagram" size={20}/></span><span>Instagram</span></a></li>
            </ul>
          </div>
          <div className="contact-form-wrapper contact-panel">
          <h3 className="contact-form-title">{t('contact.formTitle')}</h3>
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input type="text" id="name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name}/>
              {errors.name && <span className="form-error" id="error-name">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input type="email" id="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email}/>
              {errors.email && <span className="form-error" id="error-email">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact.form.phone')}</label>
              <input type="tel" id="phone" value={form.phone} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea id="message" rows="4" value={form.message} onChange={handleChange} aria-invalid={!!errors.message}/>
              {errors.message && <span className="form-error" id="error-message">{errors.message}</span>}
            </div>
            {feedback.msg && <p className={`form-feedback ${feedback.isError ? 'error' : 'success'}`} role="alert">{feedback.msg}</p>}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                <Icon name="mail" size={18}/>
                <span>{t('contact.form.sendEmail')}</span>
              </button>
              <button type="button" className="btn btn-whatsapp" onClick={handleWhatsApp}>
                <Icon name="whatsapp" size={18}/>
                <span>{t('contact.form.sendWhatsApp')}</span>
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}
