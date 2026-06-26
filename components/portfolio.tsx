'use client'

import { useState } from 'react'

/**
 * Portfolio photo grid.
 * Placeholder Unsplash images used below — swap for real client photography.
 */
const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Close-up of beautifully applied lash extensions — placeholder',
    description: 'Classic lash extensions — natural, everyday finish.',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    alt: 'Soft editorial beauty portrait — placeholder',
    description: 'Hybrid set — soft volume with a refined shape.',
  },
  {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    alt: 'Elegant lash close-up with soft lighting — placeholder',
    description: 'Volume lashes — full, dimensional, and lightweight.',
  },
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    alt: 'Close-up beauty portrait with lashes — placeholder',
    description: 'Classic plus — added texture, still effortless.',
  },
  {
    src: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=800&q=80',
    alt: 'Eye close-up showing lash set — placeholder',
    description: 'Wet set — sleek, fresh-from-the-shower definition.',
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    alt: 'Soft-lit beauty portrait — placeholder',
    description: 'Mega volume — bold density with a glamorous finish.',
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    alt: 'Editorial beauty close-up — placeholder',
    description: 'Custom mapping — tailored to eye shape and style.',
  },
  {
    src: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80',
    alt: 'Natural lash extension look — placeholder',
    description: 'Natural enhancement — length without heaviness.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    alt: 'Glamorous volume lash set — placeholder',
    description: 'Full glam volume — striking from every angle.',
  },
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
      aria-label={photo.description ? `${photo.alt}. ${photo.description}` : photo.alt}
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
        {photo.description && (
          <p className="font-sans text-sm text-white/90 leading-relaxed">{photo.description}</p>
        )}
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

        {/* TODO: Replace Unsplash placeholder images above with real client photos */}
      </div>
    </section>
  )
}
