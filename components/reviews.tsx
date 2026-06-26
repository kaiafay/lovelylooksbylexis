const REVIEWS = [
  {
    quote:
      'Amazing experience! My lash artist was professional, gentle, and paid great attention to detail. My lashes look beautiful!',
    author: 'Jennifer Hansen',
  },
  {
    quote: 'Lexis is very skilled! I love my lashes so much!!!',
    author: 'Siham Bankson',
  },
  {
    quote:
      "She has been super great to me!! I love her! I highly recommend her to anyone that's looking for a new lash tech!",
    author: 'Monique Martinez',
  },
  {
    quote: 'Setup is very cozy and welcoming. Service is amazing and the lashes look amazing!',
    author: 'Kendra',
  },
  {
    quote:
      '10/10 recommend. She was super sweet and my lashes came out exactly how I wanted them.',
    author: 'Lisette',
  },
  {
    quote:
      "Such a welcoming, cozy experience. Felt so comfortable the entire time, chill vibes, good conversations — I was so relaxed I fell asleep! My lashes look SOOOO GOOD, and the UV light she uses meant my eyes didn't water for hours after, for the first time ever. Will definitely be booking again.",
    author: 'Bitha',
  },
  {
    quote:
      "I had an amazing experience! The personal service was top-tier and she made me feel completely comfortable from start to finish. My lashes look absolutely beautiful and she was extremely professional. I really appreciated that she even took the time to do a glue test beforehand to make sure I wouldn't have any reaction. That level of care means everything. Highly recommend!",
    author: 'Briana Mendivil',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 1L7.27 4.36H10.9L7.99 6.44L9.26 9.8L6 7.72L2.74 9.8L4.01 6.44L1.1 4.36H4.73L6 1Z"
            fill="oklch(0.22 0.004 60)"
          />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 px-6"
      style={{ background: 'oklch(0.945 0.008 78)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="scroll-reveal scroll-reveal--lift text-center mb-14">
          <p className="font-script text-5xl md:text-6xl text-foreground/80 mb-3">
            What clients are saying
          </p>
          <div className="w-10 h-px bg-foreground/25 mx-auto" aria-hidden="true" />
        </div>

        {/* Review grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {REVIEWS.map((review, i) => (
            <article
              key={review.author}
              className="scroll-reveal scroll-reveal--stagger-unfold break-inside-avoid bg-background p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Stars />
              <blockquote className="font-sans text-xs leading-relaxed text-foreground/75 flex-1">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer>
                <cite className="text-serif-label not-italic text-foreground/70">
                  — {review.author}
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
