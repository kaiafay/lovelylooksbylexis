'use client'

import { useEffect, useState } from 'react'
import { LogoMark } from './logo-mark'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const BOOKING_URL = 'https://lovelylooksbylexis.glossgenius.com/services'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const onLightBackground = scrolled || menuOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen
            ? 'bg-transparent py-5'
            : scrolled
              ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm py-3'
              : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo lockup */}
          <a href="#home" className="inline-flex items-center" aria-label="Lovely Looks by Lexis — Home">
            <LogoMark
              className="text-[22px] md:text-[26px]"
              color={onLightBackground ? 'oklch(0.22 0.004 60)' : '#fff'}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-serif-cta transition-opacity hover:opacity-70 ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-serif-cta px-5 py-2.5 border transition-all hover:bg-foreground hover:text-background"
              style={
                scrolled
                  ? { borderColor: 'oklch(0.22 0.004 60)', color: 'oklch(0.22 0.004 60)' }
                  : { borderColor: 'rgba(255,255,255,0.7)', color: 'rgba(255,255,255,0.9)' }
              }
            >
              Book Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[60] flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              } ${onLightBackground ? 'bg-foreground' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              } ${onLightBackground ? 'bg-foreground' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${onLightBackground ? 'bg-foreground' : 'bg-white'}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-background transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-20"
          aria-label="Mobile navigation"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-serif-cta text-sm text-foreground hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-serif-cta px-8 py-3 bg-foreground text-background hover:opacity-85 transition-opacity"
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  )
}
