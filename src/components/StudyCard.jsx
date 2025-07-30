import React, { useState } from "react";

export default function StudyCard({ imagen, nombre, institucion, año, descripcion }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[var(--glass-bg)] border-[var(--glass-border)] border shadow-md p-6 flex flex-col gap-4 w-full h-full">
      <div
        className="w-full aspect-square bg-[var(--glass-bg)] flex items-center justify-center mb-4 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img src={imagen} alt={nombre} className="object-cover w-full h-full" />
      </div>
      <div className="text-2xl text-surface">{nombre}</div>
      <div className="text-base text-surface opacity-80">{institucion} - {año}</div>
      <div className="text-base text-surface opacity-70">{descripcion}</div>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--glass-bg)] bg-opacity-80 backdrop-blur-lg transition-opacity duration-300 animate-fadeIn"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative flex items-center justify-center w-full h-full bg-[var(--glass-bg)] border-[var(--glass-border)] border shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={imagen}
              alt={nombre}
              className="max-w-[90vw] max-h-[80vh] shadow-2xl transition-transform duration-300 scale-100 animate-zoomIn bg-surface"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-4xl font-bold transition cursor-pointer"
              aria-label="Cerrar"
              style={{ background: "none", border: "none", borderRadius: 0, boxShadow: "none", padding: 0 }}
            >
              &times;
            </button>
          </div>
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
      )}
    </div>
  );
}
