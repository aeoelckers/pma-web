import { IconBadge } from './IconBadge'

const productIcons = {
  'racks-carga': 'rack',
  compresores: 'air',
  'parachoques-operacionales': 'bumper',
  'iluminacion-tecnica': 'light',
}

export function ProductCard({ product }) {
  return (
    <article className="product-card group panel relative flex h-full flex-col overflow-hidden">
      <div className={`relative min-h-[220px] overflow-hidden bg-gradient-to-br ${product.media.tone} p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,75,55,0.35),transparent_40%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:auto,28px_28px,28px_28px] opacity-80" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-pma-sand">
              {product.category}
            </span>
            <IconBadge icon={productIcons[product.id]} className="backdrop-blur" />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pma-copper">{product.media.accent}</p>
            <div className="h-20 rounded-[1.75rem] border border-white/10 bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
        <p className="mt-3 text-base font-medium text-pma-sand">{product.benefit}</p>
        <p className="mt-3 text-sm leading-7 text-pma-ash">{product.detail}</p>

        <div className="mt-6 pt-4">
          <a href="#product-detail" className="button-secondary w-full justify-between group-hover:border-pma-copper group-hover:text-white">
            <span>{product.cta}</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  )
}
