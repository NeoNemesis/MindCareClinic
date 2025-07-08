import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Footprints } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Podología a Domicilio en Viña del Mar | ÁGAPE - Cuidado Pies Casa',
  description: 'Podología profesional a domicilio en Viña del Mar y V Región. Podólogos especializados en cuidado de pies, uñas encarnadas, pie diabético y tratamientos podológicos. Atención especializada en casa.',
  keywords: 'podología domicilio Viña del Mar, podólogo casa Valparaíso, cuidado pies domicilio quinta región, uñas encarnadas casa Viña del Mar, pie diabético domicilio V región',
  openGraph: {
    title: 'Podología a Domicilio Viña del Mar | Cuidado Pies Casa',
    description: 'Podología profesional a domicilio en Viña del Mar. Podólogos especializados en cuidado de pies y tratamientos podológicos.',
    url: 'https://agape.cl/servicios/podologia-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/podologia-domicilio-vina-del-mar'
  }
}

export default function PodologiaDomicilioPage() {
  const podiatryImage = getServiceImage('podologia')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Podología a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Cuidado profesional de pies en la comodidad de tu hogar. 
                  Podólogos especializados en tratamientos podológicos, pie diabético y cuidado integral de pies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Footprints className="mr-2 h-5 w-5" />
                      Agendar Consulta
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
                  src={podiatryImage.src}
                  alt="Podología a domicilio en Viña del Mar"
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
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Tratamientos Podológicos Domiciliarios
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pie Diabético",
                  description: "Cuidado especializado para pacientes diabéticos con riesgo de úlceras y complicaciones",
                  benefits: ["Evaluación vascular", "Cuidado preventivo", "Tratamiento úlceras", "Educación cuidados"]
                },
                {
                  title: "Uñas Encarnadas",
                  description: "Tratamiento de uñas encarnadas con técnicas especializadas",
                  benefits: ["Tratamiento conservador", "Cirugía menor", "Prevención recidivas", "Cuidado post-tratamiento"]
                },
                {
                  title: "Callosidades y Durezas",
                  description: "Eliminación de callos, durezas y hiperqueratosis",
                  benefits: ["Eliminación callos", "Tratamiento durezas", "Prevención lesiones", "Cuidado preventivo"]
                },
                {
                  title: "Cuidado Geriátrico",
                  description: "Atención podológica especializada para adultos mayores",
                  benefits: ["Corte de uñas", "Hidratación pies", "Prevención lesiones", "Evaluación circulación"]
                },
                {
                  title: "Hongos y Micosis",
                  description: "Tratamiento de infecciones fúngicas en pies y uñas",
                  benefits: ["Diagnóstico micosis", "Tratamiento antifúngico", "Prevención contagio", "Seguimiento"]
                },
                {
                  title: "Plantillas y Ortesis",
                  description: "Confección de plantillas ortopédicas personalizadas",
                  benefits: ["Estudio biomecánico", "Plantillas a medida", "Corrección postural", "Alivio dolor"]
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

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Necesitas Cuidado Podológico a Domicilio?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Agenda una consulta podológica y recibe cuidado especializado de pies en la comodidad de tu hogar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                <Link href="/reserva">
                  <Clock className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="https://wa.me/56912345678" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 