import { MessageCircle, Check } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const rooms = [
  {
    type: 'Habitación Sencilla',
    ideal: 'Ideal para viajero solo',
    desc: 'Habitación cómoda y funcional, perfecta para descanso en estancias cortas o de paso.',
    amenities: ['Cama matrimonial o doble', 'Aire acondicionado', 'TV con cable', 'Baño privado', 'WiFi incluido', 'Escritorio de trabajo'],
    color: 'from-navy-600 to-navy-700',
    tag: null,
  },
  {
    type: 'Habitación Doble',
    ideal: 'Ideal para pareja o compañeros de trabajo',
    desc: 'Amplia habitación con dos camas, pensada para quienes viajan en pareja o comparten habitación.',
    amenities: ['Dos camas individuales', 'Aire acondicionado', 'TV con cable', 'Baño privado completo', 'WiFi de alta velocidad', 'Área de descanso'],
    color: 'from-gold-500 to-gold-400',
    tag: 'Más solicitada',
  },
  {
    type: 'Habitación Familiar',
    ideal: 'Ideal para familia o grupo',
    desc: 'Habitación más amplia con capacidad para toda la familia, sin sacrificar comodidad ni privacidad.',
    amenities: ['Cama king + camas adicionales', 'Aire acondicionado', 'TV con cable', 'Baño privado completo', 'WiFi incluido', 'Mayor espacio y almacenamiento'],
    color: 'from-navy-800 to-navy-900',
    tag: null,
  },
]

export default function Rooms() {
  return (
    <section id="habitaciones" className="py-20 bg-navy-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Habitaciones
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-3 leading-tight">
            Elige tu habitación ideal
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Todas las habitaciones incluyen los mismos servicios base. Consulta disponibilidad por WhatsApp y te confirmamos en minutos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.type}
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col"
            >
              {/* Tag */}
              {room.tag && (
                <div className="absolute top-4 right-4 bg-gold-400 text-navy-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                  {room.tag}
                </div>
              )}

              {/* Color header */}
              <div className={`bg-gradient-to-br ${room.color} px-6 pt-8 pb-6`}>
                <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">
                  {room.ideal}
                </p>
                <h3 className="text-white font-display text-2xl font-bold">{room.type}</h3>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-navy-600/80 text-sm leading-relaxed mb-5">{room.desc}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {room.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-navy-700">
                      <Check size={15} className="text-gold-500 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center w-full"
                >
                  <MessageCircle size={17} />
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-8">
          * Los precios varían según temporada y disponibilidad. Consulta directamente por WhatsApp.
        </p>
      </div>
    </section>
  )
}
