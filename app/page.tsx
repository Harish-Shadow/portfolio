import Nav from "@/components/nav"
import GlassCard from "@/components/glass-card"
import OrbitalSkills from "@/components/orbital-skills"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ProjectsSection from "@/components/projects1"
export default function Home() {
  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <GlassCard>
              <h1 className="text-4xl font-bold mb-4">Harish</h1>
              <p className="text-xl text-gray-400 mb-6">Web Developer | AI/ML Enthusiast | Debugging Aficionado</p>
              <p className="text-gray-300 mb-8">
                Engineering student with 5+ months of internship experience in Web Development, primarily using Next.js
                and MERN stack. Passionate about transitioning into AI/ML development while continuing to build
                full-stack applications.
              </p>
              <div className="flex gap-4">
                <Button>Download Resume</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </GlassCard>
            <GlassCard className="aspect-square">
              <Image src="/placeholder.svg" alt="Harish" width={500} height={500} className="rounded-2xl" />
            </GlassCard>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <p className="text-gray-300 mb-4">
                My journey in tech began with web development, where I honed my skills in the MERN stack and Next.js. As
                I delved deeper into the world of programming, I discovered my passion for AI and machine learning.
              </p>
              <p className="text-gray-300">
                Currently, Im working on projects that bridge the gap between web development and AI, while improving
                my skills in data structures and algorithms.
              </p>
            </GlassCard>
            <GlassCard>
              <OrbitalSkills />
            </GlassCard>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="grid gap-8">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Web Developer</h3>
              <p className="text-gray-400">The Reciprocal Solutions</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Developed full-stack web applications using MERN stack</li>
                <li>• Implemented responsive designs using Tailwind CSS</li>
                <li>• Collaborated with team members using Git and GitHub</li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Java Developer Intern</h3>
              <p className="text-gray-400">Codesoft</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Worked on Java-based applications</li>
                <li>• Learned about software development lifecycle</li>
                <li>• Participated in code reviews and team meetings</li>
              </ul>
            </GlassCard>
          </div>
        </section>
{/* 
        {/* Projects Section }
        <section id="projects" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chatbot with ML & NLP",
                description: "TensorFlow-based chatbot with a front-end interface",
              },
              {
                title: "Underground Parking System",
                description: "LIDAR & UV sensor integration for real-time optimization",
              },
              {
                title: "NASA in Your Neighborhood",
                description: "App using NASA data for community-driven solutions",
              },
            ].map((project) => (
              <GlassCard key={project.title}>
                <Image
                  src="/placeholder.svg"
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </GlassCard>
            ))}
          </div>
        </section> */}
        <ProjectsSection />
        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-800/50 border border-neutral-200 border-white/10 dark:border-neutral-800"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-800/50 border border-neutral-200 border-white/10 dark:border-neutral-800"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-800/50 border border-neutral-200 border-white/10 dark:border-neutral-800"
                />
                <Button className="w-full">Send Message</Button>
              </form>
            </GlassCard>
            <GlassCard className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-4">Feel free to reach out for collaborations or just a friendly chat.</p>
              <div className="space-y-2 text-gray-300">
                <p>📧 email@example.com</p>
                <p>📱 +1 234 567 890</p>
                <p>📍 Your Location</p>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </>
  )
}

