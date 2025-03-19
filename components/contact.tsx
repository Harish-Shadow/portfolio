"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code2, Mail, Send } from "lucide-react"
import GlassCard from "./glass-card"
import { Button } from "./ui/button"

export default function Contact() {
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
    <section id="contact" className="min-h-screen py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span className="text-blue-400 text-sm font-semibold tracking-wider uppercase" variants={itemVariants}>
            Get in Touch
          </motion.span>
          <motion.h2
            className="text-5xl font-bold mt-2 mb-4 gradient-text bg-gradient-to-r from-blue-400 to-purple-400"
            variants={itemVariants}
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p className="text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
            Feel free to reach out if you&apos;re looking to hire, just want to connect or see if we can build something
            amazing together.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <GlassCard className="p-8 h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20">
              <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
              <div className="flex gap-4 mb-8">
                {[
                  {
                    icon: <Github className="w-6 h-6" />,
                    url: "https://github.com/yourusername",
                    color: "bg-gray-800 hover:bg-gray-700",
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    url: "https://linkedin.com/in/yourusername",
                    color: "bg-blue-800 hover:bg-blue-700",
                  },
                  {
                    icon: <Code2 className="w-6 h-6" />,
                    url: "https://leetcode.com/yourusername",
                    color: "bg-orange-800 hover:bg-orange-700",
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    url: "mailto:your.email@example.com",
                    color: "bg-purple-800 hover:bg-purple-700",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <p>your.email@example.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-500/20">
                    <Linkedin className="w-5 h-5 text-purple-400" />
                  </div>
                  <p>linkedin.com/in/yourusername</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-emerald-500/20">
                    <Github className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p>github.com/yourusername</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <GlassCard className="p-8 h-full">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm text-gray-400 block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full p-3 rounded-lg bg-gray-800/50 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-gray-400 block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full p-3 rounded-lg bg-gray-800/50 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-gray-400 block mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Hello, I'd like to talk about..."
                    rows={4}
                    className="w-full p-3 rounded-lg bg-gray-800/50 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 btn-hover">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

