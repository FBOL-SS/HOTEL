'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-700 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="text-gold-400 font-display text-lg sm:text-xl font-bold tracking-wide">
            Hotel San Ignacio Inn
          </span>
          <span className="text-white/60 text-xs tracking-widest uppercase">
            Torreón, Coahuila
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow hover:shadow-lg hover:-translate-y-0.5"
        >
          <MessageCircle size={16} />
          Reservar por WhatsApp
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-white/10 mt-2">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-gold-400 py-3 text-base font-medium border-b border-white/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn-whatsapp justify-center"
            >
              <MessageCircle size={18} />
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
