function PlaceholderVisual({ label, detail, className = '' }) {
  return (
    <div className={`placeholder-visual ${className}`}>
      <span className="placeholder-label">{label}</span>
      {detail ? <p className="placeholder-detail">{detail}</p> : null}
    </div>
  )
}

export function HomePage({ copy }) {
  return (
    <>
      <section id="home" className="section-shell py-6 md:py-10">
        <div className="landing-frame">
          <header className="landing-topbar">
            <a href="#home" className="brand-lockup">
              <div className="brand-mark">
                <div className="flex h-full w-full items-center justify-center rounded-[1.1rem] bg-black/30">
                  <svg viewBox="0 0 120 120" className="h-11 w-11" aria-hidden="true" role="img">
                    <path d="M12 12h34l16 38H30z" fill="#f04b37" />
                    <path
                      d="M50 12h58L86 58H58l8 18h32L76 120 54 86h-28l10-20h30l-8-18H28z"
                      fill="#f5f7fa"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="brand-title">{copy.brand.name}</p>
                <p className="brand-subtitle">{copy.brand.tagline}</p>
              </div>
            </a>

            <nav className="landing-nav">
              {copy.navigation.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">{copy.hero.eyebrow}</p>
              <h1 className="hero-title">{copy.hero.title}</h1>
              <p className="hero-description">{copy.hero.description}</p>

              <div className="hero-actions">
                <a href="#contact" className="button-primary">
                  {copy.hero.primaryAction}
                </a>
                <a href="#products" className="button-secondary">
                  {copy.hero.secondaryAction}
                </a>
              </div>
            </div>

            <div className="hero-visual-stage">
              <div className="hero-map-overlay" />
              <PlaceholderVisual
                label="ESPACIO PARA FOTO PRINCIPAL"
                detail="Ideal para una imagen PNG/WebP recortada de 2 pickups o 4x4 sobre terreno minero."
                className="hero-photo-placeholder"
              />
              <div className="hero-glow hero-glow-large" />
              <div className="hero-glow hero-glow-small" />
            </div>
          </div>

          <div className="hero-cards-row">
            <article id="products" className="info-card">
              <div className="info-icon">▣</div>
              <h2>PRODUCTOS</h2>
              <p>{copy.products.summary}</p>
            </article>

            <article id="companies" className="info-card">
              <div className="info-icon">◫</div>
              <h2>EMPRESAS</h2>
              <p>{copy.companies.summary}</p>
            </article>

            <article id="contact" className="info-card contact-card">
              <div className="contact-icons">
                <span>✉</span>
                <span>◜◝</span>
              </div>
              <h2>CONTACTO</h2>
              <p>{copy.contact.summary}</p>
              <div className="contact-footer-strip">
                {copy.contact.footerItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="scroll-indicator">
            <span>Scroll for More</span>
            <span className="scroll-arrow">⌄</span>
          </div>
        </div>
      </section>

      <section id="product-detail" className="section-shell pb-8 md:pb-12">
        <div className="details-grid">
          <article className="detail-panel detail-panel-accent">
            <p className="detail-eyebrow">Detalle técnico</p>
            <h3>{copy.productDetail.title}</h3>
            <p className="detail-copy">{copy.productDetail.description}</p>
            <div className="detail-list">
              {copy.productDetail.bullets.map((bullet) => (
                <div key={bullet} className="detail-list-item">
                  {bullet}
                </div>
              ))}
            </div>
          </article>

          <article className="detail-panel">
            <p className="detail-eyebrow">Activos pendientes</p>
            <h3>Bloques listos para reemplazar con fotos reales.</h3>
            <div className="asset-placeholders">
              <PlaceholderVisual
                label="FOTO PRODUCTO 01"
                detail="Parachoques / rack / iluminación en fondo oscuro."
              />
              <PlaceholderVisual
                label="FOTO PRODUCTO 02"
                detail="Detalle técnico o aplicación en faena."
              />
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
