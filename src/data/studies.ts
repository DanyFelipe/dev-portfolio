import type { Props as StudiesProp } from "../components/studies/props";

export const STUDIES: StudiesProp[] = [
  {
    dates: "JUNIO 2025",
    title: "Big Data Essentials",
    company: "Certmind",
    description:
      "Diplomado de introducción a los conceptos fundamentales de Big Data, incluyendo herramientas y técnicas para el procesamiento de datos masivos.",
    technologies: [
      "Bases de datos",
      "Power BI",
      "Big Data"
    ],
    logo: "/logos/certmind.jpg",
  },
  {
    dates: "Octubre 2023",
    title: "Curso Oracle de Java y Springboot",
    company: "Alura Latam",
    description:
      "Curso de Java y Spring Boot orientado al desarrollo backend, con enfoque en buenas prácticas, desarrollo de APIs REST y arquitecturas escalables. Se abordaron principios como SOLID y el uso adecuado de Spring Boot para construir aplicaciones limpias, mantenibles y reutilizables.",
    technologies: [
      "Java",
      "Spring Boot",
      "API REST",
      "Backend",
      "SOLID"
    ],
    logo: "/logos/alura.jpg",
  },
  {
    dates: "Diciembre 2021",
    title: "Diplomado en desarrollo de aplicaciones web",
    company: "MinTIC",
    description:
      "Diplomado MisiónTIC en Desarrollo de Aplicaciones Web, enfocado en tecnologías modernas para el desarrollo frontend. Se abordaron fundamentos de JavaScript, lógica de programación, uso de frameworks frontend y buenas prácticas de desarrollo web.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Frontend"
    ],
    logo: "/logos/mintic.jpg",
  },
  {
    dates: "Noviembre 2020",
    title: "Tecnólogo en desarrollo de software",
    company: "Corporación Universitaria Minuto de Dios",
    description:
      "Tecnología en Desarrollo de Software, con formación integral en fundamentos de programación, manejo de bases de datos y aplicación de metodologías ágiles para el desarrollo de soluciones tecnológicas.",
    technologies: ["Programación POO", "Bases de datos", "Metodologías ágiles"],
    logo: "/logos/uniminuto.jpg",
  },
];
