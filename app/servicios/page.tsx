'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import ServiceCard from '@/components/services/ServiceCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SERVICES } from '@/lib/constants'
import { Search, Filter, Calendar, Phone } from 'lucide-react'
import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'Servicios',
//   description: 'Conoce todos nuestros servicios de salud domiciliarios: psicología, kinesiología, enfermería, nutrición y más.',
// }

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categories = [
    { id: 'todos', name: 'Todos los servicios' },
    { id: 'terapias', name: 'Terapias', services: ['psicologia', 'terapia-ocupacional', 'fonoaudiologia', 'psicopedagogia'] },
    { id: 'salud-fisica', name: 'Salud Física', services: ['kinesiologia', 'tens', 'podologia'] },
    { id: 'cuidados', name: 'Cuidados', services: ['enfermeria', 'cuidadora'] },
    { id: 'bienestar', name: 'Bienestar', services: ['nutricion'] }
  ]

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (selectedCategory === 'todos') {
      return matchesSearch
    }

    const category = categories.find(cat => cat.id === selectedCategory)
    return matchesSearch && category?.services?.includes(service.id)
  })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-gradient">Servicios</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ofrecemos una amplia gama de servicios de salud domiciliarios, 
              diseñados para brindar atención integral y personalizada en la 
              comodidad de tu hogar.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Buscar servicios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-6 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter size={20} className="text-gray-500 flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex-shrink-0"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          {filteredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <ServiceCard service={service} variant="default" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                No se encontraron servicios que coincidan con tu búsqueda.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('todos')
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para recibir atención en casa?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Nuestro equipo está preparado para brindarte el mejor cuidado. 
            Agenda tu primera consulta y comienza tu camino hacia el bienestar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <Link href="/reserva">
                <Calendar size={20} />
                Agendar Cita
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contacto">
                <Phone size={20} />
                Consultar
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Información Importante
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Cobertura</h3>
                <p className="text-gray-600 mb-4">
                  Nuestros servicios están disponibles en toda la Región Metropolitana 
                  de Santiago. Consulta por disponibilidad en tu comuna.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Horarios</h3>
                <p className="text-gray-600 mb-4">
                  Atención de lunes a viernes de 8:00 a 20:00 hrs. 
                  Servicio de urgencias disponible 24/7 para pacientes regulares.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Formas de Pago</h3>
                <p className="text-gray-600 mb-4">
                  Aceptamos efectivo, transferencia bancaria, tarjetas de crédito/débito 
                  y convenios con isapres y seguros de salud.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Primera Visita</h3>
                <p className="text-gray-600 mb-4">
                  Incluye evaluación inicial completa, plan de tratamiento personalizado 
                  y coordinación con médico tratante si es necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 