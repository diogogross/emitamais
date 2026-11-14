import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, FileText } from "lucide-react";
import { getSolutionBySlug } from "@/lib/solution-pages";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://www.emitago.com.br";

const pricingFaq = [
  {
    question: "Quanto custa o EmitaGo?",
    answer: "O EmitaGo custa R$ 60 por CNPJ ativo em cada mês de uso. O pagamento é antecipado e libera o sistema naquele mês, com emissão ilimitada de notas para o CNPJ pago. Não há fidelidade nem multa por cancelamento.",
  },
  {
    question: "Posso gerenciar vários CNPJs no mesmo painel?",
    answer: "Sim. Você pode gerenciar múltiplos CNPJs no mesmo painel, mas a cobrança é individual: cada CNPJ utilizado no mês custa R$ 60. CNPJs cadastrados não estão automaticamente incluídos em um único pagamento.",
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
        { property: "og:image:alt", content: `EmitaGo — ${page.title}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: page.seoTitle },
        { name: "twitter:description", content: page.description },
        { name: "twitter:image", content: `${BASE_URL}/og-emita.png` },
        { name: "twitter:image:alt", content: `EmitaGo — ${page.title}` },
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
                  price: "60.00",
                  priceCurrency: "BRL",
                  description: "R$ 60 por CNPJ ativo, pagos antecipadamente para liberar o mês de uso. Emissão ilimitada de notas no mês pago, sem fidelidade.",
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
                mainEntity: faqItems.map((item) => ({
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
    headline: "Menos tempo com burocracia, mais foco no serviço",
    description: "Organize a emissão das notas de serviço em uma plataforma online. Cadastre tomadores e serviços, informe os dados da prestação e utilize o fluxo integrado disponível para o município da sua empresa.",
    points: ["Cadastro de tomadores e serviços", "Dados da prestação reunidos em um só fluxo", "Integração com mais de 1.600 municípios atendidos, conforme cobertura", "Histórico de documentos para consulta e organização"],
    useCases: [
      { title: "Prestadores de serviços", text: "Emita NFS-e para registrar os serviços realizados e documentar a prestação ao cliente." },
      { title: "Pequenas empresas e MEI", text: "Consulte a disponibilidade do município e as regras do seu enquadramento antes de iniciar a emissão." },
      { title: "Escritórios contábeis", text: "Apoie a organização dos documentos fiscais dos clientes em uma rotina online." }
    ]
  }
};

function SolutionPage() {
  const { page } = Route.useLoaderData();
  const related = blogPosts.filter((post) => page.relatedSlugs.includes(post.slug));
  const visual = landingVisuals[page.slug];

  // Avoid repeating the pricing question when a page already has a document-specific pricing answer.
  const pageHasPricingFaq = page.faq.some((item) =>
    item.question.toLocaleLowerCase("pt-BR").includes("quanto custa"),
  );
  const faqItems = [
    ...page.faq,
    ...pricingFaq.filter(
      (item) =>
        !pageHasPricingFaq ||
        !item.question.toLocaleLowerCase("pt-BR").includes("quanto custa"),
    ),
  ];

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
                <p className="mt-1 text-sm font-medium">Informações fiscais e documentos organizados em um só lugar.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1fr_340px] md:px-8 md:py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Preço transparente</p>
              <p className="mt-3 text-3xl font-bold">R$ 60,00</p>
              <p className="mt-1 text-sm text-muted-foreground">por CNPJ ativo no mês de uso</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Modelo pré-pago</p>
              <p className="mt-3 text-2xl font-bold">Você decide quando usar</p>
              <p className="mt-1 text-sm text-muted-foreground">Pagamento antecipado, sem fidelidade ou multa.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Recursos e organização</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Por que usar o EmitaGo?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Uma rotina de emissão mais organizada ajuda a reduzir retrabalho e facilita o acesso às informações fiscais do negócio.</p>
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
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Como funciona a emissão</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">O processo depende da configuração fiscal da empresa e das validações do ambiente autorizador.</p>
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
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Quem pode usar?</h2>
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

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="overflow-hidden rounded-3xl bg-foreground px-7 py-10 text-background md:px-12 md:py-14">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">EmitaGo • Emissão fiscal online</p>
                <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-4xl">Organize sua emissão fiscal sem complicar a rotina.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/70">R$ 60 pré-pagos por CNPJ ativo no mês de uso. Sem fidelidade e sem cobrança pelo uso nos meses em que você não ativar o CNPJ.</p>
              </div>
              <Link to="/" hash="planos" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 font-semibold text-foreground transition hover:opacity-90">Conhecer o EmitaGo <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
