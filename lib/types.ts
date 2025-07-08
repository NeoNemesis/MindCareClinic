// Navigation types
export interface NavItem {
  name: string
  href: string
}

// Contact types
export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}

// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  price?: string
  duration?: string
  benefits?: string[]
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  service: string
  content: string
  rating: number
  date: string
  avatar?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  specialty: string
  image?: string
  bio?: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  service?: string
  message: string
}

export interface ReservationForm extends ContactForm {
  date: string
  time: string
  address: string
  additionalInfo?: string
}

// Legacy form types (keeping for backward compatibility)
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface ReservationFormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes?: string
}

export interface JobApplicationFormData {
  name: string
  email: string
  phone: string
  position: string
  experience: string
  cv: File | null
  coverLetter?: string
}

// Color types
export interface ColorVariant {
  DEFAULT: string
  light: string
  dark: string
}

export interface ColorScheme {
  primary: ColorVariant
  secondary: ColorVariant
  accent: ColorVariant
  cream: ColorVariant
}

// Component props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
}

export interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

// Page props
export interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
} 