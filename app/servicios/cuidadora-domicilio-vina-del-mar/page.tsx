import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Heart } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Cuidadora a Domicilio en Viña del Mar | ÁGAPE - Cuidado Adulto Mayor Casa',
  description: 'Servicio de cuidadoras profesionales a domicilio en Viña del Mar y V Región. Cuidado especializado para adultos mayores, pacientes postrados y personas con discapacidad. Acompañamiento 24/7 en tu hogar.',
  keywords: 'cuidadora domicilio Viña del Mar, cuidado adulto mayor casa Valparaíso, cuidadora adulto mayor domicilio quinta región, acompañante adulto mayor Viña del Mar, cuidados geriátricos casa V región',
  openGraph: {
    title: 'Cuidadora a Domicilio Viña del Mar | Cuidado Adulto Mayor en Casa',
    description: 'Servicio de cuidadoras profesionales a domicilio en Viña del Mar. Cuidado especializado para adultos mayores y acompañamiento integral.',
    url: 'https://agape.cl/servicios/cuidadora-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/cuidadora-domicilio-vina-del-mar'
  }
}

export default function CuidadoraDomicilioPage() {
  const caregiverImage = getServiceImage('cuidadora')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Cuidadora a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Cuidado profesional y amoroso para adultos mayores en la comodidad de su hogar. 
                  Cuidadoras certificadas con experiencia en cuidados geriátricos y acompañamiento integral.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Heart className="mr-2 h-5 w-5" />
                      Solicitar Cuidadora
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
                  src={caregiverImage.src}
                  alt="Cuidadora a domicilio en Viña del Mar - Cuidado adulto mayor en casa"
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
                Servicios de Cuidadora Domiciliaria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cuidado integral y personalizado para adultos mayores en Viña del Mar, Valparaíso y toda la V Región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cuidados Básicos Diarios",
                  description: "Asistencia en actividades de la vida diaria como higiene personal, vestimenta y alimentación",
                  benefits: ["Higiene personal", "Ayuda para vestirse", "Asistencia alimentaria", "Movilización básica"]
                },
                {
                  title: "Acompañamiento Integral",
                  description: "Compañía constante y apoyo emocional para combatir la soledad y el aislamiento",
                  benefits: ["Compañía diaria", "Apoyo emocional", "Actividades recreativas", "Estimulación cognitiva"]
                },
                {
                  title: "Administración de Medicamentos",
                  description: "Control y recordatorio de medicamentos según prescripción médica",
                  benefits: ["Control de horarios", "Recordatorio medicamentos", "Registro de dosis", "Seguimiento médico"]
                },
                {
                  title: "Cuidados Especializados",
                  description: "Atención para pacientes con demencia, Alzheimer y otras condiciones especiales",
                  benefits: ["Cuidados demencia", "Estimulación cognitiva", "Manejo conductual", "Prevención vagabundeo"]
                },
                {
                  title: "Apoyo en Movilidad",
                  description: "Asistencia para caminar, transferencias y ejercicios de mantenimiento",
                  benefits: ["Ayuda para caminar", "Transferencias cama-silla", "Ejercicios pasivos", "Prevención caídas"]
                },
                {
                  title: "Tareas Domésticas",
                  description: "Mantención del hogar, preparación de comidas y compras básicas",
                  benefits: ["Limpieza básica", "Preparación comidas", "Compras esenciales", "Orden del hogar"]
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
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Modalidades de Cuidado
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cuidado por Horas",
                  description: "Servicio flexible de 2 a 12 horas diarias según necesidades",
                  features: ["Horario flexible", "Mínimo 2 horas", "Ideal para apoyo parcial", "Costo por hora"],
                  price: "Desde $15.000/hora"
                },
                {
                  title: "Cuidado Diurno",
                  description: "Atención durante el día de 8 a 12 horas diarias",
                  features: ["8-12 horas diarias", "Lunes a viernes", "Incluye almuerzo", "Cuidado integral"],
                  price: "Desde $80.000/día"
                },
                {
                  title: "Cuidado 24/7",
                  description: "Atención permanente las 24 horas del día",
                  features: ["Atención 24 horas", "Incluye pernoctación", "Cuidado continuo", "Máxima tranquilidad"],
                  price: "Desde $150.000/día"
                }
              ].map((plan, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{plan.title}</CardTitle>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-semibold text-primary">{plan.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Testimonios de Familias Satisfechas
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Isabel Ramírez",
                  location: "Viña del Mar",
                  situation: "Cuidado madre 85 años",
                  testimonial: "La cuidadora es excepcional. Trata a mi madre con mucho cariño y profesionalismo. Nos da mucha tranquilidad.",
                  stars: 5
                },
                {
                  name: "Carlos Mendoza",
                  location: "Valparaíso",
                  situation: "Padre con Alzheimer",
                  testimonial: "Muy agradecido con el servicio. La cuidadora maneja muy bien a mi padre con Alzheimer. Muy paciente y cariñosa.",
                  stars: 5
                },
                {
                  name: "Carmen Flores",
                  location: "Villa Alemana",
                  situation: "Cuidado post-operatorio",
                  testimonial: "Después de la cirugía de mi esposo, la cuidadora fue fundamental. Muy profesional y atenta. Excelente servicio.",
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
                    <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.situation}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Tu Familiar Necesita Cuidados a Domicilio?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Solicita una cuidadora profesional y brinda a tu ser querido el cuidado que se merece en la comodidad de su hogar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                <Link href="/reserva">
                  <Clock className="mr-2 h-5 w-5" />
                  Solicitar Cuidadora
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
              <p>✅ Cuidadoras certificadas y con experiencia</p>
              <p>✅ Evaluación gratuita de necesidades</p>
              <p>✅ Horarios flexibles adaptados a ti</p>
              <p>✅ Reembolsable con seguros de salud</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 