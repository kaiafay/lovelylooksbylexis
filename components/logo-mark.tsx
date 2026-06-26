type LogoMarkProps = {
  /** Sets the em scale of the mark (width/height derive from this). */
  className?: string
  color?: string
}

export function LogoMark({ className = 'text-[26px]', color = 'currentColor' }: LogoMarkProps) {
  return (
    <span
      className={`relative inline-block select-none ${className}`}
      style={{ color, width: '1.55em', height: '1.05em' }}
      aria-hidden="true"
    >
      <span className="absolute left-0 top-0 font-serif font-medium leading-[0.82] z-[1]">
        L
      </span>
      <span className="absolute left-[0.48em] top-[0.22em] font-serif font-medium leading-[0.82] z-[2]">
        L
      </span>
    </span>
  )
}
