'use client'

import { useState } from 'react'

const PHOTOS = [
  { src: '/portfolio/lashes1.webp', alt: 'Volume lash extensions' },
  { src: '/portfolio/lashes2.webp', alt: 'Lash extensions with soft curl' },
  { src: '/portfolio/lashes3.webp', alt: 'Full lash set' },
  { src: '/portfolio/lashes4.webp', alt: 'Dark volume lash extensions' },
  { src: '/portfolio/lashes5.webp', alt: 'Side-angle lash extensions' },
  { src: '/portfolio/lashes6.webp', alt: 'Dense lash fan set' },
  { src: '/portfolio/lashes7.webp', alt: 'Long lash extensions' },
  { src: '/portfolio/lashes8.webp', alt: 'Hybrid lash extensions' },
  { src: '/portfolio/lashes9.webp', alt: 'Mega volume lash set' },
  { src: '/portfolio/lashes10.webp', alt: 'Glamorous lash extensions' },
]

type Photo = (typeof PHOTOS)[number]

function PortfolioItem({
  photo,
  index,
  isActive,
  onToggle,
}: {
  photo: Photo
  index: number
  isActive: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      className="scroll-reveal scroll-reveal--stagger-rise group relative block w-full break-inside-avoid mb-3 overflow-hidden text-left cursor-pointer"
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onToggle}
      aria-expanded={isActive}
      aria-label={photo.alt}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt=""
        loading="lazy"
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div
        className={`absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-hidden="true"
      >
        <p className="font-sans text-sm text-white/90 leading-relaxed">{photo.alt}</p>
      </div>
    </button>
  )
}

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 px-6"
      style={{ background: 'oklch(0.215 0.004 60)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="scroll-reveal scroll-reveal--lift text-center mb-14">
          <p className="font-script text-5xl md:text-6xl text-white/85 mb-3">Portfolio</p>
          <div className="w-10 h-px bg-white/25 mx-auto" aria-hidden="true" />
        </div>

        {/* Masonry-style grid — uses CSS columns with plain <img> for reliable rendering */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {PHOTOS.map((photo, i) => (
            <PortfolioItem
              key={photo.src}
              photo={photo}
              index={i}
              isActive={activeIndex === i}
              onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
