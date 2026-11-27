import type { BlogPost } from "./blog-posts";
import mdfeFrotaImage from "../assets/blog/mdfe-frota.jpg";
import cteTransporteImage from "../assets/blog/cte-transporte.jpg";

// Conteúdo editorial focado nas dúvidas que cresceram após a ampliação das regras do CIOT em 2026.
export const transportBlogPosts: BlogPost[] = [
  {
    slug: "ciot-para-todos-2026-o-que-mudou",
    category: "Transporte",
    title: "CIOT para Todos em 2026: o que mudou e quem precisa emitir",
    excerpt: "Entenda a ampliação da obrigatoriedade do CIOT, as responsabilidades de contratantes e transportadoras e os cuidados antes de iniciar uma operação.",
    date: "18 Nov 2026",
    updatedAt: "21 Nov 2026",
    readMin: 9,
    image: mdfeFrotaImage,
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O CIOT ganhou ainda mais importância na rotina do transporte rodoviário de cargas em 2026. A ANTT ampliou o registro das operações remuneradas e publicou orientações específicas para geração, retificação, cancelamento e encerramento. Por isso, transportadoras, embarcadores e contratantes precisam revisar seus processos antes de iniciar cada viagem." },
      { type: "heading", text: "O que é CIOT?" },
      { type: "paragraph", text: "CIOT é o Código Identificador da Operação de Transporte. Ele identifica o registro de uma operação de transporte rodoviário remunerado de cargas e reúne dados como contratante, transportador, veículo, carga, origem, destino e valores do frete. Não substitui CT-e, MDF-e, nota fiscal ou contrato de transporte." },
      { type: "heading", text: "O que mudou em 2026?" },
      { type: "paragraph", text: "A Resolução ANTT nº 6.078/2026 ampliou o registro para operações de transporte rodoviário remunerado de cargas, observadas as exceções regulamentares. Embora a comunicação inicial tenha indicado 24 de maio de 2026, a Lei nº 15.485/2026 e a Resolução ANTT nº 6.090/2026 estabeleceram 18 de setembro de 2026 como marco para a obrigatoriedade prevista nos §§ 15 e 16 do art. 7º da Lei nº 13.703/2018. Na prática, confira a regulamentação vigente e as exceções aplicáveis antes de iniciar cada operação." },
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
      { type: "paragraph", text: "O EmitaGo reúne emissão de CT-e e MDF-e e recursos para CIOT, além de calculadora da ANTT para apoiar a conferência do frete. A emissão de CT-e e MDF-e é ilimitada no mês ativo do CNPJ. O EmitaGo também oferece recursos relacionados ao CIOT. Consulte a equipe para confirmar a disponibilidade e as condições aplicáveis à sua operação. O plano principal custa R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade, sem fidelidade." },
      { type: "heading", text: "Perguntas frequentes" },
      { type: "heading", text: "A geração do CIOT tem custo?" },
      { type: "paragraph", text: "Não. A ANTT determina que o cadastramento da operação, com geração e recebimento do CIOT, seja gratuito. Instituições de Pagamento podem cobrar por serviços adicionais, mas não pela geração do CIOT em si. A assinatura do plano EmitaGo é uma contratação separada de acesso e uso da plataforma fiscal, não uma taxa oficial por CIOT." },
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
    image: cteTransporteImage,
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
      { type: "paragraph", text: "O EmitaGo oferece emissão online de CT-e, CT-e OS e MDF-e, com emissão ilimitada desses documentos no mês ativo do CNPJ. O plano custa R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade, sem fidelidade. O EmitaGo também oferece recursos relacionados ao CIOT. Conheça a solução para transportadoras e confirme os detalhes da sua operação." },
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
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1200&q=80",
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
      { type: "paragraph", text: "Com o EmitaGo, sua transportadora pode emitir CT-e e MDF-e de forma ilimitada durante o mês ativo do CNPJ. O plano é pré-pago, custa R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade e não exige fidelidade. O EmitaGo também oferece recursos relacionados ao CIOT. Consulte a equipe para confirmar a disponibilidade conforme sua operação." },
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
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
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
      { type: "paragraph", text: "O EmitaGo disponibiliza calculadora da ANTT no sistema e reúne emissão ilimitada de CT-e e MDF-e durante o mês ativo do CNPJ. O EmitaGo também oferece recursos relacionados ao CIOT. O plano principal custa R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade, sem fidelidade." },
      { type: "source", label: "ANTT — Piso Mínimo de Frete", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/politica-nacional-de-pisos-minimos-de-frete" },
      { type: "source", label: "ANTT — CIOT Para Todos", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  }

  ,
  {
    slug: "manifesto-de-carga-o-que-e-para-que-serve", category: "Transporte",
    title: "Manifesto de carga: o que é, para que serve e quando emitir",
    excerpt: "Entenda o que é o manifesto de carga, sua relação com MDF-e, CT-e, NF-e e CIOT e quais informações devem acompanhar a viagem.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 7, image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1200&q=80", author: "Equipe EmitaGo",
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
      { type: "paragraph", text: "O EmitaGo oferece emissão online e ilimitada de CT-e e MDF-e (manifesto de carga) durante o mês ativo do CNPJ. O sistema também disponibiliza recursos de CIOT e calculadora da ANTT. O plano principal custa R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade, sem fidelidade. Consulte a equipe para confirmar a disponibilidade dos recursos de CIOT para sua operação." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" },
      { type: "source", label: "ANTT — Perguntas frequentes sobre CIOT", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  },
  {
    slug: "como-emitir-manifesto-de-carga-online", category: "Transporte",
    title: "Como emitir manifesto de carga online: passo a passo do MDF-e",
    excerpt: "Veja como preparar os documentos, cadastrar veículo e motorista, preencher o MDF-e e acompanhar a autorização do manifesto de carga.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 8, image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80", author: "Equipe EmitaGo",
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
      { type: "paragraph", text: "No EmitaGo, a emissão de MDF-e (manifesto de carga) e CT-e é ilimitada durante o mês ativo do CNPJ. O plano principal custa R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade, sem fidelidade. O sistema também oferece calculadora da ANTT e recursos de CIOT, consulte a equipe para conhecer a disponibilidade conforme sua operação." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" },
      { type: "source", label: "Manual de Orientação do Contribuinte — MDF-e (CONFAZ)", href: "https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/manual_mdfe_v3-00.pdf" }
    ]
  },
  {
    slug: "manifesto-de-carga-encerramento-e-consulta", category: "Transporte",
    title: "Como encerrar manifesto de carga e consultar o MDF-e",
    excerpt: "Saiba quando encerrar o manifesto de carga, por que o evento é importante e como consultar a situação do MDF-e após a viagem.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 6, image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80", author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O encerramento do manifesto de carga é o evento que informa ao ambiente fiscal que a viagem vinculada ao MDF-e foi concluída. Depois de finalizar a operação, a transportadora deve conferir os dados e registrar o evento de encerramento no momento e nas condições previstos pela legislação." },
      { type: "heading", text: "Por que encerrar o MDF-e?" },
      { type: "list", items: ["Atualiza a situação fiscal do manifesto após a conclusão da viagem.", "Mantém o histórico da operação coerente com o transporte realizado.", "Ajuda a evitar manifestos que permanecem abertos indevidamente.", "Permite organizar a documentação para auditoria e consulta."] },
      { type: "heading", text: "Como encerrar manifesto de carga" },
      { type: "list", items: ["Localize o MDF-e autorizado correspondente à viagem.", "Confira se a operação foi concluída e se os dados estão corretos.", "Acesse a função de encerramento no emissor.", "Informe os dados solicitados e transmita o evento.", "Aguarde a confirmação do ambiente autorizador.", "Consulte a situação atualizada do MDF-e e guarde o protocolo."] },
      { type: "heading", text: "Como consultar um manifesto de carga?" },
      { type: "paragraph", text: "A consulta deve ser feita pelos canais oficiais ou pelo sistema emissor, utilizando a chave de acesso e os dados de identificação disponíveis. Confira autorização, eventos e situação atual do documento." },
      { type: "heading", text: "Controle seus manifestos no EmitaGo" },
      { type: "paragraph", text: "O EmitaGo reúne emissão online de CT-e e MDF-e (manifesto de carga), com emissão ilimitada durante o mês ativo do CNPJ, além de recursos de CIOT e calculadora da ANTT. O plano principal é pré-pago, por R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade, sem fidelidade." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" }
    ]
  },
  {
    slug: "emissor-de-manifesto-de-carga-para-transportadora", category: "Transporte",
    title: "Emissor de manifesto de carga para transportadora: como escolher",
    excerpt: "Compare os recursos importantes em um emissor de manifesto de carga: MDF-e, CT-e, CIOT, calculadora ANTT, autorização e controle de viagens.",
    date: "18 Nov 2026", updatedAt: "18 Nov 2026", readMin: 7, image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&w=1200&q=80", author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "Um emissor de manifesto de carga é o sistema utilizado pela transportadora para preencher, assinar, transmitir e acompanhar o MDF-e. Ao escolher uma plataforma, vale avaliar também como ela se conecta à rotina de CT-e, CIOT, veículos, motoristas e documentos da viagem." },
      { type: "heading", text: "O que avaliar em um emissor de MDF-e?" },
      { type: "list", items: ["Emissão e acompanhamento de MDF-e (manifesto de carga).", "Integração com CT-e e documentos fiscais relacionados.", "Cadastro e reutilização de dados de veículos e motoristas.", "Consulta de autorização e eventos, inclusive encerramento.", "Recursos de CIOT e clareza sobre as condições comerciais.", "Calculadora da ANTT para apoiar a conferência do piso mínimo de frete.", "Acesso online e organização dos documentos para a equipe."] },
      { type: "heading", text: "Por que integrar CT-e e manifesto de carga?" },
      { type: "paragraph", text: "O CT-e registra a prestação do serviço de transporte, enquanto o MDF-e organiza os documentos e informações da viagem. Quando os dois fluxos estão na mesma plataforma, a equipe pode reduzir retrabalho na preparação da documentação." },
      { type: "heading", text: "CIOT e calculadora ANTT também importam" },
      { type: "paragraph", text: "O CIOT é um registro regulatório da operação perante a ANTT e deve ser vinculado ao MDF-e quando aplicável. A calculadora da ANTT apoia a conferência do piso mínimo de frete, mas não substitui o registro do CIOT." },
      { type: "heading", text: "O EmitaGo oferece recursos de CIOT?" },
      { type: "paragraph", text: "O plano principal do EmitaGo custa R$ 60,00 por CNPJ ativo em cada mês de uso, com pagamento antecipado, emissão ilimitada no mês pago e sem fidelidade, com emissão ilimitada de CT-e e MDF-e durante o mês pago, sem fidelidade. A plataforma também oferece calculadora da ANTT e recursos relacionados ao CIOT. Consulte a equipe para confirmar a disponibilidade conforme sua operação." },
      { type: "source", label: "Portal Nacional do MDF-e", href: "https://www.mdfe.fazenda.gov.br/" },
      { type: "source", label: "ANTT — Perguntas frequentes sobre CIOT", href: "https://www.gov.br/antt/pt-br/assuntos/cargas/ciot-para-todos-1/perguntas-frequentes" }
    ]
  },

  {
    slug: "cte-os-modelo-67",
    category: "Transporte",
    title: "CT-e OS modelo 67: guia para transporte de passageiros e outros serviços",
    excerpt: "Entenda quando emitir CT-e OS, a diferença para o CT-e modelo 57, os requisitos de credenciamento e os cuidados com o DACTE OS.",
    date: "18 Nov 2026",
    readMin: 8,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O Conhecimento de Transporte Eletrônico para Outros Serviços (CT-e OS), modelo 67, é um documento fiscal eletrônico destinado a determinadas prestações de transporte que não são documentadas pelo CT-e de cargas modelo 57. Seu uso mais conhecido é no transporte fretado de pessoas, mas a legislação também prevê hipóteses específicas para transporte de valores e excesso de bagagem." },
      { type: "image", src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80", alt: "Ônibus rodoviário utilizado em transporte de passageiros", caption: "O CT-e OS modelo 67 é utilizado, entre outras hipóteses previstas na legislação, no transporte de pessoas por fretamento." },
      { type: "heading", text: "O que é CT-e OS modelo 67?" },
      { type: "paragraph", text: "É o Conhecimento de Transporte Eletrônico para Outros Serviços, emitido e armazenado digitalmente. A validade fiscal depende da assinatura digital do emitente e da autorização de uso concedida pela administração tributária. O documento substitui a Nota Fiscal de Serviço de Transporte, modelo 7, nas situações previstas nas normas aplicáveis." },
      { type: "heading", text: "Quando o CT-e OS deve ser emitido?" },
      { type: "list", items: [
        "Transporte intermunicipal, interestadual ou internacional de pessoas realizado por agência de viagem ou transportador, em veículo próprio ou afretado, conforme as condições legais.",
        "Transporte de valores, para reunir as prestações realizadas para cada tomador dentro do período de apuração, conforme a regra aplicável.",
        "Transporte de passageiros, para englobar os documentos de excesso de bagagem emitidos durante o mês, nas condições previstas na legislação."
      ]},
      { type: "heading", text: "CT-e modelo 57 e CT-e OS modelo 67: qual a diferença?" },
      { type: "paragraph", text: "O CT-e modelo 57 documenta prestações de serviço de transporte de cargas. Já o CT-e OS modelo 67 documenta outros serviços de transporte previstos na legislação, como fretamento de pessoas, além das hipóteses específicas de transporte de valores e excesso de bagagem. Escolher o modelo correto depende da natureza real da prestação, não apenas do tipo de veículo utilizado." },
      { type: "image", src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80", alt: "Veículo de transporte coletivo de passageiros", caption: "Identifique a natureza do serviço e o enquadramento fiscal antes de selecionar o documento." },
      { type: "heading", text: "O que conferir antes de emitir" },
      { type: "list", items: [
        "Verifique se a empresa está regularmente inscrita e credenciada para emitir CT-e OS na unidade federada competente.",
        "Confirme se a atividade, o CNAE e as autorizações do órgão regulador atendem à operação realizada.",
        "Revise os dados do emitente, tomador, percurso, modalidade e informações específicas do fretamento, quando aplicáveis.",
        "Utilize certificado digital válido e confira o leiaute técnico vigente.",
        "Transmita o documento e aguarde a autorização de uso antes de considerar a emissão concluída."
      ]},
      { type: "heading", text: "O que é DACTE OS?" },
      { type: "paragraph", text: "O DACTE OS é a representação auxiliar do CT-e OS. Ele contém informações que permitem identificar e consultar o documento eletrônico e, no transporte de pessoas por fretamento, deve acompanhar a prestação conforme as regras aplicáveis. O DACTE OS não substitui o XML autorizado: mantenha o documento eletrônico e os protocolos organizados." },
      { type: "heading", text: "Como funciona o credenciamento?" },
      { type: "paragraph", text: "O credenciamento e os documentos exigidos variam conforme a unidade federada e a atividade. No Rio Grande do Sul, por exemplo, a Receita Estadual informa que o transporte de pessoas por fretamento exige cadastro como transportador de pessoas perante o DAER, ANTT ou METROPLAN, conforme o caso, antes da liberação fiscal. Consulte sempre a SEFAZ e o órgão regulador competente no seu estado." },
      { type: "heading", text: "Como o EmitaGo pode ajudar" },
      { type: "paragraph", text: "O EmitaGo reúne recursos de emissão de documentos de transporte em uma plataforma online. Consulte a equipe para confirmar a disponibilidade do fluxo de CT-e OS para o enquadramento, estado e operação da sua empresa antes de iniciar a emissão." },
      { type: "heading", text: "Fontes oficiais para consulta" },
      { type: "source", label: "SEFAZ Paraná — Conhecimento de Transporte Eletrônico para Outros Serviços (CT-e OS)", href: "https://sped.fazenda.pr.gov.br/CTeOS/Pagina/Conhecimento-de-Transporte-Eletronico-para-Outros-Servicos-CT-e-OS" },
      { type: "source", label: "SEFAZ São Paulo — CT-e OS, hipóteses de utilização e credenciamento", href: "https://portal.fazenda.sp.gov.br/servicos/cte/Paginas/CT-e-OS.aspx" },
      { type: "source", label: "Receita Estadual do Rio Grande do Sul — credenciamento para CT-e ou CT-e OS", href: "https://atendimento.receita.rs.gov.br/carta-de-servicos/servicos?servico=1729" }
    ]
  },
,
{
  "slug": "cte-subcontratacao-cbs-2027-o-que-muda",
  "category": "Transporte",
  "title": "CT-e de subcontratação em 2027: CBS, crédito e o que muda para transportadoras",
  "excerpt": "Entenda como a entrada da CBS em 2027 afeta a documentação do frete subcontratado, a análise de crédito da contratante e a emissão do CT-e.",
  "date": "27 Nov 2026",
  "updatedAt": "27 Nov 2026",
  "readMin": 8,
  image: cteTransporteImage,
  "author": "Equipe EmitaGo",
  "content": [
    {
      "type": "paragraph",
      "text": "A partir de 2027, a CBS inicia uma nova etapa da Reforma Tributária do consumo. Para transportadoras que contratam outras empresas para executar fretes, surge uma dúvida prática: como documentar o serviço adquirido e reunir os documentos necessários para a análise de créditos tributários?"
    },
    {
      "type": "paragraph",
      "text": "O assunto é importante, mas é preciso separar a regra de crédito da regra estadual de emissão do CT-e. Não se deve afirmar que toda subcontratada, em qualquer estado, estará automaticamente obrigada a emitir um CT-e próprio apenas por causa da CBS."
    },
    {
      "type": "heading",
      "text": "O que é CT-e de subcontratação?"
    },
    {
      "type": "paragraph",
      "text": "Na subcontratação, a transportadora A assume perante o cliente o transporte integral e contrata a transportadora B para executar o percurso desde a origem. A empresa A continua responsável perante seu cliente; B realiza o serviço contratado por A."
    },
    {
      "type": "paragraph",
      "text": "O CT-e da transportadora principal documenta a prestação assumida perante o cliente. Quando a subcontratada emite CT-e próprio, ele documenta a prestação entre B e A, com os dados e referências exigidos pela legislação e pelo leiaute aplicável."
    },
    {
      "type": "heading",
      "text": "Por que o documento pode ser importante para o crédito de CBS?"
    },
    {
      "type": "paragraph",
      "text": "O art. 47 da Lei Complementar nº 214/2025 prevê que o contribuinte sujeito ao regime regular poderá apropriar créditos de IBS e CBS nas aquisições, observadas as condições legais. A comprovação da operação por documento fiscal eletrônico idôneo é uma das exigências. Por isso, a contratante deve organizar os documentos que comprovam o serviço de transporte adquirido."
    },
    {
      "type": "paragraph",
      "text": "O crédito não é automático para toda empresa nem em qualquer operação. O regime tributário do adquirente, o enquadramento do serviço e o cumprimento das condições legais devem ser analisados pelo setor fiscal e pelo contador."
    },
    {
      "type": "heading",
      "text": "A subcontratada será obrigada a emitir CT-e em todos os estados?"
    },
    {
      "type": "paragraph",
      "text": "A regra de emissão ou dispensa deve ser conferida na legislação estadual e na situação concreta. No Rio Grande do Sul, a Receita Estadual informa que a subcontratada fica dispensada de emitir CT-e; se optar pela emissão, deve utilizar o tipo de serviço de subcontratação, informar a transportadora contratante como tomadora e referenciar o CT-e anterior conforme a orientação oficial."
    },
    {
      "type": "paragraph",
      "text": "Em outras UFs, consulte a SEFAZ competente. Também diferencie subcontratação total de redespacho, pois são operações distintas."
    },
    {
      "type": "heading",
      "text": "O que muda no CT-e com a NT 2026.004 v1.01?"
    },
    {
      "type": "paragraph",
      "text": "A Nota Técnica CT-e 2026.004 v1.01 cria o campo vPrestLiq para informar o valor líquido da prestação sem tributos e ajusta o total do documento. A partir de 2027, vTotDFe soma vTPrest aos valores de IBS e CBS. A versão 1.01 retirou a orientação anterior de incluir IBS e CBS em vTPrest. A implantação em produção está prevista para 14 de dezembro de 2026."
    },
    {
      "type": "heading",
      "text": "Como se preparar"
    },
    {
      "type": "list",
      "items": [
        "Mapeie os fretes executados por subcontratadas e os estados de início das prestações.",
        "Confirme com a contabilidade se a subcontratada deve ou pode emitir CT-e.",
        "Combine o envio do XML autorizado e a referência correta ao CT-e da contratante.",
        "Revise regime tributário e classificação fiscal com o contador.",
        "Atualize o sistema emissor e teste o leiaute técnico vigente."
      ]
    },
    {
      "type": "heading",
      "text": "Emita CT-e de subcontratação com EmitaGo"
    },
    {
      "type": "paragraph",
      "text": "O EmitaGo oferece emissão online de CT-e, incluindo CT-e de subcontratação. A plataforma ajuda a organizar a rotina fiscal de transporte; o enquadramento tributário e a obrigação de emissão devem ser confirmados conforme a operação e a legislação aplicável."
    },
    {
      "type": "heading",
      "text": "Fontes oficiais"
    },
    {
      "type": "source",
      "label": "Lei Complementar nº 214/2025 — art. 47",
      "href": "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm"
    },
    {
      "type": "source",
      "label": "Receita Estadual do RS — CT-e na subcontratação",
      "href": "https://atendimento.receita.rs.gov.br/como-emitir-ct-e-no-caso-de-subcontratacao"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — Nota Técnica 2026.004 v1.01",
      "href": "https://www.cte.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=urai6j7wfLM%3D"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — cronograma de implantação",
      "href": "https://www.cte.fazenda.gov.br/portal/informe.aspx?informe=183"
    }
  ]
},
{
  "slug": "subcontratada-ct-e-cbs-credito-2027",
  "category": "Transporte",
  "title": "Subcontratada precisa emitir CT-e em 2027 para a contratante aproveitar crédito de CBS?",
  "excerpt": "Veja por que a documentação fiscal da subcontratação importa na apuração de créditos e quais condições precisam ser observadas em 2027.",
  "date": "27 Nov 2026",
  "updatedAt": "27 Nov 2026",
  "readMin": 7,
  image: cteTransporteImage,
  "author": "Equipe EmitaGo",
  "content": [
    {
      "type": "paragraph",
      "text": "Uma dúvida frequente é se, a partir de 1º de janeiro de 2027, toda transportadora subcontratada terá que emitir CT-e para que a contratante aproveite crédito de CBS. A resposta exige separar a regra de crédito tributário da regra estadual de emissão do conhecimento de transporte."
    },
    {
      "type": "heading",
      "text": "O que diz a lei sobre crédito de CBS?"
    },
    {
      "type": "paragraph",
      "text": "O art. 47 da Lei Complementar nº 214/2025 prevê crédito de IBS e CBS para contribuintes sujeitos ao regime regular, conforme as condições legais. A apropriação depende da comprovação da operação por documento fiscal eletrônico idôneo e de outras condições previstas na lei."
    },
    {
      "type": "paragraph",
      "text": "Isso torna essencial que a contratante tenha documentação adequada para comprovar o serviço adquirido. Mas um CT-e, isoladamente, não garante o crédito nem torna todas as empresas sujeitas ao mesmo tratamento."
    },
    {
      "type": "heading",
      "text": "Qual é o papel do CT-e da subcontratada?"
    },
    {
      "type": "paragraph",
      "text": "Quando emitido, o CT-e da subcontratada documenta a prestação que ela realizou para a transportadora contratante. Pode ser relevante para registrar a aquisição, reconciliar o valor pago e fornecer ao setor fiscal o documento necessário para analisar a operação."
    },
    {
      "type": "paragraph",
      "text": "A contratante deve receber e guardar o XML autorizado, verificar sua validade e conferir os dados com o contrato, o pagamento e o CT-e da prestação principal."
    },
    {
      "type": "heading",
      "text": "A regra é igual em todo o Brasil?"
    },
    {
      "type": "paragraph",
      "text": "Não presuma que sim. Os procedimentos de emissão e dispensa dependem da legislação estadual e da operação. No RS, a Receita Estadual informa que a subcontratada fica dispensada de emitir CT-e, mas pode optar pela emissão, observando o tipo de serviço, a tomadora e a referência ao documento anterior."
    },
    {
      "type": "paragraph",
      "text": "A empresa deve confirmar com seu contador e com a SEFAZ competente como conciliar a documentação necessária à análise de crédito com a regra estadual de emissão."
    },
    {
      "type": "heading",
      "text": "E quando o prestador é TAC?"
    },
    {
      "type": "paragraph",
      "text": "A NT CT-e 2026.004 v1.01 prevê evento de apropriação de crédito presumido pelo tomador do serviço prestado por Transportador Autônomo de Cargas (TAC). Esse procedimento é específico e não deve ser confundido com uma obrigação geral de todas as transportadoras subcontratadas."
    },
    {
      "type": "heading",
      "text": "Checklist para contratante e subcontratada"
    },
    {
      "type": "list",
      "items": [
        "Identifique o regime tributário de ambas as empresas.",
        "Confirme se a subcontratada deve emitir CT-e ou se há dispensa estadual.",
        "Se emitir, valide o tipo de serviço e a referência ao CT-e da contratante.",
        "Defina quem recebe, confere e arquiva o XML autorizado.",
        "Analise com o contador as condições de crédito aplicáveis."
      ]
    },
    {
      "type": "heading",
      "text": "Conclusão"
    },
    {
      "type": "paragraph",
      "text": "A CBS aumenta a importância da organização documental na cadeia de transporte. A contratante deve solicitar e guardar os documentos necessários à comprovação da aquisição, mas a obrigação de emissão do CT-e da subcontratada deve ser verificada por estado e operação — não presumida como universal."
    },
    {
      "type": "heading",
      "text": "Fontes oficiais"
    },
    {
      "type": "source",
      "label": "Lei Complementar nº 214/2025 — art. 47",
      "href": "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm"
    },
    {
      "type": "source",
      "label": "Receita Estadual do RS — procedimento na subcontratação",
      "href": "https://atendimento.receita.rs.gov.br/como-emitir-ct-e-no-caso-de-subcontratacao"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — NT 2026.004 v1.01",
      "href": "https://www.cte.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=urai6j7wfLM%3D"
    }
  ]
},
{
  "slug": "como-emitir-cte-subcontratacao-transportadora-2027",
  "category": "Transporte",
  "title": "Como emitir CT-e de subcontratação: dados e cuidados para 2027",
  "excerpt": "Passo a passo para transportadoras subcontratadas que precisam emitir CT-e, informar a contratante e referenciar o documento anterior.",
  "date": "27 Nov 2026",
  "updatedAt": "27 Nov 2026",
  "readMin": 7,
  image: cteTransporteImage,
  "author": "Equipe EmitaGo",
  "content": [
    {
      "type": "paragraph",
      "text": "O CT-e de subcontratação documenta a prestação de transporte executada por uma empresa contratada por outra. Antes de emitir, confirme se a operação é subcontratação total, redespacho ou prestação independente, pois cada situação pode exigir um tipo de serviço diferente."
    },
    {
      "type": "heading",
      "text": "1. Confirme a relação contratual"
    },
    {
      "type": "paragraph",
      "text": "Na subcontratação, a transportadora principal assume perante o cliente o transporte integral e contrata outra empresa para executar o percurso desde a origem. Guarde contrato, pedido de frete ou registro que demonstre quem contratou e quem é responsável pelo pagamento."
    },
    {
      "type": "heading",
      "text": "2. Confira se a emissão é obrigatória ou facultativa"
    },
    {
      "type": "paragraph",
      "text": "A regra depende da legislação aplicável. No RS, a Receita Estadual informa que a subcontratada fica dispensada de emitir CT-e, mas pode optar pela emissão. Em outras UFs, consulte a SEFAZ local antes de definir o procedimento."
    },
    {
      "type": "heading",
      "text": "3. Selecione o tipo de serviço correto"
    },
    {
      "type": "paragraph",
      "text": "Quando a subcontratada emitir CT-e de subcontratação, a orientação do RS indica CT-e modelo 57 com tpServ=1 (Subcontratação). Não confunda com tpServ=2 (Redespacho) ou tpServ=3 (Redespacho Intermediário). Siga o leiaute vigente e a regra estadual."
    },
    {
      "type": "heading",
      "text": "4. Informe a contratante e o documento anterior"
    },
    {
      "type": "list",
      "items": [
        "Informe como tomadora a transportadora que contratou a subcontratada, conforme contrato e regra aplicável.",
        "Referencie no grupo docAnt o CT-e da transportadora contratante, quando exigido.",
        "Confira a chave de acesso e os participantes antes de transmitir.",
        "Valide CFOP e tratamento tributário com a contabilidade; não copie automaticamente o procedimento de outra UF."
      ]
    },
    {
      "type": "heading",
      "text": "5. Revise os campos de IBS e CBS"
    },
    {
      "type": "paragraph",
      "text": "A NT CT-e 2026.004 v1.01 atualiza campos e validações. vPrestLiq informa o valor líquido da prestação sem tributos. A partir de 2027, vTotDFe soma vTPrest aos valores de IBS e CBS. Use a versão técnica atual e os parâmetros fiscais definidos com o contador."
    },
    {
      "type": "heading",
      "text": "6. Transmita, valide e entregue o XML"
    },
    {
      "type": "list",
      "items": [
        "Assine com o certificado digital adequado.",
        "Transmita à SEFAZ e aguarde a autorização.",
        "Corrija rejeições conforme a regra retornada.",
        "Depois da autorização, entregue o XML à contratante e mantenha o arquivo guardado."
      ]
    },
    {
      "type": "heading",
      "text": "Erros que podem atrasar a emissão"
    },
    {
      "type": "list",
      "items": [
        "Confundir subcontratação com redespacho.",
        "Informar tomador incorreto.",
        "Deixar passar muito tempo e perder a janela técnica de referência do CT-e anterior.",
        "Preencher IBS/CBS sem validar o enquadramento.",
        "Enviar somente DACTE quando a contratante precisa do XML autorizado."
      ]
    },
    {
      "type": "heading",
      "text": "Emita CT-e de subcontratação com EmitaGo"
    },
    {
      "type": "paragraph",
      "text": "O EmitaGo oferece emissão online de CT-e, incluindo operações de subcontratação. A plataforma ajuda a organizar os dados e a rotina de emissão; confirme com seu contador o enquadramento fiscal e a regra estadual aplicável."
    },
    {
      "type": "heading",
      "text": "Fontes oficiais"
    },
    {
      "type": "source",
      "label": "Receita Estadual do RS — como emitir CT-e na subcontratação",
      "href": "https://atendimento.receita.rs.gov.br/como-emitir-ct-e-no-caso-de-subcontratacao"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — NT 2026.004 v1.01",
      "href": "https://www.cte.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=urai6j7wfLM%3D"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — perguntas frequentes",
      "href": "https://www.cte.fazenda.gov.br/portal/perguntasFrequentes.aspx"
    }
  ]
},
{
  "slug": "ibs-cbs-ct-e-subcontratacao-valor-liquido-2027",
  "category": "Transporte",
  "title": "CBS no CT-e de subcontratação: valor do frete, documento e crédito em 2027",
  "excerpt": "Entenda o valor líquido da prestação, o total do CT-e com IBS e CBS e como comparar valores entre a transportadora contratante e a subcontratada.",
  "date": "27 Nov 2026",
  "updatedAt": "27 Nov 2026",
  "readMin": 7,
  image: cteTransporteImage,
  "author": "Equipe EmitaGo",
  "content": [
    {
      "type": "paragraph",
      "text": "A Reforma Tributária muda a forma de apresentar e conferir valores nos documentos fiscais de transporte. Na subcontratação, é importante separar o preço do serviço, os tributos e o valor total do documento para que as empresas não comparem números com significados diferentes."
    },
    {
      "type": "heading",
      "text": "O que a NT CT-e 2026.004 v1.01 atualiza?"
    },
    {
      "type": "paragraph",
      "text": "A versão 1.01 cria o campo vPrestLiq, que representa o valor líquido total da prestação sem tributos. O campo é opcional. A nota também ajusta a regra do total geral do documento fiscal eletrônico."
    },
    {
      "type": "heading",
      "text": "Como será calculado o total do documento em 2027?"
    },
    {
      "type": "paragraph",
      "text": "Segundo a NT 2026.004 v1.01, a partir de 2027 vTotDFe deve corresponder ao valor da prestação informado em vTPrest somado aos totais de IBS e CBS. A versão 1.01 retirou a orientação anterior de incluir IBS e CBS na composição de vTPrest. Não use exemplos de versões anteriores sem conferir a atualização."
    },
    {
      "type": "heading",
      "text": "Por que o valor líquido ajuda na subcontratação?"
    },
    {
      "type": "paragraph",
      "text": "A transportadora principal pode comparar o valor cobrado do cliente com o valor pago à subcontratada para analisar custo e margem. Com os campos de tributos e valor líquido, a comparação deve evitar misturar o preço do serviço com o total do documento. Como vPrestLiq é opcional, confirme sua disponibilidade no sistema e combine o preenchimento com os parceiros."
    },
    {
      "type": "heading",
      "text": "Documento fiscal e crédito de CBS"
    },
    {
      "type": "paragraph",
      "text": "O art. 47 da LC 214/2025 condiciona o crédito de IBS e CBS, para contribuintes do regime regular, às condições legais e à comprovação por documento fiscal eletrônico idôneo. O CT-e é importante para documentar o serviço, mas o crédito deve ser analisado conforme o regime da contratante e o tratamento da operação."
    },
    {
      "type": "heading",
      "text": "Atenção ao TAC"
    },
    {
      "type": "paragraph",
      "text": "A NT também prevê evento de apropriação de crédito presumido pelo tomador do serviço prestado por TAC. Esse mecanismo específico deve ser analisado separadamente da emissão de CT-e entre duas transportadoras."
    },
    {
      "type": "heading",
      "text": "Checklist para revisar o sistema"
    },
    {
      "type": "list",
      "items": [
        "Confirme que o sistema utiliza a NT CT-e 2026.004 v1.01.",
        "Revise vTPrest e vTotDFe conforme a versão vigente.",
        "Confira o campo vPrestLiq e se o sistema permite informá-lo.",
        "Valide grupos IBS/CBS, cClassTrib e alíquotas com a contabilidade.",
        "Teste em homologação e confira o XML autorizado."
      ]
    },
    {
      "type": "heading",
      "text": "Prazo de implantação"
    },
    {
      "type": "paragraph",
      "text": "O Portal Nacional do CT-e informou a implantação em produção da NT 2026.004 v1.01 para 14 de dezembro de 2026. Acompanhe os avisos oficiais, pois cronogramas técnicos podem ser atualizados."
    },
    {
      "type": "heading",
      "text": "Fontes oficiais"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — Nota Técnica 2026.004 v1.01",
      "href": "https://www.cte.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=urai6j7wfLM%3D"
    },
    {
      "type": "source",
      "label": "Lei Complementar nº 214/2025 — art. 47",
      "href": "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — cronograma",
      "href": "https://www.cte.fazenda.gov.br/portal/informe.aspx?informe=183"
    }
  ]
},
{
  "slug": "checklist-transportadora-subcontratacao-cbs-2027",
  "category": "Transporte",
  "title": "Checklist 2027: como transportadoras devem se preparar para CT-e de subcontratação e CBS",
  "excerpt": "Organize contratos, emissão de CT-e, recebimento de XML e conferência de crédito para a nova etapa tributária de 2027.",
  "date": "27 Nov 2026",
  "updatedAt": "27 Nov 2026",
  "readMin": 6,
  image: cteTransporteImage,
  "author": "Equipe EmitaGo",
  "content": [
    {
      "type": "paragraph",
      "text": "A entrada da CBS em 2027 exige que transportadoras revisem contratação de fretes, emissão de CT-e e guarda de documentos. Na subcontratação, a preparação deve envolver a empresa contratante e quem executa o transporte."
    },
    {
      "type": "heading",
      "text": "1. Mapeie a cadeia de transporte"
    },
    {
      "type": "list",
      "items": [
        "Liste os clientes e os fretes contratados.",
        "Identifique as prestações executadas por subcontratadas e os estados de início.",
        "Separe subcontratação total, redespacho e prestação independente.",
        "Registre quem é responsável pelo pagamento em cada contrato."
      ]
    },
    {
      "type": "heading",
      "text": "2. Revise a regra de emissão de CT-e"
    },
    {
      "type": "paragraph",
      "text": "Confirme, estado por estado, se a subcontratada está dispensada ou deve emitir CT-e e quais dados precisa informar. No RS, a Receita Estadual orienta que a subcontratada pode optar por emitir CT-e de subcontratação, informando a contratante como tomadora e referenciando o CT-e anterior. Não aplique automaticamente essa regra a outras UFs."
    },
    {
      "type": "heading",
      "text": "3. Padronize a entrega do XML"
    },
    {
      "type": "list",
      "items": [
        "Defina quando a subcontratada enviará o XML autorizado.",
        "Confira a chave do CT-e anterior quando a referência for necessária.",
        "Verifique validade e autorização e compare com contrato e pagamento.",
        "Armazene o XML pelo prazo fiscal aplicável."
      ]
    },
    {
      "type": "heading",
      "text": "4. Prepare a análise de crédito de CBS"
    },
    {
      "type": "paragraph",
      "text": "O crédito depende das condições legais e do regime tributário do adquirente. O setor fiscal deve identificar quais aquisições podem gerar crédito e quais documentos comprovam a operação. Não trate a emissão de CT-e como garantia automática de crédito."
    },
    {
      "type": "heading",
      "text": "5. Atualize o emissor e teste o leiaute"
    },
    {
      "type": "paragraph",
      "text": "A NT CT-e 2026.004 v1.01 inclui vPrestLiq, ajusta o total do documento e atualiza regras técnicas relacionadas ao IBS e à CBS. A implantação em produção está prevista para 14 de dezembro de 2026. Teste em homologação antes de iniciar a emissão com as novas regras."
    },
    {
      "type": "heading",
      "text": "6. Alinhe equipe e parceiros"
    },
    {
      "type": "list",
      "items": [
        "Oriente o financeiro sobre valor líquido e total do documento.",
        "Treine o fiscal para conferir XML e classificação tributária.",
        "Atualize contratos e procedimentos com apoio jurídico e contábil.",
        "Defina um canal para tratar rejeições e correções antes do fechamento do frete."
      ]
    },
    {
      "type": "heading",
      "text": "7. Use um sistema preparado para transporte"
    },
    {
      "type": "paragraph",
      "text": "O EmitaGo oferece emissão online de CT-e, CT-e OS e MDF-e, incluindo CT-e de subcontratação. Conheça a solução para organizar a rotina fiscal e confirme com a equipe os recursos disponíveis para seu fluxo."
    },
    {
      "type": "heading",
      "text": "Resumo"
    },
    {
      "type": "paragraph",
      "text": "Não espere a virada do ano para descobrir que o XML não chega, que a referência ao CT-e anterior está incorreta ou que o sistema precisa de atualização. Mapeie a operação, confirme a regra estadual, alinhe a documentação e teste o leiaute oficial."
    },
    {
      "type": "heading",
      "text": "Fontes oficiais"
    },
    {
      "type": "source",
      "label": "Receita Estadual do RS — subcontratação e emissão de CT-e",
      "href": "https://atendimento.receita.rs.gov.br/como-emitir-ct-e-no-caso-de-subcontratacao"
    },
    {
      "type": "source",
      "label": "Portal Nacional do CT-e — NT 2026.004 v1.01",
      "href": "https://www.cte.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=urai6j7wfLM%3D"
    },
    {
      "type": "source",
      "label": "Lei Complementar nº 214/2025",
      "href": "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm"
    }
  ]
}
];
