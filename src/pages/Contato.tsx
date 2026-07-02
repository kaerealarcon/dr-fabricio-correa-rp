import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { localizacao, paginaContato, site } from '../data/content'
import { Button } from '../components/ui/Button'

export function Contato() {
  useDocumentTitle(`Contato | ${site.title}`)
  const { endereco } = paginaContato

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-sky">Contato</span>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
            {paginaContato.titulo}
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink/60">{paginaContato.subtitulo}</p>

          <Button href={paginaContato.telefoneWhatsapp.url} icon={<MessageCircle size={18} />} className="w-fit">
            Fale agora no WhatsApp
          </Button>

          <div className="mt-6 flex flex-col gap-4 border-t border-navy/10 pt-6">
            <a
              href={`tel:+${paginaContato.telefoneWhatsapp.numero.replace(/\D/g, '')}`}
              className="flex items-center gap-3 text-sm font-semibold text-ink/70 hover:text-navy"
            >
              <Phone size={18} />
              {paginaContato.telefoneWhatsapp.numero}
            </a>
            <a
              href={localizacao.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm font-semibold text-ink/70 hover:text-navy"
            >
              <MapPin size={18} className="mt-0.5 shrink-0" />
              {endereco.logradouro} – {endereco.bairro}, {endereco.cidade} - {endereco.estado}
            </a>
          </div>
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
            className="h-96 w-full"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  )
}
