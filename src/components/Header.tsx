'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link 
            href="/" 
            className={`text-2xl font-medium transition-colors ${
              isScrolled ? 'text-teal-600' : 'text-gray-900'
            }`}
          >
            DL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            <Link href="#about" className="text-sm text-gray-500 hover:text-gray-900">About</Link>
            <Link href="#projects" className="text-sm text-gray-500 hover:text-gray-900">Projects</Link>
            <Link href="#skills" className="text-sm text-gray-500 hover:text-gray-900">Skills</Link>
            <Link href="#contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link>
            <Link 
              href="#contact" 
              className={`text-sm px-4 py-2 rounded transition-colors ${
                isScrolled 
                  ? 'bg-teal-600 text-white hover:bg-teal-700' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col gap-4">
                <Link 
                  href="#about" 
                  className="text-sm text-gray-500 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#projects" 
                  className="text-sm text-gray-500 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="#skills" 
                  className="text-sm text-gray-500 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link 
                  href="#contact" 
                  className="text-sm text-gray-500 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="#contact" 
                  className={`text-sm px-4 py-2 rounded transition-colors text-center ${
                    isScrolled 
                      ? 'bg-teal-600 text-white hover:bg-teal-700' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 