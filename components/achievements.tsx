"use client"

import { motion } from "framer-motion"

export default function Achievements() {
  return (
    <section className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>
      <motion.ul
        className="max-w-3xl mx-auto list-disc list-inside"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li>Published a research paper on AI & legal domain integration</li>
        <li>Semifinalist at Hackathon X</li>
      </motion.ul>
    </section>
  )
}

