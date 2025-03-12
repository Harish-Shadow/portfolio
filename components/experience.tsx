"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import GlassCard from "./glass-card"

const experiences = [
  {
    title: "Web Developer",
    period: "2023",
    company: "The Reciprocal Solutions",
    description: "Developed full-stack web applications using MERN stack and implemented responsive designs.",
    details: [
      "Built and maintained multiple React.js applications",
      "Implemented RESTful APIs using Node.js and Express",
      "Worked with MongoDB for database management",
      "Collaborated with team using Git and GitHub",
    ],
    icon: (
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-3 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 3.221 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Java Developer Intern",
    period: "2022",
    company: "Codesoft",
    description: "Worked on Java-based applications and participated in the software development lifecycle.",
    details: [
      "Developed Java applications using Spring Boot",
      "Participated in code reviews and team meetings",
      "Learned about software development lifecycle",
      "Worked with SQL databases and RESTful services",
    ],
    icon: (
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 p-3 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 24" fill="currentColor" className="w-6 h-6">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      </div>
    ),
  },
]

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section id="experience" className="min-h-screen py-20" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">journey</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-500 transform -translate-x-1/2" />

        {experiences.map((experience, index) => {
          return (
            <motion.div key={experience.title} style={{ scale, opacity }} className="relative mb-12">
              <div className="absolute left-1/2 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-purple-500/50" />

              <GlassCard
                className={`p-6 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 ${
                  expandedIndex === index
                    ? "scale-105 border-purple-500 bg-gradient-to-br from-purple-900/50 to-pink-900/50"
                    : "scale-100 border-transparent hover:border-purple-500/50"
                }`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  {experience.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <p className="text-purple-400">{experience.company}</p>
                    <p className="text-sm text-gray-400">{experience.period}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      <p className="text-gray-300 mb-4">{experience.description}</p>
                      <ul className="space-y-2">
                        {experience.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-center gap-2 text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

