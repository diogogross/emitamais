import nfeGuia from "@/assets/blog/nfe-guia.jpg";
import nfceVarejo from "@/assets/blog/nfce-varejo.jpg";
import cteTransporte from "@/assets/blog/cte-transporte.jpg";
import mdfeFrota from "@/assets/blog/mdfe-frota.jpg";
import certificadoGuia from "@/assets/blog/certificado-guia.jpg";

export type BlogPost = {
  slug: string;
  category: "Notas Fiscais" | "Transporte" | "Certificado Digital";
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  image: string;
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
  },
];
