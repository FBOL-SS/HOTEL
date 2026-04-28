import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Rooms from '@/components/Rooms'
import DirectBook from '@/components/DirectBook'
import Services from '@/components/Services'
import Location from '@/components/Location'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Rooms />
        <DirectBook />
        <Services />
        <Location />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
