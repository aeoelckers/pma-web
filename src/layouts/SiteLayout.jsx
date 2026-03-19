export function SiteLayout({ navigation, children, footer }) {
  return (
    <div className="min-h-screen bg-pma-carbon bg-grid [background-size:32px_32px]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-pma-carbon/90 backdrop-blur">
        <div className="section-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-pma-copper/60 bg-pma-copper/10 text-sm font-extrabold tracking-[0.24em] text-pma-copper">
              PMA
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-pma-sand">PMA Chile</p>
              <p className="text-xs text-pma-ash">Accesorios industriales para 4x4, pickups y minería</p>
            </div>
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-pma-ash lg:justify-end">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-black/30 py-10">
        <div className="section-shell flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pma-sand">PMA</p>
            <p className="mt-3 text-sm leading-6 text-pma-ash">{footer.statement}</p>
          </div>
          <p className="max-w-md text-sm leading-6 text-pma-ash">{footer.note}</p>
        </div>
      </footer>
    </div>
  )
}
