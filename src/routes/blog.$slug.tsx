import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Sparkles,
  User,
} from "lucide-react";
import { blogPosts, getPostBySlug, type BlogSection } from "@/lib/blog-posts";

const WHATSAPP_URL =
  "https://wa.me/5554991193146?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20EmitaGo.";

const MONTHS: Record<string, number> = {
  jan: 1, janeiro: 1, feb: 2, fev: 2, fevereiro: 2, mar: 3, marco: 3, março: 3,
  apr: 4, abr: 4, abril: 4, may: 5, mai: 5, maio: 5, jun: 6, junho: 6,
  jul: 7, julho: 7, aug: 8, ago: 8, agosto: 8, sep: 9, set: 9, setembro: 9,
  oct: 10, out: 10, outubro: 10, nov: 11, novembro: 11, dec: 12, dez: 12, dezembro: 12,
};

function toIsoDate(dateLabel: string): string {
  const match = dateLabel.trim().match(/^(\d{1,2})\s+([\p{L}]+)\s+(\d{4})$/u);
  if (!match) throw new Error(`Data de publicação inválida: ${dateLabel}`);
  const day = Number(match[1]);
  const month = MONTHS[match[2].toLocaleLowerCase("pt-BR")];
  const year = Number(match[3]);
  if (!month) throw new Error(`Mês não reconhecido na data: ${dateLabel}`);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() !== month - 1 || parsed.getUTCDate() !== day) {
    throw new Error(`Data de publicação inválida: ${dateLabel}`);
  }
  return parsed.toISOString().slice(0, 10);
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const BASE_URL = "https://www.emitago.com.br";
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo não encontrado — Blog EmitaGo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `${BASE_URL}/blog/${params.slug}`;
    const image = post.image.startsWith("http") ? post.image : `${BASE_URL}${post.image}`;
    const publishedDate = toIsoDate(post.date);
    const modifiedDate = toIsoDate(post.updatedAt ?? post.date);
    const seoTitle = post.title.length <= 55 ? post.title + " | EmitaGo" : post.title;
    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: post.excerpt },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { name: "author", content: post.author },
        { name: "article:section", content: post.category },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: "EmitaGo" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: post.title },
        { property: "article:published_time", content: publishedDate },
        { property: "article:modified_time", content: modifiedDate },
        { property: "article:author", content: post.author },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: post.title },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL + "/" },
              { "@type": "ListItem", position: 2, name: "Blog Fiscal", item: BASE_URL + "/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: post.title,
            description: post.excerpt,
            image: [image],
            datePublished: publishedDate,
            dateModified: modifiedDate,
            author: {
              "@type": "Organization",
              name: post.author,
              url: BASE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "EmitaGo",
              url: BASE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/favicon-emita.svg`,
              },
            },
            articleSection: post.category,
            inLanguage: "pt-BR",
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            isPartOf: { "@id": "https://www.emitago.com.br/blog" },
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen grid place-items-center p-8" style={{ background: "var(--gradient-hero)" }}>
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl font-bold mb-3">Artigo não encontrado</h1>
        <p className="text-muted-foreground mb-6">O conteúdo que você procura não existe ou foi movido.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao blog
        </Link>
      </div>
    </div>
  );
}

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  // Connect informational searches to the matching commercial solution without
  // forcing unrelated certificate or general-interest articles into a sales path.
  const slug = post.slug.toLowerCase();
  const solutionCta = slug.includes("nfse")
    ? { href: "/solucoes/nfse", label: "Conheça o emissor de NFS-e", description: "Veja como organizar a emissão de notas de serviço e consulte a cobertura do seu município." }
    : slug.includes("nfce")
      ? { href: "/solucoes/nfce", label: "Conheça a solução de NFC-e", description: "Veja os recursos de emissão de cupom fiscal e PDV para o varejo." }
      : /nfe|cancelamento|carta-correcao|manifestacao/.test(slug)
        ? { href: "/solucoes/nfe", label: "Conheça o emissor de NF-e", description: "Veja como emitir NF-e de produtos e manter DANFE e XML organizados." }
        : /cte|mdfe|ciot|transporte|rntrc|damdfe|seguro-carga/.test(slug)
          ? { href: "/solucoes/cte", label: "Conheça as soluções para transporte", description: "Conheça os recursos para CT-e, CT-e OS e rotinas relacionadas ao transporte." }
          : null;

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-1.5 font-display text-xl font-bold">
            <img src="/logo%20transparente%20letra%20braca.png" alt="EmitaGo" width={160} height={48} className="w-36 sm:w-40 h-12 object-contain" />
          </Link>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao blog
          </Link>
        </nav>
      </header>

      {/* HEADER */}
      <article className="max-w-3xl mx-auto px-6 pt-14 pb-8">
        <Link to="/blog" className="text-xs uppercase tracking-[0.3em] text-accent hover:opacity-80 transition inline-flex items-center gap-2 mb-6">
          {post.category}
        </Link>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <User className="w-4 h-4" /> {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Publicado em {post.date}
          </span>
          {post.updatedAt && (
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Atualizado em {post.updatedAt}
            </span>
          )}
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> {post.readMin} min de leitura
          </span>
        </div>
      </article>

      {/* HERO IMAGE */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 glow-ring">
          <img
            src={post.image}
            alt={post.title}
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="w-full aspect-[16/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        {post.content.map((section: BlogSection, i: number) => (
          <SectionRenderer key={i} section={section} />
        ))}
      </article>

      {solutionCta && (
        <section className="max-w-3xl mx-auto px-6 pb-12" aria-label="Solução fiscal relacionada">
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Solução relacionada</p>
            <h2 className="mt-2 font-display text-2xl font-bold">{solutionCta.label}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{solutionCta.description}</p>
            <a
              href={solutionCta.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Ver solução <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div
          className="glass-card p-10 md:p-14 text-center relative overflow-hidden glow-ring"
          style={{ background: "linear-gradient(135deg, oklch(0.30 0.15 295 / 0.7), oklch(0.20 0.09 295 / 0.7))" }}
        >
          <div
            className="absolute inset-0 -z-10 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, oklch(0.7 0.25 305 / 0.6), transparent 60%), radial-gradient(circle at 70% 80%, oklch(0.75 0.2 60 / 0.4), transparent 55%)",
            }}
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Simplifique a sua <span className="gradient-text">emissão fiscal</span> hoje.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Emita todos os documentos fiscais em um único sistema — moderno, online e sem taxa por nota.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Começar agora <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-7 py-4 font-medium hover:bg-white/5 transition"
            >
              Emitir certificado digital
            </a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="mb-6">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Continue lendo</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Artigos relacionados</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/[0.03] hover:ring-primary-glow/40 hover:-translate-y-1 transition"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-widest text-white ring-1 ring-white/15">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold leading-tight line-clamp-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function SectionRenderer({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return <h2 className="font-display text-2xl md:text-3xl font-bold mt-10 mb-2">{section.text}</h2>;
    case "paragraph":
      return <p className="text-lg leading-relaxed text-foreground/90">{section.text}</p>;
    case "list":
      return (
        <ul className="space-y-2.5 pl-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/90 leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-glow shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="glass-card p-6 md:p-8 border-l-4 border-primary-glow/60">
          <p className="text-lg md:text-xl font-display italic leading-relaxed text-foreground">
            "{section.text}"
          </p>
          {section.cite && <cite className="not-italic mt-3 block text-sm text-muted-foreground">— {section.cite}</cite>}
        </blockquote>
      );
    case "image":
      return (
        <figure className="my-6">
          <img src={section.src} alt={section.alt} className="w-full rounded-2xl ring-1 ring-white/10" loading="lazy" decoding="async" />
          {section.caption && (
            <figcaption className="mt-2 text-sm text-muted-foreground text-center">{section.caption}</figcaption>
          )}
        </figure>
      );
    case "source":
      return (
        <p className="text-sm leading-relaxed">
          <a href={section.href} target="_blank" rel="noopener noreferrer" className="text-primary-glow underline underline-offset-4 hover:opacity-80">
            {section.label}
          </a>
        </p>
      );
  }
}
