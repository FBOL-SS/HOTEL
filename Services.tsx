const services = [
  { icon: '🍳', name: 'Restaurante', desc: 'Desayunos y cenas en el hotel' },
  { icon: '🏊', name: 'Alberca', desc: 'Disponible para huéspedes' },
  { icon: '📶', name: 'WiFi Gratis', desc: 'Alta velocidad en todo el hotel' },
  { icon: '🅿️', name: 'Estacionamiento', desc: 'Amplio y sin costo' },
  { icon: '🕐', name: 'Recepción', desc: 'Atención todos los días' },
  { icon: '📄', name: 'Facturación', desc: 'Factura fiscal disponible' },
  { icon: '❄️', name: 'Clima en habitaciones', desc: 'A/C en todos los cuartos' },
  { icon: '💼', name: 'Viajeros de negocios', desc: 'Área de trabajo y conectividad' },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">
            Lo que incluye tu estancia
          </span>
          <h2 className="section-title mt-3">
            Servicios del hotel
          </h2>
          <p className="text-navy-600/70 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Todo pensado para que tu estadía sea lo más cómoda y sin complicaciones posible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-200 border border-sand-100 group hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-navy-700 font-semibold text-sm mb-1 group-hover:text-gold-500 transition-colors">
                {s.name}
              </h3>
              <p className="text-navy-600/60 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
