export const HEALTHCARE_IMAGES = {
  // Hero & Main sections
  heroHealthcare: {
    src: 'https://picsum.photos/1200/800?random=1',
    alt: 'ÁGAPE - Cuidado de la salud domiciliaria profesional',
    description: 'Imagen principal para la sección hero',
    credit: 'Healthcare image'
  },
  
  missionVision: {
    src: 'https://picsum.photos/1200/800?random=2',
    alt: 'Misión y visión de ÁGAPE - Cuidado humano y profesional',
    description: 'Para la sección About/Nosotros',
    credit: 'Healthcare image'
  },
  
  healthcareTeam: {
    src: 'https://picsum.photos/1200/800?random=3',
    alt: 'Equipo médico profesional de ÁGAPE',
    description: 'Para la sección de equipo/personal',
    credit: 'Healthcare image'
  },
  
  patientTestimonials: {
    src: 'https://picsum.photos/1200/800?random=4',
    alt: 'Testimonios de pacientes satisfechos',
    description: 'Para la sección de testimonios',
    credit: 'Healthcare image'
  },

  // Individual Services - Using simpler URLs that work
  psychologySession: {
    src: 'https://picsum.photos/800/600?random=5',
    alt: 'Sesión de psicología a domicilio',
    description: 'Para el servicio de psicología',
    credit: 'Healthcare image'
  },
  
  kinesiologyTherapy: {
    src: 'https://picsum.photos/800/600?random=6',
    alt: 'Terapia de kinesiología y rehabilitación',
    description: 'Para el servicio de kinesiología',
    credit: 'Healthcare image'
  },
  
  nutritionConsultation: {
    src: 'https://picsum.photos/800/600?random=7',
    alt: 'Consulta nutricional y dietética',
    description: 'Para el servicio de nutrición',
    credit: 'Healthcare image'
  },
  
  occupationalTherapy: {
    src: 'https://picsum.photos/800/600?random=8',
    alt: 'Terapia ocupacional especializada',
    description: 'Para el servicio de terapia ocupacional',
    credit: 'Healthcare image'
  },
  
  caregiverElderly: {
    src: 'https://picsum.photos/800/600?random=9',
    alt: 'Cuidador de adultos mayores',
    description: 'Para el servicio de cuidado de adultos mayores',
    credit: 'Healthcare image'
  },
  
  nurseHomeVisit: {
    src: 'https://picsum.photos/800/600?random=10',
    alt: 'Visita de enfermería a domicilio',
    description: 'Para el servicio de enfermería',
    credit: 'Healthcare image'
  },
  
  speechTherapy: {
    src: 'https://picsum.photos/800/600?random=11',
    alt: 'Terapia de fonoaudiología',
    description: 'Para el servicio de fonoaudiología',
    credit: 'Healthcare image'
  },
  
  educationalTherapy: {
    src: 'https://picsum.photos/800/600?random=12',
    alt: 'Terapia educativa y apoyo escolar',
    description: 'Para el servicio de terapia educativa',
    credit: 'Healthcare image'
  },
  
  podiatryCare: {
    src: 'https://picsum.photos/800/600?random=13',
    alt: 'Cuidado podológico especializado',
    description: 'Para el servicio de podología',
    credit: 'Healthcare image'
  },
  
  doctorConsultation: {
    src: 'https://picsum.photos/800/600?random=14',
    alt: 'Consulta médica general',
    description: 'Para el servicio de consulta médica',
    credit: 'Healthcare image'
  },

  // Additional healthcare images
  medicationManagement: {
    src: 'https://picsum.photos/800/600?random=15',
    alt: 'Gestión y administración de medicamentos',
    description: 'Para servicios de farmacia clínica',
    credit: 'Healthcare image'
  },
  
  homeHealthAid: {
    src: 'https://picsum.photos/800/600?random=16',
    alt: 'Asistencia domiciliaria integral',
    description: 'Para servicios de asistencia domiciliaria',
    credit: 'Healthcare image'
  },
  
  patientCare: {
    src: 'https://picsum.photos/800/600?random=17',
    alt: 'Atención personalizada al paciente',
    description: 'Para servicios generales de atención',
    credit: 'Healthcare image'
  },
  
  emergencyResponse: {
    src: 'https://picsum.photos/800/600?random=18',
    alt: 'Respuesta de emergencia médica',
    description: 'Para servicios de emergencia',
    credit: 'Healthcare image'
  },
  
  familySupport: {
    src: 'https://picsum.photos/800/600?random=19',
    alt: 'Apoyo familiar y cuidadores',
    description: 'Para servicios de apoyo familiar',
    credit: 'Healthcare image'
  },

  // New additional images for missing areas
  wheelchairAccess: {
    src: 'https://picsum.photos/800/600?random=20',
    alt: 'Accesibilidad en silla de ruedas',
    description: 'Para servicios de accesibilidad',
    credit: 'Healthcare image'
  },
  
  medicalEquipment: {
    src: 'https://picsum.photos/800/600?random=21',
    alt: 'Equipos médicos especializados',
    description: 'Para servicios con equipos médicos',
    credit: 'Healthcare image'
  },
  
  healthConsultation: {
    src: 'https://picsum.photos/800/600?random=22',
    alt: 'Consulta de salud general',
    description: 'Para consultas generales de salud',
    credit: 'Healthcare image'
  },
  
  pediatricCare: {
    src: 'https://picsum.photos/800/600?random=23',
    alt: 'Cuidado pediátrico especializado',
    description: 'Para servicios de pediatría',
    credit: 'Healthcare image'
  },
  
  mentalHealthSupport: {
    src: 'https://picsum.photos/800/600?random=24',
    alt: 'Apoyo de salud mental',
    description: 'Para servicios de salud mental',
    credit: 'Healthcare image'
  }
};

// Export individual image getter functions
export const getHealthcareImage = (imageKey: keyof typeof HEALTHCARE_IMAGES) => {
  return HEALTHCARE_IMAGES[imageKey];
};

export const getAllHealthcareImages = () => {
  return Object.values(HEALTHCARE_IMAGES);
};

export const getImagesByCategory = (category: 'main' | 'services' | 'additional') => {
  const mainImages = ['heroHealthcare', 'missionVision', 'healthcareTeam', 'patientTestimonials'];
  const serviceImages = [
    'psychologySession', 'kinesiologyTherapy', 'nutritionConsultation', 'occupationalTherapy',
    'caregiverElderly', 'nurseHomeVisit', 'speechTherapy', 'educationalTherapy', 
    'podiatryCare', 'doctorConsultation'
  ];
  const additionalImages = ['medicationManagement', 'homeHealthAid', 'patientCare', 'emergencyResponse', 'familySupport'];
  
  let keys: string[] = [];
  if (category === 'main') keys = mainImages;
  else if (category === 'services') keys = serviceImages;
  else if (category === 'additional') keys = additionalImages;
  
  return keys.map(key => HEALTHCARE_IMAGES[key as keyof typeof HEALTHCARE_IMAGES]);
};

// Service ID to image mapping function (needed by ServiceCard component)
export const getServiceImage = (serviceId: string) => {
  const serviceImageMap: { [key: string]: keyof typeof HEALTHCARE_IMAGES } = {
    'psicologia': 'psychologySession',
    'kinesiologia': 'kinesiologyTherapy',
    'nutricion': 'nutritionConsultation',
    'terapia-ocupacional': 'occupationalTherapy',
    'tens': 'kinesiologyTherapy', // TENS therapy is part of kinesiology
    'cuidadora': 'caregiverElderly',
    'enfermeria': 'nurseHomeVisit',
    'fonoaudiologia': 'speechTherapy',
    'psicopedagogia': 'educationalTherapy',
    'podologia': 'podiatryCare',
    'consulta-medica': 'doctorConsultation',
    'cuidado-adulto-mayor': 'caregiverElderly'
  };
  
  const imageKey = serviceImageMap[serviceId];
  return imageKey ? HEALTHCARE_IMAGES[imageKey] : HEALTHCARE_IMAGES.heroHealthcare;
}; 