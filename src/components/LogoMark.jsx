export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" role="img">
      <path d="M12 12h34l16 38H30z" fill="#f04b37" />
      <path
        d="M50 12h58L86 58H58l8 18h32L76 120 54 86h-28l10-20h30l-8-18H28z"
        fill="#f5f7fa"
      />
    </svg>
  )
}
