
import React, { useState, useMemo } from 'react';

const FinancialSimulator: React.FC = () => {
  const [mandates, setMandates] = useState<number>(100);
  const [avgTicket, setAvgTicket] = useState<number>(2500);

  const annualRevenue = useMemo(() => {
    return mandates * avgTicket * 12;
  }, [mandates, avgTicket]);

  const formattedRevenue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(annualRevenue);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-medium text-slate-300">Número de Mandatos Atendidos</label>
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold">{mandates}</span>
        </div>
        <input 
          type="range" 
          min="10" 
          max="1500" 
          step="10" 
          value={mandates}
          onChange={(e) => setMandates(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <div className="flex justify-between text-[10px] text-slate-500 mt-2">
          <span>10</span>
          <span>750</span>
          <span>1.500</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-medium text-slate-300">Ticket Médio Mensal (R$)</label>
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold">R$ {avgTicket}</span>
        </div>
        <input 
          type="range" 
          min="1000" 
          max="5000" 
          step="100" 
          value={avgTicket}
          onChange={(e) => setAvgTicket(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <div className="flex justify-between text-[10px] text-slate-500 mt-2">
          <span>R$ 1.000</span>
          <span>R$ 3.000</span>
          <span>R$ 5.000</span>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10">
        <div className="text-sm text-slate-400 mb-1 uppercase tracking-widest font-bold">Receita Anual Estimada (ARR)</div>
        <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 tracking-tight">
          {formattedRevenue}
        </div>
        <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">
          *Baseado em 12 meses de retenção. Não inclui Upsells de módulos premium ou serviços de advisory.
        </p>
      </div>
    </div>
  );
};

export default FinancialSimulator;
