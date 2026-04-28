import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-full shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label="Reservar por WhatsApp"
    >
      {/* Mobile: icon only */}
      <span className="sm:hidden w-14 h-14 flex items-center justify-center">
        <MessageCircle size={28} />
      </span>
      {/* Desktop: icon + text */}
      <span className="hidden sm:flex items-center gap-2 px-5 py-3.5">
        <MessageCircle size={22} />
        <span>Reservar por WhatsApp</span>
      </span>
    </a>
  )
}
