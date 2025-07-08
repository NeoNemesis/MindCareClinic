import React from 'react'
import Link from 'next/link'
import { 
  Brain, 
  Activity, 
  Apple, 
  Hand, 
  Zap, 
  Heart, 
  Stethoscope, 
  Mic, 
  BookOpen, 
  Footprints,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Service } from '@/lib/types'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { getServiceImage } from '@/lib/imageConstants'

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'featured' | 'compact'
  showImage?: boolean
}

// Mapeo de iconos por ID de servicio
const iconMap: { [key: string]: React.ElementType } = {
  'psicologia': Brain,
  'kinesiologia': Activity,
  'nutricion': Apple,
  'terapia-ocupacional': Hand,
  'tens': Zap,
  'cuidadora': Heart,
  'enfermeria': Stethoscope,
  'fonoaudiologia': Mic,
  'psicopedagogia': BookOpen,
  'podologia': Footprints,
}

// Mapeo de URLs de páginas individuales por servicio
const serviceUrlMap: { [key: string]: string } = {
  'psicologia': '/servicios/psicologia-domicilio-vina-del-mar',
  'kinesiologia': '/servicios/kinesiologia-domicilio-vina-del-mar',
  'nutricion': '/servicios/nutricion-domicilio-vina-del-mar',
  'terapia-ocupacional': '/servicios/terapia-ocupacional-domicilio-vina-del-mar',
  'tens': '/servicios/tens-domicilio-vina-del-mar',
  'cuidadora': '/servicios/cuidadora-domicilio-vina-del-mar',
  'enfermeria': '/servicios/enfermeria-domicilio-vina-del-mar',
  'fonoaudiologia': '/servicios/fonoaudiologia-domicilio-vina-del-mar',
  'psicopedagogia': '/servicios/psicopedagogia-domicilio-vina-del-mar',
  'podologia': '/servicios/podologia-domicilio-vina-del-mar',
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'default', showImage = true }) => {
  const Icon = iconMap[service.id] || Heart
  const serviceImage = getServiceImage(service.id)
  const serviceUrl = serviceUrlMap[service.id] || `/servicios#${service.id}`

  if (variant === 'compact') {
    return (
      <Link href={serviceUrl} className="block group">
        <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
          {showImage && (
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <OptimizedImage
                src={serviceImage.src}
                alt={serviceImage.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={24} className="text-primary" />
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                {service.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-2">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
        {showImage && (
          <div className="relative h-56 overflow-hidden">
            <OptimizedImage
              src={serviceImage.src}
              alt={serviceImage.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center shadow-lg">
                <Icon size={24} className="text-primary" />
              </div>
            </div>
          </div>
        )}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
        <CardHeader className="relative z-10">
          {!showImage && (
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Icon size={32} className="text-white" />
            </div>
          )}
          <CardTitle className="text-2xl font-display mb-2">{service.title}</CardTitle>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          {service.benefits && service.benefits.length > 0 && (
            <ul className="space-y-2 mb-6">
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between items-center">
            <Button
              variant="default"
              size="sm"
              className="gap-2 bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/reserva">
                Reservar
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Link 
              href={serviceUrl}
              className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            >
              Ver más
              <ArrowRight size={14} />
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Default variant
  return (
    <Card className="h-full card-hover group overflow-hidden">
      {showImage && (
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={serviceImage.src}
            alt={serviceImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
              <Icon size={20} className="text-primary" />
            </div>
          </div>
        </div>
      )}
      <CardHeader>
        {!showImage && (
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon size={28} className="text-primary" />
          </div>
        )}
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      {service.benefits && service.benefits.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-4 gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
            asChild
          >
            <Link href={serviceUrl}>
              Más información
              <ArrowRight size={16} />
            </Link>
          </Button>
        </CardContent>
      )}
    </Card>
  )
}

export default ServiceCard 