import AdvancedBackground from '@/components/AdvancedBackground'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Gaming from '@/components/Gaming'
import ContentCreation from '@/components/ContentCreation'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AdvancedBackground />
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Gaming />
      <ContentCreation />
      <Contact />
    </main>
  )
}

