import { Phone } from 'lucide-react'
import type { CtaLink } from '../../data/content'
import { Button } from '../ui/Button'

interface CtaBannerProps {
  ctaWhatsapp: CtaLink
  ctaTelefone: CtaLink
  align?: 'left' | 'center'
}

export function CtaBanner({ ctaWhatsapp, ctaTelefone, align = 'left' }: CtaBannerProps) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
      <Button href={ctaWhatsapp.url}>{ctaWhatsapp.texto}</Button>
      <a
        href={ctaTelefone.url}
        className="flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-navy"
      >
        <Phone size={16} />
        {ctaTelefone.texto}
      </a>
    </div>
  )
}
