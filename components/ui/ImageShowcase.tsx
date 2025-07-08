import React from 'react'
import OptimizedImage from './OptimizedImage'
import { HEALTHCARE_IMAGES } from '@/lib/imageConstants'

interface ImageShowcaseProps {
  section: 'hero' | 'services' | 'about' | 'testimonials'
  className?: string
}

const ImageShowcase: React.FC<ImageShowcaseProps> = ({ section, className = '' }) => {
  const getImageConfig = () => {
    switch (section) {
      case 'hero':
        return {
          image: HEALTHCARE_IMAGES.heroHealthcare,
          containerClass: 'h-96 md:h-screen',
          overlay: 'bg-gradient-to-r from-black/60 to-black/30'
        }
      case 'services':
        return {
          image: HEALTHCARE_IMAGES.healthcareTeam,
          containerClass: 'h-64 md:h-80',
          overlay: 'bg-gradient-to-t from-black/40 to-transparent'
        }
      case 'about':
        return {
          image: HEALTHCARE_IMAGES.missionVision,
          containerClass: 'h-64 md:h-96',
          overlay: 'bg-gradient-to-r from-primary/20 to-accent/20'
        }
      case 'testimonials':
        return {
          image: HEALTHCARE_IMAGES.patientTestimonials,
          containerClass: 'h-48 md:h-64',
          overlay: 'bg-gradient-to-t from-black/30 to-transparent'
        }
      default:
        return {
          image: HEALTHCARE_IMAGES.heroHealthcare,
          containerClass: 'h-64',
          overlay: 'bg-gradient-to-t from-black/40 to-transparent'
        }
    }
  }

  const config = getImageConfig()

  return (
    <div className={`relative ${config.containerClass} ${className}`}>
      <OptimizedImage
        src={config.image.src}
        alt={config.image.alt}
        fill
        priority={section === 'hero'}
        className="object-cover"
      />
      <div className={`absolute inset-0 ${config.overlay}`} />
      
      {/* Optional content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-2">
            {section === 'hero' && 'ÁGAPE - El arte de cuidar con amor'}
            {section === 'services' && 'Nuestros Servicios'}
            {section === 'about' && 'Nuestra Misión'}
            {section === 'testimonials' && 'Testimonios'}
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            {config.image.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageShowcase 