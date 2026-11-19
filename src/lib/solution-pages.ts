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
    seoTitle: "Emissor de NF-e Online para Empresas | EmitaGo",
    description: "Emita NF-e modelo 55 online, gere DANFE e XML e organize produtos e clientes. R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, sem fidelidade.",
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
            { question: "Quanto custa emitir NF-e pelo EmitaGo?", answer: "O EmitaGo custa R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, pagos antecipadamente. No mês pago, a emissão é ilimitada para aquele CNPJ, sem fidelidade." }
    ],
    relatedSlugs: ["nfe-passo-a-passo", "rejeicao-nfe-como-identificar-e-corrigir", "xml-nfe-o-que-e-como-baixar-e-guardar", "danfe-nfe-o-que-e-para-que-serve-e-como-consultar", "cfop-na-nfe-o-que-e-como-escolher", "nota-fiscal-devolucao-como-emitir-nfe", "carta-correcao-eletronica", "cancelamento-nfe"]
  },
  {
    slug: "nfce",
    title: "NFCe — Nota Fiscal do Consumidor",
    seoTitle: "NFCe Online: emissão de cupom fiscal no PDV | EmitaGo",
    description: "Emissor de NFC-e com PDV e Smart POS compatível. R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, sem fidelidade.",
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
    description: "Sistema PDV com NFC-e e Smart POS Android compatível. R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, sem fidelidade.",
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
      { question: "Quanto custa o PDV com NFC-e?", answer: "O preço do EmitaGo é R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, com pagamento antecipado. A emissão é ilimitada no mês pago para o CNPJ ativo, sem fidelidade." }
    ],
    relatedSlugs: ["nfce-varejo", "nfe-passo-a-passo"]
  },
  {
    slug: "nfse",
    title: "NFSe — Nota Fiscal de Serviço",
    seoTitle: "Emissor de NFS-e Online para Serviços | EmitaGo",
    description: "Emita NFS-e online com integração a mais de 1.600 municípios atendidos. Consulte sua cidade e pague R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs.",
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
      { question: "Quanto custa o emissor de NFS-e?", answer: "O EmitaGo custa R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, pagos antecipadamente. No mês pago, a emissão é ilimitada para aquele CNPJ, sem fidelidade." }
    ],
    relatedSlugs: ["nfse-servicos"]
  },
  {
    slug: "nfpe",
    title: "NFPe — Nota Fiscal do Produtor Rural",
    seoTitle: "NFP-e online: nota fiscal do produtor rural | EmitaGo",
    description: "Emissor de NFP-e para produtor rural, conforme operação e regras estaduais. R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs.",
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
    seoTitle: "Emissor de CT-e Online para Transportadoras | EmitaGo",
    description: "Emita CT-e e CT-e OS online em uma plataforma para transportadoras. CT-e e MDF-e ilimitados no mês ativo do CNPJ, além de recursos relacionados ao CIOT. R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs.",
    h1: "Emissor de CT-e online para transportadoras",
    intro: "Centralize a emissão de CT-e e CT-e OS, organize os dados da prestação e conecte a rotina com MDF-e e CIOT. No EmitaGo, CT-e e MDF-e têm emissão ilimitada no mês ativo do CNPJ, e a plataforma também oferece recursos relacionados ao CIOT.",
    benefits: ["Emissão online de CT-e e CT-e OS", "CT-e e MDF-e ilimitados no mês ativo do CNPJ", "Cadastro de tomadores e participantes da prestação", "Integração operacional com MDF-e e rotinas de CIOT", "Calculadora da ANTT disponível no sistema", "Organização de documentos fiscais e acesso online para a equipe"],
    audience: ["Transportadoras e ETCs", "Transportadores de cargas", "Operadores logísticos", "Empresas que realizam transporte rodoviário remunerado"],
    steps: ["Cadastre a transportadora, os participantes e os dados necessários.", "Configure os dados fiscais e o certificado digital.", "Informe remetente, destinatário, tomador, percurso e valores.", "Revise a tributação e transmita o CT-e à SEFAZ.", "Acompanhe a autorização e organize a vinculação ao MDF-e quando aplicável."],
    faq: [
      { question: "O que é CT-e?", answer: "O CT-e é o Conhecimento de Transporte Eletrônico, documento fiscal que registra prestações de serviço de transporte de cargas." },
      { question: "CT-e e MDF-e são a mesma coisa?", answer: "Não. O CT-e documenta a prestação do serviço de transporte; o MDF-e reúne documentos fiscais e informações relacionadas à viagem, conforme a operação." },
      { question: "O CT-e é ilimitado no EmitaGo?", answer: "Sim. A emissão de CT-e e MDF-e é ilimitada durante o mês em que o CNPJ estiver ativo no EmitaGo." },
      { question: "O EmitaGo também oferece CIOT?", answer: "Sim. O EmitaGo também oferece recursos relacionados ao CIOT. Consulte a equipe para conhecer a disponibilidade para sua operação." },
      { question: "O sistema possui calculadora da ANTT?", answer: "Sim. O EmitaGo disponibiliza uma calculadora da ANTT para apoiar a conferência do piso mínimo de frete. A calculadora não substitui o registro do CIOT nem a consulta às regras oficiais." },
      { question: "Quanto custa o EmitaGo para transportadoras?", answer: "O plano principal custa R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, com emissão ilimitada de CT-e e MDF-e durante o mês pago. O EmitaGo também oferece recursos relacionados ao CIOT." }
    ],
    relatedSlugs: ["ciot-para-todos-2026-o-que-mudou", "como-emitir-cte-transportadora-passo-a-passo", "mdfe-como-emitir-e-encerrar-manifesto", "calculadora-antt-piso-minimo-frete-como-calcular", "manifesto-de-carga-o-que-e-para-que-serve", "como-emitir-manifesto-de-carga-online", "manifesto-de-carga-encerramento-e-consulta", "emissor-de-manifesto-de-carga-para-transportadora", "cte-transporte", "mdfe-frota"]
  },
  {
    slug: "mdfe",
    title: "MDF-e — Manifesto de Carga Eletrônico",
    seoTitle: "Emissor de Manifesto de Carga e MDF-e Online | EmitaGo",
    description: "Emita manifesto de carga (MDF-e) online e organize documentos, veículos, motoristas e viagens. MDF-e e CT-e ilimitados no mês ativo do CNPJ, além de recursos relacionados ao CIOT.",
    h1: "Emissor de manifesto de carga (MDF-e) online para transportadoras",
    intro: "Emita o manifesto de carga (MDF-e), vincule os documentos fiscais da viagem e acompanhe autorização e encerramento. O EmitaGo oferece emissão ilimitada de MDF-e e CT-e no mês ativo do CNPJ, calculadora da ANTT e recursos relacionados ao CIOT.",
    benefits: ["Emissão ilimitada de MDF-e e CT-e no mês ativo do CNPJ", "Vinculação de NF-e e CT-e conforme a operação", "Cadastro de veículos e condutores", "Organização de viagens e encerramento do manifesto", "Recursos relacionados ao CIOT", "Calculadora da ANTT integrada ao sistema"],
    audience: ["Transportadoras e ETCs", "Embarcadores", "Transportadores autônomos", "Empresas com frota própria"],
    steps: ["Selecione os documentos fiscais da viagem.", "Informe veículo, motorista, percurso e demais dados exigidos.", "Confira as informações do manifesto e o CIOT quando aplicável.", "Transmita o MDF-e e acompanhe a autorização.", "Encerre a viagem quando a operação terminar."],
    faq: [
      { question: "Manifesto de carga e MDF-e são a mesma coisa?", answer: "No uso comum do transporte, manifesto de carga é a forma popular de se referir ao MDF-e — Manifesto Eletrônico de Documentos Fiscais, modelo 58." },
      { question: "O que é MDF-e?", answer: "O MDF-e é o Manifesto Eletrônico de Documentos Fiscais, documento fiscal eletrônico que reúne documentos e informações de uma operação de transporte, conforme as regras aplicáveis." },
      { question: "Posso vincular NF-e e CT-e no MDF-e?", answer: "Sim. Conforme o tipo de operação, o manifesto reúne os documentos fiscais correspondentes à viagem." },
      { question: "O manifesto de carga é ilimitado no EmitaGo?", answer: "Sim. A emissão de MDF-e (manifesto de carga) e CT-e é ilimitada durante o mês em que o CNPJ estiver ativo no EmitaGo." },
      { question: "Preciso encerrar o MDF-e?", answer: "O encerramento comunica ao ambiente fiscal o fim da viagem e deve ser realizado conforme o procedimento e o momento previstos para a operação." },
      { question: "O EmitaGo oferece recursos relacionados ao CIOT?", answer: "Sim. Consulte a equipe para confirmar a disponibilidade dos recursos de CIOT conforme sua operação." }
    ],
    relatedSlugs: ["ciot-para-todos-2026-o-que-mudou", "mdfe-como-emitir-e-encerrar-manifesto", "manifesto-de-carga-o-que-e-para-que-serve", "como-emitir-manifesto-de-carga-online", "manifesto-de-carga-encerramento-e-consulta", "emissor-de-manifesto-de-carga-para-transportadora", "calculadora-antt-piso-minimo-frete-como-calcular", "cte-transporte", "mdfe-frota"]
  },
  {
    slug: "ciot",
    title: "CIOT — Controle de Operações de Transporte",
    seoTitle: "Emissor de CIOT Online: CIOT para Transportadoras | EmitaGo",
    description: "Organize as rotinas de CIOT, CT-e e MDF-e em uma plataforma online para transporte. Consulte os recursos disponíveis e use a calculadora da ANTT para apoiar a conferência do piso mínimo de frete.",
    h1: "CIOT para transportadoras: organize o registro da operação",
    intro: "Organize as rotinas de transporte no EmitaGo: emissão ilimitada de CT-e e MDF-e durante o mês ativo do CNPJ, calculadora da ANTT para apoiar a conferência do piso mínimo de frete e recursos relacionados ao CIOT. Confira as regras da ANTT para identificar quem deve gerar o código em cada tipo de contratação e consulte a equipe sobre a disponibilidade dos recursos para sua operação.",
    benefits: ["Recursos de CIOT integrados à rotina de transporte", "CT-e e MDF-e ilimitados no mês ativo do CNPJ", "Calculadora da ANTT para apoiar a conferência do piso mínimo de frete", "Organização de dados de transportadores, veículos e operações", "Documentos de transporte reunidos em uma plataforma online"],
    audience: ["Transportadoras e ETCs", "Embarcadores e contratantes", "Operadores logísticos", "Empresas que contratam transporte rodoviário remunerado"],
    steps: ["Identifique o tipo de operação e os participantes do transporte.", "Verifique quem é responsável pela geração do CIOT conforme a contratação.", "Confira dados do frete e o piso mínimo aplicável com apoio da calculadora da ANTT.", "Realize o registro do CIOT conforme o fluxo disponível e as regras vigentes.", "Informe e vincule o CIOT ao MDF-e correspondente quando aplicável."],
    faq: [
      { question: "O que é CIOT?", answer: "CIOT é o Código Identificador da Operação de Transporte, utilizado para identificar o registro de uma operação de transporte rodoviário remunerado de cargas." },
      { question: "CIOT substitui CT-e ou MDF-e?", answer: "Não. O CT-e documenta a prestação de transporte, o MDF-e reúne documentos da viagem e o CIOT identifica o registro da operação perante a ANTT." },
      { question: "O CIOT é obrigatório para todas as transportadoras?", answer: "A regra geral alcança operações de transporte rodoviário remunerado de cargas, observadas as exceções e as responsabilidades previstas na regulamentação. A análise depende da operação concreta." },
      { question: "Quem deve gerar o CIOT?", answer: "A responsabilidade varia conforme a contratação. Quando há contratação ou subcontratação de TAC ou TAC equiparado, aplicam-se regras próprias para contratante ou subcontratante; sem TAC ou equiparado, a ETC que efetivamente realiza a operação responde pelo registro, conforme os meios regulamentares." },
      { question: "O EmitaGo oferece recursos relacionados ao CIOT?", answer: "Sim. Consulte a equipe para confirmar a disponibilidade dos recursos de CIOT conforme sua operação. O plano principal de R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, inclui emissão ilimitada de CT-e e MDF-e durante o mês pago." },
      { question: "A calculadora da ANTT gera o CIOT?", answer: "Não. A calculadora apoia a conferência do piso mínimo de frete. O registro e a geração do CIOT são procedimentos distintos e devem seguir os canais e requisitos autorizados pela ANTT." }
    ],
    relatedSlugs: ["ciot-para-todos-2026-o-que-mudou", "calculadora-antt-piso-minimo-frete-como-calcular", "como-emitir-cte-transportadora-passo-a-passo", "mdfe-como-emitir-e-encerrar-manifesto", "cte-transporte", "mdfe-frota"]
  },
  {
    slug: "sistema-notas-fiscais",
    title: "Sistema de Notas Fiscais para Empresas",
    seoTitle: "Sistema de Notas Fiscais Online para Empresas | EmitaGo",
    description: "Conheça um sistema de notas fiscais online para emitir NF-e, NFC-e, NFS-e, CT-e, MDF-e e outros documentos. R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs.",
    h1: "Sistema de notas fiscais online para sua empresa",
    intro: "O EmitaGo é um sistema de emissão de notas fiscais pela internet para empresas que precisam organizar documentos de produtos, serviços, varejo e transporte. Emita NF-e, NFC-e, NFS-e, CT-e, CT-e OS, MDF-e e NFP-e, além de recursos relacionados ao CIOT, em uma plataforma online. A disponibilidade depende do documento, da operação, da configuração fiscal e da integração aplicável.",
    benefits: [
      "Emissão online de NF-e para operações com produtos",
      "NFC-e integrada à rotina de PDV para o varejo",
      "NFS-e com integração a mais de 1.600 municípios, conforme cobertura disponível",
      "Documentos de transporte como CT-e, CT-e OS e MDF-e, além de recursos relacionados ao CIOT",
      "Acesso pelo navegador em computador, tablet e celular compatíveis",
      "Gestão de múltiplos CNPJs no mesmo painel, com cobrança individual por CNPJ ativo",
      "Modelo pré-pago: R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, com emissão ilimitada no mês pago"
    ],
    audience: [
      "Comércio, lojas e distribuidores",
      "Prestadores de serviços",
      "Transportadoras e operações logísticas",
      "Indústrias e empresas com emissão recorrente",
      "Escritórios contábeis que acompanham vários CNPJs",
      "Produtores rurais, conforme a operação e as regras estaduais"
    ],
    steps: [
      "Converse com a equipe para confirmar se os documentos e as integrações atendem à sua operação.",
      "Cadastre a empresa e configure os dados fiscais e o certificado digital exigido.",
      "Organize produtos, serviços, clientes e informações tributárias.",
      "Preencha cada operação e transmita o documento ao ambiente autorizador correspondente.",
      "Acompanhe o retorno, consulte os documentos e compartilhe os arquivos com sua contabilidade."
    ],
    faq: [
      { question: "O que é um sistema de notas fiscais?", answer: "É um software utilizado para preencher, assinar quando exigido, transmitir e acompanhar documentos fiscais eletrônicos, como NF-e, NFC-e e NFS-e. Os recursos variam conforme o sistema, o documento e a operação." },
      { question: "Quais notas fiscais posso emitir pelo EmitaGo?", answer: "O EmitaGo oferece emissão de NF-e, NFC-e, NFS-e, CT-e, CT-e OS, MDF-e e NFP-e, além de recursos relacionados ao CIOT. A disponibilidade deve ser confirmada para o enquadramento e a operação da empresa." },
      { question: "O EmitaGo é um sistema de notas fiscais online?", answer: "Sim. O acesso é feito pela internet, pelo navegador, em computador, tablet ou celular compatíveis, sem instalar um programa tradicional no computador." },
      { question: "Quanto custa o sistema de notas fiscais EmitaGo?", answer: "O preço é R$ 60,00 por CNPJ/mês para até 5 CNPJs e R$ 40,00 por CNPJ/mês acima de 5 CNPJs, com pagamento antecipado. No mês pago, a emissão é ilimitada para aquele CNPJ. Não há fidelidade nem cobrança pelo uso nos meses em que o CNPJ não for ativado." },
      { question: "Posso usar o mesmo painel para mais de uma empresa?", answer: "Sim. É possível gerenciar múltiplos CNPJs no mesmo painel. A cobrança é individual por CNPJ ativo em cada mês de uso." },
      { question: "O sistema atende empresas do Simples Nacional?", answer: "O sistema atende empresas de diferentes segmentos e enquadramentos, mas a configuração fiscal e a disponibilidade de cada documento dependem da operação e das regras aplicáveis. Confirme os detalhes com a equipe e com a contabilidade." },
      { question: "Como escolher entre um emissor gratuito e um sistema pago?", answer: "Compare os documentos atendidos, limites de emissão, cadastro de produtos e serviços, integração com SEFAZ ou município, armazenamento de XML e DANFE, suporte, recursos de PDV e custo total. A melhor opção depende do volume e da complexidade da operação." },
      { question: "O EmitaGo emite NFS-e em qualquer município?", answer: "O EmitaGo possui integração com mais de 1.600 municípios, mas a disponibilidade depende da cidade, do padrão de integração e das regras aplicáveis. Consulte a equipe para confirmar seu município." }
    ],
    relatedSlugs: ["nfe-passo-a-passo", "nfse-servicos", "nfce-varejo", "cte-transporte"]
  },
];

export function getSolutionBySlug(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}
