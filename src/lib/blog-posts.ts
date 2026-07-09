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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
