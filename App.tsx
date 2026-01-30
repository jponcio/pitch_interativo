
import React, { useState } from 'react';
import { 
  ChevronDown, 
  Map as MapIcon, 
  BarChart3, 
  MessageSquare, 
  Cpu, 
  AlertCircle, 
  Target, 
  CheckCircle2, 
  TrendingUp,
  UserCheck,
  Rocket,
  Users,
  ShieldCheck,
  Coins,
  Globe
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import BrazilMap from './components/BrazilMap.tsx';
import FinancialSimulator from './components/FinancialSimulator.tsx';

const App: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const billingModels = [
    {
      role: "Vereadores",
      setup: "R$ 3.000",
      monthly: "R$ 199",
      features: ["Base territorial", "Gestão de demandas", "Projetos legislativos", "App p/ assessores"],
      icon: <Users className="w-6 h-6 text-emerald-500" />
    },
    {
      role: "Prefeitos e Vices",
      setup: "R$ 3.800",
      monthly: "R$ 399",
      features: ["Gestão de entregas", "Mapa de prioridades", "Indicadores (KPIs)", "Suporte especializado"],
      icon: <Target className="w-6 h-6 text-blue-500" />,
      highlight: true
    },
    {
      role: "Deputado Estadual",
      setup: "R$ 5.000",
      monthly: "R$ 599",
      features: ["Atuação multiregional", "Mapeamento de emendas", "Dashboard de prefeitos", "IA estratégica básica"],
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      role: "Deputado Federal",
      setup: "R$ 5.000",
      monthly: "R$ 799",
      features: ["Gestão nacional", "Monitoramento de bases", "IA avançada", "Relatórios institucionais"],
      icon: <Globe className="w-6 h-6 text-amber-500" />
    }
  ];

  const marketInsights = [
    {
      label: "TAM — Total Addressable Market",
      sub: "O mercado político total no Brasil",
      value: "70.000 Agentes",
      potential: "R$ 280M a R$ 500M/ano",
      description: "Todos os prefeitos, vices, vereadores e parlamentares estaduais/federais."
    },
    {
      label: "SAM — Serviceable Available Market",
      sub: "Fatia focada em gestão e inovação",
      value: "14.000 Potenciais",
      potential: "R$ 80M a R$ 100M/ano",
      description: "Mandatos em polos regionais e candidatos estruturados para 2026."
    },
    {
      label: "SOM — Serviceable Obtainable Market",
      sub: "Meta operacional (24-36 meses)",
      value: "280 a 560 Ativos",
      potential: "R$ 1,7M a R$ 3,3M/ano",
      description: "Penetração inicial realista via parcerias e marketing focado."
    }
  ];

  const pillars = [
    { id: 1, title: "Base e Território", description: "Visualize sua força política geograficamente.", icon: <MapIcon className="w-8 h-8 text-emerald-500" />, details: ["Mapa do território", "Segmentação da base", "Histórico de demandas", "Lideranças locais"] },
    { id: 2, title: "Mandato e Gestão", description: "Organize o dia a dia com foco em entregas.", icon: <BarChart3 className="w-8 h-8 text-blue-500" />, details: ["Projetos e leis", "Prioridades estratégicas", "Indicadores de performance", "Acompanhamento de execução"] },
    { id: 3, title: "Comunicação e Transparência", description: "Transforme dados em narrativas de impacto.", icon: <MessageSquare className="w-8 h-8 text-purple-500" />, details: ["Narrativa baseada em dados", "Relatórios automáticos", "Transparência ativa", "Memória do mandato"] },
    { id: 4, title: "IA para Decisão", description: "Seu copiloto estratégico 24/7.", icon: <Cpu className="w-8 h-8 text-amber-500" />, details: ["Chat estratégico", "Simulações de impacto", "Análise de sentimentos", "Apoio técnico legislativo"] }
  ];

  const faqs = [
    { question: "Isso é legal do ponto de vista eleitoral?", answer: "Sim. A plataforma foca em gestão de mandato e organização administrativa. Os dados são estruturados para apoiar a atividade parlamentar, respeitando a LGPD e as normas de transparência pública." },
    { question: "Isso é só para quem já tem mandato?", answer: "Não. É ainda mais poderoso para pré-candidatos e aspirantes que desejam entrar no jogo profissionalmente, mapeando território e construindo bases sólidas desde o dia zero." },
    { question: "É consultoria ou software?", answer: "É uma plataforma SaaS (Software as a Service) com IA integrada. Oferecemos a ferramenta para autonomia da equipe, com módulos opcionais de apoio estratégico." },
    { question: "Preciso de equipe técnica?", answer: "Absolutamente não. A interface foi desenhada para o uso prático de assessores e do próprio parlamentar, sem curva complexa de aprendizado." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Meu Mandato <span className="text-emerald-600">360º</span></span>
            </div>
            <a href="#contato" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-200">Falar com Especialista</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 gradient-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Governar bem não é sobre discurso. <br/>
            <span className="text-emerald-400">É sobre dados, método e decisão.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A plataforma que organiza seu mandato, sua base e suas decisões — do primeiro voto ao último dia de gestão.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">Quero organizar meu mandato <Rocket className="w-5 h-5" /></button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">Sou pré-candidato</button>
          </div>
        </div>
      </section>

      {/* Modelo de Faturamento */}
      <section id="faturamento" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Coins className="w-3 h-3" /> Transparência e Escala
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Modelo de contratação simples</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Sem taxas ocultas. Um investimento estratégico que se paga através da eficiência administrativa e do impacto político gerado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {billingModels.map((item, idx) => (
              <div key={idx} className={`p-6 rounded-3xl border transition-all ${item.highlight ? 'border-emerald-500 ring-4 ring-emerald-500/10 bg-emerald-50/30' : 'border-slate-100 bg-white hover:border-slate-300'}`}>
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.role}</h4>
                <div className="space-y-1 mb-6 pb-6 border-b border-slate-200/60">
                  <div className="text-sm text-slate-500">Setup: <span className="font-bold text-slate-700">{item.setup}</span></div>
                  <div className="text-2xl font-extrabold text-slate-900">{item.monthly} <span className="text-xs font-normal text-slate-400">/mês</span></div>
                </div>
                <ul className="space-y-3">
                  {item.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold mb-4">Senadores, Governadores e Executivo</h4>
              <p className="text-slate-400">Projetos sob medida com módulos avançados de inteligência de dados, integração com sistemas governamentais e apoio estratégico institucional.</p>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all whitespace-nowrap">Falar com Consultor</button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4"><div className="font-bold text-slate-900">Sem limite de usuários</div><p className="text-xs text-slate-500">Foco total na colaboração da equipe.</p></div>
            <div className="p-4 border-x border-slate-100"><div className="font-bold text-slate-900">Contrato Recorrente</div><p className="text-xs text-slate-500">Previsibilidade para o seu mandato.</p></div>
            <div className="p-4"><div className="font-bold text-slate-900">Suporte Político-Técnico</div><p className="text-xs text-slate-500">Equipe que entende a realidade do Brasil.</p></div>
          </div>
        </div>
      </section>

      {/* Tamanho do Mercado (TAM/SAM/SOM) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-2">Visão de Futuro</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">O Poder do Ecossistema Político Brasileiro</h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              A profissionalização da política não é uma tendência, é uma necessidade. O Meu Mandato 360º está posicionado para liderar a transformação digital das casas legislativas e executivas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {marketInsights.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-emerald-600 uppercase mb-2 tracking-widest">{item.label}</div>
                  <div className="text-sm text-slate-400 mb-6">{item.sub}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{item.value}</div>
                  <div className="text-emerald-600 font-bold mb-6">{item.potential}</div>
                  <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="text-emerald-600" /> Potencial de Escala
                </h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-emerald-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Baixo Churn Política</h5>
                      <p className="text-sm text-slate-500">A política é cíclica, mas a necessidade de dados é permanente. Uma vez integrado, o sistema torna-se o sistema nervoso central do mandato.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                      <Rocket className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Expansão de Receita</h5>
                      <p className="text-sm text-slate-500">Módulos de IA, Advisory e Treinamento de equipes de assessoria aumentam o LTV médio anualmente.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Nota de Sustentabilidade</div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "O mercado de GovTech no Brasil amadurece 15% ao ano. Nossa meta é capturar o SOM de forma orgânica e acelerada, tornando-nos o padrão ouro de gestão política no país."
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Conselho Estratégico</div>
                    <div className="text-xs text-slate-500">Meu Mandato 360º</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução - Módulos (Antiga) */}
      <section id="solucao" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-slate-900">{pillar.title}</h4>
                    <p className="text-slate-500 mb-6">{pillar.description}</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {pillar.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Dúvidas?</h2>
            <h3 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFAQ === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFAQ === idx && (
                  <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 gradient-bg relative overflow-hidden text-white text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Mandatos passam. <br/>
            <span className="text-emerald-400">Dados, método e legado ficam.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Não deixe o futuro do seu mandato ao acaso. Profissionalize sua gestão agora.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">Quero a plataforma</button>
            <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md">Falar com Consultor</button>
          </div>
          <p className="mt-12 text-sm text-slate-500 italic">© 2024 Meu Mandato 360º. Todos os direitos reservados.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
