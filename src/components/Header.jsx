import { useLanguage } from '../i18n/LanguageContext'
import { useState, useEffect, useRef } from 'react'
import appIcon from '../assets/app-icon.png'
import T from './T'

const NAV_ITEMS = [
  { href: '#motivation', en: 'Research', zh: '研究' },
  { href: '#requirements', en: 'Requirements', zh: '需求' },
  { href: '#ideation', en: 'Ideation', zh: '构思' },
  { href: '#implementation', en: 'Implementation', zh: '实现' },
  { href: '#evaluation', en: 'Evaluation', zh: '评估' },
  { href: '#reflection', en: 'Reflection', zh: '反思' },
]

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [activeId, setActiveId] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    )

    sections.forEach((section) => observerRef.current.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="shell nav-row">
        <a className="brand" href="#top">
          <span className="brand-icon">
            <img src={appIcon} alt="Campus Compass icon" />
          </span>
          <span className="brand-copy">
            <strong>Campus Compass</strong>
            <small>
              <T
                en="A Human-Centred Campus Tour and Navigation Web App"
                zh="一款以人为中心的西浦校园导览与导航 Web 应用"
              />
            </small>
          </span>
        </a>

        <div className="nav-group">
          <nav className="nav-links" aria-label="Portfolio sections / 作品集章节">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeId === item.href ? 'is-active' : ''}
              >
                <T en={item.en} zh={item.zh} />
              </a>
            ))}
          </nav>

          <div className="lang-switcher" aria-label="Language switcher / 语言切换">
            <button
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              className={lang === 'zh' ? 'is-active' : ''}
              onClick={() => setLang('zh')}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
