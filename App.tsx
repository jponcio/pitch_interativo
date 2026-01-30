
import React, { useState, useEffect } from 'react';
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
  Users
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import BrazilMap from './components/BrazilMap';
import FinancialSimulator from './components/FinancialSimulator';

const App: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: "Base e Território",
      description: "Visualize sua força política geograficamente.",
      icon: <MapIcon className="w-8 h-8 text-emerald-500" />,
      details: ["Mapa do território", "Segmentação da base", "Histórico de demandas", "Lideranças locais"]
    },
    {
      id: 2,
      title: "Mandato e Gestão",
      description: "Organize o dia a dia com foco em entregas.",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      details: ["Projetos e leis", "Prioridades estratégicas", "Indicadores de performance", "Acompanhamento de execução"]
    },
    {
      id: 3,
      title: "Comunicação e Transparência",
      description: "Transforme dados em narrativas de impacto.",
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      details: ["Narrativa baseada em dados", "Relatórios automáticos", "Transparência ativa", "Memória do mandato"]
    },
    {
      id: 4,
      title: "IA para Decisão",
      description: "Seu copiloto estratégico 24/7.",
      icon: <Cpu className="w-8 h-8 text-amber-500" />,
      details: ["Chat estratégico", "Simulações de impacto", "Análise de sentimentos", "Apoio técnico legislativo"]
    }
  ];

  const marketData = [
    { name: 'Vereadores', value: 57942, color: '#10b981' },
    { name: 'Prefeitos', value: 5568, color: '#3b82f6' },
    { name: 'Deputados Estaduais', value: 1059, color: '#8b5cf6' },
    { name: 'Deputados Federais', value: 513, color: '#f59e0b' },
    { name: 'Governadores/Senadores', value: 108, color: '#ef4444' }
  ];

  const faqs = [
    {
      question: "Isso é legal do ponto de vista eleitoral?",
      answer: "Sim. A plataforma foca em gestão de mandato e organização administrativa. Os dados são estruturados para apoiar a atividade parlamentar, respeitando a LGPD e as normas de transparência pública."
    },
    {
      question: "Isso é só para quem já tem mandato?",
      answer: "Não. É ainda mais poderoso para pré-candidatos e aspirantes que desejam entrar no jogo profissionalmente, mapeando território e construindo bases sólidas desde o dia zero."
    },
    {
      question: "É consultoria ou software?",
      answer: "É uma plataforma SaaS (Software as a Service) com IA integrada. Oferecemos a ferramenta para autonomia da equipe, com módulos opcionais de apoio estratégico."
    },
    {
      question: "Preciso de equipe técnica?",
      answer: "Absolutamente não. A interface foi desenhada para o uso prático de assessores e do próprio parlamentar, sem curva complexa de aprendizado."
    },
    {
      question: "Qual o risco político?",
      answer: "O maior risco político é gerir sem dados. Nossa plataforma mitiga riscos ao oferecer clareza sobre onde concentrar esforços e como medir resultados."
    }
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
            {/* Removed navigation links as requested */}
            <a 
              href="#contato"
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-200"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
              Quero organizar meu mandato <Rocket className="w-5 h-5" />
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              Sou pré-candidato / aspirante
            </button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
            <div>
              <div className="text-3xl font-bold text-white">55k+</div>
              <div className="text-sm text-slate-400">Cargos Eletivos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-slate-400">Baseado em Dados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-slate-400">Copiloto IA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">360º</div>
              <div className="text-sm text-slate-400">Visão Territorial</div>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section id="problema" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">A Realidade do Mandato</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Por que a maioria dos mandatos falha?</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              Não é por falta de intenção, mas por falta de organização, dados e visão estratégica integrada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <AlertCircle className="w-10 h-10 text-red-500" />, title: "Informação Dispersa", desc: "Planilhas, WhatsApp e papéis. Nada se conversa, nada é rastreável." },
              { icon: <TrendingUp className="w-10 h-10 text-orange-500" />, title: "Decisão no Feeling", desc: "Ações baseadas em intuição, not em evidências reais do território." },
              { icon: <Users className="w-10 h-10 text-blue-500" />, title: "Abismo com a Base", desc: "Dificuldade de manter o diálogo contínuo e mapear lideranças locais." },
              { icon: <BarChart3 className="w-10 h-10 text-purple-500" />, title: "Legado Invisível", desc: "Dificuldade de mostrar resultados tangíveis para a população ao final do ciclo." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Solução - Módulos */}
      <section id="solucao" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-2">A Solução</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Uma plataforma de gestão política <br/>completa e inteligente</h3>
              <p className="text-lg text-slate-600">
                O Meu Mandato 360º une método, tecnologia de ponta e contexto político brasileiro para garantir que seu projeto seja eficiente e deixe legado.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-end mt-10 lg:mt-0">
              <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="font-semibold text-slate-900">Foco em Legado</div>
                </div>
                <p className="text-sm text-slate-500 italic">
                  "O sistema nos ajudou a priorizar os 15% de projetos que realmente impactam a vida das pessoas no território."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
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

      {/* Mapa Interativo e Visão Territorial */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Visão Estratégica</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Domine o seu território <br/>com precisão cirúrgica</h3>
              <p className="text-lg text-slate-600 mb-8">
                Esqueça os achismos. Visualize onde estão seus eleitores, quais áreas demandam mais atenção e como o seu mandato está impactando cada região em tempo real.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Mapeamento de Lideranças", desc: "Saiba exatamente quem são os influenciadores em cada bairro." },
                  { title: "Heatmaps de Demandas", desc: "Identifique focos de insatisfação antes que se tornem crises." },
                  { title: "Acompanhamento de Obras", desc: "Gira a execução de projetos públicos visualmente." }
                ].map((feature, fIdx) => (
                  <div key={fIdx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border-l-4 border-emerald-500 bg-white shadow-sm">
                    <div className="font-bold text-emerald-600">{fIdx + 1}</div>
                    <div>
                      <h5 className="font-bold text-slate-900">{feature.title}</h5>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-center mb-6 pt-4">
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">Dashboard Territorial Live</span>
                </div>
                <BrazilMap />
                <div className="mt-6 flex justify-between items-center text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    Sincronizado com TSE/IBGE
                  </div>
                  <div>Camada: Densidade de Lideranças</div>
                </div>
              </div>
              {/* Overlay elements for impact */}
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block animate-bounce">
                <div className="text-2xl font-bold mb-1">+24%</div>
                <div className="text-xs opacity-80">Engajamento orgânico mapeado na última quinzena</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAM / SAM / SOM - Mercado */}
      <section id="mercado" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase mb-2">Mercado e Impacto</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">O Poder do Ecossistema Político Brasileiro</h3>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Com mais de 65.000 cargos eletivos e uma demanda crescente por profissionalização, o mercado de GovTech no Brasil está em franca expansão.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={120} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-slate-500 text-center mt-4">Fonte: TSE (Eleições 2022/2024), IBGE e Consultoria Interna</p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <UserCheck className="text-emerald-400" /> Público Alvo (SOM)
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold">1.500+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Mandatos Foco (Year 1)</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold">R$ 4.5k</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">LTV Estimado (Base)</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-400 italic">
                  *Focamos inicialmente em parlamentares estaduais, federais e prefeitos de cidades acima de 100k habitantes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-400" /></div>
                  <div>
                    <div className="font-bold">Ciclo 2026</div>
                    <div className="text-sm text-slate-400">Expansão para candidatos a Deputado e Senador.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-400" /></div>
                  <div>
                    <div className="font-bold">Modelo Escalável</div>
                    <div className="text-sm text-slate-400">SaaS puro com onboarding automatizado.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Negócio & Simulador Financeiro */}
      <section id="modelo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Modelo de Negócio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Como monetizamos o legado</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Um modelo SaaS robusto com fluxos de receita recorrente e serviços de alto valor agregado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { 
                plan: "SaaS Base", 
                price: "R$ 1.500", 
                desc: "Gestão essencial e território.", 
                features: ["Acesso p/ 5 assessores", "Mapa territorial básico", "Módulo de demandas", "Relatórios mensais"],
                btn: "Começar Agora",
                highlight: false
              },
              { 
                plan: "Premium + IA", 
                price: "R$ 3.500", 
                desc: "Inteligência artificial ativa.", 
                features: ["Acesso ilimitado", "Mapa avançado (BI)", "Copiloto IA (Beta)", "Dashboards em tempo real", "Suporte VIP"],
                btn: "Mais Popular",
                highlight: true
              },
              { 
                plan: "Master Advisory", 
                price: "Custom", 
                desc: "Tecnologia + Consultoria.", 
                features: ["Tudo do Premium", "Consultoria estratégica mensal", "Treinamento presencial", "Integrações customizadas"],
                btn: "Falar com Consultor",
                highlight: false
              }
            ].map((card, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border ${card.highlight ? 'border-emerald-500 ring-4 ring-emerald-500/10 bg-slate-50' : 'border-slate-100 bg-white'} flex flex-col`}>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{card.plan}</h4>
                <div className="text-3xl font-extrabold text-slate-900 mb-2">{card.price}<span className="text-base font-normal text-slate-400">/mês</span></div>
                <p className="text-sm text-slate-500 mb-8">{card.desc}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {feat}
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${card.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {card.btn}
                </button>
              </div>
            ))}
          </div>

          {/* Simulador Interativo */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 lg:flex items-center gap-16">
              <div className="lg:w-1/2">
                <h4 className="text-2xl font-bold mb-4">Simulador de Impacto Financeiro</h4>
                <p className="text-slate-400 mb-8">
                  Ajuste os parâmetros para entender o potencial de receita anual do Meu Mandato 360º com base na escala de mandatos atendidos.
                </p>
                <FinancialSimulator />
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h5 className="font-bold mb-4 flex items-center gap-2"><TrendingUp className="text-emerald-400" /> Por que investir agora?</h5>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5"></div>
                    <span>Custo de aquisição (CAC) baixo via parcerias partidárias.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5"></div>
                    <span>Churn reduzido: política é cíclica, mas os dados precisam de continuidade.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5"></div>
                    <span>Escalabilidade garantida por infraestrutura serverless.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem é */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-2">Público-Alvo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Desenhado para o ecossistema político</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Parlamentares em exercício", 
                icon: <Target className="w-10 h-10 text-emerald-600" />,
                desc: "Organize o mandato, tome decisões melhores e entregue resultados mensuráveis para sua reeleição."
              },
              { 
                title: "Pré-candidatos (2026)", 
                icon: <Rocket className="w-10 h-10 text-blue-600" />,
                desc: "Comece antes de todos. Estruture sua base, território e projeto político com método científico."
              },
              { 
                title: "Aspirantes à política", 
                icon: <Users className="w-10 h-10 text-purple-600" />,
                desc: "Entre no jogo de forma profissional, com dados e estratégia estruturada desde o dia zero."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">FAQ</h2>
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
            Não deixe o futuro do seu mandato ao acaso. Profissionalize sua gestão com o Meu Mandato 360º.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
              Quero conhecer a plataforma
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md">
              Analisar como Advisor
            </button>
          </div>
          <p className="mt-12 text-sm text-slate-500">
            © 2024 Meu Mandato 360º. Todos os direitos reservados.
          </p>
        </div>
      </section>

      {/* Floating CTA Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[90%]">
        <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2">
          Organizar Meu Mandato <Rocket className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default App;
