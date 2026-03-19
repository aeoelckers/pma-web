import { LogoMark } from '../components/LogoMark'

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
              <div className="brand-mark brand-mark-hero">
                <div className="brand-mark-inner">
                  <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
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
              <div className="hero-badge-row">
                <span className="hero-pill">{copy.hero.badge}</span>
                <span className="hero-pill hero-pill-muted">{copy.hero.secondaryBadge}</span>
              </div>
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

              <div className="hero-metrics">
                {copy.metrics.map((metric) => (
                  <article key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual-stage">
              <div className="hero-map-overlay" />
              <div className="hero-brand-watermark" aria-hidden="true">
                <LogoMark className="h-full w-full" />
              </div>
              <div className="hero-commerce-panel">
                <div className="hero-commerce-header">
                  <span>{copy.catalog.label}</span>
                  <span>{copy.catalog.availability}</span>
                </div>

                <div className="hero-product-stack">
                  {copy.catalog.items.map((item) => (
                    <article key={item.name} className="hero-product-card">
                      <div>
                        <p>{item.category}</p>
                        <h3>{item.name}</h3>
                      </div>
                      <span>{item.price}</span>
                    </article>
                  ))}
                </div>
              </div>
              <PlaceholderVisual
                label="VITRINA PRINCIPAL"
                detail="Lista para reemplazar por una foto real de pickup equipada, producto destacado o banner de campaña."
                className="hero-photo-placeholder"
              />
              <div className="hero-glow hero-glow-large" />
              <div className="hero-glow hero-glow-small" />
            </div>
          </div>

          <div className="hero-cards-row">
            <article id="products" className="info-card info-card-featured">
              <div className="info-icon">▣</div>
              <h2>{copy.products.title}</h2>
              <p>{copy.products.summary}</p>
              <ul className="info-list">
                {copy.products.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article id="companies" className="info-card">
              <div className="info-icon">◫</div>
              <h2>{copy.companies.title}</h2>
              <p>{copy.companies.summary}</p>
              <ul className="info-list">
                {copy.companies.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article id="contact" className="info-card contact-card">
              <div className="contact-icons">
                <span>✉</span>
                <span>◜◝</span>
              </div>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.summary}</p>
              <a href={copy.contact.ctaHref} className="button-secondary inline-contact-button">
                {copy.contact.ctaLabel}
              </a>
              <div className="contact-footer-strip">
                {copy.contact.footerItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="scroll-indicator">
            <span>{copy.scrollLabel}</span>
            <span className="scroll-arrow">⌄</span>
          </div>
        </div>
      </section>

      <section id="catalog" className="section-shell pb-6 md:pb-8">
        <div className="catalog-section">
          <div className="catalog-heading-row">
            <div>
              <p className="detail-eyebrow">{copy.catalogSection.eyebrow}</p>
              <h2 className="catalog-title">{copy.catalogSection.title}</h2>
              <p className="catalog-description">{copy.catalogSection.description}</p>
            </div>
            <a href="#contact" className="button-secondary">
              {copy.catalogSection.cta}
            </a>
          </div>

          <div className="catalog-grid">
            {copy.catalogSection.cards.map((card) => (
              <article key={card.title} className="catalog-card">
                <span className="catalog-card-kicker">{card.kicker}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="catalog-card-link">{card.linkLabel}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="product-detail" className="section-shell pb-8 md:pb-12">
        <div className="details-grid">
          <article className="detail-panel detail-panel-accent">
            <p className="detail-eyebrow">{copy.productDetail.eyebrow}</p>
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
            <p className="detail-eyebrow">{copy.commerceDetail.eyebrow}</p>
            <h3>{copy.commerceDetail.title}</h3>
            <div className="asset-placeholders">
              {copy.commerceDetail.cards.map((card) => (
                <PlaceholderVisual key={card.label} label={card.label} detail={card.detail} />
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
