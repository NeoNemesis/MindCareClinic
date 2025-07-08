import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Activity } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Kinesiología a Domicilio en Viña del Mar | ÁGAPE - Rehabilitación en Casa',
  description: 'Kinesiología profesional a domicilio en Viña del Mar y V Región. Rehabilitación traumatológica, neurológica, respiratoria y geriátrica. Kinesiólogos especializados con atención personalizada en la comodidad de tu hogar.',
  keywords: 'kinesiología domicilio Viña del Mar, kinesiólogo casa Valparaíso, rehabilitación domicilio quinta región, fisioterapia domicilio Viña del Mar, kinesiología traumatológica domicilio, kinesiología respiratoria casa, terapia física domicilio V región',
  openGraph: {
    title: 'Kinesiología a Domicilio Viña del Mar | Rehabilitación Professional en Casa',
    description: 'Servicio de kinesiología profesional a domicilio en Viña del Mar. Kinesiólogos especializados en traumatología, neurología y rehabilitación. Atención personalizada en tu hogar.',
    url: 'https://agape.cl/servicios/kinesiologia-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/kinesiologia-domicilio-vina-del-mar'
  }
}

export default function KinesiologiaDomicilioPage() {
  const kinesiologyImage = getServiceImage('kinesiologia')

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
                  Kinesiología a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Rehabilitación profesional especializada en la comodidad de tu hogar. 
                  Kinesiólogos certificados con experiencia en traumatología, neurología y rehabilitación respiratoria.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Activity className="mr-2 h-5 w-5" />
                      Reservar Sesión
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
                  src={kinesiologyImage.src}
                  alt="Kinesiología a domicilio en Viña del Mar - Rehabilitación profesional en casa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Kinesiología */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Especialidades en Kinesiología Domiciliaria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos servicios especializados de kinesiología a domicilio en Viña del Mar, Valparaíso y toda la V Región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Kinesiología Traumatológica",
                  description: "Rehabilitación de lesiones deportivas, fracturas, esguinces y post-operatorio ortopédico",
                  benefits: ["Recuperación de movilidad", "Fortalecimiento muscular", "Reducción del dolor", "Prevención de re-lesiones"]
                },
                {
                  title: "Kinesiología Respiratoria",
                  description: "Terapia especializada para problemas respiratorios en niños y adultos",
                  benefits: ["Limpieza de secreciones", "Mejora capacidad pulmonar", "Técnicas de respiración", "Prevención de complicaciones"]
                },
                {
                  title: "Kinesiología Neurológica",
                  description: "Rehabilitación para pacientes con ACV, Parkinson, esclerosis múltiple y otras patologías neurológicas",
                  benefits: ["Recuperación motora", "Mejora del equilibrio", "Estimulación neuroplástica", "Independencia funcional"]
                },
                {
                  title: "Kinesiología Geriátrica",
                  description: "Terapia especializada para adultos mayores, mejorando movilidad y calidad de vida",
                  benefits: ["Prevención de caídas", "Mantener independencia", "Ejercicios adaptados", "Mejora del equilibrio"]
                },
                {
                  title: "Kinesiología Post-Quirúrgica",
                  description: "Rehabilitación después de cirugías ortopédicas, plásticas y otras intervenciones",
                  benefits: ["Recuperación más rápida", "Reducción de cicatrices", "Movilización precoz", "Control del dolor"]
                },
                {
                  title: "Estimulación Temprana",
                  description: "Terapia especializada para bebés y niños con retrasos en el desarrollo motor",
                  benefits: ["Desarrollo psicomotor", "Estimulación sensorial", "Fortalecimiento muscular", "Coordinación motora"]
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

        {/* Cobertura Geográfica */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Cobertura en Viña del Mar y V Región
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Llevamos nuestros servicios de kinesiología profesional a domicilio en todas las comunas de la V Región de Valparaíso
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Viña del Mar", "Valparaíso", "Villa Alemana", "Quilpué",
                    "Limache", "Olmué", "Con Cón", "Reñaca",
                    "Casablanca", "San Antonio", "Cartagena", "Isla de Pascua"
                  ].map((city, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contacto">
                    <MapPin className="mr-2 h-4 w-4" />
                    Consultar Cobertura
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">¿Por qué elegir kinesiología a domicilio?</h3>
                <div className="space-y-4">
                  {[
                    { icon: "🏠", title: "Comodidad del hogar", desc: "Sin traslados ni esperas" },
                    { icon: "👨‍⚕️", title: "Atención personalizada", desc: "Terapia 100% enfocada en ti" },
                    { icon: "⏰", title: "Horarios flexibles", desc: "Nos adaptamos a tu agenda" },
                    { icon: "💰", title: "Reembolso Isapres", desc: "Reembolsable con seguros" },
                    { icon: "🚗", title: "Sin desplazamientos", desc: "Evita el tráfico y stress" },
                    { icon: "👨‍👩‍👧‍👦", title: "Ambiente familiar", desc: "Terapia en entorno conocido" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios específicos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Pacientes Satisfechos en Viña del Mar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  location: "Viña del Mar",
                  condition: "Rehabilitación post fractura",
                  testimonial: "Excelente atención del kinesiólogo. Recuperé completamente la movilidad de mi brazo sin salir de casa. Muy profesional y puntual.",
                  stars: 5
                },
                {
                  name: "Carlos Rodríguez",
                  location: "Valparaíso",
                  condition: "Kinesiología respiratoria",
                  testimonial: "Mi hijo de 4 años con bronquitis mejoró notablemente. El kinesiólogo fue muy paciente y cariñoso. Totalmente recomendado.",
                  stars: 5
                },
                {
                  name: "Ana Pérez",
                  location: "Quilpué",
                  condition: "Rehabilitación ACV",
                  testimonial: "Después del ACV de mi esposo, el kinesiólogo nos ayudó enormemente. Ha recuperado mucha movilidad gracias a las terapias en casa.",
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
              ¿Necesitas Kinesiología a Domicilio en Viña del Mar?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Agenda tu sesión ahora y recibe atención kinesiológica profesional en la comodidad de tu hogar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                <Link href="/reserva">
                  <Clock className="mr-2 h-5 w-5" />
                  Reservar Ahora
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
              <p>✅ Reembolsable con Isapres y seguros complementarios</p>
              <p>✅ Profesionales certificados y con experiencia</p>
              <p>✅ Horarios flexibles de lunes a domingo</p>
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
              "name": "ÁGAPE - Kinesiología a Domicilio Viña del Mar",
              "description": "Servicio profesional de kinesiología a domicilio en Viña del Mar y V Región. Especialistas en rehabilitación traumatológica, neurológica y respiratoria.",
              "url": "https://agape.cl/servicios/kinesiologia-domicilio-vina-del-mar",
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
                "Kinesiología Traumatológica",
                "Kinesiología Respiratoria", 
                "Kinesiología Neurológica",
                "Kinesiología Geriátrica"
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