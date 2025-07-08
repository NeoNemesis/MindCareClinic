"use client"

import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const handleImageError = () => {
    console.error('Image failed to load:', src)
    setImageError(true)
  }
  
  const handleImageLoad = () => {
    console.log('Image loaded successfully:', src)
    setImageLoaded(true)
  }
  
  useEffect(() => {
    console.log('OptimizedImage component mounted with src:', src)
  }, [src])
  
  // Fallback placeholder when image fails to load
  const PlaceholderDiv = ({ className: placeholderClassName, style }: { className: string; style?: React.CSSProperties }) => (
    <div className={cn(
      placeholderClassName,
      "bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
    )} style={style}>
      <div className="text-center">
        <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        <span>Imagen no disponible</span>
      </div>
    </div>
  )
  
  // Use regular img tag for static export to avoid issues with external images
  if (fill) {
    return (
      <div className={cn("relative w-full h-full overflow-hidden", className)}>
        {imageError ? (
          <PlaceholderDiv className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        ) : (
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-300"
            loading={priority ? "eager" : "lazy"}
            onError={handleImageError}
            onLoad={handleImageLoad}
            crossOrigin="anonymous"
          />
        )}
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden")}>
      {imageError ? (
        <PlaceholderDiv className={cn("object-cover rounded-lg", className)} style={{ width, height }} />
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("object-cover rounded-lg transition-all duration-300", className)}
          loading={priority ? "eager" : "lazy"}
          onError={handleImageError}
          onLoad={handleImageLoad}
          crossOrigin="anonymous"
        />
      )}
    </div>
  )
} 