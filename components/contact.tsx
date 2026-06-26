const BOOKING_URL = 'https://lovelylooksbylexis.glossgenius.com/services'

export function Contact() {
  return (
    <>
      {/* Final CTA — dark charcoal panel */}
      <section
        id="contact"
        className="relative py-28 md:py-36 px-6 overflow-hidden"
        style={{ background: 'oklch(0.215 0.004 60)' }}
      >
        <div className="scroll-reveal scroll-reveal--fade max-w-2xl mx-auto text-center flex flex-col items-center gap-0">

          {/* Heading */}
          <div className="mb-10">
            <p className="font-script text-6xl md:text-7xl text-white/90 leading-none mb-4">
              Ready to book?
            </p>
            <div className="w-10 h-px bg-white/30 mx-auto" aria-hidden="true" />
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4 mb-12 text-white/65">

            {/* Location */}
            <div className="flex items-start justify-center gap-3">
              {/* Pin icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                <path
                  d="M7 1C4.79 1 3 2.79 3 5C3 7.5 7 13 7 13C7 13 11 7.5 11 5C11 2.79 9.21 1 7 1ZM7 6.5C6.17 6.5 5.5 5.83 5.5 5C5.5 4.17 6.17 3.5 7 3.5C7.83 3.5 8.5 4.17 8.5 5C8.5 5.83 7.83 6.5 7 6.5Z"
                  fill="currentColor"
                />
              </svg>
              <address className="font-sans text-xs leading-relaxed not-italic text-center">
                5655 N Glenwood St, Unit 100<br />
                Garden City, ID 83714
              </address>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center gap-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M11.9 9.26C11.34 8.71 10.65 8.71 10.09 9.26L9.25 10.09C9.14 10.2 9 10.2 8.89 10.09C8.46 9.79 7.98 9.35 7.47 8.84C6.96 8.33 6.52 7.85 6.22 7.42C6.11 7.31 6.11 7.17 6.22 7.06L7.04 6.22C7.59 5.66 7.59 4.97 7.04 4.41L6.02 3.39C5.46 2.84 4.77 2.84 4.21 3.39L3.59 4.01C2.94 4.66 2.87 5.7 3.41 6.52C4.27 7.79 5.31 9 6.59 10.3C7.89 11.58 9.11 12.62 10.38 13.48C11.2 14.02 12.24 13.95 12.89 13.3L13.51 12.68C14.06 12.12 14.06 11.43 13.51 10.87L11.9 9.26Z"
                  fill="currentColor"
                />
              </svg>
              <a
                href="tel:+12083587390"
                className="font-serif text-sm font-normal not-italic tracking-wide hover:text-white transition-colors"
              >
                (208) 358-7390
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-center gap-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <circle cx="7" cy="7" r="2.8" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <circle cx="10.2" cy="3.8" r="0.7" fill="currentColor" />
              </svg>
              <a
                href="https://www.instagram.com/lovelylooksbylexis"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-sm font-normal not-italic tracking-wide hover:text-white transition-colors"
              >
                @lovelylooksbylexis
              </a>
            </div>
          </div>

          {/* Book Now CTA */}
          <div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-serif-cta tracking-[0.2em] px-12 py-4 border border-white/60 text-white hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 px-6 text-center border-t border-white/10"
        style={{ background: 'oklch(0.17 0.003 60)' }}
      >
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30">
          &copy;{' '}{new Date().getFullYear()}{' '}Lovely Looks by Lexis{' '}&mdash;{' '}Garden City, Idaho
        </p>
      </footer>
    </>
  )
}
