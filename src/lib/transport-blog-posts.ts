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
      { type: "heading", text: "Como o CIOT se relaciona com CT-e e manifesto de carga (MDF-e)?" },
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
      { type: "paragraph", text: "O EmitaGo reúne emissão de CT-e e MDF-e e recursos para CIOT, além de calculadora da ANTT para apoiar a conferência do frete. A emissão de CT-e e MDF-e é ilimitada no mês ativo do CNPJ. O EmitaGo também oferece recursos relacionados ao CIOT. Consulte a equipe para confirmar a disponibilidade e as condições aplicáveis à sua operação. O plano principal custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade." },
      { type: "heading", text: "Perguntas frequentes" },
      { type: "heading", text: "O CIOT substitui o MDF-e?" },
      { type: "paragraph", text: "Não. São registros diferentes. O CIOT identifica a operação de transporte e deve ser informado e vinculado ao MDF-e correspondente quando aplicável." },
      { type: "heading", text: "Posso emitir CT-e e MDF-e ilimitados no EmitaGo?" },
      { type: "paragraph", text: "Sim. A emissão de CT-e e MDF-e é ilimitada durante o mês em que o CNPJ estiver ativo no EmitaGo. O EmitaGo também oferece recursos relacionados ao CIOT." },
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
      { type: "paragraph", text: "O EmitaGo oferece emissão online de CT-e, CT-e OS e MDF-e, com emissão ilimitada desses documentos no mês ativo do CNPJ. O plano custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade. O EmitaGo também oferece recursos relacionados ao CIOT. Conheça a solução para transportadoras e confirme os detalhes da sua operação." },
      { type: "source", label: "Portal do CT-e — documentação e orientações", href: "https://www.cte.fazenda.gov.br/" },
      { type: "source", label: "ANTT — Perguntas frequentes sobre CIOT", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  },
  {
    slug: "mdfe-como-emitir-e-encerrar-manifesto",
    category: "Transporte",
    title: "Manifesto de carga (MDF-e): como emitir e encerrar",
    excerpt: "Aprenda como emitir manifesto de carga (MDF-e), organizar documentos da viagem, informar veículo e motorista e encerrar o manifesto corretamente.",
    date: "18 Nov 2026",
    updatedAt: "18 Nov 2026",
    readMin: 7,
    image: "/images/blog/mdfe-frota.svg",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O Manifesto Eletrônico de Documentos Fiscais (MDF-e), conhecido no dia a dia como manifesto de carga ou simplesmente manifesto, organiza informações dos documentos fiscais vinculados a uma viagem. A emissão correta depende do tipo de operação, dos documentos que acompanham a carga e dos dados de veículo, condutor e percurso." },
      { type: "heading", text: "O que conferir antes de montar o MDF-e?" },
      { type: "list", items: ["CT-e ou NF-e relacionados à viagem, conforme o tipo de operação.", "Dados do emitente e do responsável pelo transporte.", "Veículo, reboques e condutor, conforme aplicável.", "UF de carregamento, percurso e destino.", "Informações de carga e demais campos exigidos pelo leiaute vigente.", "CIOT da operação, quando exigido e aplicável."] },
      { type: "heading", text: "Como emitir manifesto de carga (MDF-e) passo a passo" },
      { type: "list", items: ["Selecione o tipo de emitente e a operação.", "Inclua os documentos fiscais que serão transportados.", "Informe veículo, motorista e percurso.", "Confira os dados e transmita o manifesto ao ambiente autorizador.", "Aguarde a autorização e disponibilize o DAMDFE para acompanhar a carga, conforme as regras."] },
      { type: "heading", text: "Por que o encerramento do MDF-e é importante?" },
      { type: "paragraph", text: "O encerramento informa ao ambiente fiscal que a viagem foi concluída. Deixar manifestos abertos após o término pode gerar inconsistências operacionais e dificuldades para iniciar novas viagens com os mesmos dados. Faça o encerramento no momento correto, observando as regras e eventos aplicáveis." },
      { type: "heading", text: "CIOT e MDF-e: qual é o vínculo?" },
      { type: "paragraph", text: "CIOT e MDF-e (manifesto de carga) têm funções diferentes. Quando o CIOT for exigido para a operação, ele deve ser informado e vinculado ao MDF-e correspondente conforme a regulamentação. Verifique também quem é o responsável pela geração, pois isso depende da relação contratual e do tipo de transportador." },
      { type: "heading", text: "Emissão ilimitada de MDF-e (manifesto de carga) no EmitaGo" },
      { type: "paragraph", text: "Com o EmitaGo, sua transportadora pode emitir CT-e e MDF-e de forma ilimitada durante o mês ativo do CNPJ. O plano é pré-pago, custa R$ 60 por CNPJ ativo no mês de uso e não exige fidelidade. O EmitaGo também oferece recursos relacionados ao CIOT. Consulte a equipe para confirmar a disponibilidade conforme sua operação." },
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
      { type: "paragraph", text: "O EmitaGo disponibiliza calculadora da ANTT no sistema e reúne emissão ilimitada de CT-e e MDF-e durante o mês ativo do CNPJ. O EmitaGo também oferece recursos relacionados ao CIOT. O plano principal custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade." },
      { type: "source", label: "ANTT — Piso Mínimo de Frete", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/politica-nacional-de-pisos-minimos-de-frete" },
      { type: "source", label: "ANTT — CIOT Para Todos", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  }

  ,
  {
    slug: "manifesto-de-carga-o-que-e-para-que-serve", category: "Transporte",
    title: "Manifesto de carga: o que é, para que serve e quando emitir",
    excerpt: "Entenda o que é o manifesto de carga, sua relação com MDF-e, CT-e, NF-e e CIOT e quais informações devem acompanhar a viagem.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 7, image: "/images/blog/mdfe-frota.svg", author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "Manifesto de carga é o nome usado no dia a dia por transportadoras e motoristas para falar do Manifesto Eletrônico de Documentos Fiscais (MDF-e). Esse documento fiscal eletrônico reúne informações dos documentos fiscais vinculados a uma viagem e dados do transporte, conforme o tipo de operação e as regras aplicáveis." },
      { type: "heading", text: "Manifesto de carga e MDF-e são a mesma coisa?" },
      { type: "paragraph", text: "No contexto da documentação fiscal eletrônica do transporte rodoviário, quando alguém procura por manifesto de carga, geralmente está se referindo ao MDF-e. A denominação oficial é Manifesto Eletrônico de Documentos Fiscais, modelo 58. Por isso, este guia utiliza as duas expressões: manifesto de carga, como termo popular de pesquisa, e MDF-e, como sigla oficial." },
      { type: "heading", text: "Para que serve o manifesto de carga?" },
      { type: "list", items: ["Reunir os documentos fiscais vinculados à viagem, conforme a operação.", "Identificar dados do veículo, condutor e percurso quando exigidos.", "Acompanhar a movimentação da carga durante o transporte.", "Registrar eventos fiscais, como encerramento da viagem.", "Informar o CIOT da operação quando houver obrigatoriedade e MDF-e aplicável."] },
      { type: "heading", text: "Qual a diferença entre manifesto, CT-e e NF-e?" },
      { type: "paragraph", text: "A NF-e documenta operações com mercadorias. O CT-e registra a prestação do serviço de transporte. O MDF-e, conhecido como manifesto de carga, reúne documentos e informações da viagem. São documentos diferentes e complementares, e a necessidade de cada um depende da operação e da legislação aplicável." },
      { type: "heading", text: "E qual é o papel do CIOT?" },
      { type: "paragraph", text: "O CIOT identifica o registro da operação de transporte perante a ANTT. Ele não substitui o manifesto de carga, o CT-e ou a nota fiscal. Quando houver MDF-e aplicável, o CIOT deve ser informado e vinculado ao manifesto correspondente, conforme as regras vigentes." },
      { type: "heading", text: "Emita manifesto de carga e CT-e no EmitaGo" },
      { type: "paragraph", text: "O EmitaGo oferece emissão online e ilimitada de CT-e e MDF-e (manifesto de carga) durante o mês ativo do CNPJ. O sistema também disponibiliza recursos de CIOT e calculadora da ANTT. O plano principal custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade. Consulte a equipe para confirmar a disponibilidade dos recursos de CIOT para sua operação." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" },
      { type: "source", label: "ANTT — Perguntas frequentes sobre CIOT", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  },
  {
    slug: "como-emitir-manifesto-de-carga-online", category: "Transporte",
    title: "Como emitir manifesto de carga online: passo a passo do MDF-e",
    excerpt: "Veja como preparar os documentos, cadastrar veículo e motorista, preencher o MDF-e e acompanhar a autorização do manifesto de carga.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 8, image: "/images/blog/mdfe-frota.svg", author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "Para emitir manifesto de carga online, a transportadora utiliza o MDF-e (Manifesto Eletrônico de Documentos Fiscais), documento fiscal eletrônico que organiza informações da viagem e os documentos vinculados à carga." },
      { type: "heading", text: "Antes de começar a emissão do manifesto" },
      { type: "list", items: ["Confira se a empresa está habilitada para emitir MDF-e.", "Tenha certificado digital válido e compatível com o emissor.", "Separe CT-e ou NF-e que serão vinculados, conforme o tipo de operação.", "Confira cadastro de veículo, reboques e motorista.", "Defina percurso e informações da carga.", "Verifique o CIOT quando exigido e aplicável."] },
      { type: "heading", text: "Passo a passo para emitir manifesto de carga" },
      { type: "list", items: ["Acesse o emissor de MDF-e e selecione a operação correta.", "Informe os documentos fiscais que acompanharão a viagem.", "Preencha dados do veículo, condutor e percurso.", "Revise as informações e valide os campos obrigatórios.", "Assine digitalmente e transmita o MDF-e ao ambiente autorizador.", "Aguarde o retorno e confirme a autorização antes de iniciar a viagem.", "Disponibilize o DAMDFE conforme as exigências da operação."] },
      { type: "heading", text: "O que fazer se o manifesto for rejeitado?" },
      { type: "paragraph", text: "Leia o código e a mensagem de rejeição retornados pelo ambiente autorizador. Confira cadastro, documentos vinculados, veículo, percurso e campos obrigatórios. Corrija a causa identificada e transmita novamente. Não considere o manifesto autorizado apenas porque os dados foram enviados." },
      { type: "heading", text: "Preciso informar CIOT no manifesto de carga?" },
      { type: "paragraph", text: "Quando a operação estiver sujeita ao CIOT e houver MDF-e aplicável, o código deve ser informado e vinculado ao manifesto correspondente conforme a regulamentação. A responsabilidade pela geração varia conforme a contratação e o enquadramento dos transportadores." },
      { type: "heading", text: "Emissão ilimitada de manifesto de carga no EmitaGo" },
      { type: "paragraph", text: "No EmitaGo, a emissão de MDF-e (manifesto de carga) e CT-e é ilimitada durante o mês ativo do CNPJ. O plano principal custa R$ 60 pré-pagos por CNPJ ativo no mês de uso, sem fidelidade. O sistema também oferece calculadora da ANTT e recursos de CIOT, consulte a equipe para conhecer a disponibilidade conforme sua operação." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" },
      { type: "source", label: "Manual de Orientação do Contribuinte — MDF-e (CONFAZ)", href: "https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/manual_mdfe_v3-00.pdf" }
    ]
  },
  {
    slug: "manifesto-de-carga-encerramento-e-consulta", category: "Transporte",
    title: "Como encerrar manifesto de carga e consultar o MDF-e",
    excerpt: "Saiba quando encerrar o manifesto de carga, por que o evento é importante e como consultar a situação do MDF-e após a viagem.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 6, image: "/images/blog/mdfe-frota.svg", author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O encerramento do manifesto de carga é o evento que informa ao ambiente fiscal que a viagem vinculada ao MDF-e foi concluída. Depois de finalizar a operação, a transportadora deve conferir os dados e registrar o evento de encerramento no momento e nas condições previstos pela legislação." },
      { type: "heading", text: "Por que encerrar o MDF-e?" },
      { type: "list", items: ["Atualiza a situação fiscal do manifesto após a conclusão da viagem.", "Mantém o histórico da operação coerente com o transporte realizado.", "Ajuda a evitar manifestos que permanecem abertos indevidamente.", "Permite organizar a documentação para auditoria e consulta."] },
      { type: "heading", text: "Como encerrar manifesto de carga" },
      { type: "list", items: ["Localize o MDF-e autorizado correspondente à viagem.", "Confira se a operação foi concluída e se os dados estão corretos.", "Acesse a função de encerramento no emissor.", "Informe os dados solicitados e transmita o evento.", "Aguarde a confirmação do ambiente autorizador.", "Consulte a situação atualizada do MDF-e e guarde o protocolo."] },
      { type: "heading", text: "Como consultar um manifesto de carga?" },
      { type: "paragraph", text: "A consulta deve ser feita pelos canais oficiais ou pelo sistema emissor, utilizando a chave de acesso e os dados de identificação disponíveis. Confira autorização, eventos e situação atual do documento." },
      { type: "heading", text: "Controle seus manifestos no EmitaGo" },
      { type: "paragraph", text: "O EmitaGo reúne emissão online de CT-e e MDF-e (manifesto de carga), com emissão ilimitada durante o mês ativo do CNPJ, além de recursos de CIOT e calculadora da ANTT. O plano principal é pré-pago, por R$ 60 por CNPJ ativo no mês de uso, sem fidelidade." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" }
    ]
  },
  {
    slug: "emissor-de-manifesto-de-carga-para-transportadora", category: "Transporte",
    title: "Emissor de manifesto de carga para transportadora: como escolher",
    excerpt: "Compare os recursos importantes em um emissor de manifesto de carga: MDF-e, CT-e, CIOT, calculadora ANTT, autorização e controle de viagens.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 7, image: "/images/blog/cte-transporte.svg", author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "Um emissor de manifesto de carga é o sistema utilizado pela transportadora para preencher, assinar, transmitir e acompanhar o MDF-e. Ao escolher uma plataforma, vale avaliar também como ela se conecta à rotina de CT-e, CIOT, veículos, motoristas e documentos da viagem." },
      { type: "heading", text: "O que avaliar em um emissor de MDF-e?" },
      { type: "list", items: ["Emissão e acompanhamento de MDF-e (manifesto de carga).", "Integração com CT-e e documentos fiscais relacionados.", "Cadastro e reutilização de dados de veículos e motoristas.", "Consulta de autorização e eventos, inclusive encerramento.", "Recursos de CIOT e clareza sobre as condições comerciais.", "Calculadora da ANTT para apoiar a conferência do piso mínimo de frete.", "Acesso online e organização dos documentos para a equipe."] },
      { type: "heading", text: "Por que integrar CT-e e manifesto de carga?" },
      { type: "paragraph", text: "O CT-e registra a prestação do serviço de transporte, enquanto o MDF-e organiza os documentos e informações da viagem. Quando os dois fluxos estão na mesma plataforma, a equipe pode reduzir retrabalho na preparação da documentação." },
      { type: "heading", text: "CIOT e calculadora ANTT também importam" },
      { type: "paragraph", text: "O CIOT é um registro regulatório da operação perante a ANTT e deve ser vinculado ao MDF-e quando aplicável. A calculadora da ANTT apoia a conferência do piso mínimo de frete, mas não substitui o registro do CIOT." },
      { type: "heading", text: "O EmitaGo oferece recursos de CIOT?" },
      { type: "paragraph", text: "O plano principal do EmitaGo custa R$ 60 pré-pagos por CNPJ ativo no mês de uso e oferece emissão ilimitada de CT-e e MDF-e durante o mês pago, sem fidelidade. A plataforma também oferece calculadora da ANTT e recursos relacionados ao CIOT. Consulte a equipe para confirmar a disponibilidade conforme sua operação." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" },
      { type: "source", label: "ANTT — Perguntas frequentes sobre CIOT", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  }
];
