import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-section-gradient relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Gold divider */}
        <div className="w-16 h-1 bg-gold-gradient rounded-full mx-auto mb-8" />

        <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-tight mb-5">
          ¿Listo para reservar<br className="hidden sm:block" /> tu estancia?
        </h2>
        <p className="text-navy-600/70 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Escríbenos ahora y te confirmamos disponibilidad en minutos. Atención directa, sin plataformas intermediarias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-10 py-4 shadow-2xl"
          >
            <MessageCircle size={24} />
            Reservar ahora por WhatsApp
          </a>
        </div>

        <p className="text-navy-600/40 text-sm mt-6">
          Respuesta rápida · Sin comisiones · Atención personalizada
        </p>
      </div>
    </section>
  )
}
