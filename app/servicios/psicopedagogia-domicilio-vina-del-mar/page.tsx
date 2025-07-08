import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Psicopedagogía a Domicilio en Viña del Mar | ÁGAPE - Apoyo Escolar Casa',
  description: 'Psicopedagogía profesional a domicilio en Viña del Mar y V Región. Psicopedagogos especializados en dificultades aprendizaje, apoyo escolar y refuerzo educativo. Atención personalizada en casa.',
  keywords: 'psicopedagogía domicilio Viña del Mar, psicopedagogo casa Valparaíso, apoyo escolar domicilio quinta región, dificultades aprendizaje casa Viña del Mar, refuerzo educativo domicilio V región',
  openGraph: {
    title: 'Psicopedagogía a Domicilio Viña del Mar | Apoyo Escolar Casa',
    description: 'Psicopedagogía profesional a domicilio en Viña del Mar. Psicopedagogos especializados en dificultades de aprendizaje y apoyo escolar.',
    url: 'https://agape.cl/servicios/psicopedagogia-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/psicopedagogia-domicilio-vina-del-mar'
  }
}

export default function PsicopedagogiaDomicilioPage() {
  const psychopedagogyImage = getServiceImage('psicopedagogia')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Psicopedagogía a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Apoyo educativo profesional en la comodidad de tu hogar. 
                  Psicopedagogos especializados en dificultades de aprendizaje y refuerzo escolar personalizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <BookOpen className="mr-2 h-5 w-5" />
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
                  src={psychopedagogyImage.src}
                  alt="Psicopedagogía a domicilio en Viña del Mar"
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
                Especialidades en Psicopedagogía Domiciliaria
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Dificultades de Aprendizaje",
                  description: "Evaluación y tratamiento de dislexia, discalculia y otros trastornos del aprendizaje",
                  benefits: ["Evaluación diagnóstica", "Intervención especializada", "Estrategias compensatorias", "Apoyo familiar"]
                },
                {
                  title: "Refuerzo Escolar",
                  description: "Apoyo académico personalizado para mejorar el rendimiento escolar",
                  benefits: ["Técnicas de estudio", "Organización escolar", "Hábitos de estudio", "Motivación académica"]
                },
                {
                  title: "Déficit Atencional",
                  description: "Intervención especializada para niños con TDAH y problemas atencionales",
                  benefits: ["Entrenamiento atencional", "Control de impulsos", "Estrategias cognitivas", "Apoyo conductual"]
                },
                {
                  title: "Preparación PSU/PAES",
                  description: "Entrenamiento específico para pruebas de acceso a la universidad",
                  benefits: ["Técnicas de estudio", "Manejo de ansiedad", "Estrategias de examen", "Planificación"]
                },
                {
                  title: "Apoyo Emocional Escolar",
                  description: "Acompañamiento en dificultades emocionales relacionadas con el ámbito educativo",
                  benefits: ["Autoestima académica", "Ansiedad escolar", "Motivación", "Relaciones sociales"]
                },
                {
                  title: "Orientación Vocacional",
                  description: "Apoyo en la elección de carrera y proyecto de vida",
                  benefits: ["Exploración vocacional", "Autoconocimiento", "Información carreras", "Toma de decisiones"]
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
              ¿Tu Hijo Necesita Apoyo Psicopedagógico?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Agenda una evaluación y recibe apoyo psicopedagógico profesional en la comodidad de tu hogar
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