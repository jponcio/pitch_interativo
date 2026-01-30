
import React, { useState } from 'react';

const BrazilMap: React.FC = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Simplified SVG paths for demonstration (representing clusters of states)
  const regions = [
    { id: 'north', name: 'Norte', d: "M 50,30 L 150,30 L 170,80 L 100,120 L 30,80 Z", color: '#10b981' },
    { id: 'northeast', name: 'Nordeste', d: "M 170,30 L 250,50 L 250,130 L 180,120 Z", color: '#10b981' },
    { id: 'center', name: 'Centro-Oeste', d: "M 100,120 L 180,120 L 180,200 L 100,200 Z", color: '#10b981' },
    { id: 'southeast', name: 'Sudeste', d: "M 180,120 L 250,130 L 240,220 L 180,200 Z", color: '#10b981' },
    { id: 'south', name: 'Sul', d: "M 180,200 L 240,220 L 220,280 L 160,260 Z", color: '#10b981' },
  ];

  return (
    <div className="w-full aspect-square flex items-center justify-center relative">
      <svg viewBox="0 0 300 300" className="w-full h-full max-w-[400px]">
        {regions.map((region) => (
          <path
            key={region.id}
            d={region.d}
            fill={hoveredRegion === region.id ? '#10b981' : '#1e293b'}
            stroke="#334155"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
        ))}
        {/* Dynamic points representing "lideranças" */}
        <circle cx="120" cy="70" r="3" fill="#f59e0b" className="animate-pulse" />
        <circle cx="210" cy="80" r="4" fill="#f59e0b" className="animate-pulse" />
        <circle cx="215" cy="180" r="3" fill="#f59e0b" className="animate-pulse" />
        <circle cx="150" cy="160" r="5" fill="#f59e0b" className="animate-pulse" />
        <circle cx="200" cy="240" r="3" fill="#f59e0b" className="animate-pulse" />
      </svg>
      
      {hoveredRegion && (
        <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-xs text-white">
          <div className="font-bold text-emerald-400">{regions.find(r => r.id === hoveredRegion)?.name}</div>
          <div className="mt-1">84% Cobertura Territorial</div>
          <div>12 Lideranças Ativas</div>
        </div>
      )}
    </div>
  );
};

export default BrazilMap;
