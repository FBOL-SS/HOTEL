import { MapPin, ExternalLink, Navigation } from 'lucide-react'
import { MAPS_URL, HOTEL } from '@/lib/constants'

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-navy-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Cómo llegarnos
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-3 leading-tight">
            Fácil de encontrar,<br className="hidden sm:block" /> difícil de olvidar
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Ubicado sobre Carretera Santa Fe, con acceso práctico para viajeros de paso, trabajo o estancia corta en Torreón.
          </p>
        </div>

        {/* Card */}
        <div className="bg-navy-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Map placeholder */}
          <div className="relative h-56 sm:h-72 bg-gradient-to-br from-navy-600 to-navy-900 flex items-center justify-center">
            {/* Decorative map-like grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
            {/* Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center shadow-xl mb-3 animate-bounce">
                <MapPin size={32} className="text-navy-900" />
              </div>
              <span className="text-white font-semibold text-sm text-center px-4">
                Hotel San Ignacio Inn
              </span>
              <span className="text-white/60 text-xs text-center px-4 mt-1">
                Km 75 Carretera Santa Fe
              </span>
            </div>

            {/* Open Maps button overlay */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-white text-navy-700 text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-gold-50 transition-colors"
            >
              <ExternalLink size={14} />
              Abrir en Google Maps
            </a>
          </div>

          {/* Info */}
          <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Dirección</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{HOTEL.address}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Navigation size={18} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Acceso</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Acceso directo desde la carretera principal. A pocos minutos del centro de Torreón y zonas industriales clave.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 pt-4 border-t border-white/10">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                <Navigation size={18} />
                Cómo llegar — Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
