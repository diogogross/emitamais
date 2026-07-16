import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  KeyRound,
  Building2,
  User,
  Video,
  ShieldCheck,
  Check,
  Zap,
  Clock,
  Lock,
  Wifi,
  Target,
} from "lucide-react";
import logoEmissor from "@/assets/logo-emissor-fiscal.png.asset.json";

export const Route = createFileRoute("/certificado-digital")({
  head: () => ({
    meta: [
      { title: "Certificado Digital A1 CPF e CNPJ por R$ 129,90 — Emissor Fiscal" },
      {
        name: "description",
        content:
          "Certificado Digital A1 para CPF ou CNPJ por R$ 129,90. Emissão 100% online por videoconferência, sem sair de casa, sem token, sem cartão, sem burocracia.",
      },
      { property: "og:title", content: "Certificado Digital A1 por R$ 129,90 — 100% online" },
      {
        property: "og:description",
        content:
          "A1 CPF ou CNPJ, 12 meses de validade. Emitido em minutos por videochamada. Chega de token quebrado, chega de cartório.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificadoDigital,
});

const models = [
  {
    tag: "Pessoa Jurídica",
    title: "A1 CNPJ",
    subtitle: "Para sua empresa, MEI ou escritório contábil.",
    icon: Building2,
    accent: "var(--gradient-primary)",
    bullets: [
      "Emissão de NFe, NFCe, NFSe, CTe e MDFe",
      "Assinatura de contratos e procurações",
      "Acesso ao e-CAC, SEFAZ e prefeituras",
      "Instala em qualquer computador, sem token",
    ],
  },
  {
    tag: "Pessoa Física",
    title: "A1 CPF",
    subtitle: "Para você, autônomo, profissional ou MEI.",
    icon: User,
    accent: "linear-gradient(135deg, oklch(0.7 0.22 260), oklch(0.78 0.18 305))",
    bullets: [
      "Assinatura de documentos com validade jurídica",
      "Acesso ao portal e-CAC e Receita Federal",
      "Login no Gov.br em nível ouro",
      "Envio de declarações e recibos digitais",
    ],
  },
];

const steps = [
  { icon: Target, title: "1. Escolha", desc: "CPF ou CNPJ. Um preço, um modelo, zero enrolação." },
  { icon: Video, title: "2. Videochamada", desc: "Validação em minutos com um agente credenciado, direto do seu celular." },
  { icon: Zap, title: "3. Pronto", desc: "Arquivo A1 liberado na hora, pronto para emitir nota e assinar tudo." },
];

const objections = [
  { icon: Lock, title: "Chega de token perdido", desc: "A1 é arquivo digital. Instala no PC e acabou. Sem USB, sem leitora, sem drama." },
  { icon: Clock, title: "Chega de fila em cartório", desc: "Videoconferência do sofá. Não precisa sair de casa, não precisa reconhecer firma." },
  { icon: Wifi, title: "Chega de sistema fora do ar", desc: "Emissão direta pelo Emissor Fiscal — se der problema, a gente resolve por você." },
  { icon: ShieldCheck, title: "Chega de sustos com validade", desc: "Avisamos com antecedência quando renovar. Você nunca mais perde o prazo." },
];

function CertificadoDigital() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold">
            <img src={logoEmissor.url} alt="Emissor Fiscal" width={36} height={36} className="w-9 h-9 object-contain drop-shadow-[0_4px_12px_rgba(139,92,246,0.5)]" />
            <span>Emissor <span className="gradient-text">Fiscal</span></span>
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-14">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4 flex items-center gap-2">
              <KeyRound className="w-3.5 h-3.5" /> Certificado Digital A1
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.02]">
              Seu <span className="gradient-text">certificado A1</span> em minutos.
              <br />
              Sem token. Sem cartório. Sem desculpa.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A1 para CPF ou CNPJ por <strong className="text-foreground">R$ 129,90</strong>, com 12 meses de validade e
              emissão 100% online por videochamada. Você entra na reunião com o RG na mão e sai com o certificado
              instalado — do sofá, do escritório, de onde estiver.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#emitir"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-accent-foreground hover:scale-[1.02] transition"
                style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
              >
                Quero emitir agora <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Video className="w-4 h-4 text-primary-glow" /> Validação por videoconferência
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-primary-glow" /> ICP-Brasil</span>
              <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-primary-glow" /> Aceito pela Receita, SEFAZ e prefeituras</span>
              <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-primary-glow" /> Suporte na instalação incluso</span>
            </div>
          </div>

          {/* PRICE CARD */}
          <div
            className="relative glass-card p-8 md:p-10 glow-ring border-primary/40"
            style={{ background: "linear-gradient(180deg, oklch(0.35 0.15 300 / 0.55), oklch(0.22 0.09 295 / 0.55))" }}
          >
            <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-widest rounded-full px-3 py-1 font-semibold" style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}>
              Preço único
            </span>
            <div className="mt-3 font-display text-2xl font-bold">Certificado A1</div>
            <p className="text-sm text-muted-foreground mt-1">CPF ou CNPJ, você escolhe.</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="font-display text-7xl font-bold leading-none">129</span>
              <span className="text-lg text-muted-foreground">,90</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">pagamento único · 12 meses de validade</div>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                "A1 CPF ou CNPJ (você escolhe)",
                "Emissão por videochamada em minutos",
                "12 meses de validade",
                "Arquivo digital — sem token, sem cartão",
                "Compatível com NFe, NFCe, NFSe, CTe e MDFe",
                "Suporte especializado na instalação",
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary-glow mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{perk}</span>
                </li>
              ))}
            </ul>

            <a
              href="#emitir"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Emitir por R$ 129,90 <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Nossa missão</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Acabar com a <span className="gradient-text">burocracia fiscal</span> que trava o seu negócio.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Existe muita gente ganhando dinheiro complicando o que deveria ser simples: token que quebra, cartório que
              fecha, sistema que não responde, preço que muda toda hora. Aqui é diferente. <strong className="text-foreground">Um modelo, um preço, uma videochamada.</strong>{" "}
              Você compra, entra na reunião, valida e emite. Sem letras miúdas, sem upsell escondido, sem enrolação.
            </p>
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section id="modelos" className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Escolha o seu</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Só trabalhamos com <span className="gradient-text">A1</span>. E tem motivo.
          </h2>
          <p className="mt-3 text-muted-foreground">
            A1 é arquivo digital — instala no computador e pronto. Nada de token USB caindo, nada de leitora
            incompatível, nada de mídia extra pra comprar. É o certificado que resolve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {models.map(({ tag, title, subtitle, icon: Icon, accent, bullets }) => (
            <div key={title} className="glass-card p-8 flex flex-col hover:-translate-y-1 transition">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="w-14 h-14 rounded-2xl grid place-items-center shrink-0"
                  style={{ background: accent, boxShadow: "var(--shadow-glow)" }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-accent">{tag}</div>
                  <div className="font-display text-3xl font-bold leading-none mt-1">{title}</div>
                  <div className="text-xs text-muted-foreground mt-1.5">{subtitle}</div>
                </div>
              </div>

              <ul className="space-y-2.5 flex-1">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary-glow mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-muted-foreground">R$</span>
                  <span className="font-display text-3xl font-bold ml-1">129,90</span>
                  <span className="text-xs text-muted-foreground ml-1">/ 12 meses</span>
                </div>
                <a
                  href="#emitir"
                  className="text-sm font-medium text-primary-glow inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Quero esse <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOCHAMADA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden aspect-[4/3] flex flex-col justify-between">
            <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.65 0.25 300 / 0.5), transparent 60%)" }} />
            <div className="relative flex items-center gap-2 text-xs text-primary-glow">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> AO VIVO — validação em andamento
            </div>
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl grid place-items-center mb-4" style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}>
                <Video className="w-9 h-9 text-white" />
              </div>
              <div className="font-display text-2xl font-bold">Videoconferência ICP-Brasil</div>
              <p className="text-sm text-muted-foreground mt-2">
                RG em mãos, câmera ligada, 5 minutinhos. Ao final da chamada, seu A1 já está pronto.
              </p>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Como funciona</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Do <span className="gradient-text">clique à emissão</span> em minutos.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Chega de rodar cartório, chega de agendar autenticação, chega de esperar dias. A validação é feita por
              videochamada com um agente credenciado ICP-Brasil, no horário que der pra você.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </span>
                  <div>
                    <div className="font-display font-bold">{title}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Por que A1 muda o jogo</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Você não precisa mais aguentar <span className="gradient-text">isso.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {objections.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-6 flex gap-4">
              <span className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                <Icon className="w-5 h-5 text-white" />
              </span>
              <div>
                <div className="font-display text-lg font-bold">{title}</div>
                <div className="text-sm text-muted-foreground mt-1">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="emitir" className="max-w-5xl mx-auto px-6 py-24">
        <div
          className="glass-card p-10 md:p-14 text-center relative overflow-hidden glow-ring border-primary/40"
          style={{ background: "linear-gradient(180deg, oklch(0.35 0.15 300 / 0.55), oklch(0.22 0.09 295 / 0.55))" }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Última chamada</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            R$ <span className="gradient-text">129,90</span>. Uma videochamada.
            <br />
            Seu certificado pronto hoje.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
            Não tem letras miúdas. Não tem taxa escondida. Não tem upgrade obrigatório. É esse preço, esse modelo, essa
            velocidade.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Emitir por R$ 129,90 <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/" className="text-sm font-medium hover:text-primary-glow transition">
              Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
