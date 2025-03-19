"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Skill {
  name: string
  icon: ReactNode
  orbit: number
}

const skills: Skill[] = [
  { name: "React", icon: "⚛️", orbit: 1 },
  { name: "Node.js", icon: "🟢", orbit: 2 },
  { name: "MongoDB", icon: "🍃", orbit: 2 },
  { name: "Next.js", icon: "▲", orbit: 1 },
  { name: "Python", icon: "🐍", orbit: 3 },
  { name: "AI/ML", icon: "🤖", orbit: 3 },
]

export default function OrbitalSkills() {
  return (
    <div className="relative h-[400px] w-[400px] mx-auto">
      {/* Center point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
        <span className="text-2xl">{"</>"}</span>
      </div>

      {/* Orbital rings */}
      {[1, 2, 3].map((orbit) => (
        <div
          key={orbit}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{
            width: `${orbit * 150}px`,
            height: `${orbit * 150}px`,
          }}
        />
      ))}

      {/* Skills */}
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: -index * 3,
          }}
        >
          <motion.div
            className="relative"
            style={{
              top: `-${skill.orbit * 75}px`,
            }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
              <span className="text-2xl">{skill.icon}</span>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

