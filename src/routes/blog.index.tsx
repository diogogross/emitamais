import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Clock,
  Calendar,
} from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Notas Fiscais, Transporte e Certificado Digital" },
      {
        name: "description",
        content:
          "Conteúdo prático sobre NFe, NFCe, CTe, MDFe e certificados digitais para empresas, transportadoras e contadores.",
      },
      { property: "og:title", content: "Blog do Emissor Fiscal" },
      {
        property: "og:description",
        content: "Guias, novidades e boas práticas para acelerar sua emissão fiscal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://volta-fiscal-art.lovable.app/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://volta-fiscal-art.lovable.app/blog" }],
  }),
  component: BlogPage,
});

const heroSlides = [
  {
    tag: "Notas Fiscais",
    title: "O que muda na emissão fiscal em 2026",
    desc: "Novas regras, integrações e o que sua empresa precisa ajustar para começar o ano em conformidade.",
    image: blogPosts[0].image,
  },
  {
    tag: "Transporte",
    title: "MDFe e CTe: a dupla que sua transportadora precisa dominar",
    desc: "Como integrar manifesto e conhecimento eletrônico para reduzir erros e evitar multas em fiscalização.",
    image: blogPosts[2].image,
  },
  {
    tag: "Certificado Digital",
    title: "Certificado digital 100% online: rápido, seguro e sem sair de casa",
    desc: "Guia atualizado para escolher entre A1, A3, token, cartão ou nuvem — com emissão por videoconferência.",
    image: blogPosts[4].image,
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "var(--gradient-hero)" }}>
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
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-14 pb-4">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Blog</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Conteúdo <span className="gradient-text">fiscal</span> que acelera sua operação.
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Guias, novidades e boas práticas sobre notas fiscais, transporte e certificado digital.
          </p>
        </div>
      </section>

      <BlogHeroSlider />

      <BlogList />
    </div>
  );
}

function BlogHeroSlider() {
  const [i, setI] = useState(0);
  const total = heroSlides.length;
  const go = (n: number) => setI((n + total) % total);
  const s = heroSlides[i];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="relative glass-card overflow-hidden glow-ring">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 max-w-3xl">
                <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-widest text-white ring-1 ring-white/15 mb-4">
                  {slide.tag}
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                  {slide.title}
                </h2>
                <p className="mt-3 text-white/85 md:text-lg max-w-2xl">{slide.desc}</p>
                <a
                  href="#posts"
                  className="mt-6 inline-flex self-start items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-accent-foreground hover:scale-[1.02] transition"
                  style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
                >
                  Ler artigos <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(i - 1)}
          aria-label="Slide anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-black/40 backdrop-blur ring-1 ring-white/15 text-white hover:bg-black/60 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => go(i + 1)}
          aria-label="Próximo slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-black/40 backdrop-blur ring-1 ring-white/15 text-white hover:bg-black/60 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 right-6 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-8 bg-primary-glow" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
      <span className="sr-only">{s.title}</span>
    </section>
  );
}

function BlogList() {
  const categories = ["Notas Fiscais", "Transporte", "Certificado Digital"] as const;

  return (
    <section id="posts" className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {categories.map((cat) => {
        const posts = blogPosts.filter((p) => p.category === cat);
        if (!posts.length) return null;
        return <CategoryRow key={cat} title={cat} posts={posts} />;
      })}
    </section>
  );
}

function CategoryRow({
  title,
  posts,
}: {
  title: string;
  posts: typeof blogPosts;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Categoria</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-muted-foreground">
            {posts.length} {posts.length === 1 ? "artigo" : "artigos"}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Ver artigos anteriores de ${title}`}
              onClick={() => scroll(-1)}
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-primary-glow/50 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label={`Ver próximos artigos de ${title}`}
              onClick={() => scroll(1)}
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-primary-glow/50 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative -mx-6 px-6 [mask-image:linear-gradient(90deg,transparent,#000_2%,#000_98%,transparent)]">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/[0.03] hover:ring-primary-glow/40 hover:-translate-y-1 transition shrink-0 snap-start w-[280px] sm:w-[340px] lg:w-[380px]"
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
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {p.readMin} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

