"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isResumePage = pathname === "/resume"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Page navigation (separate pages)
  const pageNavLinks = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
  ]

  // Section navigation (within current page)
  const homeSectionLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const resumeSectionLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Extracurriculars", href: "#extracurriculars" },
  ]

  const sectionLinks = isResumePage ? resumeSectionLinks : homeSectionLinks

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name (Left) */}
        <Link href="/" className="text-2xl font-bold text-sage-700 hover:text-sage-800 transition-colors">
          Cynthia Chen
        </Link>

        {/* Desktop Section Navigation (Center - in-page links) */}
        <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {sectionLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sage-600 hover:text-sage-800 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Page Navigation (Right - separate pages) */}
        <nav className="hidden md:flex space-x-6">
          {pageNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors",
                pathname === link.href ? "text-sage-800 font-medium" : "text-sage-600 hover:text-sage-800",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-sage-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-sage-100">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="pb-2 mb-2 border-b border-sage-100">
              <p className="text-xs uppercase text-sage-500 font-semibold mb-2">Page Navigation</p>
              {pageNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block py-2 transition-colors",
                    pathname === link.href ? "text-sage-800 font-medium" : "text-sage-600 hover:text-sage-800",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs uppercase text-sage-500 font-semibold mb-2">On This Page</p>
              {sectionLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-sage-600 hover:text-sage-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

