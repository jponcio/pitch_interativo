
import React, { useState } from 'react';
import { 
  Target, Rocket, AlertCircle, CheckCircle2, 
  ChevronRight, BarChart3, Map as MapIcon, 
  Users, Cpu, Globe, Coins, TrendingUp,
  LayoutDashboard, FileText, UserPlus, HelpCircle
} from 'lucide-react';
import BrazilMap from './components/BrazilMap.tsx';
import FinancialSimulator from './components/FinancialSimulator.tsx';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Dashboard Estratégico",
      icon: <LayoutDashboard className="w-8 h-8 text-emerald-500" />,
      description: "Visão 360º de todas as métricas do mandato em tempo real.",
      details: "Acompanhe solicitações, emendas, performance da equipe e impacto de projetos em uma única tela."
    },
    {
      id: 2,
      title: "Mapa Territorial",
      icon: <MapIcon className="w-8 h-8 text-blue-500" />,
      description: "Visualize sua base e apoiadores geograficamente.",
      details: "Mapeie bairros, cidades e regiões. Identifique zonas de calor onde sua presença política é mais forte ou precisa de reforço."
    },
    {
      id: 3,
      title: "Gestão de Projetos e Entregas",
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      description: "Transforme promessas de campanha em realizações documentadas.",
      details: "Organize o fluxo de leis, indicações e obras. Tenha provas concretas do seu trabalho para prestar contas à população."
    },
    {
      id: 4,
      title: "CRM da Base Política",
      icon: <Users className="w-8 h-8 text-amber-500" />,
      description: "Gestão profissional de lideranças e apoiadores.",
      details: "Saiba quem são seus multiplicadores, histórico de contato e demandas específicas de cada liderança local."
    }
  ];

  const profiles = [
    { title: "Vereadores", text: "Ideal para organização de base e demandas locais." },
    { title: "Prefeitos e Vices", text: "Foco total em gestão, indicadores e tomada de decisão." },
    { title: "Deputados (Est. e Fed.)", text: "Gestão regional/nacional e monitoramento de múltiplas bases." },
    { title: "Pré-Candidatos", text: "Construção de base sólida e mapeamento territorial antes da eleição." }
  ];

  const pricing = [
    { role: "Vereadores", setup: "R$ 3.000", monthly: "R$ 199", color: "emerald" },
    { role: "Prefeitos e Vices", setup: "R$ 3.800", monthly: "R$ 399", color: "blue", highlight: true },
    { role: "Deputado Estadual", setup: "R$ 5.000", monthly: "R$ 599", color: "purple" },
    { role: "Deputado Federal", setup: "R$ 5.000", monthly: "R$ 799", color: "amber" }
  ];

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8">
            <Target className="w-4 h-4" /> Inteligência para o Mandato
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto">
            Governar não é improviso. <br/>
            <span className="text-emerald-400">É método, dados e estratégia.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            O Meu Mandato 360º organiza dados, base política, projetos e entregas em um único sistema — antes, durante e depois do mandato.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
              Quero organizar meu mandato <Rocket className="w-5 h-5" />
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md">
              Falar com consultor
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Por que a maioria dos políticos perde o controle do próprio legado?
              </h2>
              <div className="space-y-6">
                {[
                  "Decisões baseadas em intuição, não em evidências.",
                  "Bases políticas desorganizadas e dependentes de memória individual.",
                  "Falta de continuidade entre campanhas e mandatos.",
                  "Dificuldade imensa de mostrar 'o que foi feito' para o eleitor."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                    <p className="text-slate-700 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative z-10">
                 <BrazilMap />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">A Revolução Digital</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12">
            O Sistema Operacional do Mandato Moderno
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            O Meu Mandato 360º não é apenas um software. É uma metodologia de governança baseada em dados que profissionaliza cada ação da sua equipe.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="text-emerald-600 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Governança por Dados</h4>
              <p className="text-slate-500 text-sm">Pare de chutar. Use indicadores reais para priorizar onde sua equipe deve atuar amanhã.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Gestão de Base Profissional</h4>
              <p className="text-slate-500 text-sm">Mantenha o histórico completo de cada liderança e apoiador. O mandato não se perde em planilhas.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Cpu className="text-purple-600 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">IA Estratégica</h4>
              <p className="text-slate-500 text-sm">Nosso copiloto de inteligência ajuda a analisar sentimentos e gerar relatórios de impacto automaticamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE MODULES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Módulos que Transformam seu Dia a Dia</h2>
            <p className="text-slate-500">Clique nos cards para explorar as funcionalidades</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m) => (
              <div 
                key={m.id}
                onClick={() => setActiveModule(activeModule === m.id ? null : m.id)}
                className={`module-card p-8 rounded-3xl border cursor-pointer ${activeModule === m.id ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-100 bg-slate-50'}`}
              >
                <div className="mb-6">{m.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">{m.title}</h4>
                <p className="text-slate-500 text-sm mb-4">{m.description}</p>
                {activeModule === m.id && (
                  <div className="pt-4 border-t border-emerald-200 text-xs text-emerald-800 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {m.details}
                  </div>
                )}
                <div className="mt-4 flex items-center text-xs font-bold text-slate-400">
                  {activeModule === m.id ? 'Fechar detalhes' : 'Ver mais detalhes'}
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeModule === m.id ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO IS IT FOR */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Desenhado para todo o espectro político</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((p, i) => (
              <div key={i} className="p-8 glass-card rounded-3xl">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-6 mx-auto" />
                <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                <p className="text-slate-400 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BILLING MODEL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">💰 Modelo de contratação simples</h2>
            <p className="text-slate-500">Sem taxas ocultas. Investimento claro para implantação e acompanhamento.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((p, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${p.highlight ? 'border-emerald-500 bg-emerald-50/30 ring-4 ring-emerald-500/10' : 'border-slate-100 bg-white shadow-sm'}`}>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{p.role}</h4>
                <div className="space-y-2 mb-8">
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Setup Único</div>
                  <div className="text-2xl font-black text-slate-900">{p.setup}</div>
                  <div className="h-px bg-slate-100"></div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Assinatura Mensal</div>
                  <div className="text-3xl font-black text-emerald-600">{p.monthly}</div>
                </div>
                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${p.highlight ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                  Selecionar
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-xs text-slate-400">
            *Sem taxa de licenciamento por usuário | Sem dependência de equipe técnica externa | Contrato recorrente e transparente.
          </div>
        </div>
      </section>

      {/* 7. MARKET VISION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-200">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tração e Impacto</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Nosso mercado não é apenas financeiro, é o tamanho da transformação da democracia brasileira.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">TAM — Total Market</div>
                <div className="text-4xl font-black text-slate-900 mb-2">~70.000</div>
                <div className="text-sm font-bold text-emerald-600 mb-4">Agentes Políticos Eletivos</div>
                <p className="text-xs text-slate-500">Todos os cargos eletivos do país em todas as esferas.</p>
              </div>
              <div className="text-center border-y lg:border-y-0 lg:border-x border-slate-100 py-12 lg:py-0">
                <div className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">SAM — Serviceable Market</div>
                <div className="text-4xl font-black text-slate-900 mb-2">~14.000</div>
                <div className="text-sm font-bold text-emerald-600 mb-4">Potenciais Clientes</div>
                <p className="text-xs text-slate-500">Focado em mandatos com perfil de gestão inovadora e capitais.</p>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">SOM — Tração Operacional</div>
                <div className="text-4xl font-black text-slate-900 mb-2">280 a 560</div>
                <div className="text-sm font-bold text-emerald-600 mb-4">Clientes Ativos (24-36 meses)</div>
                <p className="text-xs text-slate-500">Cenário pé no chão para escala sustentável do produto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Mandatos passam. <br/><span className="text-emerald-400">Dados, método e legado ficam.</span></h2>
          <p className="text-lg text-slate-400 mb-12">Profissionalize sua gestão política hoje mesmo com o Meu Mandato 360º.</p>
          <button className="bg-emerald-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20">
            Agendar Demonstração Agora
          </button>
        </div>
      </section>

      <footer className="py-12 bg-slate-950 text-slate-500 text-center text-sm border-t border-white/5">
        © 2024 Meu Mandato 360º. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
