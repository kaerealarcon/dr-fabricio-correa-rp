interface CaseImagePlaceholderProps {
  index: number
}

/**
 * Fotos mockup (Unsplash, temas de odontologia/implantes) — ainda não são fotos
 * reais dos cases da clínica. Trocar por /img/case-01.jpg..case-10.jpg de verdade
 * (mesmos nomes de arquivo) quando houver material.
 */
export function CaseImagePlaceholder({ index }: CaseImagePlaceholderProps) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl">
      <img
        src={`/img/case-${number}.jpg`}
        alt="Case de tratamento odontológico"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-deep/60 via-navy-deep/0 to-transparent" />
      <span className="absolute bottom-3 right-3 text-xs font-semibold tracking-wide text-white/80">
        {number}
      </span>
    </div>
  )
}
