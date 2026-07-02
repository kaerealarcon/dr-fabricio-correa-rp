import { Link, NavLink } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { hero, navegacao, telefoneExibicao, telefoneUrl } from '../../data/content'
import { Button } from '../ui/Button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold text-navy-deep">Dr. Fabricio Corrêa</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky">Odontologia</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navegacao.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-tight transition-colors ${
                  isActive ? 'text-navy' : 'text-ink/60 hover:text-navy'
                }`
              }
              end={item.url === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={telefoneUrl} className="flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-navy">
            <Phone size={16} strokeWidth={2} />
            {telefoneExibicao}
          </a>
          <Button href={hero.ctaWhatsapp.url} className="px-5 py-2.5 text-xs">
            Fale no WhatsApp
          </Button>
        </div>

        <a
          href={hero.ctaWhatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white md:hidden"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
