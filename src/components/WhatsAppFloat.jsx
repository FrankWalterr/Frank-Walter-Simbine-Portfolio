import { useApp } from '../context/AppContext'
import { Icon } from './Icons'
import { config } from '../data/config'

export function WhatsAppFloat() {
  const { t } = useApp()
  const text = encodeURIComponent(t('contact.whatsappDirectMessage'))
  const href = `https://wa.me/${config.whatsappNumber}?text=${text}`

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('a11y.whatsappFloat')}
    >
      <Icon name="whatsapp" size={28} />
    </a>
  )
}
