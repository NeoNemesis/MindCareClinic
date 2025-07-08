'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'
import { COMPANY_INFO } from '@/lib/constants'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Trabaja con Nosotros', href: '/trabaja-con-nosotros' },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo size="sm" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    pathname === item.href 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-gray-700'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                asChild
              >
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  aria-label="Llamar por teléfono"
                >
                  <Phone size={16} />
                  <span className="hidden xl:inline">Llámanos</span>
                </a>
              </Button>
              <Button
                size="sm"
                className="gap-2 bg-primary hover:bg-primary-dark"
                asChild
              >
                <Link href="/reserva">
                  <Calendar size={16} />
                  Reservar Cita
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={handleMobileMenuToggle}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 pb-2 border-t border-gray-200 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 justify-center"
                asChild
              >
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone size={16} />
                  Llamar Ahora
                </a>
              </Button>
              <Button
                size="sm"
                className="w-full gap-2 justify-center bg-primary hover:bg-primary-dark"
                asChild
              >
                <Link href="/reserva" onClick={() => setIsOpen(false)}>
                  <Calendar size={16} />
                  Reservar Cita
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 