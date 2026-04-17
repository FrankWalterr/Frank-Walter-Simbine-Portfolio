import { useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { config } from '../data/config'

export function SeoHead() {
  const { lang, t } = useApp()

  useEffect(() => {
    const title = t('seo.title')
    const description = t('seo.description')
    const url = config.siteUrl || (typeof window !== 'undefined' ? window.location.origin : '')

    document.title = title

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical && url) canonical.setAttribute('href', url)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const ogLang = document.querySelector('meta[property="og:locale"]')
    if (ogTitle) ogTitle.setAttribute('content', title)
    if (ogDesc) ogDesc.setAttribute('content', description)
    if (ogUrl && url) ogUrl.setAttribute('content', url)
    if (ogLang) ogLang.setAttribute('content', lang === 'pt' ? 'pt_PT' : 'en_US')
  }, [lang, t])

  return null
}
