import type { Metadata } from 'next'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contacto - ÁGAPE',
  description: 'Contáctanos para más información sobre nuestros servicios de salud domiciliarios.',
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-primary mb-4 text-center">
          Contacto
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-8">
          {COMPANY_INFO.slogan}
        </p>
        
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Estamos aquí para ayudarte. Contacta con nosotros y descubre cómo podemos 
          brindarte la mejor atención médica en la comodidad de tu hogar.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-primary mb-6">
              Información de Contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Teléfono</p>
                  <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-secondary rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ubicación</p>
                  <p className="text-gray-600">{COMPANY_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">WhatsApp</p>
                  <p className="text-gray-600">+{COMPANY_INFO.whatsapp}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <a 
                  href={COMPANY_INFO.social.facebook}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </a>
                <a 
                  href={COMPANY_INFO.social.instagram}
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-5 h-5 bg-accent rounded-full"></div>
                </a>
                <a 
                  href={COMPANY_INFO.social.linkedin}
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-5 h-5 bg-secondary rounded-full"></div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-primary mb-6">
              Envíanos un Mensaje
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="psicologia">Psicología</option>
                  <option value="kinesiologia">Kinesiología</option>
                  <option value="nutricion">Nutrición</option>
                  <option value="terapia-ocupacional">Terapia Ocupacional</option>
                  <option value="tens">TENS</option>
                  <option value="cuidadora">Cuidadora</option>
                  <option value="enfermeria">Enfermería</option>
                  <option value="fonoaudiologia">Fonoaudiología</option>
                  <option value="psicopedagogia">Psicopedagogía</option>
                  <option value="podologia">Podología</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="bg-cream p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  * Campos obligatorios. Nos pondremos en contacto contigo dentro de las próximas 24 horas.
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors font-medium"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cream to-secondary/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-display font-semibold text-primary mb-4">
            Atención de Emergencia
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Para situaciones de emergencia médica, contáctanos inmediatamente a través de WhatsApp 
            o llámanos directamente. Nuestro equipo está preparado para responder rápidamente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-accent text-white px-8 py-3 rounded-md hover:bg-accent-dark transition-colors font-medium">
              WhatsApp Emergencia
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/5 transition-colors font-medium">
              Llamar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 