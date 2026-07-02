import { implantes } from '../../data/content'
import { CaseImagePlaceholder } from '../placeholders/CaseImagePlaceholder'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

export function ImplantsSection() {
  return (
    <section className="bg-navy-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24">
        <SectionHeading
          eyebrow="Implantes"
          title={implantes.titulo}
          subtitle={implantes.subtitulo}
          align="center"
          tone="light"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {implantes.topicos.map((topico) => (
            <div key={topico.numero} className="flex flex-col gap-4 rounded-2xl border border-white/10 p-8">
              <span className="font-serif text-4xl font-semibold text-sky-soft">
                {String(topico.numero).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold leading-snug">{topico.titulo}</h3>
              <p className="text-sm leading-relaxed text-white/60">{topico.descricao}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto">
          <Button href={implantes.ctaWhatsapp.url} variant="outline" className="border-white text-white hover:bg-white hover:text-navy-deep">
            {implantes.ctaWhatsapp.texto}
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-sky-soft">
            {implantes.galeriaCases.titulo}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {Array.from({ length: implantes.galeriaCases.totalImagens }).map((_, index) => (
              <CaseImagePlaceholder key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
