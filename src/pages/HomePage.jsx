import { IconBadge } from '../components/IconBadge'
import { LanguageBadge } from '../components/LanguageBadge'
import { ProductCard } from '../components/ProductCard'
import { SectionHeading } from '../components/SectionHeading'
import { LogoMark } from '../components/LogoMark'

export function HomePage({ copy, locales }) {
  return (
    <>
      <section id="home" className="pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="section-shell">
          <div className="hero-shell overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-panel">
            <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="relative p-6 md:p-10 xl:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,75,55,0.12),transparent_35%)]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-4">
                    <LanguageBadge primaryLabel={locales.es.label} secondaryLabel={locales.en.label} />
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-pma-sand">
                      B2B + B2C especializado
                    </span>
                  </div>

                  <p className="eyebrow mt-8">{copy.hero.eyebrow}</p>
                  <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl xl:text-[4.8rem]">
                    {copy.hero.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-pma-ash md:text-[1.35rem]">{copy.hero.description}</p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a href="#contact" className="button-primary">
                      {copy.hero.primaryAction}
                    </a>
                    <a href="#products" className="button-secondary">
                      {copy.hero.secondaryAction}
                    </a>
                  </div>

                  <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {copy.hero.support.map((item) => (
                      <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-pma-copper/40">
                        <p className="text-sm leading-6 text-pma-ash">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[420px] border-t border-white/10 xl:border-l xl:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(240,75,55,0.45),transparent_20%),radial-gradient(circle_at_80%_75%,rgba(240,75,55,0.25),transparent_18%),linear-gradient(140deg,#2a1714_0%,#12151c_35%,#0f1115_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
                <div className="absolute inset-x-10 bottom-8 top-10 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm" />
                <div className="absolute inset-x-16 bottom-16 top-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(59,32,26,0.9),rgba(14,17,21,0.7))] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(240,75,55,0.22),transparent_22%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_18%)]" />
                  <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-pma-sand">
                      {copy.hero.visual.badge}
                    </span>
                    <div className="hidden rounded-2xl border border-white/10 bg-black/30 p-2 md:block">
                      <LogoMark className="h-10 w-10" />
                    </div>
                  </div>

                  <div className="absolute inset-x-8 bottom-8">
                    <div className="hero-vehicle mb-6 h-44 rounded-[2rem] border border-white/10" />
                    <div className="grid gap-3 md:grid-cols-3">
                      {copy.hero.visual.stats.map((item) => (
                        <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                          <p className="text-2xl font-black text-white">{item.value}</p>
                          <p className="mt-1 text-sm text-pma-ash">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {copy.trust.items.map((item) => (
              <article key={item.title} className="trust-card panel p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <IconBadge icon={item.icon} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-pma-ash">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-white/10 bg-black/20 py-20">
        <div className="section-shell">
          <SectionHeading eyebrow={copy.products.eyebrow} title={copy.products.title} description={copy.products.description} />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.products.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="companies" className="py-20">
        <div className="section-shell grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-panel md:p-10">
            <SectionHeading eyebrow={copy.companies.eyebrow} title={copy.companies.title} description={copy.companies.description} />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {copy.companies.pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-pma-copper/50">
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-pma-ash">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="button-primary">
                {copy.companies.action}
              </a>
            </div>
          </div>

          <div id="product-detail" className="panel overflow-hidden">
            <div className="border-b border-white/10 bg-[linear-gradient(120deg,rgba(240,75,55,0.16),transparent_60%)] px-8 py-6">
              <p className="eyebrow">{copy.productDetail.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">{copy.productDetail.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-pma-ash">{copy.productDetail.description}</p>
            </div>

            <div className="grid gap-4 p-8">
              {copy.productDetail.bullets.map((bullet) => (
                <div key={bullet} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-pma-ash">
                  {bullet}
                </div>
              ))}

              <div className="grid gap-4 md:grid-cols-3">
                {copy.productDetail.infoCards.map((card) => (
                  <div key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pma-copper">{card.title}</p>
                    <p className="mt-3 text-base leading-7 text-white">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/25 py-8">
        <div className="section-shell">
          <div className="grid gap-3 md:grid-cols-4">
            {copy.differentiation.items.map((item) => (
              <div key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-pma-sand transition hover:border-pma-copper/50 hover:text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="section-shell grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} description={copy.contact.description} />

            <a
              href={copy.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center gap-4 rounded-[1.7rem] border border-[#2fbf62]/30 bg-[#10291a] p-5 transition hover:-translate-y-1 hover:border-[#2fbf62]/60"
            >
              <IconBadge icon="whatsapp" className="border-[#2fbf62]/30 bg-[#16321f] text-[#47d67d]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7de5a4]">{copy.contact.whatsappLabel}</p>
                <p className="mt-2 text-lg font-semibold text-white">{copy.contact.whatsappNumber}</p>
              </div>
            </a>

            <div className="mt-8 grid gap-4">
              {copy.contact.channels.map((channel) => (
                <div key={channel.label} className="panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pma-copper">{channel.label}</p>
                  <p className="mt-3 text-base leading-7 text-white md:text-lg">{channel.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6 md:p-8 xl:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pma-sand">{copy.contact.form.title}</p>
            <form className="mt-6 grid gap-5">
              {copy.contact.form.fields.map((field) => (
                <label key={field.label}>
                  <span className="mb-2 block text-sm font-medium text-white">{field.label}</span>
                  {field.type === 'textarea' ? (
                    <textarea
                      rows={6}
                      className="w-full rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-pma-ash/70 focus:border-pma-copper"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="w-full rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-pma-ash/70 focus:border-pma-copper"
                      placeholder={field.placeholder}
                    />
                  )}
                </label>
              ))}

              <button type="button" className="button-primary w-full justify-center py-4 text-base">
                {copy.contact.form.action}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
