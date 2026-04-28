import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hotel San Ignacio Inn | Torreón, Coahuila',
  description: 'Hotel cómodo y bien ubicado en Torreón. Habitaciones, restaurante, alberca y estacionamiento. Reserva directo por WhatsApp y obtén atención personalizada.',
  keywords: 'hotel torreón, hotel carretera santa fe, hotel ignacio allende, hospedaje torreón, hotel viajeros negocios torreón',
  openGraph: {
    title: 'Hotel San Ignacio Inn | Torreón, Coahuila',
    description: 'Descansa cómodo en Torreón. Hotel con restaurante, alberca, WiFi y estacionamiento. Reserva directa por WhatsApp.',
    type: 'website',
    locale: 'es_MX',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1B3A5C',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
