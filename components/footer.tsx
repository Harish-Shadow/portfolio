"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Harish. All rights reserved.</p>
          </div>

          <div className="text-sm text-gray-400">
            <p>Designed and built with ❤️ using Next.js and Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

