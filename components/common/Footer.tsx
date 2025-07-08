import React from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Heart,
  Clock,
  MessageCircle
} from 'lucide-react'
import Logo from './Logo'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'
import { Button } from '@/components/ui/button'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Reserva tu Cita', href: '/reserva' },
    { name: 'Trabaja con Nosotros', href: '/trabaja-con-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const popularServices = SERVICES.slice(0, 6)

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo showSlogan size="md" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Llevamos salud y cuidado profesional a tu hogar, con un enfoque integral 
              que combina excelencia médica y calidez humana.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-gray-900">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <Heart size={12} className="text-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-gray-900">
              Servicios Populares
            </h3>
            <ul className="space-y-2">
              {popularServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios#${service.id}`}
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-gray-900">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Phone size={16} className="text-primary" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Mail size={16} className="text-primary" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin size={16} className="text-primary" />
                {COMPANY_INFO.address}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock size={16} className="text-primary" />
                Lun - Vie: 8:00 - 20:00
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <Button
              className="mt-4 gap-2 bg-green-600 hover:bg-green-700"
              asChild
            >
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear} ÁGAPE. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                href="/politica-privacidad" 
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
              <Link 
                href="/terminos-condiciones" 
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button - Optional */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors duration-200 z-40"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={24} className="text-white" />
        </a>
      </div>
    </footer>
  )
}

export default Footer 