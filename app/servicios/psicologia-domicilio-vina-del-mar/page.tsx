import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Brain } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Psicología a Domicilio en Viña del Mar | ÁGAPE - Terapia Psicológica en Casa',
  description: 'Atención psicológica profesional a domicilio en Viña del Mar y V Región. Psicólogos especializados en terapia individual, familiar, infantil y de pareja. Sesiones en la comodidad de tu hogar.',
  keywords: 'psicólogo domicilio Viña del Mar, psicología casa Valparaíso, terapia psicológica domicilio quinta región, psicólogo infantil domicilio Viña del Mar, terapia familiar casa, psicología clínica domicilio V región, apoyo emocional domicilio',
  openGraph: {
    title: 'Psicología a Domicilio Viña del Mar | Terapia Profesional en Casa',
    description: 'Atención psicológica profesional a domicilio en Viña del Mar. Psicólogos especializados en terapia individual, familiar e infantil. Apoyo emocional en tu hogar.',
    url: 'https://agape.cl/servicios/psicologia-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/psicologia-domicilio-vina-del-mar'
  }
}

export default function PsicologiaDomicilioPage() {
  const psychologyImage = getServiceImage('psicologia')

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
                  Psicología a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Atención psicológica profesional y personalizada en la comodidad de tu hogar. 
                  Psicólogos certificados especializados en terapia individual, familiar e infantil.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Brain className="mr-2 h-5 w-5" />
                      Agendar Sesión
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                    <Link href="tel:+56912345678">
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar Ahora
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src={psychologyImage.src}
                  alt="Psicología a domicilio en Viña del Mar - Terapia psicológica profesional en casa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades Psicológicas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Especialidades en Psicología Domiciliaria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos atención psicológica especializada a domicilio en Viña del Mar, Valparaíso y toda la V Región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Terapia Individual",
                  description: "Atención psicológica personalizada para adultos con ansiedad, depresión, estrés y otros trastornos emocionales",
                  benefits: ["Manejo de ansiedad", "Tratamiento depresión", "Control del estrés", "Autoestima y confianza"]
                },
                {
                  title: "Psicología Infantil",
                  description: "Especialistas en niños y adolescentes con problemas conductuales, emocionales y de aprendizaje",
                  benefits: ["Problemas conductuales", "Dificultades emocionales", "Apoyo escolar", "Desarrollo emocional"]
                },
                {
                  title: "Terapia Familiar",
                  description: "Intervención sistémica para mejorar la comunicación y resolver conflictos familiares",
                  benefits: ["Comunicación familiar", "Resolución conflictos", "Roles familiares", "Crisis familiares"]
                },
                {
                  title: "Terapia de Pareja",
                  description: "Acompañamiento profesional para parejas en crisis o que buscan fortalecer su relación",
                  benefits: ["Comunicación en pareja", "Resolución de conflictos", "Intimidad y confianza", "Proyectos en común"]
                },
                {
                  title: "Psicología Geriátrica",
                  description: "Atención especializada para adultos mayores con depresión, demencia y adaptación al envejecimiento",
                  benefits: ["Depresión en adultos mayores", "Apoyo en duelos", "Estimulación cognitiva", "Adaptación a cambios"]
                },
                {
                  title: "Intervención en Crisis",
                  description: "Apoyo psicológico urgente en situaciones de crisis emocional, duelos y traumas",
                  benefits: ["Apoyo en duelos", "Manejo de crisis", "Trauma psicológico", "Contención emocional"]
                }
              ].map((specialty, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{specialty.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{specialty.description}</p>
                    <ul className="space-y-2">
                      {specialty.benefits.map((benefit, i) => (
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

        {/* Por qué elegir psicología domicilio */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Ventajas de la Psicología a Domicilio
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  La terapia psicológica a domicilio ofrece un ambiente más cómodo y natural para el proceso terapéutico
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Ambiente Familiar",
                      description: "Sesiones en tu espacio personal, donde te sientes más cómodo y seguro"
                    },
                    {
                      title: "Mayor Privacidad",
                      description: "Total confidencialidad sin preocuparte por ser visto en consultas"
                    },
                    {
                      title: "Flexibilidad Horaria",
                      description: "Horarios que se adaptan a tu rutina laboral y familiar"
                    },
                    {
                      title: "Ideal para Niños",
                      description: "Los niños se sienten más cómodos en su ambiente conocido"
                    },
                    {
                      title: "Sin Desplazamientos",
                      description: "Evita el estrés del tráfico y ahorra tiempo de traslado"
                    },
                    {
                      title: "Terapia Familiar Real",
                      description: "Observación directa de dinámicas familiares en el hogar"
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
                <h3 className="text-2xl font-semibold mb-6 text-center">Motivos Frecuentes de Consulta</h3>
                <div className="space-y-3">
                  {[
                    "Ansiedad y ataques de pánico",
                    "Depresión y tristeza persistente",
                    "Estrés laboral y burnout",
                    "Problemas de autoestima",
                    "Dificultades en relaciones de pareja",
                    "Conflictos familiares",
                    "Duelos y pérdidas",
                    "Traumas y TEPT",
                    "Problemas conductuales en niños",
                    "Adaptación a cambios vitales",
                    "Trastornos del sueño",
                    "Fobias y miedos específicos"
                  ].map((reason, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Brain size={16} className="text-primary" />
                      <span className="text-gray-700">{reason}</span>
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
              Experiencias de Nuestros Pacientes en Viña del Mar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sofía Martínez",
                  location: "Viña del Mar Centro",
                  condition: "Terapia de ansiedad",
                  testimonial: "La psicóloga fue increíble. Me ayudó a manejar mi ansiedad sin tener que salir de casa. Muy profesional y empática.",
                  stars: 5
                },
                {
                  name: "Roberto Silva",
                  location: "Reñaca",
                  condition: "Terapia familiar",
                  testimonial: "Nos ayudó como familia a comunicarnos mejor. Las sesiones en casa fueron perfectas para que todos participáramos.",
                  stars: 5
                },
                {
                  name: "Carmen López",
                  location: "Valparaíso",
                  condition: "Psicología infantil",
                  testimonial: "Mi hijo de 8 años tenía problemas conductuales. La psicóloga fue muy paciente y los resultados han sido excelentes.",
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

        {/* Cobertura */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Atención Psicológica en Toda la V Región
              </h2>
              <p className="text-xl text-gray-600">
                Llevamos servicios de psicología profesional a domicilio a toda el área de Valparaíso
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                "Viña del Mar", "Valparaíso", "Villa Alemana", "Quilpué",
                "Limache", "Olmué", "Con Cón", "Reñaca",
                "Casablanca", "San Antonio", "Cartagena", "Quillota",
                "La Ligua", "Petorca", "Los Andes", "San Felipe"
              ].map((city, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-gray-700">{city}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contacto">
                  <MapPin className="mr-2 h-4 w-4" />
                  Consultar Disponibilidad
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Necesitas Apoyo Psicológico a Domicilio?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Agenda tu primera sesión y recibe atención psicológica profesional en la comodidad y privacidad de tu hogar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                <Link href="/reserva">
                  <Clock className="mr-2 h-5 w-5" />
                  Agendar Primera Sesión
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
                  +56 9 1234 5678
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-200">
              <p>✅ Primera consulta con evaluación completa</p>
              <p>✅ Psicólogos certificados y especializados</p>
              <p>✅ Total confidencialidad y privacidad</p>
              <p>✅ Reembolsable con Isapres y seguros</p>
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
              "name": "ÁGAPE - Psicología a Domicilio Viña del Mar",
              "description": "Atención psicológica profesional a domicilio en Viña del Mar y V Región. Especialistas en terapia individual, familiar, infantil y de pareja.",
              "url": "https://agape.cl/servicios/psicologia-domicilio-vina-del-mar",
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
                "Psicología Clínica",
                "Psicología Infantil", 
                "Terapia Familiar",
                "Terapia de Pareja"
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Isapre", "Fonasa"],
              "openingHours": "Mo-Su 08:00-20:00"
            })
          }}
        />
      </main>
    </>
  )
} 