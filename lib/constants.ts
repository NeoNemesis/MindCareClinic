import { Service } from './types'

export const COMPANY_INFO = {
  name: 'ÁGAPE',
  slogan: 'El arte de cuidar con amor',
  phone: '+56 9 XXXX XXXX', // Actualizar con número real
  email: 'contacto@agape.cl',
  address: 'Santiago, Chile',
  whatsapp: '56912345678', // Actualizar con número real
  social: {
    facebook: 'https://facebook.com/agapechile',
    instagram: 'https://instagram.com/agapechile',
    linkedin: 'https://linkedin.com/company/agapechile'
  }
}

// Site Information (legacy - keeping for backward compatibility)
export const SITE_NAME = 'ÁGAPE'
export const SITE_DESCRIPTION = 'El arte de cuidar con amor - Servicios de salud domiciliarios'
export const SITE_URL = 'https://agape.cl'

// Navigation
export const NAV_ITEMS = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Reserva', href: '/reserva' },
  { name: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' },
]

// Contact Information (legacy - keeping for backward compatibility)
export const CONTACT_INFO = {
  phone: '+56 9 XXXX XXXX',
  email: 'contacto@agape.cl',
  address: 'Santiago, Chile',
  hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
}

export const SERVICES: Service[] = [
  {
    id: 'psicologia',
    title: 'Psicología',
    description: 'Atención psicológica profesional a domicilio con enfoque integral y personalizado.',
    icon: 'brain',
    benefits: [
      'Evaluación y diagnóstico psicológico',
      'Terapia individual y familiar',
      'Apoyo emocional especializado',
      'Intervención en crisis'
    ]
  },
  {
    id: 'kinesiologia',
    title: 'Kinesiología',
    description: 'Rehabilitación física y tratamiento del dolor en la comodidad de tu hogar.',
    icon: 'activity',
    benefits: [
      'Rehabilitación post-operatoria',
      'Tratamiento del dolor',
      'Ejercicios terapéuticos',
      'Prevención de lesiones'
    ]
  },
  {
    id: 'nutricion',
    title: 'Nutrición',
    description: 'Asesoría nutricional personalizada para mejorar tu calidad de vida.',
    icon: 'apple',
    benefits: [
      'Evaluación nutricional completa',
      'Planes alimentarios personalizados',
      'Educación alimentaria',
      'Seguimiento continuo'
    ]
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia Ocupacional',
    description: 'Rehabilitación funcional para recuperar la independencia en actividades diarias.',
    icon: 'hand',
    benefits: [
      'Evaluación funcional',
      'Entrenamiento en AVD',
      'Adaptación del entorno',
      'Estimulación cognitiva'
    ]
  },
  {
    id: 'tens',
    title: 'TENS',
    description: 'Terapia de electroestimulación para el manejo del dolor crónico y agudo.',
    icon: 'zap',
    benefits: [
      'Alivio del dolor sin medicamentos',
      'Tratamiento no invasivo',
      'Mejora de la circulación',
      'Relajación muscular'
    ]
  },
  {
    id: 'cuidadora',
    title: 'Cuidadora',
    description: 'Cuidado integral y acompañamiento con calidez humana y profesionalismo.',
    icon: 'heart',
    benefits: [
      'Asistencia en actividades diarias',
      'Acompañamiento personalizado',
      'Cuidado con amor y respeto',
      'Apoyo emocional'
    ]
  },
  {
    id: 'enfermeria',
    title: 'Enfermería',
    description: 'Cuidados de enfermería profesional en la comodidad de tu hogar.',
    icon: 'stethoscope',
    benefits: [
      'Curaciones y procedimientos',
      'Administración de medicamentos',
      'Control de signos vitales',
      'Educación en salud'
    ]
  },
  {
    id: 'fonoaudiologia',
    title: 'Fonoaudiología',
    description: 'Evaluación y tratamiento de trastornos del habla, lenguaje y deglución.',
    icon: 'mic',
    benefits: [
      'Terapia del lenguaje',
      'Rehabilitación de la voz',
      'Tratamiento de disfagia',
      'Estimulación temprana'
    ]
  },
  {
    id: 'psicopedagogia',
    title: 'Psicopedagogía',
    description: 'Apoyo especializado en dificultades del aprendizaje y desarrollo educativo.',
    icon: 'book',
    benefits: [
      'Evaluación psicopedagógica',
      'Apoyo escolar personalizado',
      'Técnicas de estudio',
      'Orientación vocacional'
    ]
  },
  {
    id: 'podologia',
    title: 'Podología',
    description: 'Cuidado integral de la salud de tus pies con profesionales especializados.',
    icon: 'footprints',
    benefits: [
      'Evaluación podológica completa',
      'Tratamiento de patologías',
      'Cuidado del pie diabético',
      'Educación preventiva'
    ]
  }
]

export const MISSION = {
  title: 'Nuestra Misión',
  content: 'Brindar servicios de salud domiciliarios de excelencia, con un enfoque integral que combina profesionalismo médico con calidez humana, llevando cuidado especializado y amor a cada hogar.'
}

export const VISION = {
  title: 'Nuestra Visión',
  content: 'Ser líderes en servicios de salud domiciliarios en Chile, reconocidos por transformar el cuidado en casa a través de un modelo que integra excelencia profesional, tecnología y valores humanos.'
}

export const VALUES = [
  {
    title: 'Amor y Compasión',
    description: 'Cada acción está guiada por el amor genuino hacia nuestros pacientes.',
    icon: 'heart'
  },
  {
    title: 'Excelencia Profesional',
    description: 'Compromiso con los más altos estándares de calidad en salud.',
    icon: 'award'
  },
  {
    title: 'Integridad',
    description: 'Actuamos con transparencia, honestidad y ética en todo momento.',
    icon: 'shield'
  },
  {
    title: 'Respeto y Dignidad',
    description: 'Valoramos la dignidad de cada persona y su derecho a un cuidado digno.',
    icon: 'users'
  }
]

// Colors (matching Tailwind config)
export const COLORS = {
  primary: {
    DEFAULT: '#4A7C7E',
    light: '#5A9A9C',
    dark: '#3A6264',
  },
  secondary: {
    DEFAULT: '#7FA99B',
    light: '#94BCAF',
    dark: '#6A9485',
  },
  accent: {
    DEFAULT: '#FFA07A',
    light: '#FFB499',
    dark: '#FF8C5B',
  },
  cream: {
    DEFAULT: '#FFF8F3',
    light: '#FFFBF8',
    dark: '#FFF5ED',
  },
} 