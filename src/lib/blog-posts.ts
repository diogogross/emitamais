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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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
    author: "Equipe EmitaGo",
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

  // ============ SEO orgânico: MEI, emissão fiscal e Reforma Tributária (outubro/2026) ============
  {
    slug: "nfse-mei-2027-como-emitir",
    category: "Notas Fiscais",
    title: "NFS-e para MEI em 2027: como emitir nota fiscal de serviço",
    excerpt: "Veja como o MEI pode se preparar para emitir NFS-e em 2027, quais dados conferir e como acompanhar as regras oficiais da Reforma Tributária.",
    date: "22 Out 2026",
    readMin: 6,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "A Nota Fiscal de Serviço eletrônica (NFS-e) registra a prestação de um serviço e ajuda o MEI a comprovar a operação para o cliente. Com as mudanças previstas para 2027, vale conferir desde já o acesso ao Emissor Nacional e manter os dados cadastrais organizados. Regras e leiautes podem receber atualizações técnicas, por isso consulte sempre os canais oficiais." },
      { type: "heading", text: "Como se preparar para emitir NFS-e" },
      { type: "list", items: [
        "Tenha em mãos o CNPJ e os dados de acesso ao sistema oficial de emissão.",
        "Confira nome empresarial, endereço e demais informações cadastrais.",
        "Identifique corretamente o serviço prestado e informe os dados do tomador quando solicitados.",
        "Revise descrição, valor e competência antes de confirmar a emissão.",
        "Guarde o documento e o número da nota para localizar o registro depois."
      ]},
      { type: "heading", text: "O MEI precisa emitir nota para toda prestação?" },
      { type: "paragraph", text: "As regras atuais dispensam, em geral, o MEI de emitir nota quando presta serviço para pessoa física, salvo quando o consumidor solicitar; para cliente pessoa jurídica, a emissão é exigida. A legislação e a regulamentação da Reforma Tributária preveem mudanças a partir de 2027. Antes de tomar decisões, confira a regra vigente e as orientações atualizadas no Portal Nacional da NFS-e e na Receita Federal." },
      { type: "heading", text: "Erros comuns ao emitir nota de serviço" },
      { type: "list", items: [
        "Selecionar um serviço que não corresponde ao trabalho realizado.",
        "Informar incorretamente os dados do cliente ou o valor cobrado.",
        "Não conferir o documento gerado depois da transmissão.",
        "Deixar para testar o acesso somente quando precisar faturar."
      ]},
      { type: "heading", text: "Checklist para 2027" },
      { type: "paragraph", text: "Faça um teste de acesso, organize os dados que usa com frequência e acompanhe os comunicados oficiais. Se tiver dúvida sobre enquadramento, obrigação ou tributação, confirme com um contador ou órgão fiscal competente. Este conteúdo é informativo e não substitui orientação contábil." }
    ],
  },
  {
    slug: "mei-nota-fiscal-pessoa-fisica-2027",
    category: "Notas Fiscais",
    title: "MEI em 2027: será obrigatório emitir nota fiscal para pessoa física?",
    excerpt: "Entenda a mudança prevista para a emissão de documentos fiscais pelo MEI, o que continua no DAS e como se organizar antes de 2027.",
    date: "22 Out 2026",
    readMin: 6,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "Uma das dúvidas mais buscadas por microempreendedores é se o MEI precisará emitir nota fiscal também para clientes pessoa física em 2027. A regulamentação da Reforma Tributária trouxe mudanças para a emissão de documentos fiscais, por isso é importante separar o que já está definido dos detalhes técnicos que ainda podem ser atualizados." },
      { type: "heading", text: "O que muda para o MEI em 2027?" },
      { type: "paragraph", text: "As alterações legais aprovadas para a transição tributária ampliam a emissão de documentos fiscais nas operações do MEI, incluindo vendas e prestações de serviços. A forma de emissão depende da natureza da operação: serviços utilizam a NFS-e de padrão nacional, enquanto mercadorias seguem as regras aplicáveis ao documento fiscal correspondente. Confira as orientações oficiais mais recentes antes de emitir." },
      { type: "heading", text: "O DAS-MEI vai deixar de ser fixo?" },
      { type: "paragraph", text: "A Reforma Tributária não significa, por si só, que o MEI deva calcular IBS e CBS como uma empresa do regime regular. O MEI permanece sujeito às regras específicas do SIMEI e ao recolhimento previsto para sua categoria. Não confunda campos ou informações do documento fiscal com uma cobrança automática separada: consulte as normas vigentes para o seu enquadramento." },
      { type: "heading", text: "Como se preparar antes de janeiro de 2027" },
      { type: "list", items: [
        "Verifique o acesso aos emissores oficiais e mantenha o cadastro atualizado.",
        "Separe os dados de clientes e serviços ou produtos vendidos.",
        "Converse com o contador sobre as operações específicas do seu negócio.",
        "Acompanhe comunicados da Receita Federal, do Portal do Empreendedor e dos fiscos estaduais ou municipais.",
        "Use um sistema fiscal atualizado, se optar por um emissor privado."
      ]},
      { type: "heading", text: "Onde confirmar as regras" },
      { type: "paragraph", text: "Consulte o Portal Nacional da NFS-e para serviços e os canais oficiais da Receita Federal e do Portal do Empreendedor para orientações gerais. As regras de documentos para mercadorias podem depender da legislação estadual. Este artigo tem finalidade educativa e deve ser lido junto das normas vigentes." }
    ],
  },
  {
    slug: "como-emitir-nfe-passo-a-passo-2027",
    category: "Notas Fiscais",
    title: "Como emitir nota fiscal eletrônica (NF-e): passo a passo para empresas",
    excerpt: "Aprenda o fluxo básico de emissão de NF-e, os cadastros que precisam estar corretos e como reduzir rejeições antes de transmitir à SEFAZ.",
    date: "22 Out 2026",
    readMin: 7,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "A Nota Fiscal Eletrônica (NF-e, modelo 55) documenta operações com mercadorias nas situações previstas pela legislação. A emissão envolve cadastro, preenchimento dos dados da operação, assinatura digital quando exigida e transmissão para autorização da SEFAZ. Uma nota preenchida corretamente reduz retrabalho e facilita a escrituração." },
      { type: "heading", text: "O que conferir antes de emitir NF-e" },
      { type: "list", items: [
        "Credenciamento e situação fiscal do estabelecimento perante a SEFAZ.",
        "Certificado digital válido, conforme os requisitos do emissor.",
        "Cadastro do destinatário, incluindo CNPJ/CPF, endereço e inscrição estadual quando aplicável.",
        "Descrição dos produtos, NCM, CFOP, unidade, quantidade e valores.",
        "Regras tributárias definidas de acordo com o regime e a operação, com apoio contábil."
      ]},
      { type: "heading", text: "Etapas da emissão" },
      { type: "list", items: [
        "Selecione o destinatário e confira os dados cadastrais.",
        "Inclua os produtos e informe quantidades, preços e classificações fiscais.",
        "Revise CFOP, impostos e natureza da operação conforme a orientação contábil.",
        "Transmita o documento e aguarde o retorno da SEFAZ.",
        "Depois da autorização, disponibilize o DANFE e o XML ao destinatário e mantenha os arquivos armazenados."
      ]},
      { type: "heading", text: "Por que uma NF-e pode ser rejeitada?" },
      { type: "paragraph", text: "Rejeições podem ocorrer por inconsistências de cadastro, código fiscal incompatível, certificado inválido ou campos obrigatórios ausentes. Leia a mensagem de retorno, corrija a causa e só então retransmita. Não altere códigos tributários por tentativa e erro: confirme a classificação adequada com seu contador." },
      { type: "heading", text: "NF-e e Reforma Tributária" },
      { type: "paragraph", text: "Os leiautes fiscais estão sendo adaptados para os novos tributos IBS e CBS. Em 2026 e 2027, acompanhe notas técnicas e cronogramas oficiais, porque as exigências podem variar conforme o documento e o enquadramento tributário. Um emissor atualizado ajuda a acompanhar mudanças de leiaute, mas não substitui a validação fiscal da operação." }
    ],
  },
  {
    slug: "emissao-nfse-empresas-padrao-nacional",
    category: "Notas Fiscais",
    title: "Emissão de NFS-e para empresas: como funciona o padrão nacional",
    excerpt: "Saiba o que é a NFS-e, quais informações revisar antes de emitir e como acompanhar a adoção do padrão nacional de nota fiscal de serviço.",
    date: "22 Out 2026",
    readMin: 6,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "A Nota Fiscal de Serviço eletrônica (NFS-e) registra serviços prestados e é importante para a documentação fiscal, o controle financeiro e o relacionamento com clientes empresariais. O padrão nacional busca uniformizar dados e processos, embora a aplicação prática e as obrigações possam variar conforme o município, o porte da empresa e o regime tributário." },
      { type: "heading", text: "Quais dados revisar na nota de serviço" },
      { type: "list", items: [
        "CNPJ e cadastro do prestador.",
        "Identificação do tomador quando necessária.",
        "Descrição clara e compatível com o serviço realmente prestado.",
        "Código de serviço e município de incidência conforme a regra aplicável.",
        "Valor, retenções e demais informações tributárias confirmadas com o contador."
      ]},
      { type: "heading", text: "Como funciona a emissão" },
      { type: "paragraph", text: "Em linhas gerais, o prestador acessa o emissor autorizado para seu enquadramento, informa os dados da prestação, revisa as informações e conclui a emissão. Depois, deve salvar ou encaminhar o documento ao cliente e manter o registro organizado. Empresas devem verificar com a prefeitura e com a contabilidade qual emissor e procedimento se aplicam ao seu caso." },
      { type: "heading", text: "O que observar na transição para 2027" },
      { type: "paragraph", text: "A Reforma Tributária traz mudanças graduais nos documentos e na informação de tributos. A Receita Federal e o Comitê Gestor publicam atos e orientações que podem atualizar prazos e procedimentos. Não presuma que todas as empresas terão exatamente o mesmo fluxo: confira o enquadramento e a orientação vigente para NFS-e." },
      { type: "heading", text: "Como reduzir erros na emissão de NFS-e" },
      { type: "list", items: [
        "Mantenha os cadastros de clientes e serviços atualizados.",
        "Use descrições objetivas, sem informações contraditórias.",
        "Confira município, competência e valor antes de confirmar.",
        "Guarde o documento emitido e acompanhe eventuais cancelamentos ou substituições.",
        "Revise com o contador as regras de retenção e tributação aplicáveis."
      ]}
    ],
  },
  {
    slug: "cte-ibs-cbs-2027-transportadoras",
    category: "Transporte",
    title: "CT-e em 2027: como preparar a transportadora para IBS e CBS",
    excerpt: "Veja como a Reforma Tributária afeta a documentação do transporte, por que atualizar o emissor de CT-e e quais pontos revisar com a contabilidade.",
    date: "22 Out 2026",
    readMin: 7,
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "O Conhecimento de Transporte Eletrônico (CT-e, modelo 57) documenta prestações de serviço de transporte de cargas. A implantação da Reforma Tributária exige atenção aos leiautes fiscais e às informações relacionadas à CBS e ao IBS. Para transportadoras, preparar sistemas, cadastros e processos com antecedência ajuda a reduzir erros operacionais." },
      { type: "heading", text: "O que revisar no CT-e" },
      { type: "list", items: [
        "Mantenha o emissor atualizado conforme as versões e notas técnicas oficiais.",
        "Revise os dados do remetente, destinatário, tomador e percurso.",
        "Confira valores do frete e informações da prestação antes de transmitir.",
        "Verifique com a contabilidade como o enquadramento tributário da transportadora afeta o preenchimento.",
        "Teste os fluxos de autorização, cancelamento, substituição e armazenamento dos XMLs."
      ]},
      { type: "heading", text: "O que são IBS e CBS?" },
      { type: "paragraph", text: "A CBS é a Contribuição sobre Bens e Serviços, de âmbito federal, e o IBS é o Imposto sobre Bens e Serviços, compartilhado por estados e municípios. Eles fazem parte da substituição gradual de tributos sobre o consumo. O calendário de implantação é escalonado; por isso, não se deve presumir que todas as regras de transição entrem em vigor ao mesmo tempo." },
      { type: "heading", text: "Checklist para transportadoras" },
      { type: "list", items: [
        "Defina quem acompanha as notas técnicas e comunicados oficiais.",
        "Confirme com o fornecedor do sistema quando os leiautes atualizados estarão disponíveis.",
        "Alinhe com o contador o tratamento fiscal de cada tipo de prestação.",
        "Treine a equipe para interpretar mensagens de validação e rejeição.",
        "Faça testes antes de depender do novo fluxo em uma operação real."
      ]},
      { type: "heading", text: "Atenção às fontes oficiais" },
      { type: "paragraph", text: "A Receita Federal informou em outubro de 2026 que documentos fiscais de transporte já vêm sendo adaptados às informações da CBS, e o cronograma prevê novas etapas em 2027. Consulte os portais oficiais da NF-e/CT-e, da Receita Federal e do Comitê Gestor do IBS para confirmar regras e datas aplicáveis ao seu perfil. Este conteúdo é informativo, não substitui orientação contábil." }
    ],
  },
  {
    slug: "ibs-cbs-reforma-tributaria-nota-fiscal-2027",
    category: "Notas Fiscais",
    title: "IBS e CBS na nota fiscal em 2027: o que muda com a Reforma Tributária",
    excerpt: "Entenda a diferença entre IBS e CBS, o cronograma da Reforma Tributária e como preparar seu sistema emissor para as novas informações fiscais.",
    date: "22 Out 2026",
    readMin: 7,
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe EmitaGo",
    content: [
      { type: "paragraph", text: "A Reforma Tributária sobre o consumo cria dois tributos centrais: a CBS, de competência federal, e o IBS, compartilhado por estados e municípios. A transição acontece em etapas e exige mudanças em documentos eletrônicos e sistemas fiscais. O impacto concreto depende do regime tributário, da atividade e das regras técnicas vigentes para cada documento." },
      { type: "heading", text: "Qual é a diferença entre IBS e CBS?" },
      { type: "list", items: [
        "CBS significa Contribuição sobre Bens e Serviços e integra a esfera federal.",
        "IBS significa Imposto sobre Bens e Serviços e envolve estados e municípios.",
        "Os dois fazem parte da reorganização da tributação sobre o consumo.",
        "A forma de apuração e recolhimento depende do regime tributário e das regras aplicáveis ao contribuinte."
      ]},
      { type: "heading", text: "O que acontece em 2027?" },
      { type: "paragraph", text: "O cronograma prevê uma nova etapa da transição a partir de 2027, incluindo o início da cobrança da CBS e o período de teste do IBS conforme as normas vigentes. A implementação não é igual para todos os contribuintes: o Simples Nacional e o MEI possuem regras específicas, e os detalhes de preenchimento podem depender de notas técnicas atualizadas." },
      { type: "heading", text: "Como preparar a emissão de notas fiscais" },
      { type: "list", items: [
        "Atualize o sistema emissor e acompanhe a versão do leiaute de cada documento.",
        "Não copie códigos fiscais de outra empresa sem validar se o enquadramento é o mesmo.",
        "Revise cadastros de produtos, serviços, clientes e operações.",
        "Faça testes com o fornecedor do sistema e registre dúvidas para o contador.",
        "Acompanhe comunicados da Receita Federal, do Comitê Gestor do IBS e dos portais fiscais."
      ]},
      { type: "heading", text: "A Reforma Tributária aumenta automaticamente o imposto de toda empresa?" },
      { type: "paragraph", text: "Não é correto concluir que todas as empresas pagarão mais ou menos apenas pela existência de IBS e CBS. O resultado depende da atividade, dos créditos permitidos, dos custos, do regime tributário e das regras aplicáveis. Antes de mudar de regime ou preço, faça uma simulação com um profissional contábil." },
      { type: "heading", text: "Como evitar informação desatualizada" },
      { type: "paragraph", text: "Use materiais oficiais para confirmar prazos e obrigações, porque regras e validações técnicas podem mudar durante a implantação. A Receita Federal publicou atualizações do Simples Nacional em 2026 para adequação à Reforma Tributária. Este guia é educativo e não substitui análise fiscal individual." }
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
