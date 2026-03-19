export function ProductCard({ product }) {
  return (
    <article className="panel flex h-full flex-col p-6">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-pma-sand">{product.category}</span>
      <h3 className="mt-4 text-2xl font-semibold text-white">{product.name}</h3>
      <p className="mt-4 text-sm leading-6 text-pma-ash">{product.summary}</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pma-copper">Compatibilidad</p>
        <p className="mt-2 text-sm text-white">{product.compatibility}</p>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-pma-ash">
        {product.specs.map((spec) => (
          <li key={spec} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-pma-copper" />
            <span>{spec}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
        {product.applications.map((application) => (
          <span
            key={application}
            className="rounded-full border border-pma-line px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-pma-ash"
          >
            {application}
          </span>
        ))}
      </div>
    </article>
  )
}
