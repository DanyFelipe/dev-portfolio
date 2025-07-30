import { useState } from 'react';

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex flex-col items-center">
      <button
        className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Toggle menu"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 my-1 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 w-full ${open ? 'max-h-40 mt-2' : 'max-h-0'}`}>
        <nav className="bg-white/60 dark:bg-zinc-900/60 shadow-xl backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded flex flex-col items-center py-2">
          <a href="/" className="block w-full text-center hover:bg-white hover:text-black transition-colors duration-150 py-2 px-6 text-base tracking-wide text-zinc-700 dark:text-zinc-200">PRINCIPAL</a>
          <a href="/projects" className="block w-full text-center hover:bg-white hover:text-black transition-colors duration-150 py-2 px-6 text-base tracking-wide text-zinc-700 dark:text-zinc-200">PROYECTOS</a>
          <a href="/experience" className="block w-full text-center hover:bg-white hover:text-black transition-colors duration-150 py-2 px-6 text-base tracking-wide text-zinc-700 dark:text-zinc-200">EXPERIENCIA</a>
          <a href="/studies" className="block w-full text-center hover:bg-white hover:text-black transition-colors duration-150 py-2 px-6 text-base tracking-wide text-zinc-700 dark:text-zinc-200">ESTUDIOS</a>
        </nav>
      </div>
    </div>
  );
} 