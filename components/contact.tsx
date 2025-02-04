"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </motion.form>
        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

