"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience & Skills
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Internships</h3>
          <ul className="list-disc list-inside">
            <li>Web Developer at The Reciprocal Solutions</li>
            <li>Java Developer at Codesoft</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <ul className="list-disc list-inside">
            <li>MERN (MongoDB, Express.js, React, Node.js)</li>
            <li>Next.js, Vercel Deployment</li>
            <li>Bootstrap, Tailwind CSS</li>
            <li>Learning AI/ML, Python Django, C/C++, Data Structures</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

