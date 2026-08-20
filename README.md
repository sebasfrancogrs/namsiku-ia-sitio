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
│   ├── servicios/page.js
│   ├── portafolio/
│   │   ├── page.js              # Grid de casos
│   │   └── [slug]/page.js       # Detalle de caso
│   ├── nosotros/page.js
│   ├── contacto/
│   │   ├── page.js
│   │   └── ContactForm.js       # Client component con validación
│   └── api/
│       ├── chat/route.js        # POST → Anthropic (Claude)
│       └── contacto/route.js    # POST → webhook de n8n
├── components/                  # Header, Footer, ChatWidget, Logo
└── lib/portfolio.js             # Contenido de los 5 casos del portafolio
```

## Contenido pendiente de reemplazo

- **Logo real**: `public/logo-mark.svg` es un placeholder geométrico. Reemplazar
  cuando llegue el archivo del rostro de jaguar.
- **Imágenes del portafolio**: `public/portafolio/*.svg` son placeholders de
  marca. Reemplazar con capturas/imágenes reales de cada caso.
- **Caso 5 del portafolio**: "Asistente de documentación clínica" está marcado
  como `esPlaceholder: true` en `src/lib/portfolio.js` — es un caso conceptual
  a definir, no un proyecto entregado.
- **Resultado del modelo de ML**: `public/portafolio/apnea-ml-resultado.svg` es
  un placeholder. Reemplazar con el export real del notebook de Google Colab.

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
