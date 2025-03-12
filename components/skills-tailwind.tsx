"use client"

import { useEffect, useRef } from "react"
import GlassCard from "./glass-card"
import { Code, Database, Brain, GitBranch } from "lucide-react"
import type { JSX } from "react"

interface Skill {
  name: string
  level: number
  proficiency: string
  color: string
}

interface SkillCategory {
  name: string
  icon: JSX.Element
  color: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "React.js", level: 90, proficiency: "Expert", color: "from-blue-400 to-cyan-400" },
      { name: "Next.js", level: 85, proficiency: "Advanced", color: "from-blue-400 to-cyan-400" },
      { name: "TypeScript", level: 80, proficiency: "Advanced", color: "from-blue-400 to-cyan-400" },
      { name: "Tailwind CSS", level: 90, proficiency: "Expert", color: "from-blue-400 to-cyan-400" },
    ],
  },
  {
    name: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "Node.js", level: 85, proficiency: "Advanced", color: "from-green-400 to-emerald-400" },
      { name: "Express.js", level: 80, proficiency: "Advanced", color: "from-green-400 to-emerald-400" },
      { name: "MongoDB", level: 75, proficiency: "Intermediate", color: "from-green-400 to-emerald-400" },
      { name: "PostgreSQL", level: 70, proficiency: "Intermediate", color: "from-green-400 to-emerald-400" },
    ],
  },
  {
    name: "AI/ML",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "Python", level: 75, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
      { name: "TensorFlow", level: 65, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
      { name: "scikit-learn", level: 60, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
      { name: "NLP", level: 70, proficiency: "Intermediate", color: "from-purple-400 to-pink-400" },
    ],
  },
  {
    name: "Other",
    icon: <GitBranch className="w-6 h-6" />,
    color: "from-amber-400 to-orange-400",
    skills: [
      { name: "Git & GitHub", level: 85, proficiency: "Advanced", color: "from-amber-400 to-orange-400" },
      { name: "Docker", level: 70, proficiency: "Intermediate", color: "from-amber-400 to-orange-400" },
      { name: "AWS", level: 65, proficiency: "Intermediate", color: "from-amber-400 to-orange-400" },
      { name: "System Design", level: 75, proficiency: "Intermediate", color: "from-amber-400 to-orange-400" },
    ],
  },
]

function CircularProgress({ skill }: { skill: Skill }) {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (circleRef.current) {
              circleRef.current.style.background = `conic-gradient(
                ${skill.level * 3.6}deg,
                #1e293b ${skill.level * 3.6}deg
              )`
              circleRef.current.classList.add("animate-fill")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (circleRef.current) {
      observer.observe(circleRef.current)
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current)
      }
    }
  }, [skill.level])

  return (
    <div className="flex flex-col items-center group">
      <div
        ref={circleRef}
        className="relative w-24 h-24 rounded-full bg-gray-800 transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/20"
        style={{ background: `conic-gradient(#1e293b 0deg, #1e293b 360deg)` }}
      >
        {/* Inner circle with skill percentage */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gray-900 rounded-full flex items-center justify-center">
          <div className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {skill.level}%
          </div>
        </div>

        {/* Pulsing effect on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-blue-500 to-purple-500 blur-md transition-opacity duration-300"></div>
      </div>
      <h4 className="mt-3 font-medium text-center">{skill.name}</h4>
      <p className="text-xs text-gray-400">{skill.proficiency}</p>
    </div>
  )
}

export default function SkillsTailwind() {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16 opacity-0 animate-fade-in">
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Expertise</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Technical Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.name}
            className={`opacity-0 animate-fade-in`}
            style={{ animationDelay: `${categoryIndex * 200}ms` }}
          >
            <GlassCard className="overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>{category.icon}</div>
                <h3
                  className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 4 + index) * 100 + 300}ms` }}
                  >
                    <CircularProgress skill={skill} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  )
}

