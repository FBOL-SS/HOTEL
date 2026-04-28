import { MessageCircle, MapPin, ChevronDown } from 'lucide-react'
import { WHATSAPP_URL, MAPS_URL } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative golden line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      {/* Soft glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-gold-400/40 text-gold-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse-slow" />
          Disponibilidad inmediata — Reserva hoy
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Descansa cómodo
          <span className="block text-gold-400 mt-1">en Torreón</span>
        </h1>

        {/* Subheading */}
        <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Hotel San Ignacio Inn te ofrece una estancia práctica, cómoda y bien ubicada
          cerca de las principales vías de acceso de Torreón.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4 text-lg shadow-2xl"
          >
            <MessageCircle size={22} />
            Reservar por WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-8 py-4 text-lg"
          >
            <MapPin size={20} />
            Ver ubicación
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
          {[
            '🏨 Check-in 24 horas',
            '🅿️ Estacionamiento gratis',
            '📶 WiFi incluido',
            '🍽️ Restaurante en el hotel',
          ].map((item) => (
            <span key={item} className="flex items-center gap-1">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  )
}
