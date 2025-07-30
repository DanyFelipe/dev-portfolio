import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const [modalImg, setModalImg] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const openModal = (src: string) => {
        setModalImg(src);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setModalImg(null), 300); // Wait for animation
    };
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <h4 className="text-left text-5xl uppercase font-light text-surface font-primary mb-2">Administrador de Plataforma, Freelancer</h4>
                    <div className="text-left text-lg font-semibold text-surface font-primary mb-4 opacity-90">Instituto Odres Nuevos, Universidad Horizonte, CENTEC</div>
                    <p className="mb-8 mt-8 text-lg font-normal text-surface font-primary">
                        Como superadministrador, lideré la gestión y configuración avanzada de la plataforma Q10
                        en ambas instituciones, brindando soporte técnico, administración de roles y gestión de bases de datos para informes BI
                        del Instituto Odres Nuevos, Universidad Horizonte y Centro de Formación CENTEC.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/experience/q10-3.webp"
                            alt="q10-3"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                            onClick={() => openModal("/images/experience/q10-3.webp")}
                        />
                        <img
                            src="/images/experience/q10-4.webp"
                            alt="q10-4"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                            onClick={() => openModal("/images/experience/q10-4.webp")}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <>
                    <div>
                        <h4 className="text-left text-5xl uppercase font-light text-surface font-primary mb-2">Coordinador de Recursos Tecnológicos</h4>
                        <div className="text-left text-lg font-semibold text-surface font-primary mb-4 opacity-90">Corporación Iberoamericana de Ciencia y Tecnología CIBERCTEC - Villavicencio Meta</div>
                        <p className="mb-8 mt-8 text-lg font-normal text-surface font-primary">
                            Responsable del área de TI de la empresa. Gestioné la resolución de incidencias críticas que afectaban
                            la disponibilidad de la landing page institucional, causadas por conflictos internos en el código PHP de WordPress y configuración del hosting.
                            Esta situación impactaba directamente al área comercial en sus procesos de captación y retención de estudiantes,
                            por lo que implementé soluciones mientras se desarrollaba el nuevo sitio web corporativo.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/images/experience/ciberctec-1.webp"
                                alt="ciberctec-webpage"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                                onClick={() => openModal("/images/experience/ciberctec-1.webp")}
                            />
                            <img
                                src="/images/experience/ciberctec-2.webp"
                                alt="ciberctec-webpage"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                                onClick={() => openModal("/images/experience/ciberctec-2.webp")}
                            />
                        </div>
                        <div className="mt-6 flex justify-start">
                            <a
                                href="https://ciberctec.edu.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-grow w-full bg-[var(--color-white)] text-[var(--color-black)] border border-zinc-200 shadow-md backdrop-blur-lg py-2 px-6 text-base tracking-wide font-semibold transition-colors duration-150 hover:bg-[var(--gloss)] hover:text-white text-center"
                            >
                                Ver página
                            </a>
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <h4 className="text-left text-5xl uppercase font-light text-surface font-primary mb-2">Content Manager y renderista 3D</h4>
                    <div className="text-left text-lg font-semibold text-surface font-primary mb-4 opacity-90">Bimcom - Acacías Meta</div>
                    <p className="mb-8 mt-8 text-lg font-normal text-surface font-primary">
                        Desempeñé un rol clave en la creación de contenido digital para proyectos de infraestructura,
                        colaborando con arquitectos en la generación de renders de alta calidad. Destaca mi participación
                        en la remodelación de la plaza principal de Acacías, donde mis visuales fueron utilizados por la alcaldía
                        como herramienta central de comunicación pública. Utilicé herramientas como Revit, 3ds Max y Photoshop para
                        transformar planos técnicos en representaciones visuales precisas y atractivas.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/experience/plaza-render-1.webp"
                            alt="plaza-render-1"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                            onClick={() => openModal("/images/experience/plaza-render-1.webp")}
                        />
                        <img
                            src="/images/experience/plaza-render-2.webp"
                            alt="plaza-render-2"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                            onClick={() => openModal("/images/experience/plaza-render-2.webp")}
                        />
                        <img
                            src="/images/experience/plaza-render-3.webp"
                            alt="plaza-render-3"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                            onClick={() => openModal("/images/experience/plaza-render-3.webp")}
                        />
                        <img
                            src="/images/experience/plaza-render-4.webp"
                            alt="plaza-render-4"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                            onClick={() => openModal("/images/experience/plaza-render-4.webp")}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <>
                    <div>
                        <h4 className="text-left text-5xl uppercase font-light text-surface font-primary mb-2">Digital Product Designer</h4>
                        <div className="text-left text-lg font-semibold text-surface font-primary mb-4 opacity-90">LiENZO - Villavicencio Meta</div>
                        <p className="mb-8 mt-8 text-lg font-normal text-surface font-primary">
                            Como diseñador de producto digital, lideré la creación de interfaces centradas en el usuario,
                            integrando diseño UI/UX con estrategias de branding visual y marketing digital.
                            y posicionamiento. Colaboré con equipos creativos y técnicos para materializar productos visuales consistentes
                            en campañas, landing pages y piezas audiovisuales, garantizando impacto visual.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/images/experience/lienzo-1.webp"
                                alt="ciberctec-webpage"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105"
                                onClick={() => openModal("/images/experience/lienzo-1.webp")}
                            />
                        </div>
                        <div className="mt-6 flex justify-start">
                            <a
                                href="https://www.instagram.com/hechoenlienzo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-grow w-full bg-[var(--color-white)] text-[var(--color-black)] border border-zinc-200 shadow-md backdrop-blur-lg py-2 px-6 text-base tracking-wide font-semibold transition-colors duration-150 hover:bg-[var(--gloss)] hover:text-white text-center"
                            >
                                Ver instragram
                            </a>
                        </div>
                    </div>
                </>
            ),
        }
        
        
        
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
            {/* Modal for enlarged image */}
            {showModal && modalImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--glass-bg)] bg-opacity-80 backdrop-blur-lg transition-opacity duration-300 animate-fadeIn"
                    onClick={closeModal}
                >
                    <div
                        className="relative flex items-center justify-center w-full h-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={modalImg}
                            alt="Imagen ampliada"
                            className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl transition-transform duration-300 scale-100 animate-zoomIn bg-surface"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-3xl font-bold transition cursor-pointer"
                            aria-label="Cerrar"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
        </div>
    );
}
