"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "./ui/button"
import GlassCard from "./glass-card"

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "A sophisticated chatbot built with TensorFlow and NLP, featuring a modern React front-end interface.",
    image: "/placeholder.svg",
    liveUrl: "#",
    codeUrl: "#",
    tags: ["TensorFlow", "React", "Node.js"],
    stars: 45,
    category: "AI/ML",
  },
  {
    title: "Smart Parking System",
    description: "IoT-based parking system using LIDAR & UV sensors for real-time space optimization.",
    image: "/placeholder.svg",
    liveUrl: "#",
    codeUrl: "#",
    tags: ["Python", "Arduino", "React"],
    stars: 32,
    category: "IoT",
  },
  {
    title: "NASA Community Hub",
    description: "Web app utilizing NASA's API to connect space enthusiasts and drive community solutions.",
    image: "/placeholder.svg",
    liveUrl: "#",
    codeUrl: "#",
    tags: ["Next.js", "NASA API", "Tailwind"],
    stars: 28,
    category: "Web",
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered tool that generates personalized portfolio websites based on user data.",
    image: "/placeholder.svg",
    liveUrl: "#",
    codeUrl: "#",
    tags: ["OpenAI", "Next.js", "MongoDB"],
    stars: 56,
    category: "AI/ML",
  },
]

export default function Projects() {
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
    <section id="projects" className="min-h-screen py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.span className="text-pink-400 text-sm font-semibold tracking-wider uppercase" variants={itemVariants}>
          Portfolio
        </motion.span>
        <motion.h2 className="text-4xl font-bold mt-2 mb-4" variants={itemVariants}>
          Featured Projects
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"
          variants={itemVariants}
        />
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
          >
            <GlassCard className="group relative overflow-hidden h-full">
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm z-10">
                {project.category}
              </div>

              {/* Project Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-purple-500/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 mr-2" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <GlassCard className="text-center p-8 bg-gradient-to-br from-pink-900/30 to-purple-900/30 glass-card">
          <h3 className="text-2xl font-bold mb-6 gradient-text bg-gradient-to-r from-pink-400 to-purple-400">
            GitHub Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Repositories", value: "25+" },
              { label: "Stars Earned", value: "150+" },
              { label: "Contributions", value: "500+" },
              { label: "Pull Requests", value: "75+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-pink-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}

