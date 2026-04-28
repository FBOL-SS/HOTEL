const benefits = [
  {
    icon: '🛏️',
    title: 'Habitaciones cómodas',
    desc: 'Camas de calidad, A/C, TV y todo lo que necesitas para descansar bien después de un largo viaje.',
  },
  {
    icon: '🍽️',
    title: 'Restaurante',
    desc: 'Desayuna o cena sin salir del hotel. Menú variado con opciones para todos los gustos.',
  },
  {
    icon: '🏊',
    title: 'Alberca',
    desc: 'Relájate y refréscat en nuestra alberca, ideal para descansar en tu tiempo libre.',
  },
  {
    icon: '📶',
    title: 'WiFi de alta velocidad',
    desc: 'Conexión estable en todo el hotel, perfecta para viajeros de negocios que necesitan trabajar.',
  },
  {
    icon: '🅿️',
    title: 'Estacionamiento',
    desc: 'Amplio estacionamiento gratuito y vigilado para tu vehículo. Sin costos ocultos.',
  },
  {
    icon: '📍',
    title: 'Ubicación práctica',
    desc: 'Sobre Carretera Santa Fe, con acceso directo a las principales vías de Torreón.',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">
            Por qué elegirnos
          </span>
          <h2 className="section-title mt-3">
            Todo lo que necesitas,<br className="hidden sm:block" /> en un solo lugar
          </h2>
          <p className="text-navy-600/70 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Diseñado para viajeros que valoran la comodidad, el descanso y la practicidad sin complicaciones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-sand-100 group hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-navy-700 font-semibold text-lg mb-2 group-hover:text-gold-500 transition-colors">
                {b.title}
              </h3>
              <p className="text-navy-600/70 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
