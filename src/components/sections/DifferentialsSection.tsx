import { Award, HeartPulse, Stethoscope, Wallet, type LucideIcon } from 'lucide-react'
import { diferenciais } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { CtaBanner } from './CtaBanner'

const icons: LucideIcon[] = [Award, HeartPulse, Wallet, Stethoscope]

export function DifferentialsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <SectionHeading eyebrow="Diferenciais" title={diferenciais.titulo} align="center" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.itens.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={item}
                className="flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-7 shadow-sm shadow-navy/5 transition-shadow hover:shadow-lg hover:shadow-navy/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-tint text-navy">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <p className="text-sm font-semibold leading-snug text-navy-deep">{item}</p>
              </div>
            )
          })}
        </div>

        <CtaBanner ctaWhatsapp={diferenciais.ctaWhatsapp} ctaTelefone={diferenciais.ctaTelefone} align="center" />
      </div>
    </section>
  )
}
