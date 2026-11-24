import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, FileText } from "lucide-react";
import { getSolutionBySlug, solutionPages } from "@/lib/solution-pages";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://www.emitago.com.br";

const pricingFaq = [
  {
    question: "Posso gerenciar vários CNPJs no mesmo painel?",
    answer: "Sim. Você pode gerenciar múltiplos CNPJs no mesmo painel. Cada CNPJ ativo é cobrado individualmente: cada CNPJ ativo custa R$ 60,00 por mês de uso. O pagamento contempla apenas os CNPJs contratados.",
  },
  {
    question: "Preciso pagar nos meses em que não emitir notas?",
    answer: "O modelo é pré-pago. Você paga antecipadamente pelo mês em que precisar usar cada CNPJ. Nos meses em que não precisar emitir, não é necessário pagar pelo uso daquele CNPJ, conforme as condições comerciais contratadas.",
  },
];

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const page = getSolutionBySlug(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Página não encontrada | EmitaGo" }, { name: "robots", content: "noindex, nofollow" }] };
    }
    const { page } = loaderData;
    const url = `${BASE_URL}/solucoes/${params.slug}`;
    return {
      meta: [
        { title: page.seoTitle },
        { name: "description", content: page.description },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: "EmitaGo" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:title", content: page.seoTitle },
        { property: "og:description", content: page.description },
        { property: "og:image", content: `${BASE_URL}/og-emita.png` },
        { property: "og:image:alt", content: `${page.title} — EmitaGo` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: page.seoTitle },
        { name: "twitter:description", content: page.description },
        { name: "twitter:image", content: `${BASE_URL}/og-emita.png` },
        { name: "twitter:image:alt", content: `${page.title} — EmitaGo` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: page.title,
                description: page.description,
                inLanguage: "pt-BR",
                isPartOf: { "@id": `${BASE_URL}/#website` },
                about: { "@type": "Thing", name: page.title }
              },
              {
                "@type": "Service",
                "@id": `${url}#service`,
                name: page.title,
                description: page.description,
                provider: { "@type": "Organization", name: "EmitaGo", url: BASE_URL },
                areaServed: { "@type": "Country", name: "Brasil" },
                offers: {
                  "@type": "Offer",
                  price: 60.00,
            priceCurrency: "BRL",
                  description: "R$ 60,00 por CNPJ ativo em cada mês de uso. Emissão ilimitada de notas no mês pago, sem fidelidade.",
                  url: `${BASE_URL}/#planos`,
                },
                url
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "Soluções fiscais", item: `${BASE_URL}/#documentos` },
                  { "@type": "ListItem", position: 3, name: page.title, item: url }
                ]
              },
              {
                "@type": "FAQPage",
                mainEntity: [...page.faq, ...pricingFaq].map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer }
                }))
              }
            ]
          })
        }
      ]
    };
  },
  notFoundComponent: () => <div className="min-h-screen grid place-items-center p-8"><div className="text-center"><h1 className="text-4xl font-bold">Página não encontrada</h1><Link to="/" className="mt-6 inline-flex underline">Voltar ao início</Link></div></div>,
  component: SolutionPage
});

const landingVisuals: Record<string, { image: string; alt: string; eyebrow: string; headline: string; description: string; points: string[]; useCases: { title: string; text: string }[] }> = {
  nfe: {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    alt: "Empresário conferindo documentos e informações financeiras em uma mesa de trabalho",
    eyebrow: "NF-e modelo 55 • Nota fiscal de produto",
    headline: "Sua rotina de vendas com a parte fiscal em ordem",
    description: "Emita notas de produto em um fluxo organizado: reúna os dados da operação, confira as informações fiscais, transmita o documento e mantenha DANFE e XML disponíveis para a equipe e a contabilidade.",
    points: ["Dados de clientes e produtos organizados", "Informações fiscais reunidas na emissão", "Acompanhamento do retorno de autorização da SEFAZ", "DANFE e XML para compartilhar e arquivar"],
    useCases: [
      { title: "Venda de mercadorias", text: "Registre operações de venda de produtos com os dados do destinatário e os itens da nota." },
      { title: "Distribuição e revenda", text: "Mantenha os documentos fiscais das saídas organizados para consulta e rotina contábil." },
      { title: "Indústria e produção", text: "Estruture a emissão de NF-e conforme a natureza da operação e a configuração tributária da empresa." }
    ]
  },
  nfse: {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    alt: "Equipe de profissionais trabalhando em conjunto em um escritório",
    eyebrow: "NFS-e • Nota fiscal de serviço",
    headline: "Emita notas de serviço com atenção ao município e ao padrão fiscal",
    description: "A emissão de NFS-e depende do município, do enquadramento e do padrão de integração aplicável. O EmitaGo reúne cadastro de tomadores e serviços e integração com mais de 1.600 municípios atendidos, conforme cobertura. Confirme a disponibilidade para sua operação antes de contratar.",
    points: ["Cadastro de tomadores e serviços", "Dados da prestação organizados para a emissão", "Consulta prévia da cobertura municipal e do padrão aplicável", "Histórico de documentos para consulta e organização"],
    useCases: [
      { title: "Prestadores de serviços", text: "Organize a emissão das notas referentes aos serviços prestados e os dados de cada tomador." },
      { title: "Empresas do Simples Nacional", text: "Confira a exigência do padrão nacional vigente e valide se o fluxo integrado atende ao seu enquadramento." },
      { title: "Escritórios contábeis", text: "Centralize a consulta da rotina de NFS-e dos clientes, respeitando as particularidades de cada município." }
    ]
  },
  cte: {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    alt: "Caminhão de carga em operação logística",
    eyebrow: "CT-e modelo 57 • CT-e OS modelo 67",
    headline: "Documentação de transporte organizada do início ao fim da prestação",
    description: "Prepare a emissão do Conhecimento de Transporte Eletrônico com os dados dos participantes, percurso, valores e informações fiscais da prestação. O fluxo também se conecta à rotina de MDF-e quando a operação exigir.",
    points: ["Emissão online de CT-e e CT-e OS, conforme disponibilidade", "Dados de remetente, destinatário e tomador organizados", "Acompanhamento do retorno de autorização da SEFAZ", "Integração operacional com MDF-e e recursos relacionados ao CIOT"],
    useCases: [
      { title: "Transportadoras", text: "Organize a documentação fiscal das prestações de transporte rodoviário de cargas." },
      { title: "Operações com CT-e OS", text: "Consulte a disponibilidade do modelo 67 para o estado, enquadramento e tipo de serviço da empresa." },
      { title: "Gestão de viagens", text: "Conecte a preparação do CT-e à documentação de viagem e ao MDF-e quando aplicável." }
    ]
  },
  "cte-os": {
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
    alt: "Ônibus rodoviário utilizado no transporte de passageiros por fretamento",
    eyebrow: "CT-e OS • modelo 67",
    headline: "Emissão de CT-e OS para serviços de transporte previstos na legislação",
    description: "Organize a emissão do Conhecimento de Transporte Eletrônico para Outros Serviços, modelo 67. Confira o enquadramento da prestação, os dados do tomador e as exigências de credenciamento antes de transmitir à SEFAZ.",
    points: ["Página específica para CT-e OS modelo 67", "Dados de emitente, tomador e prestação organizados", "Orientações sobre DACTE OS, XML e autorização", "Confirme estado, credenciamento e operação antes de contratar"],
    useCases: [
      { title: "Fretamento de passageiros", text: "Confira as hipóteses legais e os requisitos de emissão para o transporte de pessoas." },
      { title: "Transporte de valores", text: "Consulte o enquadramento fiscal e os requisitos específicos aplicáveis à prestação." },
      { title: "Outros serviços previstos", text: "Verifique se a operação se enquadra no modelo 67 e se o fluxo está disponível para sua empresa." }
    ]
  },
  mdfe: {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85",
    alt: "Caminhão de transporte rodoviário em uma estrada",
    eyebrow: "MDF-e modelo 58 • Manifesto de carga",
    headline: "Organize os documentos e as informações de cada viagem",
    description: "Emita o Manifesto Eletrônico de Documentos Fiscais, conhecido como manifesto de carga, reunindo documentos vinculados, veículo, condutor e percurso conforme a operação. Acompanhe a autorização e o encerramento do manifesto.",
    points: ["Emissão online de MDF-e (manifesto de carga)", "Vinculação de NF-e e CT-e conforme a operação", "Dados de veículo, condutor e percurso organizados", "Acompanhamento de autorização e encerramento da viagem"],
    useCases: [
      { title: "Transportadoras", text: "Reúna os documentos fiscais que acompanham as viagens e organize os eventos do manifesto." },
      { title: "Frotas próprias", text: "Prepare as informações de veículos, condutores e percurso conforme a operação realizada." },
      { title: "Embarcadores e transportadores", text: "Consulte os documentos vinculados e as exigências aplicáveis antes de iniciar a viagem." }
    ]
  },
  ciot: {
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85",
    alt: "Operação logística com carga preparada para transporte rodoviário",
    eyebrow: "CIOT • Registro da operação de transporte",
    headline: "Organize o CIOT antes do início da operação",
    description: "Reúna os dados de contratante, transportador, veículo, carga, origem, destino e valores do frete. Confira quem deve gerar o código e siga o fluxo autorizado pela ANTT para sua operação.",
    points: ["Orientação sobre obrigatoriedade e responsabilidades", "CIOT relacionado à rotina de CT-e e MDF-e", "Conferência do piso mínimo de frete com apoio da calculadora ANTT", "Registro prévio à operação, conforme regras vigentes"],
    useCases: [
      { title: "Embarcadores", text: "Confira as responsabilidades do contratante e os dados necessários ao registro." },
      { title: "Transportadoras", text: "Organize o registro das operações realizadas e a documentação de transporte." },
      { title: "Operadores logísticos", text: "Mantenha as informações da contratação e do transporte reunidas para consulta." }
    ]
  }
};
 
function SolutionPage() {
  const { page } = Route.useLoaderData();
  const related = blogPosts.filter((post) => page.relatedSlugs.includes(post.slug));
  const relatedSolutions = solutionPages.filter((solution) => solution.slug !== page.slug);
  const visual = landingVisuals[page.slug];
  const sectionCopy: Record<string, { benefitsEyebrow: string; benefitsTitle: string; benefitsIntro: string; stepsTitle: string; stepsIntro: string; audienceTitle: string }> = {
    nfe: { benefitsEyebrow: "Emissão de nota de produto", benefitsTitle: "Recursos para a rotina de NF-e da empresa", benefitsIntro: "Da conferência dos itens à autorização da SEFAZ, mantenha os dados da venda e os arquivos fiscais organizados.", stepsTitle: "Etapas para emitir uma NF-e", stepsIntro: "Confira os dados comerciais e tributários antes de assinar e transmitir o documento.", audienceTitle: "Quem emite NF-e modelo 55?" },
    nfse: { benefitsEyebrow: "Emissão de nota de serviço", benefitsTitle: "O que avaliar na emissão de NFS-e", benefitsIntro: "Município, enquadramento e padrão nacional ou municipal influenciam o fluxo. Valide a cobertura antes de iniciar.", stepsTitle: "Etapas para emitir uma NFS-e", stepsIntro: "Os campos e a transmissão variam conforme o município e o padrão fiscal aplicável.", audienceTitle: "Quem precisa emitir NFS-e?" },
    cte: { benefitsEyebrow: "Documentos fiscais de transporte", benefitsTitle: "Recursos para a rotina de CT-e e CT-e OS", benefitsIntro: "Organize os dados da prestação, acompanhe a autorização e conecte o conhecimento à documentação da viagem quando necessário.", stepsTitle: "Etapas para emitir CT-e", stepsIntro: "Revise participantes, percurso, valores e tributação antes de transmitir o conhecimento à SEFAZ.", audienceTitle: "Quem utiliza CT-e e CT-e OS?" },
    "cte-os": { benefitsEyebrow: "CT-e OS modelo 67", benefitsTitle: "Recursos para a emissão de CT-e OS", benefitsIntro: "O modelo 67 atende hipóteses específicas. Confirme enquadramento, credenciamento e disponibilidade para sua operação.", stepsTitle: "Etapas para emitir CT-e OS", stepsIntro: "Revise os requisitos estaduais, os dados da prestação e a autorização da SEFAZ antes de considerar o documento emitido.", audienceTitle: "Quem utiliza CT-e OS modelo 67?" },
    ciot: { benefitsEyebrow: "Registro da operação de transporte", benefitsTitle: "Organize a rotina de CIOT", benefitsIntro: "A responsabilidade pela geração depende do tipo de operação e de quem efetivamente realiza o transporte. Consulte as regras e confirme o fluxo disponível.", stepsTitle: "Etapas para registrar o CIOT", stepsIntro: "O registro deve ocorrer antes do início da operação, conforme as regras vigentes e os canais autorizados.", audienceTitle: "Quem precisa organizar o CIOT?" },

    mdfe: { benefitsEyebrow: "Manifesto eletrônico de documentos fiscais", benefitsTitle: "Recursos para emitir e acompanhar MDF-e", benefitsIntro: "Prepare os documentos vinculados e os dados da viagem, acompanhe a autorização e registre o encerramento quando a operação terminar.", stepsTitle: "Etapas para emitir manifesto de carga", stepsIntro: "A emissão do MDF-e depende dos documentos, veículo, condutor, percurso e demais dados exigidos para a operação.", audienceTitle: "Quem precisa emitir MDF-e?" }
  };
  const copy = sectionCopy[page.slug] ?? { benefitsEyebrow: "Recursos e organização", benefitsTitle: "Recursos para sua rotina fiscal", benefitsIntro: "Organize a emissão e mantenha as informações fiscais acessíveis.", stepsTitle: "Como funciona a emissão", stepsIntro: "O processo depende da configuração fiscal da empresa e das validações do ambiente autorizador.", audienceTitle: "Quem pode usar?" };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <Link to="/" aria-label="EmitaGo - página inicial">
            <img src="/logo%20transparente%20letra%20braca.png" alt="EmitaGo" width={160} height={48} className="h-11 w-36 object-contain sm:w-40" />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" hash="documentos" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex">Soluções</Link>
            <Link to="/" hash="planos" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Conhecer planos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_.95fr] md:px-8 md:py-24">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <FileText className="h-4 w-4" /> {visual?.eyebrow ?? "Solução fiscal online"}
              </div>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">{page.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{page.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/" hash="planos" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:opacity-90">
                  Começar agora <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/" hash="planos" className="inline-flex items-center rounded-full border border-border bg-background/70 px-6 py-3.5 font-semibold transition hover:bg-muted">Ver condições</Link>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Consulte a configuração fiscal e a disponibilidade da operação para o seu CNPJ antes de emitir.</p>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
              <img src={visual?.image ?? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85"} alt={visual?.alt ?? "Rotina de trabalho e gestão fiscal"} width="1200" height="900" fetchPriority="high" decoding="async" className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl" />
              <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/95 p-4 shadow-xl backdrop-blur md:left-8 md:right-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">EmitaGo • Emissão online</p>
                <p className="mt-1 text-sm font-medium">{visual?.headline ?? page.title}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1fr_340px] md:px-8 md:py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Preço transparente</p>
              <p className="mt-3 text-3xl font-bold">R$ 60,00</p>
              <p className="mt-1 text-sm text-muted-foreground">por CNPJ ativo em cada mês de uso</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Modelo pré-pago</p>
              <p className="mt-3 text-2xl font-bold">Você decide quando usar</p>
              <p className="mt-1 text-sm text-muted-foreground">Sem contratos, sem fidelidade e sem necessidade de cartão de crédito.</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-6 sm:col-span-2">
              <p className="text-sm leading-relaxed text-muted-foreground">No mês pago, a emissão é ilimitada para aquele CNPJ. É possível gerenciar vários CNPJs no mesmo painel, com cobrança individual por CNPJ ativo.</p>
            </div>
          </div>
          <aside className="rounded-2xl bg-foreground p-6 text-background md:p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-background/60">Precisa confirmar sua operação?</p>
            <h2 className="mt-3 font-display text-2xl font-bold">Veja se o EmitaGo atende seu negócio.</h2>
            <p className="mt-3 text-sm leading-relaxed text-background/70">Confirme requisitos fiscais, município ou configuração antes de começar.</p>
            <Link to="/" hash="planos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90">Ver planos <ArrowRight className="h-4 w-4" /></Link>
          </aside>
        </section>

        {visual && (
          <section className="bg-muted/30">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{visual.eyebrow}</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{visual.headline}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{visual.description}</p>
                <ul className="mt-7 space-y-4">
                  {visual.points.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{item}</span></li>)}
                </ul>
              </div>
              <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Aplicações na rotina</p>
                <div className="mt-5 space-y-5">
                  {visual.useCases.map((item, index) => <article key={item.title} className="flex gap-4 border-b border-border/60 pb-5 last:border-0 last:pb-0">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary">0{index + 1}</span>
                    <div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>
                  </article>)}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{copy.benefitsEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{copy.benefitsTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{copy.benefitsIntro}</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((item, index) => <article key={item} className="rounded-2xl border border-border/70 bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary">0{index + 1}</span>
              <p className="mt-4 text-sm font-medium leading-relaxed">{item}</p>
            </article>)}
          </div>
        </section>

        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Passo a passo</p>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{copy.stepsTitle}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{copy.stepsIntro}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {page.steps.map((step, index) => <article key={step} className="rounded-2xl border border-border/70 bg-background p-5">
                  <span className="text-xs font-bold tracking-widest text-primary">ETAPA 0{index + 1}</span>
                  <p className="mt-3 text-sm leading-relaxed">{step}</p>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Para diferentes operações</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{copy.audienceTitle}</h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.audience.map((item) => <div key={item} className="rounded-xl border border-border/70 bg-card p-5 text-sm font-medium">{item}</div>)}
          </div>
        </section>

        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Respostas diretas para ajudar você a entender a emissão e avaliar a contratação.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[...page.faq, ...pricingFaq].map((item) => <article key={item.question} className="rounded-2xl border border-border/70 bg-background p-6">
                <h3 className="font-semibold leading-snug">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </article>)}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <h2 className="font-display text-3xl font-bold">Continue aprendendo</h2>
            <p className="mt-3 text-muted-foreground">Guias para entender melhor os documentos e as rotinas fiscais.</p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {related.map((post) => <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="rounded-2xl border border-border/70 p-5 transition hover:border-primary">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                <h3 className="mt-2 font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Ler artigo <ArrowRight className="h-4 w-4" /></span>
              </Link>)}
            </div>
          </section>
        )}

        <section className="bg-muted/30" aria-labelledby="outras-solucoes-title">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Ecossistema EmitaGo</p>
              <h2 id="outras-solucoes-title" className="mt-3 font-display text-3xl font-bold md:text-4xl">Conheça também nossas outras soluções fiscais</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Encontre a solução adequada para cada documento e conecte as rotinas fiscais da sua empresa em uma única plataforma.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedSolutions.map((solution) => (
                <Link key={solution.slug} to="/solucoes/$slug" params={{ slug: solution.slug }} className="group rounded-2xl border border-border/70 bg-background p-5 transition hover:-translate-y-1 hover:border-primary/50">
                  <h3 className="font-semibold leading-snug group-hover:text-primary">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{solution.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Conhecer solução <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="overflow-hidden rounded-3xl bg-foreground px-7 py-10 text-background md:px-12 md:py-14">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">EmitaGo • Emissão fiscal online</p>
                <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-4xl">Organize sua emissão fiscal sem complicar a rotina.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/70">R$ 60,00 por CNPJ ativo em cada mês de uso. Sem fidelidade e sem cobrança pelo uso nos meses em que você não ativar o CNPJ.</p>
              </div>
              <Link to="/" hash="planos" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 font-semibold text-foreground transition hover:opacity-90">Conhecer o EmitaGo <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
