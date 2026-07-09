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

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo não encontrado — Blog Emissor Fiscal" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Blog Emissor Fiscal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.image },
        { name: "twitter:card", content: "summary_large_image" },
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
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <span
              className="w-8 h-8 rounded-lg grid place-items-center"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            Emissor Fiscal
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
            <Calendar className="w-4 h-4" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> {post.readMin} min de leitura
          </span>
        </div>
      </article>

      {/* HERO IMAGE */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 glow-ring">
          <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        {post.content.map((section, i) => (
          <SectionRenderer key={i} section={section} />
        ))}
      </article>

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
            <Link
              to="/"
              hash="planos"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Começar agora <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/certificado-digital"
              className="rounded-full border border-white/15 px-7 py-4 font-medium hover:bg-white/5 transition"
            >
              Emitir certificado digital
            </Link>
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
                    loading="lazy"
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
          <img src={section.src} alt={section.alt} className="w-full rounded-2xl ring-1 ring-white/10" loading="lazy" />
          {section.caption && (
            <figcaption className="mt-2 text-sm text-muted-foreground text-center">{section.caption}</figcaption>
          )}
        </figure>
      );
  }
}
