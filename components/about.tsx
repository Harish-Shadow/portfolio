"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {[
          "My journey in tech began with web development, where I honed my skills the MERN stack and Next.js. As delved deeper into world of programming, discovered passion for AI machine learning.",
          "Currently, I'm working on projects that bridge the gap between web development and AI. learning Python for data science machine learning, while also improving my skills in structures algorithms.",
          "My goal is to become a full-stack AI developer, capable of building intelligent web applications that leverage the power machine learning solve real-world problems.",
        ].map((paragraph, index) => (
          <motion.p
            key={index}
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}

