export function LanguageBadge({ primaryLabel, secondaryLabel }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-pma-line bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-pma-ash">
      <span className="font-semibold text-white">{primaryLabel}</span>
      <span className="h-1 w-1 rounded-full bg-pma-line" />
      <span>{secondaryLabel}</span>
    </div>
  )
}
