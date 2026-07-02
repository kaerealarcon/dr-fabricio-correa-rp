import { useDocumentTitle } from '../lib/useDocumentTitle'
import { hero, site } from '../data/content'
import { Hero } from '../components/sections/Hero'
import { LocationSection } from '../components/sections/LocationSection'
import { DifferentialsSection } from '../components/sections/DifferentialsSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { ReviewsSection } from '../components/sections/ReviewsSection'
import { ImplantsSection } from '../components/sections/ImplantsSection'
import { CtaBanner } from '../components/sections/CtaBanner'

export function Home() {
  useDocumentTitle(site.title)

  return (
    <>
      <Hero />
      <LocationSection />
      <DifferentialsSection />
      <ServicesSection />
      <ReviewsSection />
      <ImplantsSection />

      <section className="bg-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-deep sm:text-4xl">
            Precisa de atendimento agora?
          </h2>
          <p className="text-base leading-relaxed text-ink/60">
            Fale direto com a clínica e seja atendido com prioridade.
          </p>
          <CtaBanner ctaWhatsapp={hero.ctaWhatsapp} ctaTelefone={hero.ctaTelefone} align="center" />
        </div>
      </section>
    </>
  )
}
