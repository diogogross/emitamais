import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  FileText,
  Zap,
  ShieldCheck,
  Smartphone,
  Cloud,
  Repeat,
  CreditCard,
  Truck,
  Receipt,
  Store,
  FileSpreadsheet,
  Sparkles,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  KeyRound,
  Usb,
  HardDrive,
  Cpu,
  Building2,
  User,
  Shirt,
  Wrench,
  Croissant,
  Stethoscope,
  Plus,
  ShoppingCart,
  Briefcase,
  ClipboardList,
  Sprout,
  Route as RouteIcon,

} from "lucide-react";
import heroPerson from "@/assets/hero-person.webp";
import womanPointing from "@/assets/woman-pointing.png.asset.json";
import truckHero from "@/assets/truck-hero.png.asset.json";
import heroServicos from "@/assets/hero-servicos.png.asset.json";
import heroMaquininha from "@/assets/hero-maquininha.png.asset.json";
import heroProduto from "@/assets/hero-produto.png.asset.json";



import { blogPosts } from "@/lib/blog-posts";
import heroPerson2 from "@/assets/hero-person-2.webp";
import dashboardMock from "@/assets/dashboard-real.jpg";
import dashboardList from "@/assets/dashboard-list.jpg";
import certificadoMock from "@/assets/screens/certificado-mock.jpg";
import smartPos from "@/assets/smart-pos.webp";
import smartPosFrame from "@/assets/smart-pos-frame.jpg";
import brasilMap from "@/assets/brasil-map.webp";
import dashEmpresa from "@/assets/screens/dash-empresa.png";
import pdvScreen from "@/assets/screens/pdv.png";
import nfeScreen from "@/assets/screens/nfe.png";
import docNfe from "@/assets/docs/nfe.jpg";
import docNfce from "@/assets/docs/nfce.jpg";
import docNfse from "@/assets/docs/nfse.jpg";
import docCte from "@/assets/docs/cte.jpg";
import docMdfe from "@/assets/docs/mdfe.jpg";
import docNfpe from "@/assets/docs/nfpe.jpg";
import docCiot from "@/assets/docs/ciot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emissor Fiscal — NFe, NFCe, NFSe, CTe, MDFe e Certificado Digital" },
      {
        name: "description",
        content:
          "Plataforma 100% online para emissão de NFe, NFCe, NFSe, CTe, CTeOS, MDFe, NFPe e CIOT. Recebimentos integrados, API e conformidade automática com a SEFAZ.",
      },
      { property: "og:title", content: "Emissor Fiscal — Plataforma completa de emissão de notas" },
      {
        property: "og:description",
        content:
          "Um único sistema moderno para até 7 tipos de documentos fiscais. 100% online, com foco em operação.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://volta-fiscal-art.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://volta-fiscal-art.lovable.app/" },
      { rel: "preload", as: "image", href: heroPerson, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Emissor Fiscal",
          url: "https://volta-fiscal-art.lovable.app/",
        }),
      },
    ],
  }),
  component: Index,
});

const docTypes = [
  { name: "NFe", desc: "Nota Fiscal Eletrônica para venda de produtos, com envio direto à SEFAZ.", icon: FileText, image: docNfe },
  { name: "NFCe", desc: "PDV online integrado — cupom fiscal eletrônico para o varejo.", icon: ShoppingCart, image: docNfce },
  { name: "NFSe", desc: "Nota de serviço integrada com +1.600 municípios brasileiros.", icon: Briefcase, image: docNfse },
  { name: "CTe / CTeOS", desc: "Conhecimento de transporte para cargas e operações de serviço.", icon: Truck, image: docCte },
  { name: "MDFe", desc: "Manifesto eletrônico de documentos fiscais para o transporte.", icon: ClipboardList, image: docMdfe },
  { name: "NFPe", desc: "Nota fiscal do produtor rural, emissão simplificada e legalizada.", icon: Sprout, image: docNfpe },
  { name: "CIOT", desc: "Código Identificador da Operação de Transporte de cargas.", icon: RouteIcon, image: docCiot },
];


const features = [
  { icon: Zap, title: "Emissão em segundos", desc: "Fluxo otimizado, do cadastro à autorização SEFAZ." },
  { icon: ShieldCheck, title: "Conformidade garantida", desc: "Regras fiscais atualizadas automaticamente." },
  { icon: Smartphone, title: "100% responsivo", desc: "Celular, tablet ou desktop — mesma experiência." },
  { icon: CreditCard, title: "Recebimentos integrados", desc: "Pix, cartão e boleto direto no sistema." },
  { icon: Cloud, title: "Online em nuvem", desc: "Acesse de qualquer lugar, com backups automáticos." },
  { icon: Repeat, title: "Atualização legal automática", desc: "Sempre em conformidade com a SEFAZ." },
];

const planPerks = [
  "Todos os documentos fiscais (NFe, NFCe, NFSe, CTe, CTeOS, MDFe, NFPe, CIOT)",
  "Emissão de notas ilimitada",
  "Empresas ilimitadas",
  "PDV online integrado",
  "Integrações e API completa",
  "Recebimentos: Pix, cartão e boleto",
  "Atualização legal automática",
  "Suporte prioritário",
];

const testimonials = [
  {
    name: "Ricardo Menezes",
    role: "Sócio · Menezes Distribuidora",
    tag: "Emissor",
    quote: "Trocamos três sistemas por um só. Emitimos NFe e MDFe no mesmo lugar, e o suporte responde em minutos. Não voltaria atrás.",
  },
  {
    name: "Camila Duarte",
    role: "Contadora · Duarte Contábil",
    tag: "Emissor",
    quote: "Como escritório, eu precisava de multiempresas ilimitadas sem taxa por CNPJ. O Emissor Fiscal entrega isso — e o XML sai pronto pra minha contabilidade.",
  },
  {
    name: "Fernando Alves",
    role: "MEI · Alves Serviços",
    tag: "Certificado",
    quote: "Emiti meu Certificado Digital A1 PJ em 15 minutos, tudo por videoconferência. E ainda ganhei o primeiro mês do emissor. Combo perfeito.",
  },
  {
    name: "Juliana Prado",
    role: "Gerente Fiscal · Prado Logística",
    tag: "Emissor",
    quote: "Nossa operação de CTe e MDFe é pesada. O sistema aguenta o volume, integra com nosso ERP e nunca deixou nota travada com a SEFAZ.",
  },
  {
    name: "Marcos Bittencourt",
    role: "Diretor · Bitten Comércio",
    tag: "Certificado",
    quote: "Já perdi tempo demais com certificadora tradicional. Aqui é 100% online, sem sair da empresa, e o suporte me guiou passo a passo.",
  },
  {
    name: "Patrícia Nogueira",
    role: "Dona · Padaria da Praça",
    tag: "Emissor",
    quote: "Emito NFCe direto na Smart POS. Meu cliente recebe a nota no WhatsApp na mesma hora. Ficou muito mais profissional.",
  },
];


function Index() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll progress bar
    const bar = progressRef.current;
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = `scaleX(${pct})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal on scroll (IntersectionObserver)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -80px 0px" },
    );
    document
      .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]")
      .forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Scroll progress */}
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="w-8 h-8 rounded-lg grid place-items-center" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            Emissor Fiscal
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <div className="relative group">
              <button
                type="button"
                className="hover:text-foreground transition inline-flex items-center gap-1"
                aria-haspopup="true"
              >
                Emissor Fiscal
                <ChevronDown className="w-3.5 h-3.5 transition group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="min-w-[260px] rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl p-2">
                  {docTypes.map((d) => (
                    <a
                      key={d.name}
                      href="#documentos"
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-white/5 transition"
                    >
                      <span className="mt-0.5 shrink-0 w-8 h-8 rounded-lg grid place-items-center bg-white/5 ring-1 ring-white/10">
                        <d.icon className="w-4 h-4 text-primary-glow" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-foreground">{d.name}</span>
                        <span className="block text-xs text-muted-foreground line-clamp-1">{d.desc}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#certificado" className="hover:text-foreground transition">Certificado Digital</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
            <Link to="/blog" className="hover:text-foreground transition">Blog</Link>
          </div>

          <a
            href="#planos"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            Acessar sistema
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      {/* HERO SLIDER */}
      <HeroSlider />


      {/* CLIENTES marquee */}
      <section className="border-y border-white/5 py-10 overflow-hidden bg-black/20 -mt-16 md:-mt-28 relative z-10">
        <div className="text-center mb-6 px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Nossos clientes</div>
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Clientes que <span className="gradient-text">acreditam</span> no nosso potencial
          </h3>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-6 shrink-0">
                {[
                  { name: "Clínica VidaPlus", seg: "Saúde", color: "#2D9CDB", style: "font-bold" },
                  { name: "Borracharia RodaBoa", seg: "Automotivo", color: "#1F1F1F", style: "font-black italic" },
                  { name: "TransCargo Express", seg: "Transporte", color: "#E4002B", style: "font-black tracking-tight" },
                  { name: "Padaria Pão Dourado", seg: "Alimentação", color: "#B8730E", style: "italic font-bold" },
                  { name: "Mercadinho Bom Preço", seg: "Varejo", color: "#00A868", style: "font-bold lowercase" },
                  { name: "Auto Peças Turbo", seg: "Automotivo", color: "#E85A2C", style: "font-black" },
                  { name: "Farmácia Saúde+", seg: "Farmácia", color: "#00995D", style: "font-bold" },
                  { name: "Studio Bella", seg: "Beleza", color: "#C2185B", style: "italic font-semibold" },
                  { name: "Petshop Amigo Fiel", seg: "Pet", color: "#7B1FA2", style: "font-bold lowercase" },
                  { name: "Construtora Alicerce", seg: "Construção", color: "#F57C00", style: "font-black tracking-tight" },
                  { name: "Restaurante Sabor Real", seg: "Alimentação", color: "#D32F2F", style: "italic font-bold" },
                  { name: "Ótica VisãoMax", seg: "Ótica", color: "#1F3D8A", style: "font-semibold" },
                  { name: "Fazenda Boa Terra", seg: "Agro", color: "#3B7A22", style: "font-bold" },
                  { name: "Contabilidade Prisma", seg: "Serviços", color: "#0B3D91", style: "font-black lowercase" },
                  { name: "Distribuidora Sul", seg: "Atacado", color: "#004D40", style: "font-bold tracking-tight" },
                  { name: "Barbearia Navalha", seg: "Beleza", color: "#1F1F1F", style: "font-black italic" },
                ].map((b) => (
                  <div
                    key={b.name + i}
                    className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] ring-1 ring-black/5"
                  >
                    <span
                      className={`w-9 h-9 rounded-full grid place-items-center text-white font-display font-bold text-sm shrink-0`}
                      style={{ background: b.color }}
                    >
                      {b.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span
                        className={`font-display text-base ${b.style}`}
                        style={{ color: b.color }}
                      >
                        {b.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-black/50">{b.seg}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="section-light w-full" data-reveal="up">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold mb-12">
            O <span className="gradient-text">emissor fiscal</span> entende o seu <span className="font-extrabold">segmento</span> para você não ter limites
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            data-reveal-stagger
          >
            {[
              { icon: Truck, label: "Transportadora" },
              { icon: Shirt, label: "Moda e Vestuário" },
              { icon: Wrench, label: "Oficinas" },
              { icon: Store, label: "Comércio e Varejo" },
              { icon: Croissant, label: "Panificadora e Confeitaria" },
              { icon: Stethoscope, label: "Saúde e Clínicas" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card p-6 flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-[oklch(0.95_0.02_295)] grid place-items-center">
                  <s.icon className="w-7 h-7" style={{ color: "oklch(0.45 0.22 295)" }} />
                </div>
                <span className="text-sm font-medium leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <div className="glass-card px-6 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-current grid place-items-center opacity-70">
                <Plus className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Mais de 60 segmentos atendidos</span>
            </div>
          </div>
        </div>
      </section>



      {/* PRODUTO showcase */}
      <section id="produto" className="section-light section-connector w-full" data-reveal="up"><div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="glass-card p-2 glow-ring">
              <img
                src={dashboardMock}
                alt="Dashboard do sistema Emissor Fiscal"
                loading="lazy"
                width={1600}
                height={720}
                className="w-full rounded-xl"
              />
            </div>
            <div className="glass-card p-2 glow-ring mt-5 ml-8 md:ml-16 hidden sm:block">
              <img
                src={dashboardList}
                alt="Tela de listagem de notas fiscais do Emissor Fiscal"
                loading="lazy"
                width={1600}
                height={1008}
                className="w-full rounded-xl"
              />
            </div>
          </div>


          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">O produto</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Tecnologia completa com <span className="gradient-text">praticidade</span> em cada detalhe.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Um sistema modular e responsivo — construído para empresas e contadores que precisam de conformidade sem complexidade.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card p-5 hover:-translate-y-0.5 transition">
                  <div className="w-10 h-10 rounded-xl grid place-items-center mb-3" style={{ background: "var(--gradient-primary)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold">{title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></section>

      {/* DOCUMENTOS */}
      <section id="documentos" className="section-dark section-connector w-full" data-reveal="scale"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Documentos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Um único sistema para <span className="gradient-text">7 tipos</span> de documentos fiscais.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Emissão centralizada, integrada com SEFAZ e prefeituras. Do PDV ao transporte de cargas, tudo em uma plataforma.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Person on the left */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div
              className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-white/10"
              style={{
                background:
                  "radial-gradient(120% 90% at 30% 20%, oklch(0.55 0.28 300 / 0.55), transparent 60%), radial-gradient(120% 90% at 90% 100%, oklch(0.75 0.20 45 / 0.35), transparent 60%), linear-gradient(160deg, oklch(0.30 0.14 295), oklch(0.20 0.10 295))",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              {/* dotted grid backdrop */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(oklch(1 0 0 / 0.35) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* glowing arc */}
              <div
                className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-70"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div
                className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full blur-3xl opacity-60"
                style={{ background: "var(--gradient-accent)" }}
              />
              {/* concentric rings behind the subject */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] aspect-square rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] aspect-square rounded-full border border-white/10" />

              {/* subject */}
              <img
                src={womanPointing.url}
                alt="Especialista do Emissor Fiscal apresentando os tipos de documentos fiscais"
                loading="lazy"
                width={768}
                height={1024}
                className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain object-bottom drop-shadow-[0_30px_40px_rgba(120,60,255,0.45)]"
              />

              {/* corner tick marks */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/40 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/40 rounded-br-lg" />

              {/* floating chips */}
              <div className="hidden md:flex absolute top-6 left-6 items-center gap-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 px-3.5 py-2 text-xs font-medium text-white animate-float shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-primary-glow" /> Emissão em segundos
              </div>
              <div
                className="hidden md:flex absolute top-24 right-5 items-center gap-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 px-3.5 py-2 text-xs font-medium text-white animate-float shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-accent" /> SEFAZ autorizado
              </div>
              <div
                className="hidden md:flex absolute bottom-24 left-4 items-center gap-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 px-3.5 py-2 text-xs font-medium text-white animate-float shadow-lg"
                style={{ animationDelay: "2s" }}
              >
                <FileText className="w-3.5 h-3.5 text-primary-glow" /> 7 documentos fiscais
              </div>

              {/* bottom label */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 right-6 text-[10px] uppercase tracking-[0.3em] text-white/60">
                Especialista Emissor Fiscal
              </div>
            </div>
          </div>



          {/* Cards on the right */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {docTypes.map(({ name, desc, icon: Icon }, i) => (
                <article
                  key={name}
                  className="group relative overflow-hidden rounded-2xl p-5 md:p-6 ring-1 ring-white/10 bg-white/[0.03] hover:ring-primary-glow/50 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(120,60,255,0.35)] transition-all duration-300"
                >
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-40 group-hover:opacity-70 transition-opacity blur-3xl"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                  <span className="absolute top-3 right-4 font-display text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    0{i + 1}
                  </span>
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl grid place-items-center mb-4 ring-1 ring-white/15 group-hover:scale-110 transition-transform"
                      style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white leading-none">{name}</h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-3">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>




        <div className="mt-8 glass-card p-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Extras inclusos:</span> TEF, Multiempresas, IBPT automático, XML para contabilidade.
          </div>
          <a href="#planos" className="text-sm font-medium text-primary-glow inline-flex items-center gap-1 hover:gap-2 transition-all">
            Ver planos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div></section>

      {/* RECURSOS: responsive/mobile */}
      <section id="recursos" className="section-light section-connector w-full" data-reveal="left"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Multiplataforma</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Do PDV ao mobile — <span className="gradient-text">sem perder controle.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Dashboard da empresa, PDV e emissores móveis. Mesma experiência fluida em qualquer tela.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Dashboard em tempo real com métricas de emissão",
                "PDV completo com integração de meios de pagamento",
                "Cadastros simplificados de produtos, clientes e empresas",
                "Emissão em lote e envio automático por e-mail",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle at 60% 40%, oklch(0.7 0.25 305 / 0.4), transparent 65%)" }}
            />
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { label: "Dash Empresa", src: dashEmpresa },
                { label: "PDV", src: pdvScreen },
                { label: "NFe", src: nfeScreen },
              ].map(({ label, src }, i) => (
                <div
                  key={label}
                  className="glass-card p-2 flex flex-col animate-float overflow-hidden"
                  style={{ animationDelay: `${(i % 3) * 0.6}s` }}
                >
                  <div className="rounded-lg overflow-hidden ring-1 ring-white/10 bg-white/5">
                    <img
                      src={src}
                      alt={`Tela ${label} do sistema Emissor Fiscal`}
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1 pt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>{label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div></section>

      {/* SMART POS FRAME */}
      <section className="section-light w-full" data-reveal="up"><div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <figure className="glass-card p-3 md:p-4 glow-ring overflow-hidden">
          <img
            src={smartPosFrame}
            alt="Ilustração: vendedor emitindo NF-e direto do Smart POS"
            loading="lazy"
            width={1600}
            height={900}
            className="w-full rounded-xl"
          />
        </figure>
        <figcaption className="mt-8 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Smart POS</div>
          <h3 className="font-display text-3xl md:text-4xl font-bold">
            Venda direto na <span className="gradient-text">Smart POS</span>.
          </h3>
        </figcaption>
      </div></section>

      {/* SMART POS */}
      <section id="smartpos" className="section-dark section-connector w-full" data-reveal="right"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          {/* Device */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle at center, oklch(0.75 0.2 60 / 0.35), transparent 65%)" }}
            />
            <img
              src={smartPos}
              alt="Smart POS Android com sistema Emissor Fiscal rodando NFCe"
              width={780}
              height={1400}
              loading="lazy"
              className="relative w-full max-w-sm animate-float drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* Copy + logo grid */}
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Smart POS</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Venda direto na <span className="gradient-text">Smart POS</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Nosso sistema PDV (NFCe) está homologado com as principais adquirentes do mercado — recebimento imediato, na mesma tela da emissão.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "Vero", color: "#1F3D8A", style: "font-black italic tracking-tight" },
                { name: "Stone", color: "#00A868", style: "font-bold lowercase tracking-tight" },
                { name: "PagBank", color: "#0B8E4E", style: "font-semibold" },
                { name: "Mercado Pago", color: "#2D9CDB", style: "font-semibold" },
                { name: "Clover", color: "#149954", style: "font-semibold lowercase" },
                { name: "Rede Itaú", color: "#EE4D2D", style: "font-black lowercase tracking-tight" },
                { name: "Azulzinha", color: "#1F3D8A", style: "font-bold lowercase tracking-tight" },
                { name: "Bin Fiserv", color: "#E85A2C", style: "font-black lowercase" },
                { name: "Sicredi", color: "#00995D", style: "italic font-bold" },
                { name: "Getnet", color: "#E4002B", style: "font-black lowercase tracking-tight" },
                { name: "Cielo", color: "#003A70", style: "font-semibold lowercase" },
                { name: "SiPag", color: "#7BB53C", style: "font-black lowercase tracking-tight" },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="rounded-2xl bg-white aspect-[16/9] grid place-items-center px-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] ring-1 ring-black/5 hover:-translate-y-0.5 transition"
                >
                  <span
                    className={`font-display text-lg md:text-xl text-center leading-none ${brand.style}`}
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Homologado</span>
              em maquininhas Android com NFCe integrada.
              <a href="#planos" className="ml-auto font-medium text-primary-glow inline-flex items-center gap-1 hover:gap-2 transition-all">
                Quero minha Smart POS <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div></section>


      {/* CERTIFICADO DIGITAL */}
      <section id="certificado" className="section-light section-connector w-full" data-reveal="up"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="glass-card relative overflow-hidden p-10 md:p-14">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div
            className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "var(--gradient-accent)" }}
          />
          <div className="relative grid lg:grid-cols-[1.4fr_auto] gap-10 items-center">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4 flex items-center gap-2">
                <KeyRound className="w-3.5 h-3.5" /> Certificado Digital
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Seu <span className="gradient-text">certificado digital</span> pronto em minutos.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                A1, A3, CNPJ, CPF, NF e Bird ID — em token, cartão, leitora ou sem mídia. Emissão 100% online, com
                validação por videoconferência e suporte especializado do começo ao fim.
              </p>
              <div className="mt-6 inline-flex items-baseline gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">a partir de</span>
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="font-display text-3xl font-bold gradient-text leading-none">119,90</span>
              </div>
            </div>
            <Link
              to="/certificado-digital"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-accent-foreground hover:scale-[1.03] transition shrink-0"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Emitir agora
              <ArrowUpRight className="w-5 h-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div></section>



      {/* PLANOS */}
      <section id="planos" className="section-dark section-connector w-full" data-reveal="scale"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Planos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Preços que <span className="gradient-text">cabem no seu bolso.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Comece pequeno, escale sem trocar de sistema. Sem taxa de setup.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          <div
            className="relative glass-card p-8 md:p-10 flex flex-col glow-ring border-primary/40"
            style={{ background: "linear-gradient(180deg, oklch(0.35 0.15 300 / 0.5), oklch(0.22 0.09 295 / 0.5))" }}
          >
            <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-widest rounded-full px-3 py-1 font-semibold" style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}>
              Plano único
            </span>
            <div className="mt-3 font-display text-2xl font-bold">Emissor Fiscal</div>
            <p className="text-sm text-muted-foreground mt-1">Tudo incluso, sem limites nem surpresas.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="font-display text-6xl font-bold">60</span>
              <span className="text-sm text-muted-foreground">,00 /mês</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm flex-1">
              {planPerks.map((perk) => (
                <li key={perk} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary-glow mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{perk}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Assinar agora
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div
            className="relative glass-card p-8 md:p-10 flex flex-col glow-ring border-primary/40"
            style={{ background: "linear-gradient(180deg, oklch(0.35 0.15 300 / 0.5), oklch(0.22 0.09 295 / 0.5))" }}
          >
            <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-widest rounded-full px-3 py-1 font-semibold" style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}>
              Combo
            </span>
            <div className="mt-3 font-display text-2xl font-bold">Certificado Digital A1</div>
            <p className="text-sm text-muted-foreground mt-1">PJ ou PF, emissão 100% online em minutos.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">a partir de R$</span>
              <span className="font-display text-6xl font-bold">119</span>
              <span className="text-sm text-muted-foreground">,90</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm flex-1">
              {[
                "Certificado Digital A1 PJ ou PF",
                "Ganhe o 1º mês grátis do Emissor Fiscal",
                "Validade de 12 meses",
                "Emissão 100% online, sem sair de casa",
                "Compatível com NFe, NFCe, NFSe, CTe e MDFe",
                "Suporte especializado na instalação",
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary-glow mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{perk}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/certificado-digital"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Adquirir certificado
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>



      </div></section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="section-dark section-connector w-full" data-reveal="up"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Depoimentos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Quem usa, <span className="gradient-text">recomenda.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Empresas e profissionais que aceleraram sua rotina fiscal com o Emissor e o Certificado Digital.
          </p>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="testimonials-track flex gap-5">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="glass-card p-6 md:p-7 w-[320px] md:w-[380px] shrink-0 flex flex-col"
              >
                <div className="flex items-center gap-1 text-primary-glow mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm md:text-[15px] text-foreground/90 leading-relaxed flex-1">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full grid place-items-center font-display font-bold text-white shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {t.name.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-foreground truncate">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{t.role}</div>
                  </div>
                  <span className="ml-auto text-[10px] uppercase tracking-widest rounded-full px-2.5 py-1 bg-white/5 ring-1 ring-white/10 text-primary-glow shrink-0">
                    {t.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div></section>


      <section id="numeros" className="section-light section-connector w-full" data-reveal="left"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="glass-card p-8 md:p-14 grid lg:grid-cols-[1fr_1fr] gap-10 items-center relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-40"
            style={{ background: "radial-gradient(circle at 20% 30%, oklch(0.7 0.25 305 / 0.35), transparent 60%)" }}
          />
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Nossa força em números</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Resultados que comprovam nossa <span className="gradient-text">solidez</span> no mercado.
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "Todos", label: "estados do Brasil" },
                { value: "+1.000", label: "cidades atendidas" },
                { value: "+5", label: "anos de experiência" },
                { value: "+500", label: "parceiros ativos" },
                { value: "+R$280MM", label: "em notas emitidas/mês" },
                { value: "+15.000", label: "empresas atendidas" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:-translate-y-0.5 transition">
                  <div className="font-display text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-70"
              style={{ background: "radial-gradient(circle at center, oklch(0.7 0.25 305 / 0.45), transparent 65%)" }}
            />
            <img
              src={brasilMap}
              alt="Mapa do Brasil com presença do Emissor Fiscal em todos os estados"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full max-w-lg mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div></section>

      {/* BLOG */}
      <section id="blog" className="section-dark section-connector w-full" data-reveal="up"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Blog</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Aprenda <span className="gradient-text">com quem entende</span> de fiscal.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Guias práticos sobre notas fiscais, transporte e certificado digital — direto ao ponto.
            </p>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            Ver todos os artigos
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {blogPosts.slice(0, 5).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/[0.03] hover:ring-primary-glow/40 hover:-translate-y-1 transition"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-widest text-white ring-1 ring-white/15">
                  {p.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-bold text-white leading-tight line-clamp-3">
                    {p.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-white/70">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readMin} min</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground hover:scale-[1.02] transition"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Acessar o blog completo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div></section>



      {/* FAQ */}
      <section id="faq" className="section-light section-connector w-full" data-reveal="right"><div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Perguntas frequentes</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Tudo o que você precisa <span className="gradient-text">saber.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Duas colunas, duas soluções. Encontre respostas sobre o Emissor Fiscal e o Certificado Digital.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {[
            {
              title: "Emissor Fiscal",
              subtitle: "Sistema de emissão de notas",
              items: [
                { q: "O Emissor Fiscal funciona para qualquer segmento?", a: "Sim. Atendemos comércio, serviços, indústria, transporte e produtor rural — emitindo NFe, NFCe, NFSe, CTe, CTeOS, MDFe, NFPe e CIOT em um único sistema." },
                { q: "Preciso instalar algum programa?", a: "Não. O sistema é 100% online e roda no navegador — desktop, tablet ou celular. Também rodamos em maquininhas Smart POS Android homologadas." },
                { q: "Quantas notas e empresas posso emitir?", a: "Notas fiscais e empresas ilimitadas, todas incluídas no plano único de R$ 60/mês. Sem taxa por documento e sem taxa de setup." },
                { q: "Vocês atendem NFSe da minha cidade?", a: "Estamos integrados com mais de 1.600 municípios brasileiros. Consulte sua cidade com nosso time — novas prefeituras entram semanalmente." },
                { q: "Como funciona o suporte?", a: "Suporte prioritário por chat, e-mail e WhatsApp, com time especialista em legislação fiscal. Também mantemos base de conhecimento e vídeos de treinamento." },
                { q: "Consigo integrar com meu ERP ou e-commerce?", a: "Sim. Oferecemos API REST completa e webhooks para integrar com ERPs, e-commerces, marketplaces e sistemas próprios." },
              ],
            },
            {
              title: "Certificado Digital",
              subtitle: "A1 e A3 · PJ, PF, NF e Bird ID",
              items: [
                { q: "Qual a diferença entre A1 e A3?", a: "O A1 é um arquivo digital instalado no computador, com validade de 1 ano. O A3 fica armazenado em token, cartão ou nuvem (Bird ID) e pode ter validade de 1 a 3 anos." },
                { q: "Preciso ir até um posto para emitir?", a: "Não. A emissão é 100% online, com validação por videoconferência. Você só precisa de webcam, documentos em mãos e cerca de 15 minutos." },
                { q: "Quanto tempo demora para receber?", a: "Após a validação, o certificado A1 é instalado na hora. Para modelos A3 com mídia física (token ou cartão), o envio leva de 3 a 7 dias úteis." },
                { q: "Quais documentos preciso apresentar?", a: "Para PJ: contrato social, CNPJ e documento do titular. Para PF: RG, CPF e comprovante de endereço. Todos digitalizados e apresentados por videoconferência." },
                { q: "O certificado funciona com qualquer sistema?", a: "Sim. É aceito por SEFAZ, Receita Federal, e-CAC, prefeituras, bancos, tribunais e todos os principais sistemas fiscais e contábeis do país." },
                { q: "E se eu comprar o certificado com o Emissor?", a: "Ao adquirir o Certificado A1 PJ ou PF, você ganha o primeiro mês do Emissor Fiscal sem custo. Combo perfeito para começar a emitir na hora." },
              ],
            },
          ].map((col) => (
            <div key={col.title} className="flex flex-col">
              <div className="mb-5 flex items-baseline gap-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold">{col.title}</h3>
                <span className="text-xs text-muted-foreground">{col.subtitle}</span>
              </div>
              <div className="space-y-3 flex-1">
                {col.items.map((item) => (
                  <details key={item.q} className="glass-card px-6 py-5 group open:pb-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                      <span className="font-display text-base md:text-lg font-semibold text-foreground">{item.q}</span>
                      <span className="w-8 h-8 rounded-full grid place-items-center border border-white/15 bg-white/5 text-primary-glow transition group-open:rotate-45 shrink-0">
                        <span className="text-lg leading-none">+</span>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div></section>




      {/* CTA */}
      <section className="section-dark section-connector w-full" data-reveal="scale"><div className="max-w-7xl mx-auto px-6 py-24">
        <div
          className="glass-card p-10 md:p-16 text-center relative overflow-hidden glow-ring"
          style={{ background: "linear-gradient(135deg, oklch(0.30 0.15 295 / 0.7), oklch(0.20 0.09 295 / 0.7))" }}
        >
          <div
            className="absolute inset-0 -z-10 opacity-40"
            style={{ background: "radial-gradient(circle at 30% 20%, oklch(0.7 0.25 305 / 0.6), transparent 60%), radial-gradient(circle at 70% 80%, oklch(0.75 0.2 60 / 0.4), transparent 55%)" }}
          />
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
            Pronto para modernizar <span className="gradient-text">sua emissão fiscal?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
            Fale com nosso time e descubra como o Emissor Fiscal pode acelerar sua operação.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Começar agora <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#" className="rounded-full border border-white/15 px-7 py-4 font-medium hover:bg-white/5 transition">
              Falar com especialista
            </a>
          </div>
        </div>
      </div></section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-semibold text-foreground">
            <span className="w-6 h-6 rounded-md grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
              <Sparkles className="w-3 h-3 text-white" />
            </span>
            Emissor Fiscal
          </div>
          <div>© {new Date().getFullYear()} Emissor Fiscal. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Termos</a>
            <a href="#" className="hover:text-foreground">Privacidade</a>
            <a href="#" className="hover:text-foreground">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroSlider() {
  const slides = [0, 1, 2, 3, 4, 5];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <section
      className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        {i === 0 ? <HeroSlide1 /> : i === 1 ? <HeroSlide2 /> : i === 2 ? <HeroSlide3 /> : i === 3 ? <HeroSlide4 /> : i === 4 ? <HeroSlide5 /> : <HeroSlide6 />}


        {/* Controls */}
        <button
          type="button"
          onClick={() => go(i - 1)}
          aria-label="Slide anterior"
          className="hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 place-items-center rounded-full bg-white/5 backdrop-blur ring-1 ring-white/15 text-white hover:bg-white/10 transition z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => go(i + 1)}
          aria-label="Próximo slide"
          className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 place-items-center rounded-full bg-white/5 backdrop-blur ring-1 ring-white/15 text-white hover:bg-white/10 transition z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-10 bg-primary-glow" : "w-2.5 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSlide1() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center animate-fade-in">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Plataforma completa de emissão fiscal
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
          A tecnologia fiscal <span className="gradient-text">que acelera</span> a sua operação.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Emita NFe, NFCe, NFSe, CTe, CTeOS e MDFe em um único sistema — moderno e 100% online. Menos burocracia, mais operação.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#planos"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Conferir planos
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#produto" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
            Ver o produto <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          {[
            ["+1.600", "municípios NFSe"],
            ["7", "documentos fiscais"],
            ["99.9%", "uptime SEFAZ"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <div className="font-display text-3xl font-bold gradient-text">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-70 animate-pulse-glow"
          style={{ background: "radial-gradient(circle at center, oklch(0.7 0.25 305 / 0.6), transparent 60%)" }}
        />
        <img
          src={heroPerson}
          alt="Empresário usando o Emissor Fiscal em um notebook"
          width={1200}
          height={1408}
          fetchPriority="high"
          decoding="async"
          className="relative w-full max-w-xl mx-auto"
        />
        <div className="hidden md:flex glass-card animate-float absolute top-16 left-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring">
          <FileText className="w-3.5 h-3.5 text-primary-glow" /> NFe emitida em 1,2s
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-24 right-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "1s" }}>
          <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Autorizado pela SEFAZ
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-0 left-8 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "2s" }}>
          <CreditCard className="w-3.5 h-3.5 text-primary-glow" /> Pix + Cartão + Boleto
        </div>
      </div>
    </div>
  );
}

function HeroSlide2() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center animate-fade-in">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Certificado Digital A1 e A3
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
          Seu certificado digital <span className="gradient-text">pronto em minutos.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          CNPJ, CPF, NF e Bird ID — em token, cartão, leitora ou sem mídia. Emissão 100% online, com validação por videoconferência e suporte especializado.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/certificado-digital"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Emitir agora
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link to="/certificado-digital" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
            Ver todos os modelos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          {[
            ["+1.600", "municípios NFSe"],
            ["7", "documentos fiscais"],
            ["99.9%", "uptime SEFAZ"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <div className="font-display text-3xl font-bold gradient-text">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-70 animate-pulse-glow"
          style={{ background: "radial-gradient(circle at center, oklch(0.7 0.25 305 / 0.6), transparent 60%)" }}
        />
        <img
          src={heroPerson2}
          alt="Consultora apresentando certificado digital no smartphone"
          loading="lazy"
          width={1200}
          height={1408}
          className="relative w-full max-w-xl mx-auto"
        />
        <div className="hidden md:flex glass-card animate-float absolute top-16 left-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring">
          <KeyRound className="w-3.5 h-3.5 text-primary-glow" /> A1 · A3 disponíveis
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-24 right-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "1s" }}>
          <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Emissão 100% online
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-0 left-8 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "2s" }}>
          <Cpu className="w-3.5 h-3.5 text-primary-glow" /> CNPJ · CPF · Bird ID
        </div>
      </div>
    </div>
  );
}

function HeroSlide3() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center animate-fade-in">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Documentos de transporte
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
          Sua transportadora <span className="gradient-text">sem nota travada.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          CTe, MDFe e CIOT emitidos em segundos, integrados com SEFAZ e ANTT. Um único sistema para toda a operação de cargas.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#planos"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Começar agora
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#documentos" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
            Ver documentos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          {[
            ["CTe", "conhecimento de transporte"],
            ["MDFe", "manifesto eletrônico"],
            ["CIOT", "operação de cargas"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <div className="font-display text-3xl font-bold gradient-text">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-70 animate-pulse-glow"
          style={{ background: "radial-gradient(circle at center, oklch(0.7 0.25 305 / 0.6), transparent 60%)" }}
        />
        <img
          src={truckHero.url}
          alt="Carreta de transportadora emitindo CTe, MDFe e CIOT pelo Emissor Fiscal"
          loading="lazy"
          width={1200}
          height={1024}
          className="relative w-full max-w-xl mx-auto animate-float"
        />
        <div className="hidden md:flex glass-card animate-float absolute top-16 left-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring">
          <Truck className="w-3.5 h-3.5 text-primary-glow" /> CTe autorizado em 1,5s
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-24 right-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "1s" }}>
          <ClipboardList className="w-3.5 h-3.5 text-accent" /> MDFe integrado
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-0 left-8 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "2s" }}>
          <RouteIcon className="w-3.5 h-3.5 text-primary-glow" /> CIOT emitido
        </div>
      </div>
    </div>
  );
}

function HeroSlide4() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center animate-fade-in">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Nota Fiscal de Serviços
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
          NFSe integrada com <span className="gradient-text">+1.600 municípios.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Emita nota de serviço da sua cidade em segundos. Integração direta com a prefeitura, sem precisar acessar portal externo.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#planos"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Emitir NFSe agora
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#documentos" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
            Ver documentos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          {[
            ["+1.600", "municípios integrados"],
            ["100%", "online"],
            ["1 clique", "envio à prefeitura"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <div className="font-display text-3xl font-bold gradient-text">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-70 animate-pulse-glow"
          style={{ background: "radial-gradient(circle at center, oklch(0.7 0.25 305 / 0.6), transparent 60%)" }}
        />
        <img
          src={heroServicos.url}
          alt="Prestadora de serviços emitindo NFSe pelo Emissor Fiscal"
          loading="lazy"
          width={900}
          height={1024}
          className="relative w-full max-w-xl mx-auto"
        />
        <div className="hidden md:flex glass-card animate-float absolute top-16 left-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring">
          <Briefcase className="w-3.5 h-3.5 text-primary-glow" /> NFSe emitida
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-24 right-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "1s" }}>
          <Building2 className="w-3.5 h-3.5 text-accent" /> Prefeitura integrada
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-0 left-8 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "2s" }}>
          <FileText className="w-3.5 h-3.5 text-primary-glow" /> XML + PDF automáticos
        </div>
      </div>
    </div>
  );
}

function HeroSlide5() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center animate-fade-in">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Cupom fiscal na maquininha
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
          NFCe direto da <span className="gradient-text">sua maquininha.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Venda, receba e emita o cupom fiscal na mesma tela. Homologado com as principais adquirentes Android — sem PDV extra.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#planos"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Testar na maquininha
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#documentos" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
            Ver documentos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          {[
            ["Android", "smart POS"],
            ["Pix", "cartão e boleto"],
            ["WhatsApp", "envio automático"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <div className="font-display text-3xl font-bold gradient-text">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-70 animate-pulse-glow"
          style={{ background: "radial-gradient(circle at center, oklch(0.7 0.25 305 / 0.6), transparent 60%)" }}
        />
        <img
          src={heroMaquininha.url}
          alt="Maquininha Android emitindo NFCe pelo Emissor Fiscal"
          loading="lazy"
          width={900}
          height={1024}
          className="relative w-full max-w-md mx-auto animate-float"
        />
        <div className="hidden md:flex glass-card animate-float absolute top-16 left-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring">
          <ShoppingCart className="w-3.5 h-3.5 text-primary-glow" /> NFCe emitida
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-24 right-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "1s" }}>
          <CreditCard className="w-3.5 h-3.5 text-accent" /> Pagamento integrado
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-0 left-8 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "2s" }}>
          <Smartphone className="w-3.5 h-3.5 text-primary-glow" /> Android smart POS
        </div>
      </div>
    </div>
  );
}

function HeroSlide6() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center animate-fade-in">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Nota Fiscal de Produto
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
          NFe autorizada em <span className="gradient-text">segundos.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Emissão de Nota Fiscal Eletrônica para venda de produtos, com envio direto à SEFAZ, XML pronto para a contabilidade e DANFE em PDF.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#planos"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Emitir NFe agora
            <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#documentos" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
            Ver documentos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          {[
            ["1,2s", "por autorização"],
            ["XML", "para contabilidade"],
            ["DANFE", "em PDF"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <div className="font-display text-3xl font-bold gradient-text">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-70 animate-pulse-glow"
          style={{ background: "radial-gradient(circle at center, oklch(0.7 0.25 305 / 0.6), transparent 60%)" }}
        />
        <img
          src={heroProduto.url}
          alt="Comerciante emitindo NFe de produto no Emissor Fiscal"
          loading="lazy"
          width={900}
          height={1024}
          className="relative w-full max-w-xl mx-auto"
        />
        <div className="hidden md:flex glass-card animate-float absolute top-16 left-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring">
          <FileText className="w-3.5 h-3.5 text-primary-glow" /> NFe emitida em 1,2s
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-24 right-0 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "1s" }}>
          <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Autorizada pela SEFAZ
        </div>
        <div className="hidden md:flex glass-card animate-float absolute bottom-0 left-8 items-center gap-2 px-3 py-2 text-xs font-medium glow-ring" style={{ animationDelay: "2s" }}>
          <Store className="w-3.5 h-3.5 text-primary-glow" /> Ideal para o varejo
        </div>
      </div>
    </div>
  );
}





