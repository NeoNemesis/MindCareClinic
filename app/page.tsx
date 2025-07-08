import Hero from '@/components/home/Hero'
import ServiceCard from '@/components/services/ServiceCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SERVICES, VALUES, COMPANY_INFO } from '@/lib/constants'
import { 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Clock,
  Phone,
  CheckCircle,
  Heart,
  Shield,
  UserCheck
} from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    id: '1',
    name: 'María González',
    service: 'Kinesiología',
    content: 'El servicio de ÁGAPE ha sido fundamental en mi recuperación. La atención personalizada y el cariño del equipo marcaron la diferencia.',
    rating: 5,
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'Carlos Pérez',
    service: 'Enfermería',
    content: 'Profesionales de primera categoría. Mi madre recibe los cuidados que necesita sin salir de casa. Estamos muy agradecidos.',
    rating: 5,
    date: '2024-03-10'
  },
  {
    id: '3',
    name: 'Ana Silva',
    service: 'Psicología',
    content: 'La terapia a domicilio me ha permitido sentirme cómoda y segura. El progreso ha sido notable gracias al enfoque integral de ÁGAPE.',
    rating: 5,
    date: '2024-03-05'
  }
]

const stats = [
  { icon: Users, label: 'Pacientes Atendidos', value: '500+' },
  { icon: Award, label: 'Años de Experiencia', value: '5+' },
  { icon: Star, label: 'Satisfacción', value: '98%' },
  { icon: Clock, label: 'Disponibilidad', value: '24/7' }
]

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de salud a domicilio, 
              adaptados a las necesidades específicas de cada paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary-dark"
              asChild
            >
              <Link href="/servicios">
                Ver todos los servicios
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir <span className="text-gradient">ÁGAPE</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nos distinguimos por combinar excelencia profesional con un enfoque 
                profundamente humano, brindando cuidados que van más allá de lo médico.
              </p>

              <div className="space-y-6">
                {VALUES.map((value, index) => {
                  const iconMap = {
                    'heart': Heart,
                    'award': Award,
                    'shield': Shield,
                    'users': UserCheck
                  }
                  const Icon = iconMap[value.icon as keyof typeof iconMap] || Heart
                  
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-accent-dark" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart size={80} className="text-primary/30 mx-auto mb-4" />
                  <p className="text-gray-600">Imagen de nuestros valores</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La satisfacción y bienestar de nuestros pacientes es nuestra mayor recompensa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Comienza tu camino hacia el bienestar
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Nuestro equipo está listo para brindarte la atención que necesitas 
            en la comodidad de tu hogar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <Link href="/reserva">
                Reservar una cita
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone size={20} />
                Llamar ahora
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-90">
            <CheckCircle size={16} />
            <span>Atención disponible 24/7</span>
          </div>
        </div>
      </section>
    </>
  )
}
