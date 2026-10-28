import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, FileText } from "lucide-react";
import { getSolutionBySlug } from "@/lib/solution-pages";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://emitago.com.br";

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
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: page.seoTitle },
        { name: "twitter:description", content: page.description },
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

function SolutionPage() {
  const { page } = Route.useLoaderData();
  const related = blogPosts.filter((post) => page.relatedSlugs.includes(post.slug));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <img src="/logo%20transparente%20letra%20braca.png" alt="EmitaGo" width={160} height={48} className="w-36 sm:w-40 h-12 object-contain" />
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-muted">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </nav>
      </header>

      <main>
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                <FileText className="h-4 w-4" /> Solução fiscal
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">{page.h1}</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">{page.intro}</p>
              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Preço pré-pago por CNPJ ativo</p>
                <p className="mt-2 text-3xl font-bold">R$ 60,00 <span className="text-base font-medium text-muted-foreground">por CNPJ / mês de uso</span></p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Pagamento antecipado para liberar o mês. Emissão ilimitada de notas no período pago para cada CNPJ ativo, sem fidelidade. Vários CNPJs podem ser gerenciados no mesmo painel, com cobrança individual.</p>
              </div>
              <Link to="/" hash="planos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90">
                Começar agora <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Por que usar o EmitaGo?</h2>
            <ul className="mt-7 space-y-4">
              {page.benefits.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>{item}</span></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold">Para quem é</h2>
            <ul className="mt-7 space-y-4">
              {page.audience.map((item) => <li key={item} className="rounded-xl border border-border/60 p-4">{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-display text-3xl font-bold">Como funciona</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {page.steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-border/60 bg-background p-5">
                  <span className="text-sm font-bold text-primary">0{index + 1}</span>
                  <p className="mt-3 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-bold">Perguntas frequentes</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[...page.faq, ...pricingFaq].map((item) => (
              <article key={item.question} className="rounded-2xl border border-border/60 p-6">
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="font-display text-3xl font-bold">Guias relacionados</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {related.map((post) => (
                <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="rounded-2xl border border-border/60 p-5 hover:border-primary transition">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  <h3 className="mt-2 font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
