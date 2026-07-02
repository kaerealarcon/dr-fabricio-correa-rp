import { useState } from 'react'
import { Quote } from 'lucide-react'
import { avaliacoes } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { StarRating } from '../ui/StarRating'

const INITIAL_COUNT = 6

export function ReviewsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? avaliacoes.depoimentos : avaliacoes.depoimentos.slice(0, INITIAL_COUNT)

  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading eyebrow="Avaliações" title={avaliacoes.titulo} align="center" />
          <div className="flex items-center gap-3 rounded-full border border-navy/10 bg-sky-tint px-6 py-3">
            <span className="font-serif text-2xl font-semibold text-navy-deep">{avaliacoes.nota.toFixed(1)}</span>
            <StarRating rating={avaliacoes.nota} />
            <span className="text-sm font-semibold text-ink/60">
              {avaliacoes.totalAvaliacoes} avaliações
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((depoimento) => (
            <figure
              key={depoimento.nome}
              className="flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-7 shadow-sm shadow-navy/5"
            >
              <Quote className="text-sky" size={22} strokeWidth={1.5} />
              <blockquote className="text-sm leading-relaxed text-ink/70">"{depoimento.texto}"</blockquote>
              <figcaption className="mt-auto flex flex-col gap-1 border-t border-navy/5 pt-4">
                <span className="text-sm font-semibold text-navy-deep">{depoimento.nome}</span>
                <span className="text-xs text-ink/40">{depoimento.status}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {avaliacoes.depoimentos.length > INITIAL_COUNT && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mx-auto text-sm font-semibold text-navy underline underline-offset-4 hover:text-sky"
          >
            {expanded ? 'Ver menos avaliações' : 'Ver mais avaliações'}
          </button>
        )}
      </div>
    </section>
  )
}
