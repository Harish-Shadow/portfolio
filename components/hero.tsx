"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-between">
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Harish
        </motion.h1>
        <motion.p
          className="text-xl mb-6 text-neutral-500 dark:text-neutral-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Web Developer | AI/ML Enthusiast | Debugging Aficionado
        </motion.p>
        <motion.p
          className="max-w-2xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Engineering student with 5+ months of internship experience in Web Development, primarily using Next.js and
          MERN stack. Passionate about transitioning into AI/ML development while continuing to build full-stack
          applications.
        </motion.p>
        <motion.div
          className="flex space-x-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button>Download Resume</Button>
          <Button variant="outline">Contact Me</Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image src="/placeholder.svg" alt="Harish" width={400} height={400} className="rounded-full mx-auto" />
      </motion.div>
    </section>
  )
}

