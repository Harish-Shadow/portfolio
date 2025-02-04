"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Chatbot with ML & NLP",
    description: "TensorFlow-based chatbot with a front-end interface",
    github: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Underground Parking System",
    description: "LIDAR & UV sensor integration for real-time optimization",
    github: "#",
    image: "/placeholder.svg",
  },
  {
    title: "NASA in Your Neighborhood",
    description: "App using NASA data for community-driven solutions",
    github: "#",
    image: "/placeholder.svg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

