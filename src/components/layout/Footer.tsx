import { MapPin, Phone } from 'lucide-react'
import { localizacao, rodape, site, telefoneExibicao, telefoneUrl } from '../../data/content'
import { InstagramIcon } from '../ui/InstagramIcon'

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="font-serif text-xl font-semibold">Dr. Fabricio Corrêa</span>
          <p className="text-sm leading-relaxed text-white/60">{rodape.bio}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/70">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-soft">Contato</span>
          <a href={telefoneUrl} className="flex items-center gap-2 hover:text-white">
            <Phone size={16} /> {telefoneExibicao}
          </a>
          <a
            href={localizacao.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-white"
          >
            <MapPin size={16} className="mt-0.5 shrink-0" />
            Rua Adib Buchala, 220 – Vila São João, São José do Rio Preto - SP
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/70">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-soft">Redes sociais</span>
          {rodape.redesSociais.map((rede) => (
            <a
              key={rede.url}
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <InstagramIcon size={16} /> {rede.rede}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        {site.copyright}
      </div>
    </footer>
  )
}
