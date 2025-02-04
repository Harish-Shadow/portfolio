"use client"

import Image from "next/image";

import { motion } from "framer-motion";


const projects = [
  {
    title: "Chatbot with ML & NLP",
    description: "TensorFlow-based chatbot with a front-end interface.",
    image: "/chatbot.png",
    link: "#", // Add your project link here
  },
  {
    title: "Underground Parking System",
    description: "LIDAR & UV sensor integration for real-time optimization.",
    image: "/parking.png",
    link: "#",
  },
  {
    title: "NASA in Your Neighborhood",
    description: "App using NASA data for community-driven solutions.",
    image: "/nasa.png",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
                  View Project
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
