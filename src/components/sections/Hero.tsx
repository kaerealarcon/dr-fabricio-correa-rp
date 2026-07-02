import { ShieldCheck } from 'lucide-react'
import { hero } from '../../data/content'
import { HeroPlaceholder } from '../placeholders/HeroPlaceholder'
import { CtaBanner } from './CtaBanner'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-tint px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-navy">
            <ShieldCheck size={14} />
            {hero.chamada}
          </span>

          <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-navy-deep sm:text-6xl">
            {hero.titulo}
          </h1>

          <p className="text-base font-semibold text-sky">{hero.subtitulo}</p>

          <p className="max-w-lg text-lg leading-relaxed text-ink/65">{hero.descricao}</p>

          <div className="pt-2">
            <CtaBanner ctaWhatsapp={hero.ctaWhatsapp} ctaTelefone={hero.ctaTelefone} />
          </div>

          <p className="max-w-md text-xs leading-relaxed text-ink/40">{hero.aviso}</p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <HeroPlaceholder />
        </div>
      </div>
    </section>
  )
}
