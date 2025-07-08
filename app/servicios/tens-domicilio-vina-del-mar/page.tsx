import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'TENS a Domicilio en Viña del Mar | ÁGAPE - Técnico Enfermería Casa',
  description: 'TENS profesional a domicilio en Viña del Mar y V Región. Técnicos en Enfermería especializados en cuidados básicos, medicación y asistencia integral. Atención técnica en tu hogar.',
  keywords: 'TENS domicilio Viña del Mar, técnico enfermería casa Valparaíso, TENS domicilio quinta región, cuidados básicos casa Viña del Mar, asistencia técnica domicilio V región',
  openGraph: {
    title: 'TENS a Domicilio Viña del Mar | Técnico Enfermería en Casa',
    description: 'TENS profesional a domicilio en Viña del Mar. Técnicos en Enfermería especializados en cuidados básicos y asistencia integral.',
    url: 'https://agape.cl/servicios/tens-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/tens-domicilio-vina-del-mar'
  }
}

export default function TensDomicilioPage() {
  const tensImage = getServiceImage('tens')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  TENS a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Técnicos en Enfermería de Nivel Superior profesionales en tu hogar. 
                  TENS certificados especializados en cuidados básicos, medicación y asistencia integral.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Stethoscope className="mr-2 h-5 w-5" />
                      Solicitar TENS
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
                  src={tensImage.src}
                  alt="TENS a domicilio en Viña del Mar - Técnico en Enfermería profesional en casa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Servicios TENS Domiciliarios
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Técnicos en Enfermería especializados en Viña del Mar, Valparaíso y toda la V Región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cuidados Básicos",
                  description: "Asistencia en higiene personal, alimentación y movilización de pacientes",
                  benefits: ["Baño en cama", "Ayuda alimentación", "Cambio de posición", "Higiene bucal"]
                },
                {
                  title: "Administración Medicamentos",
                  description: "Control y administración de medicamentos según indicación médica",
                  benefits: ["Medicación oral", "Aplicación tópica", "Control horarios", "Registro medicamentos"]
                },
                {
                  title: "Control Signos Vitales",
                  description: "Monitoreo de presión arterial, temperatura y otros signos vitales",
                  benefits: ["Presión arterial", "Temperatura corporal", "Frecuencia cardíaca", "Registro controles"]
                },
                {
                  title: "Curaciones Simples",
                  description: "Cuidado de heridas menores y cambio de vendajes",
                  benefits: ["Limpieza heridas", "Cambio vendajes", "Aplicación antisépticos", "Seguimiento heridas"]
                },
                {
                  title: "Apoyo Actividades Diarias",
                  description: "Asistencia en actividades básicas de la vida diaria",
                  benefits: ["Vestimenta", "Traslados", "Ejercicios básicos", "Acompañamiento"]
                },
                {
                  title: "Educación Salud",
                  description: "Orientación en cuidados básicos y prevención de complicaciones",
                  benefits: ["Educación familiar", "Prevención caídas", "Cuidados piel", "Alimentación saludable"]
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                ¿Cuándo Necesitas un TENS a Domicilio?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pacientes Post-Operatorios",
                  description: "Cuidados después de cirugías que requieren atención básica",
                  icon: "🏥"
                },
                {
                  title: "Adultos Mayores",
                  description: "Asistencia en actividades diarias y control de medicamentos",
                  icon: "👵"
                },
                {
                  title: "Pacientes Crónicos",
                  description: "Apoyo continuo en enfermedades crónicas como diabetes o hipertensión",
                  icon: "💊"
                },
                {
                  title: "Recuperación en Casa",
                  description: "Alternativa a hospitalización para cuidados básicos",
                  icon: "🏠"
                },
                {
                  title: "Apoyo Familiar",
                  description: "Cuando la familia necesita asistencia profesional",
                  icon: "👨‍👩‍👧‍👦"
                },
                {
                  title: "Pacientes con Movilidad Reducida",
                  description: "Asistencia para personas con limitaciones físicas",
                  icon: "♿"
                }
              ].map((situation, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="text-4xl mb-2">{situation.icon}</div>
                    <CardTitle className="text-xl text-primary">{situation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{situation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Necesitas un TENS a Domicilio?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Solicita nuestros servicios de TENS profesional y recibe atención técnica especializada en tu hogar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                <Link href="/reserva">
                  <Clock className="mr-2 h-5 w-5" />
                  Solicitar TENS
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="https://wa.me/56912345678" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-200">
              <p>✅ TENS certificados y con experiencia</p>
              <p>✅ Horarios flexibles adaptados a tus necesidades</p>
              <p>✅ Equipos e insumos incluidos</p>
              <p>✅ Reembolsable con Isapres y seguros</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 