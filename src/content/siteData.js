export const locales = {
  es: {
    code: 'es-CL',
    label: 'Español',
  },
  en: {
    code: 'en',
    label: 'English',
  },
}

const sharedProducts = [
  {
    id: 'racks-carga',
    category: 'Carga y estructura',
    name: 'Racks de carga',
    benefit: 'Maximiza capacidad operativa en terreno.',
    detail: 'Sistemas reforzados para herramientas, tuberías, escaleras y equipamiento técnico.',
    cta: 'Ver detalle',
    media: {
      tone: 'from-[#5c2c18] via-[#1e1b1c] to-[#0f1115]',
      accent: 'Estructura reforzada',
    },
  },
  {
    id: 'compresores',
    category: 'Soporte operacional',
    name: 'Compresores',
    benefit: 'Equipamiento esencial para faena 4x4.',
    detail: 'Soluciones compactas para inflado, ajuste de presión y soporte en rutas exigentes.',
    cta: 'Ver detalle',
    media: {
      tone: 'from-[#8a431e] via-[#201a19] to-[#0f1115]',
      accent: 'Presión y autonomía',
    },
  },
  {
    id: 'parachoques-operacionales',
    category: 'Protección frontal',
    name: 'Parachoques operacionales',
    benefit: 'Protección real para vehículos de trabajo.',
    detail: 'Preparados para winche, rescate y protección estructural en operaciones de alto desgaste.',
    cta: 'Ver detalle',
    media: {
      tone: 'from-[#3b251c] via-[#181a20] to-[#0f1115]',
      accent: 'Integración para rescate',
    },
  },
  {
    id: 'iluminacion-tecnica',
    category: 'Visibilidad y seguridad',
    name: 'Iluminación técnica',
    benefit: 'Más visibilidad para turnos y maniobras críticas.',
    detail: 'Barras LED y focos auxiliares para polvo, rutas nocturnas y condiciones de baja visibilidad.',
    cta: 'Ver detalle',
    media: {
      tone: 'from-[#51311d] via-[#17191e] to-[#0f1115]',
      accent: 'Cobertura perimetral',
    },
  },
]

export const content = {
  es: {
    meta: {
      title: 'PMA Chile | Soluciones industriales para pickups y operaciones en terreno',
      description:
        'PMA Chile equipa pickups, 4x4 y operaciones mineras con accesorios industriales orientados a continuidad operacional, compatibilidad y uso real en terreno.',
    },
    brand: {
      name: 'PMA Chile',
      tagline: 'Accesorios industriales para 4x4, pickups y minería',
    },
    navigation: [
      { id: 'home', label: 'Inicio' },
      { id: 'products', label: 'Productos' },
      { id: 'product-detail', label: 'Detalle técnico' },
      { id: 'companies', label: 'Empresas' },
      { id: 'contact', label: 'Contacto' },
    ],
    navbar: {
      cta: 'Cotizar',
    },
    hero: {
      eyebrow: 'Equipamiento técnico para terreno chileno',
      title: 'Soluciones industriales para pickups y operaciones en terreno',
      description:
        'Equipamiento técnico diseñado para faena, logística y condiciones extremas en Chile.',
      primaryAction: 'Solicitar cotización',
      secondaryAction: 'Ver productos',
      support: [
        'Implementación para flotas y contratistas',
        'Compatibilidad con plataformas de trabajo en Chile',
        'Asesoría técnica para operación real en terreno',
      ],
      visual: {
        badge: 'PMA | Tecnología industrial chilena',
        title: 'Operación, protección y continuidad.',
        description:
          'Diseño visual inspirado en terreno minero, polvo, carga y uso intensivo. La propuesta prioriza confianza comercial y lectura rápida.',
        stats: [
          { value: 'B2B', label: 'Flotas y abastecimiento' },
          { value: '4x4', label: 'Uso real en terreno' },
          { value: 'Chile', label: 'Soporte local' },
        ],
      },
    },
    trust: {
      items: [
        {
          title: 'Diseñado para condiciones reales',
          description: 'Productos pensados para vibración, polvo, carga y jornadas extensas en operación.',
          icon: 'shield',
        },
        {
          title: 'Compatible con flotas en Chile',
          description: 'Selección por plataforma vehicular, aplicación y requerimiento técnico local.',
          icon: 'fleet',
        },
        {
          title: 'Soporte y stock local',
          description: 'Respuesta comercial cercana para compras directas, proyectos y faenas.',
          icon: 'stock',
        },
      ],
    },
    products: {
      eyebrow: 'Productos',
      title: 'Líneas orientadas a trabajo, continuidad y equipamiento serio.',
      description:
        'No es un catálogo genérico. Cada línea está pensada para resolver necesidades reales de operación, carga, seguridad y soporte técnico.',
      items: sharedProducts,
    },
    companies: {
      eyebrow: 'Soluciones para empresas',
      title: 'Soluciones para flotas y operaciones',
      description:
        'PMA trabaja con empresas que necesitan implementar vehículos de faena, pickups de supervisión y unidades de apoyo con criterio técnico y rapidez comercial.',
      pillars: [
        {
          title: 'Implementación en faenas',
          description: 'Configuración de vehículos para operación minera, mantención y logística interior.',
        },
        {
          title: 'Equipamiento para contratistas',
          description: 'Soluciones consistentes para contratistas que requieren estandarización y continuidad operacional.',
        },
        {
          title: 'Soluciones a medida',
          description: 'Selección modular según plataforma, carga, seguridad y uso real del vehículo.',
        },
      ],
      action: 'Solicitar propuesta',
    },
    differentiation: {
      eyebrow: 'Por qué PMA',
      items: [
        'Uso real en terreno',
        'No productos genéricos',
        'Asesoría técnica',
        'Enfoque industrial',
      ],
    },
    productDetail: {
      eyebrow: 'Detalle técnico destacado',
      title: 'Integración operacional para pickups de faena',
      description:
        'Una configuración PMA combina protección frontal, iluminación auxiliar, estructura de carga y accesorios de soporte para mantener la unidad lista para trabajo continuo.',
      bullets: [
        'Selección por tipo de operación: minería, logística, supervisión o mantenimiento.',
        'Integración de accesorios sin depender de soluciones universales poco confiables.',
        'Propuesta visual y técnica pensada para compra rápida y decisión informada.',
      ],
      infoCards: [
        { title: 'Aplicación', value: 'Pickups de supervisión, apoyo y trabajo intensivo' },
        { title: 'Objetivo', value: 'Reducir fricción en cotización, selección e implementación' },
        { title: 'Cobertura', value: 'Santiago y atención comercial para operaciones en todo Chile' },
      ],
    },
    contact: {
      eyebrow: 'Contacto comercial',
      title: 'Cotiza para tu operación.',
      description:
        'Cuéntanos qué vehículo, flota o requerimiento necesitas implementar. PMA responde con foco en compatibilidad, velocidad comercial y uso real.',
      whatsappLabel: 'WhatsApp comercial',
      whatsappNumber: '+56 9 4218 7760',
      whatsappHref: 'https://wa.me/56942187760',
      channels: [
        { label: 'Correo', value: 'contacto@pma-industrial.cl' },
        { label: 'Teléfono', value: '+56 2 2984 6100' },
        { label: 'Cobertura', value: 'Santiago, Antofagasta, Calama y atención remota nacional' },
      ],
      form: {
        title: 'Solicitud rápida',
        fields: [
          { label: 'Nombre', placeholder: 'Nombre y apellido', type: 'text' },
          { label: 'Empresa', placeholder: 'Empresa o razón social', type: 'text' },
          { label: 'Requerimiento', placeholder: 'Ej.: 6 pickups para faena con rack, parachoques e iluminación', type: 'textarea' },
        ],
        action: 'Cotizar ahora',
      },
    },
    footer: {
      statement:
        'PMA Chile comunica una propuesta comercial-industrial: productos serios, asesoría útil y foco en equipamiento para operación real.',
      note: 'Base preparada para crecer hacia ecommerce, catálogo bilingüe y flujos B2B más avanzados.',
    },
  },
  en: {
    meta: {
      title: 'PMA Chile | Industrial solutions for pickups and field operations',
      description:
        'PMA Chile equips pickups, 4x4 fleets and mining operations with industrial accessories built for real field use.',
    },
  },
}
