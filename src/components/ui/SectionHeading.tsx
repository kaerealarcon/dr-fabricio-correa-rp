interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', tone = 'dark' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const titleColor = tone === 'light' ? 'text-white' : 'text-navy-deep'
  const subtitleColor = tone === 'light' ? 'text-white/75' : 'text-ink/60'
  const eyebrowColor = tone === 'light' ? 'text-sky-soft' : 'text-sky'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span className={`text-xs font-bold uppercase tracking-[0.28em] ${eyebrowColor}`}>{eyebrow}</span>
      )}
      <h2 className={`font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && <p className={`text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>}
    </div>
  )
}
