'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#whatwedo' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Events', href: '#events' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white border-b border-border-gray shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <img 
              src="/society_logo01.png" 
              alt="IEEE Computer Society Logo" 
              className="h-10 w-auto"
            />
            <div className="hidden sm:block border-l-2 border-border-gray pl-3">
              <span className="font-sans text-sm font-semibold text-navy leading-tight block">
                IEEE Computer Society
              </span>
              <span className="font-sans text-xs text-text-gray block">
                UCSC Student Branch Chapter
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-sans text-sm font-medium transition-colors duration-200 relative pb-1',
                    isActive
                      ? 'text-ieee-blue'
                      : 'text-text-gray hover:text-navy'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-ieee-blue rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center bg-ieee-blue text-white font-sans text-sm font-medium px-6 py-2.5 rounded-full hover:bg-navy transition-colors duration-200"
            >
              Contact Us
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                scrolled ? "text-navy hover:bg-light-gray" : "text-navy bg-white/80 backdrop-blur-md shadow-sm"
              )}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-navy flex flex-col">
          <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
            <span className="font-display text-white text-lg font-bold">
              IEEE <span className="text-accent-cyan">CS</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center bg-ieee-blue text-white font-sans text-lg font-medium px-6 py-4 rounded-xl hover:bg-white hover:text-navy transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
