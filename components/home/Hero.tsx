'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, Phone, Heart, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY_INFO } from '@/lib/constants'

const Hero: React.FC = () => {
  const benefits = [
    'Atención profesional en tu hogar',
    'Equipo multidisciplinario',
    'Cuidado con amor y respeto'
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <Heart size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent-dark">
                Salud domiciliaria con calidez humana
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              El arte de 
              <span className="text-gradient"> cuidar con amor</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              En ÁGAPE llevamos servicios de salud profesional directamente a tu hogar, 
              combinando excelencia médica con el cuidado más humano y personalizado.
            </p>

            {/* Benefits */}
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/reserva">
                  <Calendar size={20} />
                  Reservar Cita
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-2 hover:bg-gray-50"
                asChild
              >
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone size={20} />
                  Llámanos Ahora
                </a>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">+500 pacientes</p>
                <p className="text-xs text-gray-600">confían en nosotros</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart size={80} className="text-primary/30 mx-auto mb-4" />
                  <p className="text-gray-600">Imagen de profesionales de ÁGAPE</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">100% Profesional</p>
                    <p className="text-xs text-gray-600">Equipo certificado</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Atención 24/7</p>
                    <p className="text-xs text-gray-600">Siempre disponibles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 