import { LogoMark } from '../components/LogoMark'

export function SiteLayout({ brand, navigation, navbar, children, footer }) {
  return (
    <div className="min-h-screen bg-pma-carbon bg-grid [background-size:32px_32px]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d11]/85 backdrop-blur-xl">
        <div className="section-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 shadow-panel">
              <LogoMark className="h-11 w-11" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white">{brand.name}</p>
              <p className="text-xs text-pma-ash">{brand.tagline}</p>
            </div>
          </a>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <nav className="flex flex-wrap gap-2 text-sm text-pma-ash">
              {navigation.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <a href="#contact" className="button-primary min-w-[120px]">
              {navbar.cta}
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-black/35 py-10">
        <div className="section-shell flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pma-sand">{brand.name}</p>
            <p className="mt-3 text-sm leading-6 text-pma-ash">{footer.statement}</p>
          </div>
          <p className="max-w-md text-sm leading-6 text-pma-ash">{footer.note}</p>
        </div>
      </footer>
    </div>
  )
}
