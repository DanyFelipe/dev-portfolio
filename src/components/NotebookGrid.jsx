'use client';

import { useState, useMemo } from 'react';

export default function NotebookGrid({ data }) {
    const [filter, setFilter] = useState('all');
    const [hovered, setHovered] = useState(null);
    const [animating, setAnimating] = useState(false);

    const categories = useMemo(() => {
        const cats = new Set();
        data.forEach(item => item.categories.forEach(cat => cats.add(cat)));
        return ['all', ...Array.from(cats)];
    }, [data]);

    const filtered = useMemo(() => {
        return filter === 'all' ? data : data.filter(item => item.categories.includes(filter));
    }, [filter, data]);

    // Mantener la altura mínima del grid igual al número máximo de cards en cualquier filtro
    const maxCards = useMemo(() => {
        let max = 0;
        categories.forEach(cat => {
            if (cat === 'all') {
                max = Math.max(max, data.length);
            } else {
                const count = data.filter(item => item.categories.includes(cat)).length;
                max = Math.max(max, count);
            }
        });
        return max;
    }, [categories, data]);

    // Calcular el número de filas mínimas para el grid
    const minRows = Math.ceil(maxCards / 3); // 3 columnas en desktop

    // Manejar animación al cambiar filtro
    const handleFilter = (cat) => {
        setAnimating(true);
        setTimeout(() => {
            setFilter(cat);
            setAnimating(false);
        }, 200);
    };

    return (
        <section className="w-full">
            {/* Filtro */}
            <div className="flex flex-wrap gap-3 mb-6 mt-6">
                {categories.map((cat) => {
                    const isActive = filter === cat;
                    const isHovered = hovered === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => handleFilter(cat)}
                            onMouseEnter={() => setHovered(cat)}
                            onMouseLeave={() => setHovered(null)}
                            className={`px-3 py-1 text-sm border border-white/20 shadow-md transition-colors duration-150 text-center cursor-pointer font-medium
                                ${isActive || isHovered ? 'bg-white text-black font-bold' : 'bg-transparent text-white'}
                            `}
                            style={
                                isActive || isHovered
                                    ? undefined
                                    : { background: 'var(--glass-bg)', border: 'var(--glass-border)', backdropFilter: 'var(--glass-blur)' }
                            }
                            disabled={animating}
                        >
                            {cat.toUpperCase()}
                        </button>
                    );
                })}
            </div>

            {/* Cards */}
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500 ${animating ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}
                style={{ minHeight: `calc(${minRows} * 220px)` }} // 220px es la altura aprox. de una card
            >
                {filtered.map((tech) => (
                    <div
                        key={tech.id}
                        className="h-full flex flex-col aspect-square min-h-[340px] max-h-[420px] min-w-0 transition-all duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.02]"
                    >
                        <div className="relative flex flex-col flex-1 h-full w-full min-h-0 p-4 text-white border border-white/20 shadow-lg bg-black/40 backdrop-blur-xl transition-all duration-200"
                        style={{ background: 'var(--glass-bg)', border: 'var(--glass-border)', backdropFilter: 'var(--glass-blur)' }}
                        >
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-white font-orbitron text-4xl font-semibold break-words leading-none text-center">{tech.name}</h3>
                            </div>
                            <div className="flex flex-col justify-end">
                                <p className="text-white text-lg mb-4 text-left">{tech.description}</p>
                                <div className="flex flex-wrap gap-1 justify-start mb-4">
                                    {tech.categories.map((cat) => (
                                        <span
                                            key={cat}
                                            className="text-xs px-2 py-0.5 border border-white/40 bg-white/10 text-white font-mono"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={tech.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="play-btn inline-block font-bold py-2 px-6 shadow text-center"
                                >
                                    _PLAY
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Relleno para mantener la altura del grid */}
                {Array.from({ length: maxCards - filtered.length }).map((_, i) => (
                    <div
                        key={`empty-${i}`}
                        aria-hidden
                        className="opacity-0 pointer-events-none h-full flex flex-col aspect-square min-h-[340px] max-h-[420px] min-w-0"
                    />
                ))}
            </div>
        </section>
    );
}
