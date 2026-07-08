import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import heroPerson from "@/assets/hero-person.png";
import dashboardMock from "@/assets/dashboard-mock.jpg";
import smartPos from "@/assets/smart-pos.png";
import brasilMap from "@/assets/brasil-map.png";
import dashEmpresa from "@/assets/screens/dash-empresa.png";
import pdvScreen from "@/assets/screens/pdv.png";
import nfeScreen from "@/assets/screens/nfe.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const docTypes = [
  { name: "NFe", desc: "Nota Fiscal Eletrônica", icon: FileText },
  { name: "NFCe", desc: "PDV Online integrado", icon: Store },
  { name: "NFSe", desc: "+1.600 municípios", icon: Receipt },
  { name: "CTe / CTeOS", desc: "Transporte de cargas", icon: Truck },
  { name: "MDFe", desc: "Manifesto eletrônico", icon: FileSpreadsheet },
  { name: "NFPe", desc: "Produtor rural", icon: Sparkles },
  { name: "CIOT", desc: "Operações de transporte", icon: FileSpreadsheet },
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


function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="w-8 h-8 rounded-lg grid place-items-center" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            Emissor Fiscal
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#produto" className="hover:text-foreground transition">Produto</a>
            <a href="#documentos" className="hover:text-foreground transition">Documentos</a>
            <a href="#recursos" className="hover:text-foreground transition">Recursos</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
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

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
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
              className="relative w-full max-w-xl mx-auto"
            />
            {/* floating chips */}
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
      </section>

      {/* MARQUEE / trust */}
      <section className="border-y border-white/5 py-6 overflow-hidden bg-black/10">
        <div className="flex gap-16 animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.3em] text-muted-foreground/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              {["SEFAZ integrado", "100% Cloud", "API aberta", "Multiempresas", "Suporte 24/7", "LGPD compliant", "IBPT automático", "Backups automáticos"].map((t) => (
                <span key={t + i} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary-glow" /> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTO showcase */}
      <section id="produto" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="glass-card p-2 glow-ring">
              <img
                src={dashboardMock}
                alt="Dashboard do sistema emissor de notas fiscais"
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
      </section>

      {/* DOCUMENTOS */}
      <section id="documentos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Documentos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Um único sistema para <span className="gradient-text">7 tipos</span> de documentos fiscais.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Emissão centralizada, integrada com SEFAZ e prefeituras. Do PDV ao transporte de cargas, tudo em uma plataforma.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {docTypes.map(({ name, desc, icon: Icon }, i) => (
            <div
              key={name}
              className="glass-card p-6 relative overflow-hidden group hover:border-primary-glow/40 transition"
            >
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl grid place-items-center mb-4 border border-white/10 bg-white/5">
                    <Icon className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div className="font-display text-2xl font-bold">{name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
                <span className="text-xs text-muted-foreground/60 font-mono">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card p-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Extras inclusos:</span> TEF, Multiempresas, IBPT automático, XML para contabilidade.
          </div>
          <a href="#planos" className="text-sm font-medium text-primary-glow inline-flex items-center gap-1 hover:gap-2 transition-all">
            Ver planos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* RECURSOS: responsive/mobile */}
      <section id="recursos" className="max-w-7xl mx-auto px-6 py-24">
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
      </section>

      {/* SMART POS */}
      <section id="smartpos" className="max-w-7xl mx-auto px-6 py-24">
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
      </section>




      {/* PLANOS */}
      <section id="planos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Planos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Preços que <span className="gradient-text">cabem no seu bolso.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Comece pequeno, escale sem trocar de sistema. Sem taxa de setup.
          </p>
        </div>

        <div className="mt-14 max-w-lg mx-auto">
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
        </div>

      </section>

      {/* NÚMEROS + MAPA */}
      <section id="numeros" className="max-w-7xl mx-auto px-6 py-24">
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
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Perguntas frequentes</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Tudo o que você precisa <span className="gradient-text">saber.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ainda com dúvidas? Fale com nosso time — respondemos em minutos.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {[
            { q: "O Emissor Fiscal funciona para qualquer segmento?", a: "Sim. Atendemos comércio, serviços, indústria, transporte e produtor rural — emitindo NFe, NFCe, NFSe, CTe, CTeOS, MDFe, NFPe e CIOT em um único sistema." },
            { q: "Preciso instalar algum programa?", a: "Não. O sistema é 100% online e roda no navegador — desktop, tablet ou celular. Também rodamos em maquininhas Smart POS Android homologadas." },
            { q: "Quantas notas e empresas posso emitir?", a: "Notas fiscais e empresas ilimitadas, todas incluídas no plano único de R$ 60/mês. Sem taxa por documento e sem taxa de setup." },
            { q: "Vocês atendem NFSe da minha cidade?", a: "Estamos integrados com mais de 1.600 municípios brasileiros. Consulte sua cidade com nosso time — novas prefeituras entram semanalmente." },
            { q: "Como funciona o suporte?", a: "Suporte prioritário por chat, e-mail e WhatsApp, com time especialista em legislação fiscal. Também mantemos base de conhecimento e vídeos de treinamento." },
            { q: "Consigo integrar com meu ERP ou e-commerce?", a: "Sim. Oferecemos API REST completa e webhooks para integrar com ERPs, e-commerces, marketplaces e sistemas próprios." },
          ].map((item) => (
            <details key={item.q} className="glass-card px-6 py-5 group open:pb-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-display text-lg font-semibold text-foreground">{item.q}</span>
                <span className="w-8 h-8 rounded-full grid place-items-center border border-white/15 bg-white/5 text-primary-glow transition group-open:rotate-45">
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>



      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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
      </section>

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
