import type { Metadata } from 'next'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Trabaja con Nosotros - ÁGAPE',
  description: 'Únete a nuestro equipo de profesionales de la salud en Chile. Oportunidades laborales en servicios domiciliarios.',
}

const POSITIONS = [
  {
    title: 'Enfermero/a',
    type: 'Tiempo completo',
    requirements: 'Título profesional • Experiencia mínima 2 años',
    description: 'Brindar cuidados de enfermería domiciliarios con excelencia profesional'
  },
  {
    title: 'Kinesiólogo/a',
    type: 'Tiempo completo / Medio tiempo',
    requirements: 'Título profesional • Experiencia en rehabilitación',
    description: 'Rehabilitación física y tratamiento del dolor a domicilio'
  },
  {
    title: 'Psicólogo/a',
    type: 'Tiempo completo',
    requirements: 'Título profesional • Experiencia clínica',
    description: 'Atención psicológica y apoyo emocional en el hogar'
  },
  {
    title: 'Nutricionista',
    type: 'Medio tiempo',
    requirements: 'Título profesional • Experiencia en clínica',
    description: 'Asesoría nutricional personalizada domiciliaria'
  },
  {
    title: 'Terapeuta Ocupacional',
    type: 'Tiempo completo',
    requirements: 'Título profesional • Experiencia en rehabilitación',
    description: 'Rehabilitación funcional y adaptación del entorno'
  },
  {
    title: 'Fonoaudiólogo/a',
    type: 'Medio tiempo',
    requirements: 'Título profesional • Experiencia en terapia',
    description: 'Terapia del habla y lenguaje a domicilio'
  },
  {
    title: 'Cuidador/a Profesional',
    type: 'Tiempo completo',
    requirements: 'Certificación • Experiencia en cuidado de adultos mayores',
    description: 'Cuidado integral y acompañamiento con amor y profesionalismo'
  },
  {
    title: 'TENS',
    type: 'Tiempo completo',
    requirements: 'Título TENS • Experiencia en procedimientos',
    description: 'Apoyo en procedimientos médicos y cuidados básicos'
  }
]

export default function TrabajaConNosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-primary mb-4 text-center">
          Trabaja con Nosotros
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-8">
          {COMPANY_INFO.slogan}
        </p>
        
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Únete a nuestro equipo de profesionales de la salud y forma parte de una empresa 
          que está transformando la atención médica domiciliaria en Chile.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <h2 className="text-2xl font-display font-semibold text-primary mb-6">
              ¿Por qué trabajar con ÁGAPE?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Ambiente de trabajo colaborativo y profesional</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Oportunidades de crecimiento profesional continuo</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Formación continua y certificaciones especializadas</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Impacto positivo en la vida de las familias chilenas</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Beneficios competitivos y estabilidad laboral</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Flexibilidad horaria y trabajo en terreno</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Equipos médicos de última generación</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
            <h2 className="text-2xl font-display font-semibold text-primary mb-6">
              Nuestros Valores
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Amor y Compasión</h3>
                  <p className="text-sm text-gray-600">Cada acción guiada por amor genuino</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Excelencia Profesional</h3>
                  <p className="text-sm text-gray-600">Compromiso con la calidad en salud</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Integridad</h3>
                  <p className="text-sm text-gray-600">Transparencia y ética en todo momento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Respeto y Dignidad</h3>
                  <p className="text-sm text-gray-600">Valoramos a cada persona</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-8 text-center">
            Posiciones Disponibles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSITIONS.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-6 card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{position.title}</h3>
                    <p className="text-sm text-gray-600">{position.type}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-3">{position.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-medium text-secondary mb-1">Requisitos:</p>
                  <p className="text-xs text-gray-600">{position.requirements}</p>
                </div>
                
                <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors text-sm font-medium">
                  Aplicar
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <h2 className="text-2xl font-display font-semibold text-primary mb-6 text-center">
              Envía tu Postulación
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="form-input"
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>
              
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Posición de interés *
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  className="form-input"
                >
                  <option value="">Selecciona una posición</option>
                  {POSITIONS.map((position, index) => (
                    <option key={index} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experiencia profesional *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  required
                  className="form-input"
                  placeholder="Describe tu experiencia profesional, certificaciones y especialidades relevantes..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                  Curriculum Vitae *
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  className="form-input"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Formatos aceptados: PDF, DOC, DOCX (máximo 10MB)
                </p>
              </div>
              
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Carta de presentación
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  className="form-input"
                  placeholder="Cuéntanos por qué quieres formar parte de ÁGAPE y cómo puedes contribuir a nuestra misión..."
                ></textarea>
              </div>
              
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-3">Proceso de selección:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Revisión de postulaciones en 48 horas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Entrevista inicial por video llamada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Evaluación técnica y práctica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Verificación de antecedentes y referencias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Inducción y capacitación inicial</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  Enviar Postulación
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola, me interesa trabajar con ÁGAPE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary/5 transition-colors font-medium text-center"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 