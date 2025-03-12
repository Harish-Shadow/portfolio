"use client"

import { motion } from "framer-motion"
import GlassCard from "./glass-card"
import { useEffect, useRef } from "react"

interface Skill {
  name: string
  level: number
  proficiency: string
  color: string
}

const skillCategories = {
  "Frontend Development": [
    { name: "React.js", level: 90, proficiency: "Expert", color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", level: 85, proficiency: "Advanced", color: "from-blue-400 to-cyan-400" },
    { name: "TypeScript", level: 80, proficiency: "Advanced", color: "from-blue-400 to-cyan-400" },
    { name: "Tailwind CSS", level: 90, proficiency: "Expert", color: "from-blue-400 to-cyan-400" },
  ],
  "Backend Development": [
    { name: "Node.js", level: 85, proficiency: "Advanced", color: "from-green-400 to-emerald-400" },
    { name: "Express.js", level: 80, proficiency: "Advanced", color: "from-green-400 to-emerald-400" },
    { name: "MongoDB", level: 75, proficiency: "Intermediate", color: "from-green-400 to-emerald-400" },
    { name: "PostgreSQL", level: 70, proficiency: "Intermediate", color: "from-green-400 to-emerald-400" },
  ],
  "AI/ML": [
    { name: "Python", level: 75, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
    { name: "TensorFlow", level: 65, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
    { name: "scikit-learn", level: 60, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
    { name: "NLP", level: 70, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
  ],
  Other: [
    { name: "Git & GitHub", level: 85, proficiency: "Advanced", color: "from-amber-400 to-orange-400" },
    { name: "Docker", level: 70, proficiency: "Intermediate", color: "from-amber-400 to-orange-400" },
    { name: "AWS", level: 65, proficiency: "Intermediate", color: "from-amber-400 to-orange-400" },
    { name: "System Design", level: 75, proficiency: "Intermediate", color: "from-amber-400 to-orange-400" },
  ],
}

function CircularProgress({ skill }: { skill: Skill }) {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (circleRef.current) {
      const progressStartValue = 0
      const progressEndValue = skill.level
      const speed = 20

      let progress = progressStartValue
      const element = circleRef.current

      const progressInterval = setInterval(() => {
        progress++

        element.style.background = `conic-gradient(
          ${progress * 3.6}deg,
          #1e293b ${progress * 3.6}deg
        )`

        if (progress >= progressEndValue) {
          clearInterval(progressInterval)
        }
      }, speed)

      return () => clearInterval(progressInterval)
    }
  }, [skill.level, skill.color])

  return (
    <div className="flex flex-col items-center">
      <div
        ref={circleRef}
        className="circular-progress mb-3"
        style={{
          background: `conic-gradient(
            ${skill.level * 3.6}deg,
            #1e293b ${skill.level * 3.6}deg
          )`,
        }}
      >
        <div className="value-container gradient-text bg-gradient-to-r from-white to-gray-300">{skill.level}%</div>
      </div>
      <h4 className="text-center font-medium mb-1">{skill.name}</h4>
      <p className="text-xs text-gray-400">{skill.proficiency}</p>
    </div>
  )
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.span
          className="text-emerald-400 text-sm font-semibold tracking-wider uppercase"
          variants={itemVariants}
        >
          Expertise
        </motion.span>
        <motion.h2 className="text-4xl font-bold mt-2 mb-4" variants={itemVariants}>
          Technical Skills
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"
          variants={itemVariants}
        />
      </motion.div>

      <div className="space-y-12">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <GlassCard className="glass-card overflow-hidden">
              <motion.h3
                className="text-xl font-semibold mb-8 gradient-text bg-gradient-to-r from-emerald-400 to-blue-400"
                variants={itemVariants}
              >
                {category}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CircularProgress skill={skill} />
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

