# Chacra Once — web onepage

Web de Chacra Once (constructora boutique, Montevideo) hecha con **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, lista para publicar en **Netlify** desde GitHub.

Dominio: https://chacraonce.com.uy

## Requisitos

- Node.js 20.9 o superior (recomendado 22)
- npm

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build localmente
npm run lint     # revisar el código
```

## Estructura

```
app/
  layout.tsx          fuente, metadata, favicon y Google Analytics
  page.tsx            une todas las secciones en una sola página
  globals.css         tokens de diseño (colores, estilos de texto, contenedor, scroll)
  sitemap.ts, robots.ts
  fonts/              JetBrains Mono variable
components/
  sections/           Navbar, Inicio, NuestroProposito, NuestroEquipo, PorQueElegirnos,
                      ComoTrabajamos, QueHacemos, NuestrosProyectos, Contacto, Footer
  ui/                 botones, íconos, cards, formulario, WhatsApp flotante
content/site.ts       TODOS los textos, links e imágenes
public/
  img/                imágenes de las secciones
  img/lapuente/       imágenes provisorias del proyecto Lapuente
  ACCA-PLP-ATP-2UN-R06-260925.pdf
  __forms.html        formulario oculto para que Netlify detecte "contacto"
  favicon.*           favicon adaptable (claro/oscuro)
```

## Editar contenido

Todo el texto, los links (WhatsApp, email, Instagram) y las rutas de imágenes están en `content/site.ts`. No hace falta tocar los componentes.

### Reemplazar las imágenes de Lapuente

1. Copiá las imágenes definitivas en `public/img/lapuente/` (JPG de hasta 2560 px de lado; Next.js las optimiza solo).
2. En `content/site.ts`, dentro de `lapuente.imagenes`, cambiá `src` y `alt`. La **primera** es la imagen grande; las siguientes cuatro son las miniaturas.

### Reemplazar el PDF de Lapuente

Reemplazá `public/ACCA-PLP-ATP-2UN-R06-260925.pdf`. Si el archivo nuevo tiene otro nombre, actualizá `pdf` en `content/site.ts`.

### Carrusel de proyectos

La card de Lapuente está duplicada para probar el carrusel (`proyectos.lista` en `content/site.ts`). Para agregar un proyecto real, creá otro objeto como `lapuente` y sumalo a la lista; para dejar uno solo, borrá el duplicado (las flechas y los indicadores se ocultan solos).

## Deploy en Netlify

1. Subí el proyecto a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project → GitHub** y elegí el repo.
3. Netlify detecta Next.js solo. La configuración está en `netlify.toml` (build `npm run build`).
4. **Variables de entorno** (Site configuration → Environment variables):
   - `NEXT_PUBLIC_GA_ID` = el ID de medición de Google Analytics 4 (`G-XXXXXXX`). Si no está cargada, Analytics no se carga. Después de agregarla, hacé un nuevo deploy.
5. **Dominio**: Domain management → Add a domain → `chacraonce.com.uy`, y seguí los pasos de DNS que indica Netlify.

## Formulario de contacto (Netlify Forms)

- El formulario se llama `contacto`. Netlify lo detecta en el deploy gracias a `public/__forms.html`.
- Si agregás o cambiás campos en `components/ui/FormularioContacto.tsx`, actualizá también `public/__forms.html` con los mismos `name`.
- Los envíos se ven en Netlify → **Forms**.
- **Notificaciones por email**: Netlify → Site configuration → Forms → **Form notifications → Add notification → Email notification**, elegí el form `contacto` y el correo que recibe los mensajes (por ejemplo contacto@chacraonce.com.uy).
- Tiene honeypot anti-spam (`bot-field`). Netlify además filtra spam con Akismet.

## Comportamiento responsive

- Diseño base: 1440 px. Breakpoints: mobile < 768, tablet 768–1279, desktop ≥ 1280.
- El contenido vive en un contenedor de 1128 px; a más de 1440 px solo crecen los márgenes y las imágenes a sangre (hero y contacto) se estiran.
- Desktop: cada sección ocupa la pantalla y el scroll encaja al inicio de la siguiente (`scroll-snap`). En tablet y mobile las secciones crecen lo necesario y el encaje es suave.
- Los textos se achican con `clamp()` entre 375 y 1440 px (tokens en `app/globals.css`).
