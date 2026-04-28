import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { HOTEL, WHATSAPP_URL, MAPS_URL, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h3 className="font-display text-2xl text-gold-400 font-bold mb-2">
            Hotel San Ignacio Inn
          </h3>
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">
            Torreón, Coahuila
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Hospedaje cómodo, práctico y bien ubicado para viajeros de negocios y turismo en Torreón.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
          >
            <MessageCircle size={16} />
            Reservar por WhatsApp
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Navegación
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/55 hover:text-gold-400 text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Contacto
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-white text-sm leading-relaxed transition-colors"
              >
                {HOTEL.address}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold-400 flex-shrink-0" />
              <a
                href={`tel:${HOTEL.phoneRaw}`}
                className="text-white/55 hover:text-white text-sm transition-colors"
              >
                {HOTEL.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-gold-400 flex-shrink-0" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-gold-400 text-sm transition-colors"
              >
                WhatsApp directo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <p>© {year} Hotel San Ignacio Inn. Todos los derechos reservados.</p>
          <p>Torreón, Coahuila, México</p>
        </div>
      </div>
    </footer>
  )
}
