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
    seoTitle: "Emissor de NF-e Online para Produtos | EmitaGo",
    description: "Emita NF-e modelo 55 online para venda de produtos. Emissor fiscal com cadastro de produtos e clientes, DANFE e XML. R$ 60 pré-pagos por CNPJ no mês de uso.",
    h1: "Emissor de NF-e online para sua empresa",
    intro: "Emita Nota Fiscal Eletrônica (NF-e modelo 55) para venda de produtos em uma plataforma online. Organize clientes, produtos e informações tributárias, transmita a nota à SEFAZ e tenha DANFE e XML disponíveis para sua operação e contabilidade.",
    benefits: ["Emissão de NF-e modelo 55 pelo navegador", "Cadastro de produtos, clientes e informações tributárias", "Geração e acesso ao DANFE em PDF e ao XML da NF-e", "Acesso online por computador, tablet e celular compatíveis", "Assinatura digital e transmissão à SEFAZ conforme a configuração fiscal da empresa"],
    audience: ["Comércio e distribuição", "Indústrias", "Empresas do Simples Nacional", "Escritórios contábeis e operações multiempresa"],
    steps: ["Cadastre a empresa e configure os dados fiscais.", "Cadastre produtos, clientes e regras tributárias.", "Preencha a operação e assine a NFe com o certificado digital.", "Transmita à SEFAZ e acompanhe a autorização.", "Baixe ou envie DANFE e XML ao destinatário."],
    faq: [
      { question: "O que é NF-e modelo 55?", answer: "A Nota Fiscal Eletrônica (NF-e), modelo 55, é o documento fiscal digital utilizado para registrar operações com mercadorias, como vendas de produtos." },
      { question: "Como emitir NF-e online pelo EmitaGo?", answer: "Cadastre a empresa, configure os dados fiscais, informe produtos e cliente, preencha a operação e assine digitalmente o documento para transmissão à SEFAZ. A autorização depende da validação fiscal e do ambiente autorizador." },
      { question: "O emissor de NF-e gera DANFE e XML?", answer: "O EmitaGo disponibiliza a rotina de emissão de NF-e com geração de DANFE e XML para consulta, envio ao destinatário e organização contábil." },
      { question: "Preciso de certificado digital para emitir NF-e?", answer: "Em regra, a emissão de NF-e exige assinatura digital do emitente por certificado compatível com a operação e com as exigências fiscais aplicáveis." },
      { question: "O que é um emissor de NF-e online?", answer: "É um sistema pela internet usado para preencher, assinar digitalmente e transmitir a Nota Fiscal Eletrônica modelo 55 à SEFAZ. Depois da autorização, o contribuinte deve manter o XML e disponibilizar o DANFE conforme a operação." },
      { question: "Como emitir NF-e de produto pela internet?", answer: "Configure os dados fiscais da empresa, cadastre produtos e clientes, confira NCM, CFOP, CST ou CSOSN e demais informações da operação, assine o documento e transmita à SEFAZ. A NF-e só está autorizada após o retorno de autorização do Fisco." },
      { question: "O EmitaGo transmite a NF-e para a SEFAZ e gera DANFE e XML?", answer: "O EmitaGo oferece fluxo de emissão de NF-e com transmissão à SEFAZ e disponibilização de DANFE e XML, conforme a configuração fiscal e a disponibilidade do ambiente autorizador." },
      { question: "Qual a diferença entre um emissor gratuito e um sistema emissor de NF-e?", answer: "A diferença depende dos recursos oferecidos. Ao comparar, avalie cadastro de produtos e clientes, regras fiscais, transmissão, consulta de autorização, geração de DANFE e XML, suporte, organização de documentos e custo total da operação." },
            { question: "Quanto custa emitir NF-e pelo EmitaGo?", answer: "O EmitaGo custa R$ 60 por CNPJ ativo no mês de uso, pagos antecipadamente. No mês pago, a emissão é ilimitada para aquele CNPJ, sem fidelidade." }
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
    seoTitle: "Emissor de NFS-e Online para Serviços | EmitaGo",
    description: "Emita NFS-e online para sua empresa. Integração com mais de 1.600 municípios atendidos; confirme a cobertura e o padrão aplicável ao seu enquadramento, inclusive as regras nacionais do Simples Nacional. R$ 60 pré-pagos por CNPJ no mês de uso.",
    h1: "Emissor de NFS-e online para prestadores de serviços",
    intro: "Emita Nota Fiscal de Serviço Eletrônica (NFS-e) pela internet e organize clientes, serviços, dados da prestação e documentos fiscais em um só lugar. O EmitaGo possui integração com mais de 1.600 municípios. Desde 1º de novembro de 2026, ME e EPP optantes pelo Simples Nacional devem utilizar o padrão nacional; confirme com nossa equipe se a integração disponível atende ao seu enquadramento, município e operação antes de começar.",
    benefits: ["Emissão de NFS-e online pelo navegador", "Integração com mais de 1.600 municípios atendidos, conforme cobertura disponível", "Cadastro de clientes, tomadores e serviços", "Organização do histórico e dos documentos fiscais emitidos", "Acesso online por computador, tablet e celular compatíveis"],
    audience: ["Prestadores de serviços", "Empresas de tecnologia", "Profissionais e pequenas empresas", "Escritórios contábeis"],
    steps: ["Cadastre empresa, inscrição municipal e dados fiscais.", "Configure serviços e tributação.", "Informe tomador e detalhes da prestação.", "Transmita a NFSe ao ambiente municipal ou nacional aplicável.", "Acompanhe o status e mantenha o documento organizado."],
    faq: [
      { question: "O que é NFS-e?", answer: "A Nota Fiscal de Serviço Eletrônica (NFS-e) documenta a prestação de serviços e reúne informações do prestador, do tomador e da atividade realizada, conforme as regras aplicáveis." },
      { question: "A NFS-e nacional é obrigatória para empresas do Simples Nacional?", answer: "Desde 1º de novembro de 2026, microempresas e empresas de pequeno porte optantes pelo Simples Nacional devem emitir NFS-e pelo padrão nacional, via Emissor Web ou API, nas prestações sujeitas à emissão. Confirme se a integração disponível atende ao seu enquadramento e operação antes de contratar." },
      { question: "Como emitir NFS-e online pelo EmitaGo?", answer: "Cadastre a empresa e os dados municipais, configure os serviços e as informações fiscais, informe o tomador e os detalhes da prestação e transmita a nota pelo fluxo integrado disponível para o município." },
      { question: "O EmitaGo emite nota fiscal de serviço em qualquer cidade?", answer: "O EmitaGo possui integração com mais de 1.600 municípios atendidos, mas a disponibilidade depende da cidade, do padrão de integração e das regras aplicáveis. Consulte a equipe para confirmar seu município." },
      { question: "MEI e pequenas empresas podem emitir NFS-e pelo sistema?", answer: "A possibilidade depende da atividade, do enquadramento da empresa e das regras do município ou do ambiente nacional aplicável. Confirme a configuração necessária para seu CNPJ." },
      { question: "Quanto custa o emissor de NFS-e?", answer: "O EmitaGo custa R$ 60 por CNPJ ativo no mês de uso, pagos antecipadamente. No mês pago, a emissão é ilimitada para aquele CNPJ, sem fidelidade." }
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
