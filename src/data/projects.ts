import type { Props as ProjectProp } from "../components/projects/props";

export const PROJECTS: ProjectProp[] = [
  {
    dates: "FEBRERO - 2026",
    title: "Salud Animal",
    projectUrl: "https://vet-strapi.vercel.app/",
    description:
      "Aplicación web fullstack para una clínica veterinaria desarrollada con arquitectura desacoplada. El frontend consume contenido dinámico desde Strapi Cloud con una arquitectura Feature-Sliced Design (FSD). Implementa renderizado optimizado con Next.js y despliegue continuo en Vercel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "Node.js"],
    image: "/images/vetstrapi.webp",
    status: "LIVE",
  },
  {
    dates: "JULIO - 2025",
    title: "MonoLogo",
    projectUrl: "https://mono-logo.vercel.app/",
    description:
      "Website con diseño moderno que remueve los fondos blancos de los logos, los recorta y te permite descargar sus 3 variantes en formato PNG con transparencia (A color, blanco y negro). Perfecto para equipos de Marketing y branding empresarial",
    technologies: ["Vite", "TypeScript", "Tailwind CSS", "React"],
    image: "/images/monologo.webp",
    status: "LIVE",
  },
  {
    dates: "ABRIL - 2021",
    title: "Alien Chasers GX",
    projectUrl: "https://gamejolt.com/games/AlienChasers/637390",
    description:
      "Videojuego shot'em up en 2D con estilo pixel art, desarrollado para la Opera GX Game Jam 2021. En donde el juego ganador podía pertenecer al minijuego de estado sin conexión a internet (como el dinosaurio del Google Chrome)",
    technologies: ["JavaScript", "HTML5", "GameMaker Studio 2"],
    image: "/images/alien-chasers.webp",
    status: "LIVE",
  },
];
