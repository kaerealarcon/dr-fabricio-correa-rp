/**
 * Foto mockup (Unsplash, consultório odontológico moderno) — ainda não é uma foto
 * real da clínica do Dr. Fabricio. Trocar por /img/hero-clinic.jpg de verdade
 * (mesmo nome de arquivo) assim que houver material.
 */
export function HeroPlaceholder() {
  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/30">
      <img
        src={`${import.meta.env.BASE_URL}img/hero-clinic.jpg`}
        alt="Consultório odontológico moderno e equipado"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-deep/70 via-navy-deep/0 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-0.5 rounded-2xl border border-white/15 bg-navy-deep/50 px-5 py-4 text-white backdrop-blur-md">
        <p className="font-serif text-xl font-semibold">Dr. Fabricio Corrêa</p>
        <p className="text-sm text-white/70">CRO-SP 161429</p>
      </div>
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
    </div>
  )
}
