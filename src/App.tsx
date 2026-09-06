import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ResearchInterests from './components/ResearchInterests'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import ResearchJourney from './components/ResearchJourney'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <ResearchInterests />
        <Skills />
        <Projects />
        <Publication />
        <OpenSource />
        <Experience />
        <ResearchJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
