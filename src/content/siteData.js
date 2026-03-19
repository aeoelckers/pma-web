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
    id: 'parachoques-operacional-hdx',
    category: 'Protección estructural',
    name: 'Parachoques Operacional HDX',
    compatibility: 'Toyota Hilux, Ford Ranger, Mitsubishi L200',
    summary:
      'Parachoques frontal de acero reforzado con puntos de izaje, espacio para winche y configuración para faena.',
    specs: [
      'Acero estructural con terminación anticorrosiva',
      'Preparación para winche de 9.500 a 12.000 lb',
      'Puntos de rescate certificados para uso operacional',
    ],
    applications: ['Minería', 'Brigadas de mantenimiento', 'Operaciones 4x4'],
  },
  {
    id: 'rack-carga-faena-pro',
    category: 'Carga y operación',
    name: 'Rack de Carga Faena Pro',
    compatibility: 'Camionetas doble cabina y flotas de servicio',
    summary:
      'Rack modular para traslado seguro de herramientas, tuberías, escaleras y equipamiento en rutas mixtas.',
    specs: [
      'Diseño modular con barras de anclaje ajustables',
      'Capacidad para uso intensivo en caminos no pavimentados',
      'Integración con balizas, porta herramientas y cajas laterales',
    ],
    applications: ['Logística', 'Mantenimiento en terreno', 'Contratistas industriales'],
  },
  {
    id: 'kit-iluminacion-minera-led',
    category: 'Visibilidad y seguridad',
    name: 'Kit de Iluminación Minera LED',
    compatibility: 'Pickups, vehículos de apoyo y equipos de rescate',
    summary:
      'Sistema LED de alta intensidad para visibilidad perimetral, rutas nocturnas y maniobras en ambientes con polvo.',
    specs: [
      'Óptica combinada spot/flood para operación nocturna',
      'Arnés sellado para ambientes con vibración y humedad',
      'Montaje en parachoques, rack o cabina técnica',
    ],
    applications: ['Faenas mineras', 'Seguridad operacional', 'Rescate'],
  },
]

export const content = {
  es: {
    meta: {
      title: 'PMA | Soluciones industriales para 4x4, pickups y minería',
      description:
        'PMA equipa pickups, flotas 4x4 y operaciones mineras en Chile con accesorios robustos, compatibles y diseñados para uso real en terreno.',
    },
    navigation: [
      { id: 'home', label: 'Inicio' },
      { id: 'products', label: 'Productos' },
      { id: 'product-detail', label: 'Detalle técnico' },
      { id: 'companies', label: 'Empresas' },
      { id: 'contact', label: 'Contacto' },
    ],
    hero: {
      eyebrow: 'Equipamiento técnico para terreno chileno',
      title: 'Accesorios industriales para pickups, 4x4 y operaciones mineras.',
      description:
        'PMA desarrolla soluciones robustas para vehículos de faena, flotas logísticas y usuarios exigentes que operan en polvo, roca, ripio y rutas de alto desgaste.',
      primaryAction: 'Solicitar evaluación técnica',
      secondaryAction: 'Ver líneas de producto',
      metrics: [
        { value: '4x4 + faena', label: 'Diseñado para trabajo real en terreno' },
        { value: 'B2B / B2C', label: 'Atención a empresas y usuarios especializados' },
        { value: 'Chile', label: 'Enfoque en condiciones y requerimientos locales' },
      ],
    },
    highlights: {
      eyebrow: 'Capacidades PMA',
      title: 'Una propuesta técnica, no un catálogo genérico.',
      items: [
        {
          title: 'Compatibilidad operacional',
          description:
            'Las soluciones PMA se estructuran por plataforma vehicular, tipo de uso y requerimientos de seguridad operacional.',
        },
        {
          title: 'Durabilidad verificable',
          description:
            'Materiales, fijaciones y terminaciones orientadas a vibración, carga, polvo y ciclos extensos de trabajo.',
        },
        {
          title: 'Implementación escalable',
          description:
            'Desde una camioneta de apoyo hasta una flota completa con requerimientos de homologación y cotización centralizada.',
        },
      ],
    },
    products: {
      eyebrow: 'Líneas de producto',
      title: 'Componentes pensados para continuidad operacional.',
      description:
        'Cada solución prioriza resistencia, integración y mantención simple. No se presenta como retail masivo, sino como equipamiento de trabajo.',
      items: sharedProducts,
    },
    productDetail: {
      eyebrow: 'Detalle técnico destacado',
      title: 'Parachoques Operacional HDX',
      description:
        'Configuración de referencia para vehículos de apoyo minero y camionetas de servicio en operación intensiva.',
      bullets: [
        'Geometría preparada para mejorar ángulo de ataque sin sacrificar protección frontal.',
        'Anclajes estructurales diseñados para integrarse a chasis y accesorios complementarios.',
        'Desarrollo orientado a rescate, arrastre y protección de componentes críticos.',
      ],
      infoCards: [
        { title: 'Materialidad', value: 'Acero reforzado + recubrimiento anticorrosivo' },
        { title: 'Escenario de uso', value: 'Minería, mantenimiento, logística 4x4' },
        { title: 'Integraciones', value: 'Winche, iluminación, puntos de rescate, sensores' },
      ],
    },
    companies: {
      eyebrow: 'Atención para empresas',
      title: 'Cotización para flotas, contratistas y operaciones en terreno.',
      description:
        'PMA atiende requerimientos por volumen, compatibilidad por modelo y estandarización de accesorios para faena. El objetivo es simplificar la implementación, no solo vender una pieza.',
      benefits: [
        'Levantamiento técnico por tipo de vehículo y operación.',
        'Propuesta modular para compras por etapa o por flota completa.',
        'Canal de contacto orientado a áreas de abastecimiento y mantenimiento.',
      ],
      form: {
        title: 'Solicitud de cotización',
        fields: [
          { label: 'Empresa o razón social', placeholder: 'Ej.: Servicios Mineros del Norte' },
          { label: 'Cargo / área solicitante', placeholder: 'Ej.: Abastecimiento, Operaciones, Mantención' },
          { label: 'Tipo de flota o aplicación', placeholder: 'Ej.: Hilux faena, Ranger supervisión, logística interior' },
          { label: 'Volumen estimado', placeholder: 'Ej.: 8 unidades, implementación gradual trimestral' },
          { label: 'Requerimiento técnico', placeholder: 'Detalle compatibilidad, accesorios o normas internas' },
        ],
        action: 'Enviar requerimiento',
      },
    },
    contact: {
      eyebrow: 'Contacto comercial',
      title: 'Conversemos sobre su operación.',
      description:
        'Atención enfocada en compatibilidad, disponibilidad y uso real. PMA responde consultas técnicas, solicitudes comerciales y evaluación preliminar de proyectos.',
      channels: [
        { label: 'Correo comercial', value: 'contacto@pma-industrial.cl' },
        { label: 'Teléfono', value: '+56 2 2984 6100' },
        { label: 'Cobertura', value: 'Santiago, Antofagasta, Calama y atención remota nacional' },
      ],
    },
    footer: {
      statement:
        'PMA equipa vehículos y operaciones con una lógica industrial: resistencia, compatibilidad y trabajo continuo en condiciones reales.',
      note: 'Arquitectura preparada para escalar a ecommerce, catálogo bilingüe y flujos B2B avanzados.',
    },
  },
  en: {
    meta: {
      title: 'PMA | Industrial solutions for 4x4, pickups and mining',
      description:
        'PMA equips pickups, 4x4 fleets and mining operations in Chile with rugged accessories engineered for real field use.',
    },
  },
}
