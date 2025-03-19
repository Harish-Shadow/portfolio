"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.span
            className="inline-block text-sm font-medium text-blue-400 mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            HELLO, I&apos;M
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Harish
          </motion.h1>

          <motion.p
            className="text-xl mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Web Developer | AI/ML Enthusiast | Debugging Aficionado
          </motion.p>

          <motion.p
            className="max-w-2xl mb-8 text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Engineering student with 5+ months of internship experience in Web Development, primarily using Next.js and
            MERN stack. Passionate about transitioning into AI/ML development while continuing to build full-stack
            applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 btn-hover">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>

            <Button variant="outline" className="border-white/20 hover:bg-white/10 btn-hover" asChild>
              <Link href="#contact">
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              {
                icon: <Github className="w-5 h-5" />,
                url: "https://github.com/yourusername",
                color: "text-white hover:text-blue-400",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                url: "https://linkedin.com/in/yourusername",
                color: "text-white hover:text-blue-400",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                url: "mailto:your.email@example.com",
                color: "text-white hover:text-blue-400",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border border-white/20 ${social.color} transition-colors`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />

            {/* Rotating border */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-2">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/placeholder.svg"
                  alt="Harish"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements */}
            {[
              { icon: "⚛️", top: "10%", left: "-5%", delay: 0 },
              { icon: "🔥", top: "70%", left: "-10%", delay: 1 },
              { icon: "🤖", top: "20%", right: "-5%", delay: 2 },
              { icon: "🚀", bottom: "10%", right: "-5%", delay: 3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute bg-gray-900/80 backdrop-blur-sm p-3 rounded-full text-2xl shadow-lg"
                style={{
                  top: item.top || "auto",
                  left: item.left || "auto",
                  right: item.right || "auto",
                  bottom: item.bottom || "auto",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5 + item.delay * 0.2 },
                }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

