import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Heart } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Enfermería a Domicilio en Viña del Mar | ÁGAPE - Cuidados Enfermería Casa',
  description: 'Servicios de enfermería profesional a domicilio en Viña del Mar y V Región. Enfermeras certificadas para cuidados post-operatorios, heridas, medicación y atención integral. Cuidado en la comodidad de tu hogar.',
  keywords: 'enfermería domicilio Viña del Mar, enfermera casa Valparaíso, cuidados enfermería domicilio quinta región, post operatorio domicilio Viña del Mar, curaciones casa, medicación domicilio V región',
  openGraph: {
    title: 'Enfermería a Domicilio Viña del Mar | Cuidados Profesionales en Casa',
    description: 'Servicios de enfermería profesional a domicilio en Viña del Mar. Enfermeras certificadas para cuidados post-operatorios, heridas y atención integral.',
    url: 'https://agape.cl/servicios/enfermeria-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/enfermeria-domicilio-vina-del-mar'
  }
}

export default function EnfermeriaDomicilioPage() {
  const nursingImage = getServiceImage('enfermeria')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Enfermería a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Cuidados de enfermería profesional y personalizada en tu hogar. 
                  Enfermeras certificadas especializadas en post-operatorio, curaciones y cuidados integrales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Heart className="mr-2 h-5 w-5" />
                      Solicitar Servicio
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                    <Link href="tel:+56912345678">
                      <Phone className="mr-2 h-5 w-5" />
                      Urgencias 24/7
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src={nursingImage.src}
                  alt="Enfermería a domicilio en Viña del Mar - Cuidados profesionales en casa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Enfermería */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Servicios de Enfermería Domiciliaria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cuidados profesionales de enfermería a domicilio en Viña del Mar, Valparaíso y toda la V Región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cuidados Post-Operatorios",
                  description: "Atención especializada después de cirugías, control de heridas quirúrgicas y seguimiento post-operatorio",
                  benefits: ["Control de heridas", "Cambio de vendajes", "Administración medicamentos", "Monitoreo signos vitales"]
                },
                {
                  title: "Curaciones Avanzadas",
                  description: "Tratamiento profesional de heridas, úlceras y lesiones cutáneas con técnicas especializadas",
                  benefits: ["Úlceras por presión", "Heridas crónicas", "Pie diabético", "Lesiones traumáticas"]
                },
                {
                  title: "Administración de Medicamentos",
                  description: "Control y administración segura de medicamentos orales, inyectables y endovenosos",
                  benefits: ["Medicación oral", "Inyecciones", "Suero endovenoso", "Control de dosis"]
                },
                {
                  title: "Cuidados Paliativos",
                  description: "Atención integral para pacientes con enfermedades terminales, enfocada en confort y calidad de vida",
                  benefits: ["Control del dolor", "Confort del paciente", "Apoyo familiar", "Cuidados terminales"]
                },
                {
                  title: "Monitoreo Clínico",
                  description: "Control regular de signos vitales, glucemia, presión arterial y otros parámetros clínicos",
                  benefits: ["Presión arterial", "Glucemia", "Temperatura", "Saturación de oxígeno"]
                },
                {
                  title: "Cuidados Respiratorios",
                  description: "Atención especializada para pacientes con problemas respiratorios y ventilación asistida",
                  benefits: ["Aspiración secreciones", "Oxigenoterapia", "Nebulizaciones", "Traqueostomía"]
                }
              ].map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas enfermería domicilio */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Ventajas de la Enfermería a Domicilio
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Ambiente Familiar",
                      description: "Recuperación en el confort y tranquilidad de tu hogar"
                    },
                    {
                      title: "Atención Personalizada",
                      description: "Cuidados exclusivos adaptados a cada paciente"
                    },
                    {
                      title: "Reducción de Infecciones",
                      description: "Menor riesgo de infecciones hospitalarias"
                    },
                    {
                      title: "Participación Familiar",
                      description: "Familia involucrada en el proceso de recuperación"
                    },
                    {
                      title: "Ahorro de Costos",
                      description: "Más económico que hospitalización prolongada"
                    },
                    {
                      title: "Disponibilidad 24/7",
                      description: "Servicio disponible las 24 horas del día"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">Casos que Atendemos</h3>
                <div className="space-y-3">
                  {[
                    "Post-operatorio cirugía general",
                    "Recuperación cirugía ortopédica",
                    "Cuidados oncológicos",
                    "Heridas complejas",
                    "Diabetes descompensada",
                    "Hipertensión arterial",
                    "Insuficiencia cardíaca",
                    "Enfermedad renal crónica",
                    "Pacientes geriátricos",
                    "Cuidados paliativos",
                    "Rehabilitación post-ACV",
                    "Ventilación asistida"
                  ].map((condition, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Heart size={16} className="text-primary" />
                      <span className="text-gray-700">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Testimonios de Familias en Viña del Mar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sandra Morales",
                  location: "Viña del Mar",
                  condition: "Post-operatorio vesícula",
                  testimonial: "La enfermera fue excepcional. Cuidó muy bien mis heridas y me ayudó con la medicación. Muy profesional y cariñosa.",
                  stars: 5
                },
                {
                  name: "Luis Contreras",
                  location: "Valparaíso",
                  condition: "Diabetes descompensada",
                  testimonial: "Excelente servicio. La enfermera me controlaba la glucemia diariamente y me enseñó a cuidarme mejor. Muy recomendable.",
                  stars: 5
                },
                {
                  name: "María Sánchez",
                  location: "Villa Alemana",
                  condition: "Cuidados paliativos",
                  testimonial: "En el proceso final de mi padre, la enfermera fue un ángel. Muy humana y profesional. Nos acompañó en todo momento.",
                  stars: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.condition}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Necesitas Cuidados de Enfermería a Domicilio?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Solicita nuestros servicios de enfermería profesional y recibe atención de calidad en la comodidad de tu hogar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                <Link href="/reserva">
                  <Clock className="mr-2 h-5 w-5" />
                  Solicitar Servicio
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="https://wa.me/56912345678" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="tel:+56912345678">
                  <Phone className="mr-2 h-5 w-5" />
                  Urgencias 24/7
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-200">
              <p>✅ Enfermeras certificadas y especializadas</p>
              <p>✅ Disponible 24 horas, 7 días a la semana</p>
              <p>✅ Reembolsable con Isapres y seguros</p>
              <p>✅ Equipos médicos incluidos</p>
            </div>
          </div>
        </section>

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "ÁGAPE - Enfermería a Domicilio Viña del Mar",
              "description": "Servicios de enfermería profesional a domicilio en Viña del Mar y V Región. Especialistas en cuidados post-operatorios, curaciones y atención integral.",
              "url": "https://agape.cl/servicios/enfermeria-domicilio-vina-del-mar",
              "telephone": "+56912345678",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Viña del Mar",
                "addressRegion": "Valparaíso",
                "addressCountry": "CL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.0472,
                "longitude": -71.6127
              },
              "areaServed": [
                "Viña del Mar", "Valparaíso", "Villa Alemana", "Quilpué", "V Región"
              ],
              "medicalSpecialty": [
                "Enfermería Domiciliaria",
                "Cuidados Post-Operatorios", 
                "Curaciones Avanzadas",
                "Cuidados Paliativos"
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Isapre", "Fonasa"],
              "openingHours": "Mo-Su 00:00-24:00"
            })
          }}
        />
      </main>
    </>
  )
} 