import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MISSION, VISION, VALUES } from '@/lib/constants'
import { 
  Heart, 
  Award, 
  Shield, 
  Users,
  Target,
  Eye,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la misión, visión y valores de ÁGAPE. Somos líderes en servicios de salud domiciliarios con un enfoque integral y humano.',
}

const team = [
  {
    role: 'Dirección Médica',
    description: 'Liderazgo con visión integral de la salud'
  },
  {
    role: 'Equipo de Enfermería',
    description: 'Profesionales dedicados al cuidado directo'
  },
  {
    role: 'Especialistas Terapéuticos',
    description: 'Expertos en rehabilitación y bienestar'
  },
  {
    role: 'Coordinación de Servicios',
    description: 'Garantizando la mejor experiencia de atención'
  }
]

const milestones = [
  { year: '2019', event: 'Fundación de ÁGAPE con la visión de transformar el cuidado domiciliario' },
  { year: '2020', event: 'Expansión de servicios durante la pandemia, llegando a más hogares' },
  { year: '2022', event: 'Incorporación de tecnología para mejorar la coordinación de servicios' },
  { year: '2024', event: 'Más de 500 pacientes atendidos con excelencia y amor' }
]

export default function AboutPage() {
  const iconMap = {
    'heart': Heart,
    'award': Award,
    'shield': Shield,
    'users': Users
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-gradient">ÁGAPE</span>
            </h1>
            <p className="text-lg text-gray-600">
              Somos más que un servicio de salud domiciliario. Somos un equipo comprometido 
              con transformar la manera en que se brinda cuidado en casa, combinando 
              excelencia profesional con calidez humana.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  {MISSION.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {MISSION.content}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Eye size={32} className="text-accent-dark" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  {VISION.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {VISION.content}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y decisiones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap] || Heart
              
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600">
                Un camino de dedicación y crecimiento continuo.
              </p>
            </div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Sparkles size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{milestone.year}</h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales altamente calificados unidos por la pasión de cuidar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{member.role}</h3>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Siempre estamos buscando profesionales comprometidos que compartan 
              nuestra visión de cuidado integral y humano.
            </p>
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary-dark"
              asChild
            >
              <Link href="/trabaja-con-nosotros">
                Únete a nosotros
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why AGAPE */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué ÁGAPE?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              El nombre ÁGAPE proviene del griego y representa el amor más elevado y desinteresado. 
              Es el amor que se manifiesta en el cuidado genuino por el bienestar del otro, 
              sin esperar nada a cambio.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="font-semibold text-xl mb-2">Cuidado Integral</h3>
                <p className="text-sm opacity-80">
                  Atendemos todas las dimensiones del ser humano
                </p>
              </div>
              <div className="text-center">
                <CheckCircle size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="font-semibold text-xl mb-2">Amor en Acción</h3>
                <p className="text-sm opacity-80">
                  Cada servicio es una expresión de cuidado genuino
                </p>
              </div>
              <div className="text-center">
                <CheckCircle size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="font-semibold text-xl mb-2">Excelencia Humana</h3>
                <p className="text-sm opacity-80">
                  Profesionalismo con calidez en cada visita
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 