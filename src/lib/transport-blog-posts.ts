import type { BlogPost } from "./blog-posts";

// Conteúdo editorial focado nas dúvidas que cresceram após a ampliação das regras do CIOT em 2026.
export const transportBlogPosts: BlogPost[] = [
  {
    slug: "ciot-para-todos-2026-o-que-mudou",
    category: "Transporte",
    title: "CIOT para Todos em 2026: o que mudou e quem precisa emitir",
    excerpt: "Entenda a ampliação da obrigatoriedade do CIOT, as responsabilidades de contratantes e transportadoras e os cuidados antes de iniciar uma operação.",
    date: "18 Nov 2026",
    updatedAt: "18 Nov 2026",
    readMin: 9,
    image: "/images/blog/mdfe-frota.svg",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O CIOT ganhou ainda mais importância na rotina do transporte rodoviário de cargas em 2026. A ANTT ampliou o registro das operações remuneradas e publicou orientações específicas para geração, retificação, cancelamento e encerramento. Por isso, transportadoras, embarcadores e contratantes precisam revisar seus processos antes de iniciar cada viagem." },
      { type: "heading", text: "O que é CIOT?" },
      { type: "paragraph", text: "CIOT é o Código Identificador da Operação de Transporte. Ele identifica o registro de uma operação de transporte rodoviário remunerado de cargas e reúne dados como contratante, transportador, veículo, carga, origem, destino e valores do frete. Não substitui CT-e, MDF-e, nota fiscal ou contrato de transporte." },
      { type: "heading", text: "O que mudou em 2026?" },
      { type: "paragraph", text: "A Resolução ANTT nº 6.078/2026 ampliou o registro para as operações de transporte rodoviário remunerado de cargas, observadas as exceções regulamentares. A ANTT comunicou a entrada em vigor do CIOT para Todos em 24 de maio de 2026. Posteriormente, a Lei nº 15.485/2026 e a Resolução ANTT nº 6.090/2026 estabeleceram novos marcos e procedimentos, incluindo 18 de setembro de 2026 para as obrigações previstas na lei. Consulte sempre a regulamentação vigente para o tipo de operação." },
      { type: "heading", text: "Quem é responsável por gerar o CIOT?" },
      { type: "list", items: [
        "Quando há contratação ou subcontratação de TAC ou TAC equiparado, a responsabilidade segue as regras específicas do contratante ou subcontratante e deve observar o uso de instituição de pagamento habilitada e autorizada.",
        "Quando não há contratação de TAC ou TAC equiparado, a ETC que efetivamente realiza o transporte é responsável pelo registro, conforme os meios admitidos pela regulamentação.",
        "Em situações de delegação permitida, o acordo entre as partes não elimina automaticamente as responsabilidades legais do contratante."
      ] },
      { type: "heading", text: "CIOT é obrigatório sempre que existe CT-e ou MDF-e?" },
      { type: "paragraph", text: "A emissão de CT-e ou MDF-e, isoladamente, não define a obrigação. O ponto central é verificar se existe transporte rodoviário remunerado de cargas por conta de terceiros e se a operação se enquadra nas regras e exceções vigentes. A ANTT esclarece que a análise deve considerar a natureza real da operação." },
      { type: "heading", text: "Como o CIOT se relaciona com CT-e e MDF-e?" },
      { type: "paragraph", text: "Os documentos têm funções diferentes e complementares. O CT-e documenta a prestação de serviço de transporte; o MDF-e reúne os documentos fiscais vinculados à viagem, conforme o caso; e o CIOT identifica a operação de transporte registrada perante a ANTT. A regulamentação determina que o CIOT seja informado e vinculado ao MDF-e da operação correspondente, quando aplicável." },
      { type: "heading", text: "Checklist antes de iniciar a viagem" },
      { type: "list", items: [
        "Identifique quem contratou e quem efetivamente realizará o transporte.",
        "Confira o enquadramento do transportador e se existe contratação ou subcontratação de TAC ou TAC equiparado.",
        "Valide os dados de contratante, transportador, veículo, carga, origem, destino e valores.",
        "Confira o piso mínimo de frete quando aplicável.",
        "Gere ou confirme o CIOT antes do início da operação, quando exigido.",
        "Confira o vínculo do CIOT ao MDF-e e mantenha os documentos da viagem organizados."
      ] },
      { type: "heading", text: "Como o EmitaGo ajuda a transportadora" },
      { type: "paragraph", text: "O EmitaGo reúne emissão de CT-e e MDF-e e recursos para CIOT, além de calculadora da ANTT para apoiar a conferência do frete. A emissão de CT-e e MDF-e é ilimitada no mês ativo do CNPJ. O CIOT possui custo adicional por operação/uso, informado separadamente. O plano principal custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade. Consulte a equipe para confirmar as condições do CIOT para sua operação." },
      { type: "heading", text: "Perguntas frequentes" },
      { type: "heading", text: "O CIOT substitui o MDF-e?" },
      { type: "paragraph", text: "Não. São registros diferentes. O CIOT identifica a operação de transporte e deve ser informado e vinculado ao MDF-e correspondente quando aplicável." },
      { type: "heading", text: "Posso emitir CT-e e MDF-e ilimitados no EmitaGo?" },
      { type: "paragraph", text: "Sim. A emissão de CT-e e MDF-e é ilimitada durante o mês em que o CNPJ estiver ativo no EmitaGo. O CIOT tem custo adicional." },
      { type: "heading", text: "Fontes oficiais" },
      { type: "source", label: "ANTT — CIOT Para Todos: orientações e legislação", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/codigo-identificador-da-operacao-de-transporte-ciot" },
      { type: "source", label: "ANTT — Perguntas frequentes sobre CIOT", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" },
      { type: "source", label: "Lei nº 15.485/2026", href: "https://anttlegis.antt.gov.br/action/ActionDatalegis.php?acao=abrirTextoAto&cod_menu=7145&cod_modulo=420&numeroAto=00015485&orgao=NI&seqAto=000&tipo=LEI&valorAno=2026" }
    ]
  },
  {
    slug: "como-emitir-cte-transportadora-passo-a-passo",
    category: "Transporte",
    title: "Como emitir CT-e: passo a passo para transportadoras",
    excerpt: "Veja quais dados reunir, como preencher o Conhecimento de Transporte Eletrônico e o que conferir antes de transmitir à SEFAZ.",
    date: "18 Nov 2026",
    updatedAt: "18 Nov 2026",
    readMin: 7,
    image: "/images/blog/cte-transporte.svg",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O Conhecimento de Transporte Eletrônico (CT-e) registra prestações de serviço de transporte de cargas. Para emitir corretamente, a transportadora precisa reunir os dados dos participantes, da carga, do percurso, dos valores e da tributação antes de transmitir o documento à SEFAZ." },
      { type: "heading", text: "Quais informações separar antes da emissão?" },
      { type: "list", items: ["Dados do emitente e do tomador do serviço.", "Remetente, destinatário e expedidor, quando aplicáveis.", "Municípios de início e fim da prestação.", "Documentos fiscais que acompanham a carga.", "Descrição, valores e características da prestação.", "Informações fiscais e tributárias validadas com a contabilidade."] },
      { type: "heading", text: "Passo a passo para emitir CT-e" },
      { type: "list", items: ["Configure o cadastro da transportadora e o certificado digital exigido.", "Selecione o tipo de serviço e informe os participantes da operação.", "Preencha origem, destino, carga, valores e documentos relacionados.", "Revise CFOP, natureza da prestação e tributação com o responsável fiscal.", "Assine e transmita o CT-e à SEFAZ.", "Aguarde o retorno e confira se o documento foi autorizado antes de considerar a emissão concluída."] },
      { type: "heading", text: "CT-e autorizado, rejeitado ou pendente: confira o status" },
      { type: "paragraph", text: "O envio não significa autorização automática. Leia o retorno da SEFAZ, corrija eventuais rejeições com base na regra indicada e confirme o protocolo de autorização. Mantenha o XML e os documentos auxiliares organizados para a operação e para a contabilidade." },
      { type: "heading", text: "Qual a diferença entre CT-e e MDF-e?" },
      { type: "paragraph", text: "O CT-e documenta a prestação do serviço de transporte. O MDF-e reúne documentos fiscais vinculados à viagem e informações do veículo e do percurso, conforme a operação. Um não substitui o outro." },
      { type: "heading", text: "E o CIOT, quando devo considerar?" },
      { type: "paragraph", text: "O CIOT possui regras próprias e sua obrigatoriedade depende da operação de transporte rodoviário remunerado e das exceções aplicáveis. A responsabilidade pela geração também varia conforme a contratação. Não conclua que a emissão do CT-e, sozinha, resolve o CIOT: confira as orientações atuais da ANTT." },
      { type: "heading", text: "Emita CT-e e MDF-e em um único sistema" },
      { type: "paragraph", text: "O EmitaGo oferece emissão online de CT-e, CT-e OS e MDF-e, com emissão ilimitada desses documentos no mês ativo do CNPJ. O plano custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade. O CIOT possui custo adicional. Conheça a solução para transportadoras e confirme os detalhes da sua operação." },
      { type: "source", label: "Portal do CT-e — documentação e orientações", href: "https://www.cte.fazenda.gov.br/" },
      { type: "source", label: "ANTT — Perguntas frequentes sobre CIOT", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  },
  {
    slug: "mdfe-como-emitir-e-encerrar-manifesto",
    category: "Transporte",
    title: "Como emitir e encerrar MDF-e: guia para transportadoras",
    excerpt: "Aprenda a organizar os documentos da viagem, informar veículo e motorista, transmitir o MDF-e e realizar o encerramento corretamente.",
    date: "18 Nov 2026",
    updatedAt: "18 Nov 2026",
    readMin: 7,
    image: "/images/blog/mdfe-frota.svg",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O Manifesto Eletrônico de Documentos Fiscais (MDF-e) organiza informações dos documentos fiscais vinculados a uma viagem. A emissão correta depende do tipo de operação, dos documentos que acompanham a carga e dos dados de veículo, condutor e percurso." },
      { type: "heading", text: "O que conferir antes de montar o MDF-e?" },
      { type: "list", items: ["CT-e ou NF-e relacionados à viagem, conforme o tipo de operação.", "Dados do emitente e do responsável pelo transporte.", "Veículo, reboques e condutor, conforme aplicável.", "UF de carregamento, percurso e destino.", "Informações de carga e demais campos exigidos pelo leiaute vigente.", "CIOT da operação, quando exigido e aplicável."] },
      { type: "heading", text: "Como emitir MDF-e passo a passo" },
      { type: "list", items: ["Selecione o tipo de emitente e a operação.", "Inclua os documentos fiscais que serão transportados.", "Informe veículo, motorista e percurso.", "Confira os dados e transmita o manifesto ao ambiente autorizador.", "Aguarde a autorização e disponibilize o DAMDFE para acompanhar a carga, conforme as regras."] },
      { type: "heading", text: "Por que o encerramento do MDF-e é importante?" },
      { type: "paragraph", text: "O encerramento informa ao ambiente fiscal que a viagem foi concluída. Deixar manifestos abertos após o término pode gerar inconsistências operacionais e dificuldades para iniciar novas viagens com os mesmos dados. Faça o encerramento no momento correto, observando as regras e eventos aplicáveis." },
      { type: "heading", text: "CIOT e MDF-e: qual é o vínculo?" },
      { type: "paragraph", text: "CIOT e MDF-e têm funções diferentes. Quando o CIOT for exigido para a operação, ele deve ser informado e vinculado ao MDF-e correspondente conforme a regulamentação. Verifique também quem é o responsável pela geração, pois isso depende da relação contratual e do tipo de transportador." },
      { type: "heading", text: "MDF-e ilimitado no EmitaGo" },
      { type: "paragraph", text: "Com o EmitaGo, sua transportadora pode emitir CT-e e MDF-e de forma ilimitada durante o mês ativo do CNPJ. O plano é pré-pago, custa R$ 60 por CNPJ ativo no mês de uso e não exige fidelidade. O CIOT possui custo adicional. Consulte os detalhes e confirme a configuração necessária para sua operação." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" },
      { type: "source", label: "ANTT — CIOT Para Todos", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/codigo-identificador-da-operacao-de-transporte-ciot" }
    ]
  },
  {
    slug: "calculadora-antt-piso-minimo-frete-como-calcular",
    category: "Transporte",
    title: "Calculadora ANTT: como conferir o piso mínimo do frete",
    excerpt: "Entenda quais dados influenciam o cálculo do piso mínimo de frete e como usar a calculadora da ANTT como apoio antes de registrar a operação.",
    date: "18 Nov 2026",
    updatedAt: "18 Nov 2026",
    readMin: 6,
    image: "/images/blog/cte-transporte.svg",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "A conferência do piso mínimo de frete faz parte da preparação de determinadas operações de transporte rodoviário remunerado de cargas. A calculadora da ANTT ajuda a estimar o valor mínimo conforme os parâmetros oficiais, mas o resultado depende dos dados informados e da tabela vigente." },
      { type: "heading", text: "Quais dados influenciam o cálculo?" },
      { type: "list", items: ["Distância e percurso considerados para a operação.", "Tipo de carga e classificação aplicável.", "Número de eixos e características do veículo.", "Coeficientes e valores vigentes publicados pela ANTT.", "Regras específicas e condições da contratação."] },
      { type: "heading", text: "Como conferir o frete antes da viagem" },
      { type: "list", items: ["Reúna os dados reais do transporte e do veículo.", "Consulte a tabela e a ferramenta oficial vigentes da ANTT.", "Informe corretamente distância, carga e configuração veicular.", "Compare o valor calculado com o frete negociado.", "Quando houver dúvida sobre enquadramento ou componentes do frete, valide com o responsável pela operação e consulte a regulamentação."] },
      { type: "heading", text: "A calculadora substitui o CIOT?" },
      { type: "paragraph", text: "Não. A calculadora é uma ferramenta de apoio para estimar o piso mínimo. O CIOT é o código que identifica a operação de transporte registrada perante a ANTT. A conferência do piso não substitui o registro nem as demais obrigações documentais." },
      { type: "heading", text: "Como o EmitaGo ajuda" },
      { type: "paragraph", text: "O EmitaGo disponibiliza calculadora da ANTT no sistema e reúne emissão ilimitada de CT-e e MDF-e durante o mês ativo do CNPJ. O CIOT está disponível com custo adicional. O plano principal custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade." },
      { type: "source", label: "ANTT — Piso Mínimo de Frete", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/politica-nacional-de-pisos-minimos-de-frete" },
      { type: "source", label: "ANTT — CIOT Para Todos", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  }
];
