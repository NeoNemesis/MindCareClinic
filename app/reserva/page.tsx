import type { Metadata } from 'next'
import { SERVICES, COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Reserva tu Cita - ÁGAPE',
  description: 'Reserva tu cita para recibir atención médica domiciliaria personalizada en Chile.',
}

export default function ReservaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-primary mb-4 text-center">
          Reserva tu Cita
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-8">
          {COMPANY_INFO.slogan}
        </p>
        
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Programa tu atención médica domiciliaria de forma rápida y sencilla. 
          Nuestros profesionales se desplazarán hasta tu hogar para brindarte el mejor cuidado.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Atención Rápida</h3>
            <p className="text-sm text-gray-600">Confirmamos tu cita en menos de 24 horas</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-secondary rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Profesionales Certificados</h3>
            <p className="text-sm text-gray-600">Todos nuestros especialistas están certificados</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-accent rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Comodidad Total</h3>
            <p className="text-sm text-gray-600">Recibe atención en la comodidad de tu hogar</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
          <h2 className="text-2xl font-display font-semibold text-primary mb-6 text-center">
            Formulario de Reserva
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Tu nombre completo"
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
                  className="form-input"
                  placeholder="tu@email.com"
                />
              </div>
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
                className="form-input"
                placeholder="+56 9 XXXX XXXX"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Servicio requerido *
              </label>
              <select
                id="service"
                name="service"
                required
                className="form-input"
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Dirección completa *
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                className="form-input"
                placeholder="Calle, número, comuna, región..."
              ></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha preferida *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Hora preferida *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  className="form-input"
                >
                  <option value="">Selecciona una hora</option>
                  <option value="08:00">08:00 AM</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Información adicional
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                className="form-input"
                placeholder="Comparte cualquier información importante sobre tu condición médica, medicamentos actuales, o requerimientos especiales..."
              ></textarea>
            </div>
            
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-3">Información importante:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Confirmaremos tu cita dentro de las próximas 24 horas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>El profesional llegará con todos los implementos necesarios</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Puedes cancelar o reagendar con 24 horas de anticipación</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Trabajamos con las principales isapres y fonasa</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Reservar Cita
              </button>
              <button
                type="button"
                className="flex-1 border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary/5 transition-colors font-medium"
              >
                Consultar por WhatsApp
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-display font-semibold text-primary mb-4">
            ¿Necesitas ayuda para reservar?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está disponible para ayudarte con cualquier duda sobre nuestros servicios 
            o para asistirte en el proceso de reserva.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors font-medium"
            >
              Llamar ahora
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 