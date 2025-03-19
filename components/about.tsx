"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Cpu, Network } from "lucide-react"
import GlassCard from "./glass-card"

const features = [
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: "Full Stack Development",
    description: "Proficient in building end-to-end web applications using modern technologies.",
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    title: "AI/ML Enthusiast",
    description: "Passionate about implementing machine learning solutions in web applications.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Problem Solver",
    description: "Strong foundation in data structures and algorithms for optimal solutions.",
  },
  {
    icon: <Network className="w-6 h-6 text-pink-400" />,
    title: "Cloud Native",
    description: "Experience with cloud platforms and containerized applications.",
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center mb-20"
      >
        <motion.span className="text-blue-400 text-sm font-semibold tracking-wider uppercase" variants={itemVariants}>
          Discover
        </motion.span>
        <motion.h2 className="text-4xl font-bold mt-2 mb-4" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"
          variants={itemVariants}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <GlassCard className="h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 glass-card">
            <h3 className="text-2xl font-bold mb-6 gradient-text bg-gradient-to-r from-blue-400 to-purple-400">
              The Journey
            </h3>
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              My journey in tech began with web development, where I honed my skills in the MERN stack and Next.js. As I
              delved deeper into the world of programming, I discovered my passion for AI and machine learning.
            </motion.p>
            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Currently, I&apos;m working on projects that bridge the gap between web development and AI. I&apos;m learning Python
              for data science and machine learning, while also improving my skills in data structures and algorithms.
            </motion.p>
          </GlassCard>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className="glass-card">
              <GlassCard className="h-full hover:border-white/20 transition-colors">
                <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { label: "Projects Completed", value: "20+" },
          { label: "Coding Hours", value: "1000+" },
          { label: "Satisfied Clients", value: "15+" },
          { label: "GitHub Contributions", value: "500+" },
        ].map((stat) => (
          <motion.div key={stat.label} variants={itemVariants} className="glass-card">
            <GlassCard className="text-center">
              <div className="text-3xl font-bold gradient-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

