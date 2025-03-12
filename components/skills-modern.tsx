"use client"

import { useEffect, useRef } from "react"
import GlassCard from "./glass-card"
import { Code, Database, Brain, GitBranch, Star } from "lucide-react"

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
      { name: "React.js", level: 90, proficiency: "Expert", color: "blue" },
      { name: "Next.js", level: 85, proficiency: "Advanced", color: "blue" },
      { name: "TypeScript", level: 80, proficiency: "Advanced", color: "blue" },
      { name: "Tailwind CSS", level: 90, proficiency: "Expert", color: "blue" },
    ],
  },
  {
    name: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "Node.js", level: 85, proficiency: "Advanced", color: "green" },
      { name: "Express.js", level: 80, proficiency: "Advanced", color: "green" },
      { name: "MongoDB", level: 75, proficiency: "Intermediate", color: "green" },
      { name: "PostgreSQL", level: 70, proficiency: "Intermediate", color: "green" },
    ],
  },
  {
    name: "AI/ML",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "Python", level: 75, proficiency: "Intermediate", color: "purple" },
      { name: "TensorFlow", level: 65, proficiency: "Intermediate", color: "purple" },
      { name: "scikit-learn", level: 60, proficiency: "Intermediate", color: "purple" },
      { name: "NLP", level: 70, proficiency: "Intermediate", color: "purple" },
    ],
  },
  {
    name: "Other",
    icon: <GitBranch className="w-6 h-6" />,
    color: "from-amber-400 to-orange-400",
    skills: [
      { name: "Git & GitHub", level: 85, proficiency: "Advanced", color: "amber" },
      { name: "Docker", level: 70, proficiency: "Intermediate", color: "amber" },
      { name: "AWS", level: 65, proficiency: "Intermediate", color: "amber" },
      { name: "System Design", level: 75, proficiency: "Intermediate", color: "amber" },
    ],
  },
]

function SkillBar({ skill }: { skill: Skill }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (barRef.current) {
              barRef.current.style.width = `${skill.level}%`
              barRef.current.classList.add("opacity-100")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current)
      }
    }
  }, [skill.level])

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "green":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "purple":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "amber":
        return "bg-gradient-to-r from-amber-500 to-orange-500"
      default:
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
    }
  }

  const getStarColor = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-400"
      case "green":
        return "text-green-400"
      case "purple":
        return "text-purple-400"
      case "amber":
        return "text-amber-400"
      default:
        return "text-blue-400"
    }
  }

  // Calculate number of filled stars based on skill level
  const filledStars = Math.round(skill.level / 20) // 5 stars total, each representing 20%

  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base font-medium">{skill.name}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/10">{skill.proficiency}</span>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < filledStars ? getStarColor(skill.color) + "fill-current" : "text-gray-600"}`}
            />
          ))}
        </div>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative">
        <div
          ref={barRef}
          className={`h-full ${getColorClass(skill.color)} rounded-full opacity-0 transition-all duration-1000 ease-out w-0`}
        >
          {/* Animated glow effect */}
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-white/20 skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

export default function SkillsModern() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Expertise</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <GlassCard className="h-full overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>{category.icon}</div>
                  <h3
                    className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="opacity-0 animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 4 + index) * 100 + 300}ms` }}
                    >
                      <SkillBar skill={skill} />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

