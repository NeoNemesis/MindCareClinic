import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'

interface LogoProps {
  className?: string
  showSlogan?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showSlogan = false, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl'
  }

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32
  }

  return (
    <Link 
      href="/" 
      className={`inline-flex flex-col items-center group ${className}`}
      aria-label="ÁGAPE - Inicio"
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <Heart 
            size={iconSizes[size]} 
            className="text-accent fill-accent/20 group-hover:fill-accent/40 transition-colors duration-300"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/30 transition-colors duration-300" />
        </div>
        <h1 className={`font-display font-bold ${sizeClasses[size]} text-primary group-hover:text-primary-dark transition-colors duration-300`}>
          ÁGAPE
        </h1>
      </div>
      {showSlogan && (
        <p className="text-sm text-secondary mt-1 font-light">
          El arte de cuidar con amor
        </p>
      )}
    </Link>
  )
}

export default Logo 