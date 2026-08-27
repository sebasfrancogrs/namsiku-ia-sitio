# Namsiku IA — Sitio web

Sitio de portafolio y consultoría para Namsiku IA, construido con Next.js (App
Router), React y Tailwind CSS. Práctica final del programa StudIA.

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completar las variables (ver abajo)
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Dónde se usa | Notas |
|---|---|---|
| `AI_PROVIDER` | `src/lib/ai/index.js` | `anthropic` (default) u `openrouter`. Cambiar de proveedor no requiere tocar código. |
| `ANTHROPIC_API_KEY` / `ANTHROPIC_MODEL` | `src/lib/ai/anthropic.js` | Requeridas si `AI_PROVIDER=anthropic`. Modelo default: `claude-opus-5`. |
| `OPENROUTER_API_KEY` / `OPENROUTER_MODEL` | `src/lib/ai/openrouter.js` | Requeridas si `AI_PROVIDER=openrouter`. `OPENROUTER_MODEL` es el slug del modelo (ver [openrouter.ai/models](https://openrouter.ai/models)) — sin default, hay que fijarlo explícitamente. |
| `N8N_CONTACT_WEBHOOK_URL` | `src/app/api/contacto/route.js` | URL del webhook de n8n que recibe el formulario de contacto. |

Sin estas variables, el sitio corre igual — el chat y el formulario responden
con un error controlado hasta que se configuren.

### Agregar un proveedor de IA nuevo

`src/lib/ai/` es un adaptador simple: cada proveedor es un archivo con
`isConfigured()`, `getReply(systemPrompt, messages)`, `isAuthError(error)` e
`isRateLimitError(error)`. Para sumar uno, crear el archivo y registrarlo en
`PROVIDERS` dentro de `src/lib/ai/index.js`.

## Estructura

```
src/
├── app/
│   ├── page.js                 # Inicio
│   ├── servicios/               # Los 4 servicios + FAQ (una sola página)
│   ├── portafolio/page.js       # Vitrina de capacidades (no proyectos)
│   ├── casos-de-exito/page.js   # Proyectos reales, con resultados medidos
│   ├── nosotros/page.js
│   ├── contacto/
│   │   ├── page.js
│   │   └── ContactForm.js       # Client component con validación
│   └── api/
│       ├── chat/route.js        # POST → proveedor de IA (ver AI_PROVIDER)
│       └── contacto/route.js    # POST → webhook de n8n
├── components/                  # Header, Footer, ChatWidget, Logo
└── lib/
    ├── casos.js                 # Los 5 casos reales de /casos-de-exito
    └── capacidades.js           # Las capacidades de /portafolio
```

`/portafolio` y `/casos-de-exito` son conceptos separados a propósito: portafolio
muestra qué se puede construir (sin nombrar clientes ni resultados), casos de
éxito muestra proyectos reales ya entregados con su resultado medido.

## Contenido pendiente de reemplazo

- **Imagen del caso ASAPP**: el archivo que se subió (`ASAPP.png`) resultó ser
  el de una empresa distinta (venta de artículos promocionales, sin relación
  con el agente de cotizaciones por WhatsApp) — pendiente de que llegue el
  archivo correcto. Mientras tanto sigue el placeholder SVG en
  `public/portafolio/asapp.svg`.
- **Imágenes de Apnea Performance Tracker y Windows Audit Toolkit**: siguen
  siendo placeholders SVG en `public/portafolio/`.
- **Caso 5 de "Casos de éxito"**: "Asistente de documentación clínica" está
  marcado como `enDesarrollo: true` en `src/lib/casos.js` — es un caso
  conceptual a definir, no un proyecto entregado.
- **Resultado del modelo de ML**: `public/portafolio/apnea-ml-resultado.svg`
  sigue siendo un placeholder. Reemplazar con el export real del notebook de
  Google Colab.

Ya resueltos: el logo real está en `public/logo-mark.svg` (además de
`src/app/favicon.ico` y `src/app/apple-icon.png`, generados a partir del
mismo archivo), y la imagen real de ProtoCertIA está en
`public/portafolio/protocertia.png`.

## Deploy (Coolify)

El proyecto incluye `Dockerfile` con build multi-stage y salida `standalone`
de Next.js, listo para desplegarse como **Application** en Coolify:

1. Subir el repo a git (ver más abajo).
2. En Coolify: New Resource → Application → conectar el repo.
3. Build pack: Dockerfile (detectado automáticamente).
4. Configurar `ANTHROPIC_API_KEY` y `N8N_CONTACT_WEBHOOK_URL` como variables de
   entorno del recurso en Coolify (no van en el repo).
5. Dominio: usar el `sslip.io` que Coolify asigna automáticamente — no
   requiere tocar el Cloudflare Tunnel del servidor. Ver `CLAUDE.md` en la raíz
   del servidor (`/home/ubuntu/CLAUDE.md`) para el detalle de esa decisión.
