export const casos = [
  {
    slug: "asapp-agente-cotizaciones",
    nombre: "ASAPP — Agente de cotizaciones por WhatsApp",
    imagen: "/portafolio/asapp.svg",
    problema:
      "El equipo comercial perdía horas armando cotizaciones a mano por WhatsApp, con respuestas lentas y errores de cálculo en horas pico.",
    queConstruimos:
      "Un agente conversacional con estado, construido en n8n, que sostiene la conversación, calcula la cotización según reglas de negocio, genera el PDF y lo entrega por WhatsApp vía Evolution API, todo en el mismo hilo de chat.",
    resultado:
      "La cotización, que antes tomaba minutos de trabajo manual por cliente, ahora se genera al instante dentro del mismo chat, sin errores de cálculo ni demoras en horas pico.",
    herramientas: ["n8n", "Evolution API", "WhatsApp", "Generación de PDF"],
    beneficios: [
      { icono: "clock", texto: "Cotiza en minutos, no en horas" },
      { icono: "target", texto: "Cálculo sin errores de tipeo" },
      { icono: "layers", texto: "Todo en el mismo chat de WhatsApp" },
    ],
    servicioRelacionado: {
      label: "Agentes Autónomos y Conversacionales",
      href: "/servicios#agentes",
    },
  },
  {
    slug: "protocertia-certificados",
    nombre: "ProtoCertIA — Automatización de certificados con IA",
    imagen: "/portafolio/protocertia.svg",
    problema:
      "Emitir certificados de calidad de producto era un proceso manual, lento y propenso a errores de transcripción, con un cliente real (Protokimica) esperando un flujo confiable.",
    queConstruimos:
      "Un pipeline que extrae datos de documentos fuente con visión por computadora y genera el certificado oficial en PDF por código, sin plantillas frágiles.",
    resultado:
      "MVP en implementación activa con Protokimica: el certificado que se armaba dato por dato a mano hoy se genera por código a partir de la lectura automática del documento fuente, sin pasos de transcripción manual.",
    herramientas: [
      "Visión por computadora",
      "Node.js",
      "Generación de PDF por código",
      "React",
    ],
    beneficios: [
      { icono: "target", texto: "Datos extraídos sin transcripción manual" },
      { icono: "shield", texto: "Certificado oficial, trazable por código" },
      { icono: "clock", texto: "De días a minutos por certificado" },
    ],
    servicioRelacionado: {
      label: "Automatización de Procesos",
      href: "/servicios#automatizacion",
    },
  },
  {
    slug: "apnea-performance-tracker",
    nombre: "Apnea Performance Tracker",
    imagen: "/portafolio/apnea.svg",
    problema:
      "Un atleta de apnea no tenía forma de ver cómo su sueño y estado de salud afectaban su rendimiento real en el agua, más allá de la intuición.",
    queConstruimos:
      "Dashboard que cruza datos de sueño y salud con sesiones de entrenamiento, con timers integrados y un modelo de correlación que expone qué variables realmente mueven el rendimiento.",
    resultado:
      "El atleta pasó de decidir por intuición a tener un dashboard que cruza sueño, salud y entrenamiento en un solo lugar, con timers integrados para cada sesión.",
    herramientas: ["Análisis de datos", "Dashboard a medida", "Modelo de correlación"],
    beneficios: [
      { icono: "trendingUp", texto: "Correlación real entre sueño y rendimiento" },
      { icono: "clock", texto: "Timers de entrenamiento integrados" },
      { icono: "target", texto: "Decisiones basadas en datos, no en intuición" },
    ],
    servicioRelacionado: { label: "Consultoría de IA", href: "/servicios#consultoria" },
    mlResultado: {
      titulo: "Resultado del modelo (Google Colab)",
      descripcion:
        "Modelo de correlación entrenado y documentado por separado en Google Colab. Este sitio muestra su resultado como imagen estática — no se sirve en vivo.",
      imagen: "/portafolio/apnea-ml-resultado.svg",
    },
  },
  {
    slug: "windows-audit-toolkit",
    nombre: "Windows Audit Toolkit",
    imagen: "/portafolio/windows-audit.svg",
    problema:
      "Antes de migrar equipos, el equipo de TI no tenía un inventario confiable ni rápido del estado real de cada máquina: software instalado, configuración, riesgos.",
    queConstruimos:
      "Toolkit de auditoría que recorre el sistema y genera un reporte pre-migración claro, pensado para que cualquier técnico lo corra sin fricción.",
    resultado:
      "Lo que antes era una visita técnica por equipo se resolvió corriendo un script: un reporte de auditoría estandarizado, igual sin importar qué técnico lo ejecute.",
    herramientas: ["PowerShell", "Automatización de sistema", "Reportes"],
    beneficios: [
      { icono: "shield", texto: "Inventario confiable antes de migrar" },
      { icono: "clock", texto: "Auditoría en minutos, no en visitas técnicas" },
      { icono: "layers", texto: "Un reporte que cualquier técnico puede correr" },
    ],
    servicioRelacionado: {
      label: "Automatización de Procesos",
      href: "/servicios#automatizacion",
    },
  },
  {
    slug: "asistente-documentacion-clinica",
    nombre: "Asistente de documentación clínica",
    imagen: "/portafolio/documentacion-clinica.svg",
    problema:
      "El personal de salud pierde tiempo valioso transcribiendo y ordenando notas clínicas después de cada consulta, en vez de estar con el siguiente paciente.",
    queConstruimos:
      "Propuesta: un asistente que toma la nota dictada o escrita en lenguaje libre y la estructura en el formato clínico requerido, con revisión humana antes de guardar.",
    resultado:
      "Resultado esperado, caso aún no construido: menos tiempo de transcripción por consulta, con revisión humana antes de guardar cualquier nota.",
    herramientas: ["LLM", "Estructuración de texto", "Revisión humana en el flujo"],
    beneficios: [
      { icono: "clock", texto: "Menos tiempo transcribiendo notas" },
      { icono: "shield", texto: "Revisión humana antes de guardar" },
      { icono: "target", texto: "Formato clínico consistente" },
    ],
    servicioRelacionado: {
      label: "Agentes Autónomos y Conversacionales",
      href: "/servicios#agentes",
    },
    enDesarrollo: true,
  },
];

export function getCasoBySlug(slug) {
  return casos.find((caso) => caso.slug === slug);
}
