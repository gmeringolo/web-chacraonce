// Todo el contenido editable de la web: textos, links e imágenes.
// Para cambiar un texto o una imagen, editá este archivo; los componentes no hace falta tocarlos.

export const SITE_URL = "https://chacraonce.com.uy";

export const contacto = {
  telefono: "+598 95 142956",
  whatsapp: "https://wa.me/59895142956",
  email: "contacto@chacraonce.com.uy",
  ubicacion: "Montevideo, Uruguay",
  instagram: "@chacraonce",
  instagramUrl: "https://instagram.com/chacraonce",
};

export const navLinks = [
  { label: "Equipo", href: "#equipo" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
];

export const inicio = {
  titulo: "Construimos confianza",
  subtitulos: [
    "Tu proyecto, pensado para vos, con el presupuesto exacto.",
    "Lo construimos juntos, sin sorpresas en el camino.",
  ],
  botonPrincipal: { label: "Empezar mi proyecto", href: "#contacto" },
  botonSecundario: { label: "Ver proyectos", href: "#proyectos" },
  imagen: {
    src: "/img/hero.jpg",
    alt: "Fachada de una casa contemporánea en blanco y negro con ventanales y jardín",
  },
};

export const proposito = {
  chip: "Nuestro propósito",
  titulo: ["Construir es un", "acto de confianza"],
  parrafos: [
    "Chacra Once nace de un patrón que vimos repetirse en quienes construyen: la incertidumbre de no saber, en cada paso de la obra, qué pasa con su dinero.",
    "Esa vivencia se transformó en un propósito claro: que cada cliente viva la construcción como una experiencia confiable y positiva, donde cada decisión se tome con transparencia y sentido común.",
  ],
  imagen: {
    src: "/img/proposito.jpg",
    alt: "Vista lateral de una casa de hormigón blanco con un árbol al frente",
  },
};

export type Persona = {
  nombre: string;
  rol: string;
  descripcion: string;
  // Foto del círculo de la card. Cuando esté, poné por ejemplo:
  // foto: { src: "/img/equipo/rodolfo.jpg", alt: "Rodolfo Couñago" }
  // Mientras sea null se muestra el ícono de persona.
  foto: { src: string; alt: string } | null;
};

export const equipo: {
  chip: string;
  titulo: string;
  bajada: string[];
  personas: Persona[];
  banda: { src: string; alt: string };
} = {
  chip: "Nuestro equipo",
  titulo: "Tres personas, un mismo compromiso",
  bajada: [
    "Detrás de Chacra Once no hay una oficina anónima:",
    "hay un equipo chico, estable, con roles bien claros.",
  ],
  personas: [
    {
      nombre: "Rodolfo Couñago",
      foto: null,
      rol: "Ing. Civil — Obras y proyectos civiles",
      descripcion:
        "Más de 15 años dirigiendo obras civiles y montajes industriales. Convierte tu idea en una obra que se sostiene en el tiempo.",
    },
    {
      nombre: "Laura Couñago",
      foto: null,
      rol: "MBA / Ing. Civil — Control de calidad",
      descripcion:
        "Presupuesta, compra y cuida de que cada peso invertido rinda al máximo, sin desviarse del presupuesto firmado.",
    },
    {
      nombre: "Norbert Both",
      foto: null,
      rol: "Escribano / Abogado — Estructuras financieras",
      descripcion:
        "Blinda legalmente cada proyecto con estructuras financieras sólidas, para que tu inversión esté protegida en todo momento.",
    },
  ],
  banda: {
    src: "/img/banda.jpg",
    alt: "Casa de una planta iluminada al atardecer, con una persona caminando frente a la fachada",
  },
};

export const porQueElegirnos = {
  chip: "Por qué elegirnos",
  titulo: ["Personas reales,", "números sin sorpresas"],
  items: [
    {
      titulo: "Un equipo, no una oficina anónima",
      texto: "Somos los 3 socios fundadores los que acompañaremos tu obra de punta a punta.",
    },
    {
      titulo: "Cotización sin sorpresas",
      texto: "Un número claro desde el primer día, sin letra chica ni ajustes que aparecen a mitad de obra.",
    },
    {
      titulo: "Profesionales cercanos, resolutivos y comprometidos",
      texto: "Conocimiento técnico real, puesto al servicio de tu proyecto, con seguridad y honestidad.",
    },
  ],
  imagen: {
    src: "/img/por-que.jpg",
    alt: "Cocina contemporánea con isla, lámparas colgantes y banquetas",
  },
};

export const comoTrabajamos = {
  chip: "Cómo trabajamos",
  titulo: "Una constructora boutique",
  bajada: "Particulares, inversores y arquitectos se suman desde la etapa que corresponda.",
  fases: [
    {
      numero: "01",
      titulo: "Idea y viabilidad",
      texto: "Antes del diseño, un número real: si el proyecto imaginado cierra con el presupuesto disponible.",
    },
    {
      numero: "02",
      titulo: "Diseño",
      texto: "Se trabaja el proyecto con foco en usabilidad y racionalidad: que la obra funcione para cumplir con las necesidades cotidianas.",
    },
    {
      numero: "03",
      titulo: "Presupuesto",
      texto: "Cotización cerrada, sin letra chica ni ajustes a mitad de camino.",
    },
    {
      numero: "04",
      titulo: "Permisos y trámites",
      texto: "Gestionamos la documentación legal y municipal para que tu obra arranque sin sorpresas.",
    },
    {
      numero: "05",
      titulo: "Obra",
      texto: "Compras, calidad y avance, día a día, con el mismo equipo de principio a fin.",
    },
    {
      numero: "06",
      titulo: "Entrega",
      texto: "Entrega según lo pactado, con acompañamiento una vez finalizado el proyecto.",
    },
  ],
};

export const queHacemos = {
  chip: "Qué hacemos",
  titulo: ["Tres formas distintas,", "un mismo estándar"],
  items: [
    {
      titulo: "Arquitectura residencial",
      texto: "Construimos casas pensadas para vivirlas, del plano a la obra terminada.",
    },
    {
      titulo: "Ampliaciones y reformas",
      texto: "Resolvemos con la misma seriedad que una obra nueva.",
    },
    {
      titulo: "Desarrollos inmobiliarios",
      texto: "Mismo estándar de transparencia, a mayor escala.",
    },
  ],
  imagen: {
    src: "/img/que-hacemos.jpg",
    alt: "Casa blanca de dos niveles entre árboles, en blanco y negro",
  },
};

export type Proyecto = {
  ubicacion: string;
  nombre: string;
  descripcion: string;
  // Imágenes provisorias: la primera es la principal, todas aparecen como miniaturas.
  imagenes: { src: string; alt: string }[];
  ficha: { label: string; valor: string }[];
  pdf: string;
};

const lapuente: Proyecto = {
  ubicacion: "Montevideo · Anteproyecto 2027",
  nombre: "Lapuente",
  descripcion:
    "Dos viviendas dúplex en régimen de propiedad horizontal sobre un padrón de 15 × 50 m.",
  imagenes: [
    { src: "/img/lapuente/R04-IMG-04.jpg", alt: "Patio de acceso de Lapuente con vegetación y fachada de dos niveles" },
    { src: "/img/lapuente/R04-IMG-02.jpg", alt: "Fondo de la vivienda con barbacoa techada y ventanales al estar" },
    { src: "/img/lapuente/R04-IMG-06.jpg", alt: "Cocina con isla de madera y ventanales al patio" },
    { src: "/img/lapuente/R06-IMG-05.jpg", alt: "Estar comedor integrado con la cocina" },
    { src: "/img/lapuente/R04-IMG-07.jpg", alt: "Estar con escalera y patio interior verde" },
  ],
  ficha: [
    { label: "Unidades", valor: "2 Dúplex" },
    { label: "Terreno", valor: "750 m²" },
    { label: "Interior", valor: "153,9 m² c/u" },
    { label: "Exterior techado", valor: "47,4 m² c/u" },
    { label: "Dormitorios", valor: "3 + 2 baños + toilette" },
    { label: "Altura", valor: "Hasta 9 mts" },
  ],
  pdf: "/ACCA-PLP-ATP-2UN-R06-260925.pdf",
};

export const proyectos = {
  chip: "Nuestros proyectos",
  titulo: "Obras que hablan por nosotros",
  boton: "Conoce el proyecto",
  // La card de Lapuente está duplicada para probar el carrusel.
  lista: [lapuente, lapuente],
};

export const contactoSeccion = {
  titulo: "¿Listo para bajar a tierra tu idea?",
  subtitulo: "Generemos el proyecto que se adapta a tus necesidades y tu presupuesto.",
  imagen: {
    src: "/img/contacto.jpg",
    alt: "Frente de una casa con revestimiento de madera y un olivo",
  },
  formulario: {
    titulo: "Formulario de contacto",
    boton: "Enviar",
    exito: {
      titulo: "¡Gracias por escribirnos!",
      texto: "Recibimos tu mensaje y te vamos a contactar a la brevedad.",
    },
    error: "No pudimos enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.",
  },
};

export const footer = {
  texto:
    "Desarrollamos diseños urbanos innovadores que mejoran la calidad de vida y promueven el crecimiento sostenible.",
  links: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Equipo", href: "#equipo" },
    { label: "Diferencial", href: "#diferencial" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
  ],
  derechos: "©2026 Chacra Once. Todos los derechos reservados.",
  desarrollador: { label: "Sacapuntas", href: "https://sacapuntas.com.uy/" },
};
