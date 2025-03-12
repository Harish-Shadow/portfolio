"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import GlassCard from "./glass-card"
import { Badge } from "./ui/badge"
import { Code2, Briefcase } from "lucide-react"
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
      "Led the development of full-stack web applications using MERN stack and Next.js. Implemented responsive designs optimized performance for better user experience.",
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
      "Developed and maintained Java applications using Spring Boot. Collaborated with senior developers on various projects learned about software development lifecycle.",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git", "Agile"],
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-purple-400 to-pink-400",
  },
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"],
  })

  // Create individual transforms for each animation property
  const firstCardScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1.1, 0.8])
  const firstCardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0.3])
  const firstCardY = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, -100])

  const secondCardScale = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0.8, 1.1, 0.8])
  const secondCardOpacity = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0.3, 1, 0.3])
  const secondCardY = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [100, 0, -100])

  const animations = [
    { scale: firstCardScale, opacity: firstCardOpacity, y: firstCardY },
    { scale: secondCardScale, opacity: secondCardOpacity, y: secondCardY },
  ]

  return (
    <section id="timeline" ref={containerRef} className="min-h-[200vh] relative py-20 overflow-hidden">
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
            <motion.span
              className="text-cyan-400 text-sm font-semibold tracking-wider uppercase"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Experience
            </motion.span>
            <motion.h2
              className="text-4xl font-bold mt-2 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Professional <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-400">Journey</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            />
          </motion.div>

          <div className="relative">
            {/* Timeline line with animated gradient */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 overflow-hidden"
              style={{ background: "linear-gradient(180deg, #22d3ee 0%, #818cf8 100%)" }}
            >
              <motion.div
                className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400"
                animate={{
                  y: ["0%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>

            {timelineData.map((item, index) => (
              <motion.div key={item.id} style={animations[index]} className="mb-32 relative z-10">
                <GlassCard className="relative max-w-3xl mx-auto overflow-hidden group border border-neutral-200 border-white/10 hover:border-white/20 glass-card dark:border-neutral-800">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5`}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glowing timeline dot */}
                  <div className="absolute left-1/2 -top-3 transform -translate-x-1/2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg timeline-dot`} />
                  </div>

                  <div className="p-8 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className={`text-2xl font-bold gradient-text bg-gradient-to-r ${item.color}`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.company}</p>
                        <p className="text-sm text-gray-400">{item.period}</p>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

