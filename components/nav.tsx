"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 py-4 z-50">
      <motion.div
        className="flex px-4 py-2 bg-gray-900/50 backdrop-blur-md rounded-full border border-neutral-200 border-white/10 dark:border-neutral-800"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {navItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeSection === href.slice(1) ? "text-white bg-white/10" : "text-gray-400 hover:text-white"
            }`}
          >
            {name}
          </Link>
        ))}
      </motion.div>
    </nav>
  )
}

