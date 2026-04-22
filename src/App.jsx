import { LanguageProvider } from './i18n/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import MotivationSection from './sections/MotivationSection'
import RequirementsSection from './sections/RequirementsSection'
import IdeationSection from './sections/IdeationSection'
import ImplementationSection from './sections/ImplementationSection'
import EvaluationSection from './sections/EvaluationSection'
import ReflectionSection from './sections/ReflectionSection'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main id="top">
        <HeroSection />
        <MotivationSection />
        <RequirementsSection />
        <IdeationSection />
        <ImplementationSection />
        <EvaluationSection />
        <ReflectionSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
