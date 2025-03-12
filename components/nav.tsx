"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Find the current active section
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })

      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }

      // Update URL without page reload
      window.history.pushState(null, "", href)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Harish
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ name, href }, index) => (
              <div key={name} className="relative">
                <Link
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors relative ${
                    activeSection === href.slice(1) ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeSection === href.slice(1) && <span className="absolute inset-0 rounded-full bg-white/10" />}
                  <span className="relative z-10">{name}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md md:hidden ${
          mobileMenuOpen ? "flex" : "hidden"
        } flex-col items-center justify-center`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navItems.map(({ name, href }, index) => (
            <div key={name}>
              <Link
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`px-6 py-3 text-lg ${
                  activeSection === href.slice(1) ? "text-white font-medium" : "text-gray-400"
                }`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

