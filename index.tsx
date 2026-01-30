
// Vanilla JavaScript logic for Meu Mandato 360º
// No React dependencies to avoid "white screen" issues.

// Fix: Mark this file as a module to allow global augmentation of the Window interface.
export {};

/**
 * Extending the global Window interface to recognize custom functions attached to the window object.
 */
declare global {
  interface Window {
    openModal: (moduleKey: string) => void;
    closeModal: () => void;
  }
}

const modalData = {
  dashboard: {
    title: "Dashboard Estratégico",
    description: "Sua torre de controle política. Visualize em tempo real o andamento de cada projeto, o desempenho da sua assessoria e o termômetro de aceitação nas redes sociais e nas ruas.",
    features: ["Resumo de emendas e verbas", "Timeline de projetos de lei", "KPIs de produtividade do gabinete", "Alertas de prazos regimentais"]
  },
  territory: {
    title: "Mapa Territorial",
    description: "Entenda a geografia do seu voto. Mapeie bairros, cidades e regiões onde sua atuação é mais forte e identifique 'áreas de sombra' que precisam de atenção estratégica.",
    features: ["Heatmaps de votação por seção", "Cadastro georreferenciado de lideranças", "Roteirização inteligente para visitas", "Mapeamento de obras e demandas regionais"]
  },
  projects: {
    title: "Rastreador de Projetos",
    description: "Transforme promessas em entregas auditáveis. Um fluxo de trabalho profissional para gerenciar cada indicação, requerimento e projeto de lei, do rascunho à sanção.",
    features: ["Kanban de tramitação legislativa", "Repositório de documentos", "Protocolo digital de entregas", "Relatórios automáticos de transparência"]
  },
  crm: {
    title: "CRM da Base Política",
    description: "Profissionalize o relacionamento com sua base. Saiba quem são seus multiplicadores, o histórico de pedidos de cada liderança e nunca perca o contato com quem importa.",
    features: ["Gestão de lideranças e multiplicadores", "Histórico completo de atendimentos", "Segmentação para disparos de mensagens", "Árvore de influência política"]
  },
  kpis: {
    title: "Indicadores & KPIs",
    description: "O que não é medido, não é gerido. Tenha métricas claras sobre a eficiência do seu mandato e o retorno político de cada ação realizada pelo seu gabinete.",
    features: ["Monitoramento de menções na mídia", "Taxa de conversão de demandas", "Relatórios de ROI político", "Score de fidelidade de base"]
  },
  pre: {
    title: "Organização Pré-Campanha",
    description: "Para quem está construindo o caminho. Comece a estruturar sua base, ouvir a população e organizar seus dados antes mesmo da corrida eleitoral começar.",
    features: ["Pesquisas qualitativas integradas", "Diagnóstico de problemas locais", "Mapeamento de grupos de oposição", "Plano de governo baseado em dados"]
  },
  especialista: {
    title: "Falar com um Especialista",
    description: "Nossa equipe de consultoria estratégica está pronta para transformar seu mandato. Agende uma conversa personalizada para entender como aplicar o método 360º em sua realidade política.",
    features: ["Diagnóstico de gabinete gratuito", "Demonstração personalizada do sistema", "Análise de viabilidade de dados", "Plano estratégico de implementação"]
  }
};

// Fix: Assign the function to the globally augmented window object.
window.openModal = function(moduleKey: string) {
  const data = modalData[moduleKey as keyof typeof modalData];
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const body = document.body;

  if (overlay && content && data) {
    content.innerHTML = `
      <h3 class="text-3xl font-extrabold text-slate-900 mb-6">${data.title}</h3>
      <p class="text-slate-600 mb-8 leading-relaxed text-lg">${data.description}</p>
      <div class="space-y-4">
        <h4 class="font-bold text-slate-900 uppercase tracking-widest text-xs">Funcionalidades Chave</h4>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${data.features.map(f => `
            <li class="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
              ${f}
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="mt-10">
        <button onclick="closeModal()" class="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all">
          Entendi, continuar explorando
        </button>
      </div>
    `;
    overlay.classList.remove('hidden');
    body.classList.add('modal-active');
  }
};

// Fix: Assign the function to the globally augmented window object.
window.closeModal = function() {
  const overlay = document.getElementById('modalOverlay');
  const body = document.body;
  if (overlay) {
    overlay.classList.add('hidden');
    body.classList.remove('modal-active');
  }
};

// Initialize Lucide Icons
// @ts-ignore
if (typeof lucide !== 'undefined') {
  // @ts-ignore
  lucide.createIcons();
}

console.log("Meu Mandato 360º: Aplicação Estática Carregada.");
