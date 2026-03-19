const iconPaths = {
  shield: (
    <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3zm0 4.2L8 8.8v2.1c0 2.8 1.6 5.5 4 6.8 2.4-1.3 4-4 4-6.8V8.8l-4-1.6z" />
  ),
  fleet: (
    <path d="M3 14l2-6h10l2 6v4h-1a2 2 0 11-4 0H8a2 2 0 11-4 0H3v-4zm3-4l-1 3h10l-1-3H6zm12-4h3l2 3h1v9h-2a2 2 0 11-4 0h-1V6zm2 4l-1-2h-1v6h4v-4h-2z" />
  ),
  stock: (
    <path d="M4 5h16v4H4V5zm0 5h16v4H4v-4zm0 5h10v4H4v-4zm13.5 0L22 19.5 20.5 21l-3-3-3 3-1.5-1.5 4.5-4.5z" />
  ),
  rack: (
    <path d="M4 7h16v2H4V7zm2 4h12v8H6v-8zm2 2v4h8v-4H8z" />
  ),
  air: (
    <path d="M4 13h7l2-5h4l3 5h-2.5l-1.6-3h-1.3l-1.9 5H4v-2zm3 3h10v2H7v-2z" />
  ),
  bumper: (
    <path d="M4 10l4-3h8l4 3v6h-3v-3H7v3H4v-6zm4 0h8l-1.4-1H9.4L8 10z" />
  ),
  light: (
    <path d="M12 4a6 6 0 016 6c0 2.1-1.1 4-2.7 5.1L14 20h-4l-1.3-4.9A6 6 0 0112 4zm-2 15h4v2h-4v-2z" />
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3zm0 2a7 7 0 016 10.6 7 7 0 01-8.1 3L7 19l.5-2.8A7 7 0 0112 5zm-2 3.5c-.2 0-.4.1-.5.3l-.8 1c-.2.2-.2.5-.1.7.3.8 1.2 2.3 2.6 3.5 1.4 1.2 2.8 1.8 3.6 2 .3.1.6 0 .8-.2l.9-1c.2-.2.2-.5 0-.7l-1.3-1.2c-.2-.2-.5-.2-.7 0l-.6.5c-.1.1-.3.1-.4.1-.5-.2-1.2-.7-1.8-1.2-.6-.5-1.1-1.2-1.4-1.7-.1-.1-.1-.3 0-.4l.4-.6c.2-.2.1-.5-.1-.7L10.6 9c-.1-.1-.3-.2-.6-.2z" />
  ),
  contact: (
    <path d="M4 6h16v12H4V6zm2 2v.4l6 4.1 6-4.1V8l-6 4-6-4zm12 8V11l-6 4-6-4v5h12z" />
  ),
}

export function IconBadge({ icon, className = '' }) {
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-pma-copper ${className}`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        {iconPaths[icon]}
      </svg>
    </span>
  )
}
