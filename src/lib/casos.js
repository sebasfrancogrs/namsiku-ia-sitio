export const casos = [
  {
    slug: "asapp-agente-cotizaciones",
    nombre: "ASAPP — Agente de cotizaciones por WhatsApp",
    imagen: "/portafolio/asapp.svg",
    problema:
      "Cotizar le tomaba al dueño entre 20 y 45 minutos por cliente: 5 a 30 minutos de conversación más unos 15 minutos redactando y exportando el PDF a mano.",
    queConstruimos:
      "Un agente conversacional con estado, construido en n8n, que sostiene la conversación, calcula la cotización según reglas de negocio, genera el PDF y lo entrega por WhatsApp vía Evolution API, todo en el mismo hilo de chat.",
    resultado:
      "Ese tiempo personal quedó recuperado por completo: hoy el sistema conversa, cotiza y genera el PDF sin que el dueño intervenga.",
    herramientas: ["n8n", "Evolution API", "WhatsApp", "Generación de PDF"],
    beneficios: [
      { icono: "clock", texto: "20-45 min por cliente devueltos al dueño" },
      { icono: "target", texto: "Cotiza, calcula y genera el PDF sin intervención" },
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
    imagen: "/portafolio/protocertia.png",
    problema:
      "Cada certificado tomaba entre 20 y 30 minutos, transcrito a mano desde el documento fuente, con el margen de error que eso implica.",
    queConstruimos:
      "Un pipeline que extrae datos del documento fuente con visión por computadora y genera el certificado oficial en PDF por código, sin plantillas frágiles. Piloto activo con Protokimica.",
    resultado:
      "2 minutos por documento (90% de reducción), ~1.560 documentos procesados por mes al ritmo actual, y una tasa de error que bajó de 5.5% a 0.5% (91% menos errores). Datos medidos en producción, no estimaciones.",
    herramientas: [
      "Visión por computadora",
      "Node.js",
      "Generación de PDF por código",
      "React",
    ],
    beneficios: [
      { icono: "clock", texto: "De 20 a 2 minutos por documento (-90%)" },
      {
        icono: "trendingUp",
        texto: "~1.560 certificados/mes al ritmo actual (30/hora, 2 h/día, 6 días/semana)",
      },
      {
        icono: "shield",
        texto:
          "Ese volumen a mano habría requerido ~520 horas/mes, más de lo que cubre una sola persona a tiempo completo: evita sumar personal para sostener el ritmo",
      },
      {
        icono: "target",
        texto: "Tasa de error de 5.5% a 0.5% (-91%, ~11 veces menos errores)",
      },
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
