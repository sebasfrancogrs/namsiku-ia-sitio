export const casos = [
  {
    slug: "asapp-agente-cotizaciones",
    nombre: "ASAPP — Agente de cotizaciones por WhatsApp",
    resumen:
      "Automatización con n8n que cotiza, genera el PDF y responde por WhatsApp sin intervención humana.",
    imagen: "/portafolio/asapp.svg",
    problema:
      "El equipo comercial perdía horas armando cotizaciones a mano por WhatsApp, con respuestas lentas y errores de cálculo en horas pico.",
    solucion:
      "Un agente conversacional con estado, construido en n8n, que sostiene la conversación, calcula la cotización según reglas de negocio, genera el PDF y lo entrega por WhatsApp vía Evolution API — todo en el mismo hilo de chat.",
    herramientas: ["n8n", "Evolution API", "WhatsApp", "Generación de PDF"],
  },
  {
    slug: "protocertia-certificados",
    nombre: "ProtoCertIA — Automatización de certificados con IA",
    resumen:
      "Extracción de datos con visión por computadora y generación de certificados oficiales por código.",
    imagen: "/portafolio/protocertia.svg",
    problema:
      "Emitir certificados de calidad de producto era un proceso manual, lento y propenso a errores de transcripción, con un cliente real (Protokimica) esperando un flujo confiable.",
    solucion:
      "Un pipeline que extrae datos de documentos fuente con visión por computadora y genera el certificado oficial en PDF por código, sin plantillas frágiles. MVP en implementación activa con Protokimica.",
    herramientas: [
      "Visión por computadora",
      "Node.js",
      "Generación de PDF por código",
      "React",
    ],
  },
  {
    slug: "apnea-performance-tracker",
    nombre: "Apnea Performance Tracker",
    resumen:
      "Dashboard de rendimiento deportivo que correlaciona sueño y salud con el desempeño en entrenamiento.",
    imagen: "/portafolio/apnea.svg",
    problema:
      "Un atleta de apnea no tenía forma de ver cómo su sueño y estado de salud afectaban su rendimiento real en el agua, más allá de la intuición.",
    solucion:
      "Dashboard que cruza datos de sueño y salud con sesiones de entrenamiento, con timers integrados y un modelo de correlación que expone qué variables realmente mueven el rendimiento.",
    herramientas: ["Análisis de datos", "Dashboard a medida", "Modelo de correlación"],
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
    resumen: "Herramienta de auditoría de sistema para migraciones de equipos Windows.",
    imagen: "/portafolio/windows-audit.svg",
    problema:
      "Antes de migrar equipos, el equipo de TI no tenía un inventario confiable ni rápido del estado real de cada máquina: software instalado, configuración, riesgos.",
    solucion:
      "Toolkit de auditoría que recorre el sistema y genera un reporte pre-migración claro, pensado para que cualquier técnico lo corra sin fricción.",
    herramientas: ["PowerShell", "Automatización de sistema", "Reportes"],
  },
  {
    slug: "asistente-documentacion-clinica",
    nombre: "Asistente de documentación clínica",
    resumen:
      "Caso conceptual: asistente que ordena y estructura notas clínicas dictadas por el profesional de salud.",
    imagen: "/portafolio/documentacion-clinica.svg",
    problema:
      "El personal de salud pierde tiempo valioso transcribiendo y ordenando notas clínicas después de cada consulta, en vez de estar con el siguiente paciente.",
    solucion:
      "Caso propuesto: un asistente que toma la nota dictada o escrita en lenguaje libre y la estructura en el formato clínico requerido, con revisión humana antes de guardar. (Caso conceptual — placeholder de esta fase, pendiente de definir con el cliente).",
    herramientas: ["LLM", "Estructuración de texto", "Revisión humana en el flujo"],
    esPlaceholder: true,
  },
];

export function getCasoBySlug(slug) {
  return casos.find((caso) => caso.slug === slug);
}
