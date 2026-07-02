import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { rodape } from '../../data/content'

export function WhatsAppFloating() {
  const [open, setOpen] = useState(false)
  const { whatsappFlutuante } = rodape

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-2xl shadow-navy/20">
          <div className="flex items-center justify-between bg-navy px-5 py-4 text-white">
            <div>
              <p className="text-sm font-semibold">{whatsappFlutuante.tituloWidget}</p>
              <p className="text-xs text-white/70">{whatsappFlutuante.subtitulo}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <p className="text-sm text-ink/60">{whatsappFlutuante.mensagem}</p>
            <a
              href={whatsappFlutuante.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep"
            >
              <MessageCircle size={16} />
              {whatsappFlutuante.textoBotao}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={whatsappFlutuante.textoBotao}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-xl shadow-navy/30 transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
