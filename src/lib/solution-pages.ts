export type SolutionPage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  h1: string;
  intro: string;
  benefits: string[];
  audience: string[];
  steps: string[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "nfe",
    title: "NFe — Nota Fiscal Eletrônica",
    seoTitle: "NFe Online: emita Nota Fiscal Eletrônica | EmitaGo",
    description: "Emissor de NF-e online para produtos, com DANFE e XML. R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade.",
    h1: "Emita NFe online sem complicação",
    intro: "Centralize a emissão de Nota Fiscal Eletrônica modelo 55, cadastros de produtos, clientes, DANFE e XML em uma plataforma fiscal online.",
    benefits: ["Emissão de NFe pelo navegador", "Cadastro de produtos, clientes e tributação", "Geração de DANFE e XML", "Acesso pelo computador, tablet e celular", "Integração com certificado digital e rotinas fiscais"],
    audience: ["Comércio e distribuição", "Indústrias", "Empresas do Simples Nacional", "Escritórios contábeis e operações multiempresa"],
    steps: ["Cadastre a empresa e configure os dados fiscais.", "Cadastre produtos, clientes e regras tributárias.", "Preencha a operação e assine a NFe com o certificado digital.", "Transmita à SEFAZ e acompanhe a autorização.", "Baixe ou envie DANFE e XML ao destinatário."],
    faq: [
      { question: "O que é NFe?", answer: "A NFe é o documento fiscal eletrônico modelo 55 usado principalmente para documentar operações com mercadorias." },
      { question: "Preciso de certificado digital para emitir NFe?", answer: "Em regra, a emissão de NFe exige assinatura digital do emitente por certificado compatível com a operação." },
      { question: "Posso emitir NFe pelo celular?", answer: "O EmitaGo é uma plataforma online e responsiva, permitindo acessar as rotinas fiscais por dispositivos móveis compatíveis." }
    ],
    relatedSlugs: ["nfe-passo-a-passo", "carta-correcao-eletronica", "cancelamento-nfe"]
  },
  {
    slug: "nfce",
    title: "NFCe — Nota Fiscal do Consumidor",
    seoTitle: "NFCe Online: emissão de cupom fiscal no PDV | EmitaGo",
    description: "Emissor de NFC-e com PDV e Smart POS compatível. R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade.",
    h1: "NFCe online para o seu varejo",
    intro: "Transforme o caixa em um PDV fiscal completo e emita NFCe modelo 65 de forma rápida, organizada e integrada ao restante da operação.",
    benefits: ["PDV online integrado", "Emissão de NFCe modelo 65", "QR Code para consulta do consumidor", "Cadastro de produtos e clientes", "Acesso em computador e Smart POS compatível"],
    audience: ["Lojas e varejistas", "Mercados e minimercados", "Restaurantes e operações de balcão", "Comércios que precisam de PDV fiscal"],
    steps: ["Configure a empresa e o ambiente fiscal.", "Cadastre produtos, preços e tributação.", "Registre a venda no PDV.", "Emita a NFCe e gere o documento para o consumidor.", "Acompanhe vendas e documentos pelo sistema."],
    faq: [
      { question: "Qual a diferença entre NFe e NFCe?", answer: "A NFCe modelo 65 é voltada principalmente ao varejo e ao consumidor final, enquanto a NFe modelo 55 atende outras operações fiscais." },
      { question: "A NFCe pode ser emitida pelo PDV?", answer: "Sim. O EmitaGo integra a rotina de venda do PDV à emissão do documento fiscal." },
      { question: "A NFCe possui QR Code?", answer: "A NFCe autorizada possui informações para consulta pelo consumidor, incluindo o QR Code conforme as regras fiscais aplicáveis." }
    ],
    relatedSlugs: ["nfce-varejo", "nfe-passo-a-passo"]
  },
  {
    slug: "pdv-smart-pos",
    title: "PDV com NFC-e e Smart POS",
    seoTitle: "PDV com NFC-e e Smart POS Android | EmitaGo",
    description: "Sistema PDV com NFC-e e Smart POS Android compatível. R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade.",
    h1: "PDV com NFC-e e Smart POS para o seu comércio",
    intro: "Organize as vendas do balcão e a emissão fiscal em um único fluxo. Conheça os recursos de PDV do EmitaGo e confirme a compatibilidade do seu equipamento Smart POS antes de contratar.",
    benefits: [
      "PDV online integrado à rotina de emissão de NFC-e",
      "Fluxo de vendas e documentos fiscais centralizados",
      "Acesso em dispositivos e Smart POS Android compatíveis",
      "Gestão de produtos e informações fiscais conforme os recursos disponíveis",
      "Preço pré-pago por CNPJ ativo, sem fidelidade"
    ],
    audience: [
      "Lojas e varejistas",
      "Mercados e minimercados",
      "Restaurantes e operações de balcão, conforme compatibilidade fiscal",
      "Comércios que buscam integrar venda e emissão de NFC-e"
    ],
    steps: [
      "Confirme a compatibilidade do equipamento Smart POS e da operação fiscal.",
      "Configure a empresa e o ambiente de emissão.",
      "Cadastre produtos, preços e informações fiscais necessárias.",
      "Registre a venda no PDV e emita a NFC-e conforme a configuração disponível.",
      "Acompanhe os documentos e a rotina de vendas no sistema."
    ],
    faq: [
      { question: "O EmitaGo funciona em qualquer Smart POS?", answer: "A compatibilidade depende do equipamento, do sistema operacional e da configuração da operação. Confirme o modelo com a equipe antes de contratar." },
      { question: "O PDV permite emitir NFC-e?", answer: "O EmitaGo oferece recursos de PDV integrados à emissão de NFC-e, conforme a configuração fiscal e a disponibilidade da integração." },
      { question: "Quanto custa o PDV com NFC-e?", answer: "O preço do EmitaGo é R$ 60 por CNPJ ativo em cada mês de uso, com pagamento antecipado. A emissão é ilimitada no mês pago para o CNPJ ativo, sem fidelidade." }
    ],
    relatedSlugs: ["nfce-varejo", "nfe-passo-a-passo"]
  },
  {
    slug: "nfse",
    title: "NFSe — Nota Fiscal de Serviço",
    seoTitle: "NFSe Online: emissão de Nota Fiscal de Serviço | EmitaGo",
    description: "Emissor de NFS-e online com integração a mais de 1.600 municípios atendidos. R$ 60 pré-pagos por CNPJ ativo no mês de uso.",
    h1: "Emita NFSe online para sua empresa",
    intro: "Simplifique a emissão de Nota Fiscal de Serviço Eletrônica e concentre clientes, serviços, impostos e documentos fiscais em um único ambiente.",
    benefits: ["Emissão online de NFSe", "Integração com municípios atendidos", "Cadastro de clientes e serviços", "Histórico e organização dos documentos", "Acesso por navegador"],
    audience: ["Prestadores de serviços", "Empresas de tecnologia", "Profissionais e pequenas empresas", "Escritórios contábeis"],
    steps: ["Cadastre empresa, inscrição municipal e dados fiscais.", "Configure serviços e tributação.", "Informe tomador e detalhes da prestação.", "Transmita a NFSe ao ambiente municipal ou nacional aplicável.", "Acompanhe o status e mantenha o documento organizado."],
    faq: [
      { question: "O EmitaGo emite NFSe?", answer: "Sim. O sistema possui integração com municípios atendidos e rotinas para emissão de NFSe." },
      { question: "A NFSe é igual em todas as cidades?", answer: "Não necessariamente. Municípios podem adotar integrações e regras específicas; por isso a disponibilidade deve ser conferida para a cidade da empresa." },
      { question: "Posso consultar se minha cidade é atendida?", answer: "Sim. A equipe do EmitaGo pode confirmar a disponibilidade para o município desejado." }
    ],
    relatedSlugs: ["nfse-servicos"]
  },
  {
    slug: "nfpe",
    title: "NFPe — Nota Fiscal do Produtor Rural",
    seoTitle: "NFPe Online: emissão de Nota Fiscal do Produtor Rural | EmitaGo",
    description: "Emissor de NFP-e para produtor rural, conforme operação e regras estaduais. R$ 60 pré-pagos por CNPJ ativo no mês de uso.",
    h1: "NFPe online para o produtor rural",
    intro: "Centralize a emissão e a organização dos documentos fiscais da produção rural, com acesso online e rotina simplificada.",
    benefits: ["Emissão online de NFPe", "Cadastro de produtos e operações", "Organização dos documentos fiscais", "Acesso por navegador", "Histórico para consulta"],
    audience: ["Produtores rurais", "Agricultores", "Pequenas propriedades", "Operações de comercialização rural"],
    steps: ["Cadastre os dados do produtor.", "Configure produtos e informações fiscais.", "Informe os dados da operação.", "Emita e acompanhe o documento fiscal.", "Mantenha os documentos organizados para consulta."],
    faq: [
      { question: "O que é NFPe?", answer: "NFPe é a Nota Fiscal Eletrônica utilizada em operações relacionadas ao produtor rural, conforme as regras fiscais aplicáveis." },
      { question: "Posso acessar o sistema pelo celular?", answer: "O EmitaGo é uma plataforma online e responsiva, permitindo acesso por dispositivos compatíveis." },
      { question: "A emissão depende das regras do estado?", answer: "Sim. Documentos fiscais do produtor rural podem seguir regras e integrações específicas de cada estado." }
    ],
    relatedSlugs: ["nfe-passo-a-passo"]
  },
  {
    slug: "cte",
    title: "CTe e CTeOS — Documentos de Transporte",
    seoTitle: "CTe Online: emita CTe e CTeOS | EmitaGo",
    description: "Emissor de CT-e e CT-e OS para transportadoras, com recursos de MDF-e e CIOT. R$ 60 pré-pagos por CNPJ ativo no mês de uso.",
    h1: "CTe online para transportadoras",
    intro: "Centralize a emissão de Conhecimento de Transporte Eletrônico e conecte CTe, CTeOS, MDFe e CIOT na mesma operação.",
    benefits: ["Emissão de CTe e CTeOS", "Cadastro de tomadores e participantes", "Integração operacional com MDFe", "Organização dos XMLs", "Acesso online para a equipe"],
    audience: ["Transportadoras", "Transportadores de cargas", "Operadores logísticos", "Empresas que realizam transporte próprio"],
    steps: ["Cadastre transportadora, veículos e participantes.", "Configure dados fiscais e operação.", "Preencha remetente, destinatário, tomador e valores.", "Transmita o CTe à SEFAZ.", "Vincule o documento à viagem e ao MDFe quando aplicável."],
    faq: [
      { question: "O que é CTe?", answer: "O CTe é o Conhecimento de Transporte Eletrônico, documento usado para registrar prestações de serviço de transporte de cargas." },
      { question: "CTe e MDFe são a mesma coisa?", answer: "Não. O CTe documenta a prestação de transporte, enquanto o MDFe reúne documentos fiscais vinculados a uma viagem, conforme a operação." },
      { question: "O EmitaGo atende transportadoras?", answer: "Sim. O sistema reúne recursos de CTe, CTeOS, MDFe e CIOT em uma plataforma fiscal online." }
    ],
    relatedSlugs: ["cte-transporte", "mdfe-frota"]
  },
  {
    slug: "mdfe",
    title: "MDFe — Manifesto Eletrônico",
    seoTitle: "MDFe Online: emita Manifesto Eletrônico | EmitaGo",
    description: "Emissor de MDF-e online para transporte de cargas, com organização de documentos e viagens. R$ 60 pré-pagos por CNPJ ativo no mês de uso.",
    h1: "MDFe online para organizar suas viagens",
    intro: "Monte manifestos eletrônicos com mais controle sobre documentos, veículos, motoristas e encerramento das viagens.",
    benefits: ["Emissão de MDFe online", "Vinculação de NFe e CTe", "Cadastro de veículos e condutores", "Controle de viagens e encerramento", "Integração com a operação de transporte"],
    audience: ["Transportadoras", "Embarcadores", "Transportadores autônomos", "Empresas com frota própria"],
    steps: ["Selecione os documentos da viagem.", "Informe veículo, motorista e percurso.", "Confira os dados fiscais do manifesto.", "Transmita o MDFe e acompanhe a autorização.", "Encerre a viagem quando a operação terminar."],
    faq: [
      { question: "O que é MDFe?", answer: "O MDFe é o Manifesto Eletrônico de Documentos Fiscais, utilizado para consolidar documentos fiscais vinculados a determinadas operações de transporte." },
      { question: "Posso vincular NFe e CTe no MDFe?", answer: "Sim, conforme o tipo de operação, o manifesto pode reunir os documentos fiscais correspondentes à viagem." },
      { question: "É importante encerrar o MDFe?", answer: "Sim. O encerramento comunica o fim da viagem ao ambiente fiscal e é uma etapa importante da operação." }
    ],
    relatedSlugs: ["mdfe-frota", "cte-transporte"]
  },
  {
    slug: "ciot",
    title: "CIOT — Controle de Operações de Transporte",
    seoTitle: "CIOT Online: controle de transporte e frete | EmitaGo",
    description: "Organize recursos de CIOT e documentos de transporte em um sistema online. R$ 60 pré-pagos por CNPJ ativo no mês de uso.",
    h1: "CIOT integrado à sua operação de transporte",
    intro: "Tenha as informações de transporte centralizadas e reduza retrabalho ao trabalhar com CTe, MDFe e CIOT na mesma plataforma.",
    benefits: ["Organização das operações de transporte", "Integração com documentos fiscais", "Cadastro de transportadores e veículos", "Histórico das operações", "Acesso online"],
    audience: ["Transportadoras", "Embarcadores", "Operadores logísticos", "Empresas que contratam transporte rodoviário"],
    steps: ["Cadastre os participantes da operação.", "Informe os dados do transporte e do frete.", "Gere o CIOT quando exigido para a operação.", "Relacione as informações aos documentos de transporte.", "Mantenha o histórico organizado para consulta."],
    faq: [
      { question: "O que é CIOT?", answer: "CIOT é o Código Identificador da Operação de Transporte, utilizado em operações de transporte rodoviário sujeitas às regras aplicáveis." },
      { question: "CIOT substitui CTe ou MDFe?", answer: "Não. São documentos ou identificadores com finalidades diferentes dentro da operação de transporte." },
      { question: "Posso controlar CIOT junto com CTe e MDFe?", answer: "A proposta do EmitaGo é centralizar essas rotinas para reduzir retrabalho e manter a operação organizada." }
    ],
    relatedSlugs: ["cte-transporte", "mdfe-frota"]
  }
];

export function getSolutionBySlug(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}
