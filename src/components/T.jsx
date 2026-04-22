import { useLanguage } from '../i18n/LanguageContext'

/**
 * Bilingual text component. Renders either English or Chinese
 * text based on the current language setting.
 *
 * Usage: <T en="Hello" zh="你好" />
 * Or with JSX children: <T en={<>Hello <strong>World</strong></>} zh="你好世界" />
 */
export default function T({ en, zh }) {
  const { lang } = useLanguage()
  return <>{lang === 'zh' ? zh : en}</>
}
