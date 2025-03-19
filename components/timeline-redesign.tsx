"use client"

import { useEffect, useRef } from "react"
import GlassCard from "./glass-card"
import { Badge } from "./ui/badge"
import { Code2, Briefcase, Calendar, Building } from "lucide-react"
import type { JSX } from "react"

interface TimelineItem {
  id: number
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  icon: JSX.Element
  color: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Web Developer",
    company: "The Reciprocal Solutions",
    period: "2023",
    description:
      "Led the development of full-stack web applications using MERN stack and Next.js. Implemented responsive designs and optimized performance for better user experience.",
    skills: ["React", "Node.js", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    title: "Java Developer Intern",
    company: "Codesoft",
    period: "2022",
    description:
      "Developed and maintained Java applications using Spring Boot. Collaborated with senior developers on various projects and learned about software development lifecycle.",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git", "Agile"],
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-purple-400 to-pink-400",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Tech Innovators",
    period: "2021",
    description:
      "Designed and implemented responsive user interfaces for web applications. Collaborated with UX designers to create intuitive and visually appealing experiences.",
    skills: ["HTML/CSS", "JavaScript", "React", "UI/UX", "Figma", "Bootstrap"],
    icon: <Code2 className="w-6 h-6" />,
    color: "from-emerald-400 to-teal-400",
  },
]

export default function TimelineRedesign() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-timeline-item")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section id="experience" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Experience</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/30 via-blue-500/30 to-purple-500/30 transform -translate-x-1/2">
            <div className="absolute inset-0 w-full animate-timeline-progress bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400"></div>
          </div>

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item opacity-0 mb-16 relative ${
                index % 2 === 0 ? "md:ml-auto md:mr-[50%]" : "md:mr-auto md:ml-[50%]"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                maxWidth: "calc(100% - 4rem)",
                marginLeft: index % 2 === 0 ? "4rem" : window.innerWidth < 768 ? "4rem" : "calc(50% + 2rem)",
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-2.5rem] md:left-[-2rem] top-6 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/50 timeline-dot">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-ping opacity-75"></div>
              </div>

              {/* Timeline card */}
              <GlassCard className="relative overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                {/* Date badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm">
                  <Calendar className="w-3 h-3" />
                  <span>{item.period}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>{item.icon}</div>
                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-300">
                        <Building className="w-4 h-4 text-gray-400" />
                        <p>{item.company}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-200 mb-6 leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-white/5 hover:bg-white/10 transition-colors border-white/10 hover:border-white/20 text-gray-200 hover:text-white"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

