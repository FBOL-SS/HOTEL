import { MessageCircle, Zap, Shield, Clock } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const perks = [
  {
    icon: Zap,
    title: 'Respuesta en minutos',
    desc: 'Te confirmamos disponibilidad al instante, sin formularios ni esperas de plataformas externas.',
  },
  {
    icon: Shield,
    title: 'Sin comisiones intermediarias',
    desc: 'Al reservar directo, el 100% de tu pago va al hotel. Sin sorpresas ni cargos adicionales.',
  },
  {
    icon: Clock,
    title: 'Flexibilidad real',
    desc: 'Cambios, solicitudes especiales o dudas: te atendemos personalmente, no un bot automático.',
  },
]

export default function DirectBook() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-navy-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: text */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Reserva directa
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight mb-4">
                Reserva directo<br />y ahorra tiempo
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Olvídate de Booking y Expedia. Al reservar por WhatsApp hablas directamente con nosotros: obtienes disponibilidad real, atención personalizada y la tranquilidad de saber que alguien de verdad está al otro lado.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp self-start text-base px-7 py-3.5"
              >
                <MessageCircle size={20} />
                Reservar ahora
              </a>
            </div>

            {/* Right: perks */}
            <div className="bg-navy-800/60 p-8 sm:p-12 flex flex-col gap-6">
              {perks.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center">
                    <Icon size={20} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
