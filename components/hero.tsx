import Image from "next/image";

const BOOKING_URL = "https://lovelylooksbylexis.glossgenius.com/services";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Full-bleed editorial hero image — close-up lash / eye photography */}
      <Image
        src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=85"
        alt="Close-up editorial photograph of beautiful eyelash extensions"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark charcoal overlay — matches card back */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.18 0.003 60 / 0.72) 0%, oklch(0.15 0.003 60 / 0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        {/* Thin top rule */}
        <div className="w-16 h-px bg-white/40 mb-8" aria-hidden="true" />

        {/* Script + serif lockup — mirrors the business card */}
        <div className="inline-block mb-12">
          <p className="font-script text-7xl md:text-9xl text-white/90 leading-none pb-[0.3em]">
            <span className="relative inline-block">
              Lovely
              <span className="font-serif text-[0.22em] md:text-[0.20em] tracking-[0.2em] uppercase text-white/75 font-normal absolute left-full top-[80%] ml-[0.03em] whitespace-nowrap">
                by Lexis
              </span>
            </span>{" "}
            Looks
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight tracking-wide text-balance mb-5">
          Lash artistry that looks effortless
        </h1>

        {/* Subhead */}
        <p className="font-sans text-sm md:text-base text-white/70 tracking-wide leading-relaxed mb-10">
          Cosmetologist-led lash extensions and waxing in Garden City, Idaho
        </p>

        {/* CTA */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-serif-cta px-10 py-4 border border-white/70 text-white hover:bg-white hover:text-foreground transition-all duration-300"
        >
          Book Now
        </a>

        {/* Bottom rule */}
        <div className="w-16 h-px bg-white/40 mt-12" aria-hidden="true" />
      </div>
    </section>
  );
}
