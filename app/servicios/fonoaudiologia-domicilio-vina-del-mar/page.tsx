import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Mic } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Fonoaudiología a Domicilio en Viña del Mar | ÁGAPE - Terapia del Habla Casa',
  description: 'Fonoaudiología profesional a domicilio en Viña del Mar y V Región. Fonoaudiólogos especializados en terapia del habla, lenguaje, deglución y audición. Tratamiento en la comodidad de tu hogar.',
  keywords: 'fonoaudiología domicilio Viña del Mar, fonoaudiólogo casa Valparaíso, terapia habla domicilio quinta región, terapia lenguaje casa Viña del Mar, deglución domicilio V región',
  openGraph: {
    title: 'Fonoaudiología a Domicilio Viña del Mar | Terapia del Habla en Casa',
    description: 'Fonoaudiología profesional a domicilio en Viña del Mar. Fonoaudiólogos especializados en terapia del habla, lenguaje y deglución.',
    url: 'https://agape.cl/servicios/fonoaudiologia-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/fonoaudiologia-domicilio-vina-del-mar'
  }
}

export default function FonoaudiologiaDomicilioPage() {
  const speechTherapyImage = getServiceImage('fonoaudiologia')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Fonoaudiología a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Terapia del habla y lenguaje profesional en la comodidad de tu hogar. 
                  Fonoaudiólogos certificados especializados en trastornos del habla, deglución y audición.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Mic className="mr-2 h-5 w-5" />
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
                  src={speechTherapyImage.src}
                  alt="Fonoaudiología a domicilio en Viña del Mar - Terapia del habla profesional en casa"
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
                Especialidades en Fonoaudiología Domiciliaria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Terapia del habla y lenguaje especializada en Viña del Mar, Valparaíso y toda la V Región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Terapia del Habla",
                  description: "Tratamiento de trastornos de articulación, pronunciación y fluidez del habla",
                  benefits: ["Corrección pronunciación", "Tratamiento tartamudez", "Articulación fonemas", "Fluidez verbal"]
                },
                {
                  title: "Terapia del Lenguaje",
                  description: "Desarrollo y rehabilitación del lenguaje expresivo y comprensivo en niños y adultos",
                  benefits: ["Desarrollo vocabulario", "Comprensión auditiva", "Expresión oral", "Narrativa"]
                },
                {
                  title: "Trastornos de Deglución",
                  description: "Evaluación y tratamiento de dificultades para tragar en todas las edades",
                  benefits: ["Disfagia adultos", "Problemas deglución", "Alimentación segura", "Técnicas deglutorias"]
                },
                {
                  title: "Audiología",
                  description: "Evaluación auditiva y rehabilitación de pérdidas auditivas",
                  benefits: ["Evaluación audición", "Adaptación audífonos", "Rehabilitación auditiva", "Tinnitus"]
                },
                {
                  title: "Trastornos de Voz",
                  description: "Tratamiento de alteraciones vocales en profesionales de la voz y población general",
                  benefits: ["Rehabilitación vocal", "Higiene vocal", "Voz profesional", "Disfonías"]
                },
                {
                  title: "Estimulación Temprana",
                  description: "Desarrollo de habilidades comunicativas en bebés y niños pequeños",
                  benefits: ["Desarrollo comunicación", "Estimulación auditiva", "Juego comunicativo", "Interacción social"]
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
              ¿Necesitas Fonoaudiología a Domicilio?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Agenda una evaluación fonoaudiológica y recibe terapia del habla profesional en tu hogar
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