import { LanguageBadge } from '../components/LanguageBadge'
import { ProductCard } from '../components/ProductCard'
import { SectionHeading } from '../components/SectionHeading'

export function HomePage({ copy, locales }) {
  return (
    <>
      <section id="home" className="border-b border-white/10 py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <LanguageBadge primaryLabel={locales.es.label} secondaryLabel={locales.en.label} />
            <p className="eyebrow mt-8">{copy.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl xl:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-pma-ash md:text-xl">{copy.hero.description}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#companies" className="button-primary">
                {copy.hero.primaryAction}
              </a>
              <a href="#products" className="button-secondary">
                {copy.hero.secondaryAction}
              </a>
            </div>
          </div>

          <div className="panel relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-pma-copper/15 via-transparent to-transparent" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pma-sand">Capacidad operacional</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                {copy.hero.metrics.map((metric) => (
                  <div key={metric.label} className="border-l border-pma-copper pl-4">
                    <p className="metric-value">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-pma-ash">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow={copy.highlights.eyebrow}
            title={copy.highlights.title}
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.highlights.items.map((item) => (
              <article key={item.title} className="panel p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-pma-ash">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-white/10 bg-black/20 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow={copy.products.eyebrow}
            title={copy.products.title}
            description={copy.products.description}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {copy.products.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="product-detail" className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={copy.productDetail.eyebrow}
              title={copy.productDetail.title}
              description={copy.productDetail.description}
            />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-pma-ash md:text-base">
              {copy.productDetail.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-pma-copper" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel overflow-hidden">
            <div className="border-b border-white/10 bg-gradient-to-r from-pma-copper/10 to-transparent px-8 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pma-sand">Configuración de referencia</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Integración frontal para faena y rescate</h3>
            </div>
            <div className="grid gap-4 p-8">
              {copy.productDetail.infoCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pma-copper">{card.title}</p>
                  <p className="mt-3 text-base leading-7 text-white">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="border-y border-white/10 bg-black/20 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow={copy.companies.eyebrow}
              title={copy.companies.title}
              description={copy.companies.description}
            />
            <ul className="mt-8 space-y-4">
              {copy.companies.benefits.map((benefit) => (
                <li key={benefit} className="panel flex items-start gap-4 p-5 text-sm leading-7 text-pma-ash">
                  <span className="mt-2 h-2 w-2 rounded-full bg-pma-copper" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pma-sand">{copy.companies.form.title}</p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              {copy.companies.form.fields.map((field, index) => (
                <label key={field.label} className={index === copy.companies.form.fields.length - 1 ? 'md:col-span-2' : ''}>
                  <span className="mb-2 block text-sm font-medium text-white">{field.label}</span>
                  <textarea
                    rows={index === copy.companies.form.fields.length - 1 ? 5 : 1}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-pma-ash/70 focus:border-pma-copper"
                    placeholder={field.placeholder}
                  />
                </label>
              ))}
              <div className="md:col-span-2">
                <button type="button" className="button-primary w-full md:w-auto">
                  {copy.companies.form.action}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow={copy.contact.eyebrow}
              title={copy.contact.title}
              description={copy.contact.description}
            />
          </div>

          <div className="grid gap-4">
            {copy.contact.channels.map((channel) => (
              <div key={channel.label} className="panel p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pma-copper">{channel.label}</p>
                <p className="mt-3 text-base text-white md:text-lg">{channel.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
