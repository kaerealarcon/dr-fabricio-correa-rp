import { Frown, Scissors, Zap, type LucideIcon } from 'lucide-react'
import { servicos } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

const icons: LucideIcon[] = [Zap, Scissors, Frown]

export function ServicesSection() {
  return (
    <section className="bg-sky-tint">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <SectionHeading
          eyebrow="Atendimento imediato"
          title="O que tratamos com urgência"
          subtitle="Diagnóstico e resolução no mesmo atendimento, sem espera."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {servicos.map((servico, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={servico.nome}
                className="flex flex-col gap-5 rounded-3xl bg-white p-8 text-center shadow-sm shadow-navy/5"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-deep">{servico.nome}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{servico.descricao}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
