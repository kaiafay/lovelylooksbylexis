'use client'

import { useEffect, useRef } from 'react'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { About } from '@/components/about'
import { Reviews } from '@/components/reviews'
import { Contact } from '@/components/contact'

export default function Page() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mainRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const sections = el.querySelectorAll('.scroll-reveal')
    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={mainRef}>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Reviews />
      </main>
      <Contact />
    </div>
  )
}
