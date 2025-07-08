import { Metadata } from 'next'
import { Navbar } from '@/components/common'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, MapPin, Star, Phone, MessageCircle, Apple } from 'lucide-react'
import Link from 'next/link'
import { getServiceImage } from '@/lib/imageConstants'

export const metadata: Metadata = {
  title: 'Nutricionista a Domicilio en Viña del Mar | ÁGAPE - Consulta Nutricional en Casa',
  description: 'Consulta nutricional profesional a domicilio en Viña del Mar y V Región. Nutricionistas especializados en planes alimentarios, diabetes, obesidad y nutrición deportiva. Atención personalizada en tu hogar.',
  keywords: 'nutricionista domicilio Viña del Mar, nutrición casa Valparaíso, dietista domicilio quinta región, plan alimentario domicilio Viña del Mar, nutrición deportiva casa, control peso domicilio V región, diabetes nutrición domicilio',
  openGraph: {
    title: 'Nutricionista a Domicilio Viña del Mar | Consulta Nutricional en Casa',
    description: 'Consulta nutricional profesional a domicilio en Viña del Mar. Nutricionistas especializados en planes alimentarios, control de peso y nutrición terapéutica.',
    url: 'https://agape.cl/servicios/nutricion-domicilio-vina-del-mar',
    siteName: 'ÁGAPE',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agape.cl/servicios/nutricion-domicilio-vina-del-mar'
  }
}

export default function NutricionDomicilioPage() {
  const nutritionImage = getServiceImage('nutricion')

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
                  Nutricionista a Domicilio en <span className="text-accent">Viña del Mar</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Consulta nutricional profesional y personalizada en la comodidad de tu hogar. 
                  Nutricionistas certificados especializados en planes alimentarios, control de peso y nutrición terapéutica.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
                    <Link href="/reserva">
                      <Apple className="mr-2 h-5 w-5" />
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
                  src={nutritionImage.src}
                  alt="Nutricionista a domicilio en Viña del Mar - Consulta nutricional profesional en casa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades Nutricionales */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Especialidades en Nutrición Domiciliaria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos consultas nutricionales especializadas a domicilio en Viña del Mar, Valparaíso y toda la V Región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Control de Peso",
                  description: "Planes alimentarios personalizados para bajar de peso de forma saludable y sostenible",
                  benefits: ["Pérdida de peso gradual", "Cambio de hábitos", "Planes realistas", "Seguimiento continuo"]
                },
                {
                  title: "Nutrición Deportiva",
                  description: "Alimentación especializada para deportistas y personas físicamente activas",
                  benefits: ["Rendimiento deportivo", "Recuperación muscular", "Hidratación óptima", "Suplementación"]
                },
                {
                  title: "Nutrición Clínica",
                  description: "Tratamiento nutricional para diabetes, hipertensión, colesterol alto y otras patologías",
                  benefits: ["Control glucémico", "Presión arterial", "Colesterol y triglicéridos", "Alimentación terapéutica"]
                },
                {
                  title: "Nutrición Infantil",
                  description: "Alimentación saludable para niños y adolescentes en crecimiento",
                  benefits: ["Crecimiento óptimo", "Hábitos saludables", "Alimentación escolar", "Prevención obesidad"]
                },
                {
                  title: "Nutrición Geriátrica",
                  description: "Alimentación especializada para adultos mayores con necesidades específicas",
                  benefits: ["Prevención desnutrición", "Adaptación texturas", "Suplementación", "Hidratación adecuada"]
                },
                {
                  title: "Nutrición Vegetariana/Vegana",
                  description: "Planes nutricionales completos para dietas basadas en plantas",
                  benefits: ["Proteínas completas", "Vitaminas B12", "Hierro y calcio", "Planificación menús"]
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

        {/* Ventajas consulta domicilio */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Ventajas de la Consulta Nutricional a Domicilio
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  La consulta nutricional a domicilio permite una evaluación más completa y personalizada
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Revisión de Alacena",
                      description: "Evaluación directa de los alimentos que tienes en casa para mejores recomendaciones"
                    },
                    {
                      title: "Cocina Práctica",
                      description: "Enseñanza de técnicas culinarias saludables en tu propia cocina"
                    },
                    {
                      title: "Ambiente Familiar",
                      description: "Involucra a toda la familia en el proceso de cambio de hábitos alimentarios"
                    },
                    {
                      title: "Medición Antropométrica",
                      description: "Evaluación completa con bioimpedancia y mediciones corporales"
                    },
                    {
                      title: "Planes Realistas",
                      description: "Adaptación del plan alimentario a tu estilo de vida y rutina diaria"
                    },
                    {
                      title: "Seguimiento Personalizado",
                      description: "Control y ajustes continuos según tu progreso y necesidades"
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
                <h3 className="text-2xl font-semibold mb-6 text-center">¿Qué incluye la consulta?</h3>
                <div className="space-y-4">
                  {[
                    "Evaluación nutricional completa",
                    "Análisis de composición corporal",
                    "Revisión de hábitos alimentarios",
                    "Plan alimentario personalizado",
                    "Recetas saludables adaptadas",
                    "Lista de compras inteligente",
                    "Educación nutricional",
                    "Técnicas culinarias saludables",
                    "Estrategias para comer fuera",
                    "Seguimiento y monitoreo",
                    "Apoyo emocional alimentario",
                    "Recomendaciones de suplementos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Apple size={16} className="text-primary" />
                      <span className="text-gray-700">{item}</span>
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
              Resultados de Nuestros Pacientes en Viña del Mar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Patricia Morales",
                  location: "Viña del Mar",
                  condition: "Control de peso",
                  testimonial: "Bajé 15 kilos en 6 meses con un plan súper realista. La nutricionista vino a mi casa y me enseñó a cocinar saludable.",
                  stars: 5
                },
                {
                  name: "Diego Fernández",
                  location: "Valparaíso",
                  condition: "Nutrición deportiva",
                  testimonial: "Como deportista necesitaba un plan específico. Mejoré mi rendimiento y recuperación notablemente. Muy profesional.",
                  stars: 5
                },
                {
                  name: "Elena Vargas",
                  location: "Quilpué",
                  condition: "Diabetes tipo 2",
                  testimonial: "Me ayudó a controlar mi diabetes con alimentación. Mis niveles de azúcar están estables. Excelente atención.",
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

        {/* Proceso de consulta */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Proceso de Consulta Nutricional a Domicilio
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Agenda tu cita",
                  description: "Contacta con nosotros para programar tu consulta nutricional a domicilio"
                },
                {
                  step: "2",
                  title: "Evaluación inicial",
                  description: "Análisis completo de tu estado nutricional, hábitos y objetivos"
                },
                {
                  step: "3",
                  title: "Plan personalizado",
                  description: "Creación de un plan alimentario adaptado a tu estilo de vida"
                },
                {
                  step: "4",
                  title: "Seguimiento",
                  description: "Controles periódicos para ajustar el plan según tu progreso"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cobertura */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Consultas Nutricionales en Toda la V Región
              </h2>
              <p className="text-xl text-gray-600">
                Llevamos servicios nutricionales profesionales a domicilio en toda la región de Valparaíso
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Viña del Mar", "Valparaíso", "Villa Alemana", "Quilpué",
                "Limache", "Olmué", "Con Cón", "Reñaca",
                "Casablanca", "San Antonio", "Cartagena", "Quillota"
              ].map((city, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Listo para Mejorar tu Alimentación?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Agenda tu consulta nutricional a domicilio y recibe un plan alimentario personalizado en la comodidad de tu hogar
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
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="tel:+56912345678">
                  <Phone className="mr-2 h-5 w-5" />
                  +56 9 1234 5678
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-200">
              <p>✅ Primera consulta con evaluación completa</p>
              <p>✅ Plan alimentario personalizado incluido</p>
              <p>✅ Reembolsable con Isapres y seguros</p>
              <p>✅ Nutricionistas certificados</p>
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
              "name": "ÁGAPE - Nutricionista a Domicilio Viña del Mar",
              "description": "Consulta nutricional profesional a domicilio en Viña del Mar y V Región. Especialistas en planes alimentarios, control de peso y nutrición terapéutica.",
              "url": "https://agape.cl/servicios/nutricion-domicilio-vina-del-mar",
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
                "Nutrición Clínica",
                "Nutrición Deportiva", 
                "Control de Peso",
                "Nutrición Infantil"
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