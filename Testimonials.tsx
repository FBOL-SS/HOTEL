import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos M.',
    origin: 'Monterrey, N.L.',
    rating: 5,
    text: 'Viajo frecuentemente a Torreón por trabajo y siempre me quedo aquí. El hotel está bien ubicado sobre la carretera, lo que me ahorra tiempo. La habitación limpia, el WiFi funcionando y el estacionamiento justo enfrente. No pido más.',
    tag: 'Viajero de negocios',
  },
  {
    name: 'Sofía R.',
    origin: 'Ciudad de México',
    rating: 5,
    text: 'Nos quedamos con mi familia en la habitación familiar. Amplia, con buen aire acondicionado y muy limpia. El restaurante del hotel nos sacó del apuro una noche que llegamos tarde. El personal muy amable desde que llegamos.',
    tag: 'Viaje familiar',
  },
  {
    name: 'Ing. Ramón T.',
    origin: 'Durango, Dgo.',
    rating: 4,
    text: 'Hotel funcional y bien mantenido. El precio es justo para lo que ofrece. Lo que más me gustó fue la atención en recepción y que el estacionamiento es amplio para mi camioneta. Lo recomendaría sin dudar.',
    tag: 'Estancia de paso',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-gold-400 fill-gold-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">
            Opiniones de huéspedes
          </span>
          <h2 className="section-title mt-3">
            Lo que dicen quienes<br className="hidden sm:block" /> ya se quedaron con nosotros
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100 flex flex-col"
            >
              {/* Rating */}
              <Stars count={t.rating} />

              {/* Quote */}
              <p className="text-navy-700/80 text-sm leading-relaxed mt-4 flex-1 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between">
                <div>
                  <p className="text-navy-700 font-semibold text-sm">{t.name}</p>
                  <p className="text-navy-600/50 text-xs">{t.origin}</p>
                </div>
                <span className="text-xs bg-sand-600 text-navy-600/70 px-2 py-1 rounded-full font-medium">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 bg-navy-700 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['C', 'S', 'R'].map((l, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gold-400 border-2 border-navy-700 flex items-center justify-center text-navy-900 font-bold text-sm"
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-white text-sm">
              <span className="font-semibold text-gold-400">+200 huéspedes</span> ya confiaron en nosotros este año
            </p>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Star size={16} className="text-gold-400 fill-gold-400" />
            <span>4.6 / 5 promedio general</span>
          </div>
        </div>
      </div>
    </section>
  )
}
