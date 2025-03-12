import Nav from "@/components/nav"
import Hero from "@/components/hero"
import About from "@/components/about"
import TimelineRedesign from "@/components/timeline-redesign"
import SkillsModern from "@/components/skills-modern"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundElements from "@/components/background-elements"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background decorations */}
      <BackgroundElements />

      <Nav />
      <main className="relative z-10">
        <div className="container mx-auto px-4">
          <Hero />
          <About />
          <TimelineRedesign />
          <SkillsModern />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

