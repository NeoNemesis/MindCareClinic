# ÁGAPE - El Arte de Cuidar con Amor

Una moderna plataforma web para servicios de salud domiciliarios en Chile, desarrollada con Next.js y enfocada en brindar cuidado profesional con calidez humana.

## 🌟 Características

- **Diseño Responsive**: Optimizado para dispositivos móviles y desktop
- **Interfaz Moderna**: UI/UX diseñada con Tailwind CSS y componentes personalizados
- **Servicios Integrales**: 10 servicios de salud especializados
- **Formularios Interactivos**: Sistema de reservas y contacto
- **Optimización SEO**: Metadatos y estructura optimizada para buscadores
- **Rendimiento**: Imágenes optimizadas y lazy loading
- **Accesibilidad**: Diseño inclusivo siguiendo mejores prácticas

## 🏥 Servicios Disponibles

1. **Psicología** - Atención psicológica profesional a domicilio
2. **Kinesiología** - Rehabilitación física y tratamiento del dolor
3. **Nutrición** - Asesoría nutricional personalizada
4. **Terapia Ocupacional** - Rehabilitación funcional para actividades diarias
5. **TENS** - Terapia de electroestimulación para manejo del dolor
6. **Cuidadora** - Cuidado integral y acompañamiento
7. **Enfermería** - Cuidados profesionales en el hogar
8. **Fonoaudiología** - Tratamiento de trastornos del habla y lenguaje
9. **Psicopedagogía** - Apoyo en dificultades del aprendizaje
10. **Podología** - Cuidado especializado de la salud de los pies

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: Shadcn/ui
- **Iconos**: Lucide React
- **Formularios**: React Hook Form
- **Validación**: Zod
- **Optimización**: Next.js Image Optimization

## 📁 Estructura del Proyecto

```
agape-web/
├── app/                    # App Router de Next.js
│   ├── contacto/          # Página de contacto
│   ├── nosotros/          # Página sobre nosotros
│   ├── reserva/           # Sistema de reservas
│   ├── servicios/         # Catálogo de servicios
│   ├── trabaja-con-nosotros/  # Página de empleo
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── common/           # Componentes comunes (Header, Footer)
│   ├── forms/            # Formularios
│   ├── sections/         # Secciones de páginas
│   ├── services/         # Componentes de servicios
│   └── ui/               # Componentes de UI base
├── lib/                   # Utilidades y configuraciones
│   ├── constants.ts      # Constantes del proyecto
│   ├── imageConstants.ts # Configuración de imágenes
│   ├── types.ts          # Tipos de TypeScript
│   └── utils.ts          # Utilidades generales
├── next.config.js        # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind
└── package.json          # Dependencias del proyecto
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18.0 o superior
- npm o yarn
- Git

### Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/NeoNemesis/MindCareClinic.git
cd MindCareClinic
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Ejecutar en desarrollo**:
```bash
npm run dev
```

4. **Abrir en navegador**:
Visita `http://localhost:3000`

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta linting

# Utilidades
npm run type-check   # Verificación de tipos TypeScript
```

## 🎨 Diseño y Branding

### Colores Principales
- **Primario**: `#4A7C7E` (Verde azulado profesional)
- **Secundario**: `#9C8F7A` (Beige cálido)
- **Acento**: `#E8E0D4` (Crema suave)

### Tipografía
- **Títulos**: Playfair Display (elegante y profesional)
- **Texto**: Inter (moderna y legible)

### Valores de Marca
- **Amor y Compasión**: Cada acción guiada por el amor genuino
- **Excelencia Profesional**: Compromiso con los más altos estándares
- **Integridad**: Transparencia, honestidad y ética
- **Respeto y Dignidad**: Valoración de cada persona

## 📱 Características Responsive

- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: Adaptación fluida en tablet y desktop
- **Navegación**: Menú hamburguesa en móvil, navegación completa en desktop
- **Imágenes**: Optimización automática según el dispositivo

## 🔐 Seguridad y Rendimiento

- **Validación**: Formularios validados en cliente y servidor
- **Optimización**: Imágenes lazy loading y optimización automática
- **SEO**: Metadatos estructurados y URLs amigables
- **Accesibilidad**: Cumplimiento de estándares WCAG

## 🌐 Despliegue

### Producción
```bash
npm run build
npm run start
```

### Despliegue Estático
```bash
npm run build
# Los archivos estáticos se generan en la carpeta 'out'
```

### Plataformas Recomendadas
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS S3 + CloudFront**

## 📞 Información de Contacto

- **Empresa**: ÁGAPE - El Arte de Cuidar con Amor
- **Ubicación**: Santiago, Chile
- **Email**: contacto@agape.cl
- **Teléfono**: +56 9 XXXX XXXX

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Add nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📋 Roadmap

- [ ] Integración con sistema de pagos
- [ ] Dashboard para profesionales
- [ ] Sistema de notificaciones
- [ ] Aplicación móvil
- [ ] Integración con APIs de salud
- [ ] Sistema de historias clínicas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Equipo de desarrollo ÁGAPE
- Comunidad de Next.js
- Contribuidores de código abierto
- Profesionales de la salud que inspiraron este proyecto

---

**Desarrollado con ❤️ para mejorar el cuidado de la salud en Chile**
