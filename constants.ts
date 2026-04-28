export const HOTEL = {
  name: 'Hotel San Ignacio Inn',
  phone: '+52 871 268 1366',
  phoneRaw: '528712681366',
  address: 'Carretera Santa Fe, Roberto Fierro Km 75, Ignacio Allende, 27400 Torreón, Coah., México',
  city: 'Torreón, Coahuila',
}

export const WHATSAPP_MSG = encodeURIComponent(
  'Hola, quiero consultar disponibilidad para reservar en Hotel San Ignacio Inn'
)

export const WHATSAPP_URL = `https://wa.me/${HOTEL.phoneRaw}?text=${WHATSAPP_MSG}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Carretera+Santa+Fe+Roberto+Fierro+Km+75+Ignacio+Allende+Torreon+Coahuila+Mexico'

export const NAV_LINKS = [
  { label: 'Inicio',       href: '#inicio' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Servicios',    href: '#servicios' },
  { label: 'Ubicación',    href: '#ubicacion' },
]
