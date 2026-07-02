import { localizacao } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { CtaBanner } from './CtaBanner'

export function LocationSection() {
  return (
    <section className="bg-sky-tint">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="Localização" title={localizacao.titulo} subtitle={localizacao.descricao} />
          <CtaBanner ctaWhatsapp={localizacao.ctaWhatsapp} ctaTelefone={localizacao.ctaTelefone} />
        </div>

        <a
          href={localizacao.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-navy/10 shadow-xl shadow-navy/10"
        >
          <iframe
            title="Localização da clínica no Google Maps"
            src={localizacao.googleMapsEmbedUrl}
            className="h-80 w-full grayscale-[15%] lg:h-96"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  )
}
