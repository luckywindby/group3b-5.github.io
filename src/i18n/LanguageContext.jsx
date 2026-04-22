import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const LanguageContext = createContext()

const STORAGE_KEY = 'campus-compass-portfolio-lang'

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored === 'zh' ? 'zh' : 'en'
    } catch {
      return 'en'
    }
  })

  const setLang = useCallback((newLang) => {
    setLangState(newLang)
    try {
      localStorage.setItem(STORAGE_KEY, newLang)
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en')
    document.title =
      lang === 'zh'
        ? 'Campus Compass | CPT208 过程作品集'
        : 'Campus Compass | CPT208 Process Portfolio'
    const metaDescription = document.getElementById('meta-description')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        lang === 'zh'
          ? 'Campus Compass 的 CPT208 过程作品集，包含中英双语的项目动机、需求、构思、实现、评估与反思。'
          : 'Campus Compass CPT208 process portfolio with bilingual English-Chinese content covering motivation, requirements, ideation, implementation, evaluation, and reflection.'
      )
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
