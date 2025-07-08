import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Wrench } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Terapia Ocupacional a Domicilio en Viña del Mar | ÁGAPE - Rehabilitación Funcional Casa',
  description: 'Terapia ocupacional profesional a domicilio en Viña del Mar y V Región. Terapeutas ocupacionales especializados en rehabilitación funcional, adaptación hogar y actividades vida diaria.',
  keywords: 'terapia ocupacional domicilio Viña del Mar, terapeuta ocupacional casa Valparaíso, rehabilitación funcional domicilio quinta región, adaptación hogar Viña del Mar, actividades vida diaria casa V región',
  openGraph: {
    title: 'Terapia Ocupacional a Domicilio Viña del Mar | Rehabilitación Funcional Casa',
    description: 'Terapia ocupacional profesional a domicilio en Viña del Mar. Terapeutas ocupacionales especializados en rehabilitación funcional.',
    url: 'https://agape.cl/servicios/terapia-ocupacional-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/terapia-ocupacional-domicilio-vina-del-mar'
  }
}

export default function TerapiaOcupacionalDomicilioPage() {
  const otImage = getServiceImage('terapia-ocupacional')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Terapia Ocupacional a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Rehabilitación funcional profesional en la comodidad de tu hogar. 
                  Terapeutas ocupacionales especializados en actividades de la vida diaria y adaptación del hogar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Wrench className="mr-2 h-5 w-5" />
                      Agendar Evaluación
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
                  src={otImage.src}
                  alt="Terapia ocupacional a domicilio en Viña del Mar"
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
                Especialidades en Terapia Ocupacional Domiciliaria
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Rehabilitación Neurológica",
                  description: "Recuperación funcional después de ACV, traumatismos y enfermedades neurológicas",
                  benefits: ["Recuperación motora", "Coordinación", "Equilibrio", "Funcionalidad"]
                },
                {
                  title: "Rehabilitación Pediátrica",
                  description: "Desarrollo de habilidades en niños con necesidades especiales",
                  benefits: ["Desarrollo motor", "Integración sensorial", "Habilidades cognitivas", "Juego terapéutico"]
                },
                {
                  title: "Adaptación del Hogar",
                  description: "Modificaciones del entorno para mejorar la independencia",
                  benefits: ["Evaluación hogar", "Adaptaciones", "Productos de apoyo", "Seguridad"]
                },
                {
                  title: "Rehabilitación Geriátrica",
                  description: "Mantención de independencia en adultos mayores",
                  benefits: ["Actividades diarias", "Prevención caídas", "Memoria", "Autonomía"]
                },
                {
                  title: "Rehabilitación Ortopédica",
                  description: "Recuperación funcional después de lesiones musculoesqueléticas",
                  benefits: ["Movilidad articular", "Fuerza muscular", "Destreza manual", "Funcionalidad"]
                },
                {
                  title: "Salud Mental",
                  description: "Apoyo en trastornos de salud mental y adicciones",
                  benefits: ["Rutinas saludables", "Habilidades sociales", "Manejo estrés", "Reinserción"]
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
              ¿Necesitas Terapia Ocupacional a Domicilio?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Agenda una evaluación y recibe terapia ocupacional profesional en la comodidad de tu hogar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                <Link href="/reserva">
                  <Clock className="mr-2 h-5 w-5" />
                  Agendar Evaluación
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