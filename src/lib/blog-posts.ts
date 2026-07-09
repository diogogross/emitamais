import nfeGuia from "@/assets/blog/nfe-guia.jpg";
import nfceVarejo from "@/assets/blog/nfce-varejo.jpg";
import cteTransporte from "@/assets/blog/cte-transporte.jpg";
import mdfeFrota from "@/assets/blog/mdfe-frota.jpg";
import certificadoGuia from "@/assets/blog/certificado-guia.jpg";

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  category: "Notas Fiscais" | "Transporte" | "Certificado Digital";
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  image: string;
  author: string;
  content: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nfe-passo-a-passo",
    category: "Notas Fiscais",
    title: "NFe passo a passo: emissão sem erros em 2026",
    excerpt:
      "Do cadastro do produto à autorização SEFAZ, veja como reduzir rejeições e ganhar velocidade na emissão da nota fiscal eletrônica.",
    date: "12 Jan 2026",
    readMin: 6,
    image: nfeGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      {
        type: "paragraph",
        text: "A Nota Fiscal Eletrônica (NFe, modelo 55) é o documento fiscal obrigatório para operações entre empresas envolvendo circulação de mercadorias. Emitida em XML e transmitida à SEFAZ do estado de origem, ela substitui a antiga nota em papel e é armazenada digitalmente por, no mínimo, cinco anos.",
      },
      {
        type: "heading",
        text: "1. Pré-requisitos antes de emitir",
      },
      {
        type: "list",
        items: [
          "Certificado digital A1 ou A3 do CNPJ emissor.",
          "Inscrição estadual ativa e regime tributário definido no Simples Nacional, Lucro Presumido ou Real.",
          "Cadastro completo de produtos com NCM, CFOP, CST/CSOSN e unidade de medida corretos.",
          "Cadastro do destinatário com CNPJ/CPF, IE e endereço válidos.",
        ],
      },
      {
        type: "heading",
        text: "2. Preenchimento e transmissão",
      },
      {
        type: "paragraph",
        text: "Com o cadastro correto, o próprio sistema emissor calcula impostos (ICMS, IPI, PIS, COFINS) e gera o XML assinado. Após a transmissão, a SEFAZ retorna um dos três status: autorizada, denegada ou rejeitada. Rejeições costumam ser problemas de cadastro — não de operação — e mostram exatamente qual campo corrigir.",
      },
      {
        type: "quote",
        text: "Mais de 80% das rejeições que atendemos são causadas por NCM desatualizado, CFOP incompatível com a operação ou IE do destinatário irregular.",
        cite: "Time de suporte fiscal",
      },
      {
        type: "heading",
        text: "3. DANFE, envio e contingência",
      },
      {
        type: "paragraph",
        text: "Depois de autorizada, o sistema gera o DANFE (a representação em PDF da NFe) e envia o XML ao destinatário por e-mail. Em caso de indisponibilidade da SEFAZ, a emissão em contingência (EPEC ou FS-DA) garante que a operação não pare — o XML é regularizado assim que o ambiente volta.",
      },
      {
        type: "heading",
        text: "Checklist rápido para 2026",
      },
      {
        type: "list",
        items: [
          "Atualize a tabela de NCM para a versão vigente do ano.",
          "Revise CST/CSOSN de acordo com o regime tributário atual.",
          "Configure regras de ICMS-ST para vendas interestaduais.",
          "Ative o backup automático dos XMLs em nuvem.",
        ],
      },
    ],
  },
  {
    slug: "nfce-varejo",
    category: "Notas Fiscais",
    title: "NFCe no varejo: o cupom fiscal que substitui o SAT",
    excerpt:
      "Entenda quando usar NFCe, o que muda no PDV e como configurar contingência offline para não parar as vendas.",
    date: "05 Jan 2026",
    readMin: 5,
    image: nfceVarejo,
    author: "Equipe Emissor Fiscal",
    content: [
      {
        type: "paragraph",
        text: "A NFCe (modelo 65) é o documento fiscal eletrônico usado no varejo para vendas ao consumidor final. Ela substitui o cupom fiscal do ECF e, em vários estados, também o SAT — com a vantagem de rodar 100% online e imprimir em impressoras térmicas comuns.",
      },
      {
        type: "heading",
        text: "Quando usar NFCe em vez de NFe",
      },
      {
        type: "list",
        items: [
          "Venda presencial para consumidor final (pessoa física ou jurídica sem IE).",
          "Operações dentro do estado de origem da empresa.",
          "Valor por operação abaixo dos limites definidos pela SEFAZ do seu estado.",
        ],
      },
      {
        type: "paragraph",
        text: "Para vendas interestaduais, para outra empresa (B2B) ou acima do teto, o correto continua sendo NFe modelo 55.",
      },
      {
        type: "heading",
        text: "PDV integrado e QR Code",
      },
      {
        type: "paragraph",
        text: "Um bom PDV integrado gera a NFCe em segundos, imprime o cupom com QR Code para consulta pelo consumidor e envia o XML para a nuvem automaticamente. O QR Code é obrigatório e permite validar a autenticidade do cupom direto no site da SEFAZ.",
      },
      {
        type: "heading",
        text: "Contingência offline",
      },
      {
        type: "paragraph",
        text: "Se a internet ou a SEFAZ ficam fora do ar, o sistema entra em contingência offline: as NFCes são geradas com numeração própria, impressas normalmente e transmitidas em lote assim que a conexão volta. Sem isso, o caixa para — e no varejo cada minuto conta.",
      },
      {
        type: "quote",
        text: "Contingência bem configurada é a diferença entre uma loja lotada que continua vendendo e uma loja parada esperando a internet voltar.",
      },
    ],
  },
  {
    slug: "cte-transporte",
    category: "Transporte",
    title: "CTe e CTeOS: guia completo para transportadoras",
    excerpt:
      "Conhecimento de transporte eletrônico — obrigatoriedade, tipos, tomadores e como integrar com o MDFe da sua viagem.",
    date: "28 Dez 2025",
    readMin: 7,
    image: cteTransporte,
    author: "Equipe Emissor Fiscal",
    content: [
      {
        type: "paragraph",
        text: "O CTe (Conhecimento de Transporte Eletrônico, modelo 57) documenta o serviço de transporte de cargas, enquanto o CTeOS (modelo 67) é usado para o transporte de passageiros. Ambos são obrigatórios para transportadoras e substituem os antigos conhecimentos em papel.",
      },
      {
        type: "heading",
        text: "Tipos de CTe",
      },
      {
        type: "list",
        items: [
          "Normal — o CTe padrão de uma prestação de serviço.",
          "Complemento — ajusta valores de um CTe já emitido, como frete a maior.",
          "Anulação — cancela efeitos de um CTe emitido para o tomador errado.",
          "Substituto — reemitido depois do prazo de cancelamento, com carta de correção.",
        ],
      },
      {
        type: "heading",
        text: "Quem é o tomador do serviço",
      },
      {
        type: "paragraph",
        text: "O tomador é quem paga o frete: pode ser o remetente, o destinatário, o expedidor, o recebedor ou um terceiro. Escolher o tomador errado gera problemas de crédito de ICMS e retrabalho para reemitir toda a documentação.",
      },
      {
        type: "heading",
        text: "Integração com o MDFe",
      },
      {
        type: "paragraph",
        text: "Todo transporte interestadual de cargas precisa do MDFe (Manifesto Eletrônico), que agrupa as NFes e os CTes daquela viagem. Um sistema fiscal integrado gera o MDFe a partir dos CTes emitidos, evita divergências e mantém o Passe Fiscal em dia.",
      },
      {
        type: "quote",
        text: "CTe autorizado, MDFe encerrado e canhoto assinado: essa é a tríade que evita 90% das autuações em barreira.",
      },
      {
        type: "heading",
        text: "Boas práticas para transportadoras",
      },
      {
        type: "list",
        items: [
          "Automatize o cálculo de ICMS interestadual por origem e destino.",
          "Vincule cada CTe ao MDFe da viagem no ato da emissão.",
          "Emita CIOT quando contratar autônomos (TAC).",
          "Mantenha os XMLs de CTe e MDFe guardados por 5 anos.",
        ],
      },
    ],
  },
  {
    slug: "mdfe-frota",
    category: "Transporte",
    title: "MDFe: como manifestar a carga da sua frota",
    excerpt:
      "Manifesto Eletrônico de Documentos Fiscais na prática — quando emitir, encerrar corretamente e evitar multas em fiscalização.",
    date: "18 Dez 2025",
    readMin: 6,
    image: mdfeFrota,
    author: "Equipe Emissor Fiscal",
    content: [
      {
        type: "paragraph",
        text: "O MDFe (modelo 58) é o Manifesto Eletrônico de Documentos Fiscais. Ele agrega todas as NFes e CTes de uma mesma viagem em um único documento, informando placa do veículo, motorista e percurso. Sem MDFe válido, a mercadoria pode ser retida em barreira fiscal.",
      },
      {
        type: "heading",
        text: "Quando é obrigatório",
      },
      {
        type: "list",
        items: [
          "Transporte interestadual de carga, próprio ou de terceiros.",
          "Transporte intermunicipal quando a legislação estadual exigir.",
          "Emissor: transportador (com CTe) ou próprio dono da carga (frete próprio, sem CTe).",
        ],
      },
      {
        type: "heading",
        text: "Emissão em 4 etapas",
      },
      {
        type: "paragraph",
        text: "O fluxo é rápido quando o sistema já centraliza NFe, CTe e MDFe: (1) selecione as notas e CTes da viagem; (2) informe veículo, motorista, seguro e percurso; (3) transmita à SEFAZ; (4) imprima o DAMDFe para acompanhar a carga.",
      },
      {
        type: "heading",
        text: "Encerramento é obrigatório",
      },
      {
        type: "paragraph",
        text: "Muitas multas acontecem porque o MDFe não foi encerrado ao final da viagem. O encerramento informa à SEFAZ que aquela operação terminou — e libera o veículo para o próximo manifesto. Configure um alerta para nunca esquecer.",
      },
      {
        type: "quote",
        text: "Um MDFe aberto por semanas é sinal para o fisco: ou a operação foi mal encerrada, ou algo está sendo omitido.",
      },
      {
        type: "heading",
        text: "Erros comuns a evitar",
      },
      {
        type: "list",
        items: [
          "Placa do veículo divergente da CNH ou do RNTRC.",
          "Percurso sem UFs intermediárias corretas.",
          "MDFe emitido sem os CTes vinculados.",
          "Falta de encerramento ao chegar ao destino.",
        ],
      },
    ],
  },
  {
    slug: "certificado-digital-a1-a3",
    category: "Certificado Digital",
    title: "Certificado Digital A1 ou A3: qual escolher?",
    excerpt:
      "Diferenças entre A1 e A3, mídias suportadas (token, cartão, nuvem) e como emitir 100% online com validação por videoconferência.",
    date: "10 Dez 2025",
    readMin: 5,
    image: certificadoGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      {
        type: "paragraph",
        text: "O certificado digital é a identidade eletrônica que comprova, com validade jurídica, quem assina cada documento. Ele é obrigatório para emitir NFe, NFCe, CTe, MDFe, transmitir eSocial, acessar o e-CAC e assinar contratos digitais.",
      },
      {
        type: "heading",
        text: "A1: arquivo digital",
      },
      {
        type: "paragraph",
        text: "O A1 é um arquivo que fica instalado no computador ou no servidor. Vale por 1 ano e é ideal para quem emite grandes volumes de notas, integra com ERP ou usa emissores em nuvem — não precisa de token físico, o que agiliza o dia a dia.",
      },
      {
        type: "heading",
        text: "A3: token, cartão ou nuvem",
      },
      {
        type: "paragraph",
        text: "O A3 fica gravado em uma mídia externa (token USB, smart card com leitora) ou em nuvem (como o Bird ID). Vale de 1 a 3 anos e traz mais segurança, porque a chave privada nunca sai da mídia. Recomendado para quem assina em vários computadores ou compartilha o certificado com o contador.",
      },
      {
        type: "quote",
        text: "Regra prática: escolha A1 para produtividade e integração; escolha A3 quando precisar de mobilidade ou compartilhar o uso com o contador.",
      },
      {
        type: "heading",
        text: "Emissão 100% online",
      },
      {
        type: "paragraph",
        text: "Não é mais necessário ir a um posto de validação. A emissão acontece por videoconferência: você agenda um horário, apresenta os documentos originais na câmera e recebe o certificado em minutos. Todo o processo é gravado e auditado pela AC.",
      },
      {
        type: "heading",
        text: "Documentos necessários (pessoa jurídica)",
      },
      {
        type: "list",
        items: [
          "Cartão CNPJ atualizado.",
          "Contrato social (ou última alteração consolidada).",
          "Documento de identidade e CPF do representante legal.",
          "Comprovante de endereço recente do representante.",
        ],
      },
    ],
  },
  // ============ Notas Fiscais (+5) ============
  {
    slug: "nfse-servicos",
    category: "Notas Fiscais",
    title: "NFSe nacional: o padrão único para prestadores de serviço",
    excerpt:
      "Como o padrão nacional da NFSe unifica a emissão em milhares de municípios e o que muda para prestadores autônomos e empresas.",
    date: "20 Fev 2026",
    readMin: 6,
    image: nfeGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "A Nota Fiscal de Serviço Eletrônica (NFSe) sempre foi municipal — cada prefeitura tinha seu próprio layout, portal e regras. Com o padrão nacional, o Brasil passa a ter uma única especificação técnica adotada pelos municípios, o que facilita a vida de quem presta serviço em várias cidades." },
      { type: "heading", text: "O que muda na prática" },
      { type: "list", items: [
        "Layout único de XML aceito em todos os municípios aderentes.",
        "Emissor nacional gratuito para MEI e pequenos prestadores.",
        "Integração via API padronizada para ERPs e emissores.",
        "Cadastro único de serviços com código nacional.",
      ]},
      { type: "heading", text: "Quem precisa emitir" },
      { type: "paragraph", text: "Todo prestador de serviço pessoa jurídica é obrigado a emitir NFSe. MEIs, embora dispensados quando o tomador é pessoa física, precisam emitir sempre que o cliente for pessoa jurídica." },
      { type: "quote", text: "O padrão nacional resolve a maior dor de quem presta serviço em várias cidades: um único sistema, um único XML, um único fluxo." },
      { type: "heading", text: "Checklist para começar" },
      { type: "list", items: [
        "Certificado digital do CNPJ ativo.",
        "Inscrição municipal em dia.",
        "Códigos de serviço (LC 116/03) corretos.",
        "Alíquota de ISS conforme o município do tomador.",
      ]},
    ],
  },
  {
    slug: "carta-correcao-eletronica",
    category: "Notas Fiscais",
    title: "Carta de Correção Eletrônica: quando e como usar",
    excerpt:
      "A CCe corrige pequenos erros da NFe sem precisar cancelar. Veja o que pode e o que não pode ser ajustado.",
    date: "12 Fev 2026",
    readMin: 4,
    image: nfceVarejo,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "A Carta de Correção Eletrônica (CCe) é o documento que permite ajustar informações da NFe autorizada sem cancelá-la. É rápida, gratuita e tem validade jurídica." },
      { type: "heading", text: "O que pode ser corrigido" },
      { type: "list", items: [
        "Descrição do produto (desde que não altere o produto em si).",
        "Datas de emissão ou saída.",
        "Código CFOP quando não muda a natureza da operação.",
        "Dados do transportador e informações complementares.",
      ]},
      { type: "heading", text: "O que NÃO pode ser corrigido" },
      { type: "list", items: [
        "Valores unitários, quantidades ou base de cálculo.",
        "Dados do emitente ou do destinatário (CNPJ/CPF, IE, endereço).",
        "Data de emissão que altere o período de apuração.",
      ]},
      { type: "quote", text: "Se o erro é de valor ou de destinatário, não use CCe: cancele e reemita dentro do prazo de 24h." },
    ],
  },
  {
    slug: "cancelamento-nfe",
    category: "Notas Fiscais",
    title: "Cancelamento de NFe: prazos, motivos e alternativas",
    excerpt:
      "Prazo legal, extemporâneo e o que fazer quando o cancelamento é negado. Guia prático para o dia a dia.",
    date: "02 Fev 2026",
    readMin: 5,
    image: nfeGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "O cancelamento de NFe deve ser feito em até 24 horas após a autorização, desde que o produto ainda não tenha circulado. Após esse prazo, entra o cancelamento extemporâneo, com regras específicas por estado." },
      { type: "heading", text: "Requisitos do cancelamento" },
      { type: "list", items: [
        "NFe autorizada (status 100).",
        "Mercadoria ainda não entregue ao destinatário.",
        "Justificativa obrigatória com no mínimo 15 caracteres.",
        "Assinatura com o mesmo certificado digital que autorizou a NFe.",
      ]},
      { type: "heading", text: "Alternativas quando não dá para cancelar" },
      { type: "paragraph", text: "Se o prazo passou ou a mercadoria já circulou, o caminho é emitir uma NFe de devolução ou uma nota de ajuste. Nunca ignore o problema: uma NFe autorizada não estornada permanece na apuração de impostos." },
    ],
  },
  {
    slug: "manifestacao-destinatario",
    category: "Notas Fiscais",
    title: "Manifestação do destinatário: por que ela protege sua empresa",
    excerpt:
      "Ciência, confirmação, desconhecimento e operação não realizada — o que cada evento significa e como automatizar.",
    date: "22 Jan 2026",
    readMin: 5,
    image: nfceVarejo,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "A manifestação do destinatário é o mecanismo que permite ao comprador confirmar, desconhecer ou recusar uma NFe emitida contra o seu CNPJ. Além de obrigatória em vários setores, ela protege contra notas fraudulentas." },
      { type: "heading", text: "Os quatro eventos" },
      { type: "list", items: [
        "Ciência da operação: reconhece que teve conhecimento da NFe.",
        "Confirmação da operação: confirma o recebimento da mercadoria.",
        "Operação não realizada: a operação foi cancelada de fato.",
        "Desconhecimento: a empresa desconhece a NFe emitida contra ela.",
      ]},
      { type: "quote", text: "Automatizar a manifestação evita autuações e detecta rapidamente notas emitidas por engano ou fraude contra o seu CNPJ." },
    ],
  },
  {
    slug: "reforma-tributaria-cbs-ibs",
    category: "Notas Fiscais",
    title: "Reforma tributária: o que muda com CBS e IBS na sua NFe",
    excerpt:
      "Fim do PIS/COFINS/ICMS/ISS e a chegada de CBS e IBS — cronograma e ajustes no XML da nota fiscal.",
    date: "15 Jan 2026",
    readMin: 7,
    image: nfeGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "A reforma tributária substitui gradualmente PIS, COFINS, ICMS e ISS por dois novos tributos: CBS (federal) e IBS (estadual e municipal). O XML da NFe já foi ampliado para receber os novos campos." },
      { type: "heading", text: "Cronograma resumido" },
      { type: "list", items: [
        "2026: alíquota teste de CBS e IBS, sem cobrança efetiva.",
        "2027: CBS começa a substituir PIS/COFINS.",
        "2029 a 2032: transição gradual do ICMS/ISS para o IBS.",
        "2033: sistema novo em vigor pleno.",
      ]},
      { type: "heading", text: "O que fazer agora" },
      { type: "list", items: [
        "Atualize o emissor para o layout mais recente da NFe.",
        "Revise cadastro de produtos e serviços por classificação nova.",
        "Treine a equipe fiscal nos novos códigos.",
        "Simule o impacto de CBS/IBS na precificação.",
      ]},
      { type: "quote", text: "Quem começar a se preparar em 2026 chega em 2027 com a operação estabilizada; quem deixar para depois vai apagar incêndio." },
    ],
  },
  // ============ Transporte (+5) ============
  {
    slug: "ciot-contratacao-autonomos",
    category: "Transporte",
    title: "CIOT: como contratar transportador autônomo sem risco",
    excerpt:
      "Código Identificador da Operação de Transporte — quando é obrigatório e como emitir sem esquecimento.",
    date: "18 Fev 2026",
    readMin: 5,
    image: cteTransporte,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "O CIOT (Código Identificador da Operação de Transporte) é obrigatório sempre que uma empresa contrata um transportador autônomo (TAC) ou uma ETC para transporte rodoviário de cargas. Ele garante que o frete e os tributos sociais sejam registrados corretamente." },
      { type: "heading", text: "Quando emitir" },
      { type: "list", items: [
        "Contratação de TAC (autônomo com RNTRC).",
        "Contratação de ETC (empresa de transporte de cargas).",
        "Contratação de CTC (cooperativa de transporte).",
      ]},
      { type: "heading", text: "Sanções por não emitir" },
      { type: "paragraph", text: "A multa da ANTT por transporte sem CIOT chega a R$ 550 por operação, além da retenção do veículo em fiscalização. Automatizar a emissão junto ao CTe é o caminho mais seguro." },
    ],
  },
  {
    slug: "damdfe-fiscalizacao",
    category: "Transporte",
    title: "DAMDFe na barreira: o que o fiscal olha primeiro",
    excerpt:
      "Documento auxiliar do MDFe é o passaporte da carga. Veja como preencher e evitar retenção do veículo.",
    date: "09 Fev 2026",
    readMin: 4,
    image: mdfeFrota,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "O DAMDFe é a representação impressa do MDFe. Ele acompanha o veículo durante toda a viagem e é o primeiro documento pedido em barreira fiscal." },
      { type: "heading", text: "Checklist de conferência" },
      { type: "list", items: [
        "Chave de acesso do MDFe legível e QR Code funcional.",
        "Placa do veículo e reboques corretos.",
        "Motorista com CNH válida e categoria compatível.",
        "Percurso com todas as UFs de passagem informadas.",
        "MDFe autorizado — não apenas transmitido.",
      ]},
      { type: "quote", text: "Fiscal escaneia o QR do DAMDFe em 5 segundos. Se aparecer 'não autorizado', o veículo é retido na hora." },
    ],
  },
  {
    slug: "cte-globalizado",
    category: "Transporte",
    title: "CTe globalizado: quando emitir um único CTe para várias NFes",
    excerpt:
      "Reduza documentos e ganhe agilidade emitindo um CTe globalizado para o mesmo tomador. Requisitos e cuidados.",
    date: "30 Jan 2026",
    readMin: 5,
    image: cteTransporte,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "O CTe globalizado permite emitir um único Conhecimento de Transporte para várias NFes do mesmo remetente e destinatário, na mesma viagem. Reduz burocracia e simplifica a apuração." },
      { type: "heading", text: "Requisitos" },
      { type: "list", items: [
        "Mesmo remetente e mesmo destinatário para todas as NFes.",
        "Mesmo tomador do serviço.",
        "Mesma modalidade e tipo de serviço.",
        "Autorização prevista na legislação do estado envolvido.",
      ]},
      { type: "heading", text: "Cuidado com estados" },
      { type: "paragraph", text: "Nem todas as UFs aceitam globalizado da mesma forma. Antes de configurar como padrão, consulte a legislação estadual e o convênio ICMS aplicável." },
    ],
  },
  {
    slug: "seguro-carga-transporte",
    category: "Transporte",
    title: "Seguro de carga no CTe: RCTR-C, RCF-DC e averbação",
    excerpt:
      "Entenda os seguros obrigatórios e facultativos do transporte rodoviário e como informá-los corretamente no CTe.",
    date: "20 Jan 2026",
    readMin: 6,
    image: cteTransporte,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "Todo transportador de carga precisa contratar seguros obrigatórios e informá-los no CTe. A ausência ou o preenchimento errado pode transferir para a transportadora prejuízos que seriam da seguradora." },
      { type: "heading", text: "Os seguros do transporte" },
      { type: "list", items: [
        "RCTR-C: responsabilidade civil do transportador rodoviário (obrigatório).",
        "RCF-DC: responsabilidade civil facultativa por desaparecimento de carga.",
        "Seguro de carga próprio, contratado pelo embarcador.",
      ]},
      { type: "heading", text: "Averbação eletrônica" },
      { type: "paragraph", text: "A averbação transmite os dados do CTe para a seguradora, ativando a cobertura. Sistemas fiscais integrados já enviam a averbação automaticamente após a autorização do CTe." },
    ],
  },
  {
    slug: "rntrc-transportadora",
    category: "Transporte",
    title: "RNTRC: como manter sua transportadora regular na ANTT",
    excerpt:
      "Registro Nacional do Transportador Rodoviário de Cargas — cadastro, renovação e vínculo com veículos.",
    date: "10 Jan 2026",
    readMin: 5,
    image: mdfeFrota,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "O RNTRC é o cadastro da ANTT que autoriza empresas, cooperativas e autônomos a exercerem transporte rodoviário de cargas. Sem ele, não há emissão válida de CTe nem CIOT." },
      { type: "heading", text: "Categorias" },
      { type: "list", items: [
        "TAC: transportador autônomo de cargas.",
        "ETC: empresa de transporte de cargas.",
        "CTC: cooperativa de transporte de cargas.",
      ]},
      { type: "heading", text: "Manutenção regular" },
      { type: "list", items: [
        "Renovação a cada 5 anos.",
        "Atualização da frota vinculada.",
        "Recolhimento anual da taxa da ANTT.",
        "Motoristas com cadastro válido.",
      ]},
      { type: "quote", text: "RNTRC vencido é motivo direto para o CTe ser rejeitado e o veículo ser retido em barreira." },
    ],
  },
  // ============ Certificado Digital (+5) ============
  {
    slug: "certificado-nuvem-bird-id",
    category: "Certificado Digital",
    title: "Certificado em nuvem: assine de qualquer lugar sem token",
    excerpt:
      "Como funciona o A3 em nuvem, quais os limites de uso e por que ele vem substituindo o token USB.",
    date: "16 Fev 2026",
    readMin: 5,
    image: certificadoGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "O certificado em nuvem armazena a chave privada em servidores de alta segurança da Autoridade Certificadora. Você assina pelo celular ou navegador, sem precisar carregar token USB." },
      { type: "heading", text: "Vantagens" },
      { type: "list", items: [
        "Assinatura de qualquer dispositivo com internet.",
        "Sem risco de perder ou quebrar o token físico.",
        "Ideal para escritórios com múltiplos usuários.",
        "Compatível com NFe, CTe, e-Social, e-CAC, Gov.br.",
      ]},
      { type: "heading", text: "Cuidados" },
      { type: "paragraph", text: "Como a assinatura é liberada por app, proteja o celular com biometria e nunca compartilhe o PIN. Ative sempre a autenticação em duas etapas oferecida pela AC." },
    ],
  },
  {
    slug: "e-cnpj-e-cpf-diferencas",
    category: "Certificado Digital",
    title: "e-CNPJ e e-CPF: qual usar em cada situação",
    excerpt:
      "Certificado da empresa ou do titular? Entenda os usos permitidos e como não misturar os dois.",
    date: "07 Fev 2026",
    readMin: 4,
    image: certificadoGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "O e-CNPJ representa a empresa e assina documentos em nome da pessoa jurídica. O e-CPF representa a pessoa física — inclusive o próprio empresário ou representante legal." },
      { type: "heading", text: "Quando usar e-CNPJ" },
      { type: "list", items: [
        "Emissão de NFe, NFCe, CTe, MDFe.",
        "Transmissão de eSocial, EFD, DCTFWeb.",
        "Acesso a e-CAC e Conectividade Social como empresa.",
      ]},
      { type: "heading", text: "Quando usar e-CPF" },
      { type: "list", items: [
        "Declaração de Imposto de Renda pessoa física.",
        "Assinatura de contratos pessoais.",
        "Acesso ao Gov.br em nível ouro.",
      ]},
    ],
  },
  {
    slug: "renovacao-certificado-digital",
    category: "Certificado Digital",
    title: "Renovação do certificado digital: como não deixar vencer",
    excerpt:
      "Alertas, renovação online e o que fazer quando o certificado vence no meio de uma emissão.",
    date: "28 Jan 2026",
    readMin: 4,
    image: certificadoGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "Certificado vencido é sinônimo de operação parada: nem NFe, nem folha de pagamento, nem acesso ao e-CAC. A boa notícia é que a renovação pode ser 100% online quando feita dentro do prazo." },
      { type: "heading", text: "Renovação online" },
      { type: "paragraph", text: "Se o certificado ainda está válido e é do mesmo titular, a AC permite renovar sem nova validação presencial. O processo dura minutos e o novo certificado já sai com nova validade." },
      { type: "heading", text: "Boas práticas" },
      { type: "list", items: [
        "Alerta de vencimento com 30, 15 e 7 dias.",
        "Renovação sempre antes do vencimento — não deixar expirar.",
        "Backup do A1 em local seguro imediatamente após emissão.",
      ]},
      { type: "quote", text: "Perder o certificado no meio da emissão da folha ou de uma NFe custa muito mais caro do que renovar com antecedência." },
    ],
  },
  {
    slug: "revogacao-certificado",
    category: "Certificado Digital",
    title: "Revogação de certificado: quando e como fazer",
    excerpt:
      "Perdeu o token, mudou o representante legal ou desconfia de acesso indevido? Revogar é urgente.",
    date: "18 Jan 2026",
    readMin: 4,
    image: certificadoGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "A revogação cancela a validade do certificado antes do prazo. É uma medida de segurança essencial em situações críticas — e uma vez feita, é irreversível." },
      { type: "heading", text: "Motivos para revogar" },
      { type: "list", items: [
        "Perda ou roubo do token/smart card.",
        "Vazamento da senha do certificado.",
        "Troca do representante legal da empresa.",
        "Encerramento da empresa titular.",
      ]},
      { type: "paragraph", text: "A revogação é feita pelo site da AC emissora, geralmente com autenticação por documentos e confirmação por telefone. Após revogar, emita um novo certificado imediatamente para não parar a operação." },
    ],
  },
  {
    slug: "certificado-contador-procuracao",
    category: "Certificado Digital",
    title: "Procuração eletrônica: como o contador acessa sua empresa",
    excerpt:
      "Delegue acesso ao contador sem entregar o certificado digital da empresa. Guia da procuração no e-CAC.",
    date: "08 Jan 2026",
    readMin: 5,
    image: certificadoGuia,
    author: "Equipe Emissor Fiscal",
    content: [
      { type: "paragraph", text: "A procuração eletrônica no e-CAC permite que o contador acesse serviços da Receita Federal em nome da empresa, usando o próprio certificado dele — sem que você precise emprestar o seu." },
      { type: "heading", text: "Como emitir" },
      { type: "list", items: [
        "Acesse o e-CAC com o certificado da empresa.",
        "Menu 'Procurações' → 'Cadastrar procuração eletrônica'.",
        "Informe CPF/CNPJ do contador e serviços delegados.",
        "Defina prazo de validade (até 5 anos).",
      ]},
      { type: "heading", text: "Serviços mais delegados" },
      { type: "list", items: [
        "DCTFWeb, EFD-Reinf, eSocial.",
        "Consulta de pendências e situação fiscal.",
        "Parcelamentos e emissão de certidões.",
      ]},
      { type: "quote", text: "Procuração eletrônica é o meio-termo perfeito: o contador trabalha com autonomia e a empresa mantém total controle sobre o certificado." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
