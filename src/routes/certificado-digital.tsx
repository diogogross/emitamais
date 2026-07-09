import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  KeyRound,
  Usb,
  HardDrive,
  Cpu,
  Building2,
  User,
  Cloud,
  CreditCard,
  FileText,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/certificado-digital")({
  head: () => ({
    meta: [
      { title: "Certificado Digital A1 e A3 — CNPJ, CPF, NF e Bird ID" },
      {
        name: "description",
        content:
          "Emita seu certificado digital A1 ou A3 para CNPJ, CPF, NF e Bird ID. Token, cartão, leitora ou sem mídia — 100% online, com validação por videoconferência.",
      },
      { property: "og:title", content: "Certificado Digital — Emissão 100% online" },
      {
        property: "og:description",
        content:
          "A1, A3, CNPJ, CPF, NF e Bird ID. Todos os modelos, todas as mídias, emissão rápida e segura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificadoDigital,
});

const groups = [
  {
    title: "CNPJ",
    subtitle: "Para empresas e MEIs",
    icon: Building2,
    accent: "var(--gradient-primary)",
    items: [
      { name: "CNPJ A1", meta: "1 ano · arquivo digital" },
      { name: "CNPJ A3 1 Ano em Cartão", meta: "smart card" },
      { name: "CNPJ A3 1 Ano em Cartão e Leitora", meta: "kit completo" },
      { name: "CNPJ A3 1 Ano em Token", meta: "USB token" },
      { name: "CNPJ A3 2 Anos em Cartão", meta: "smart card" },
      { name: "CNPJ A3 2 Anos em Cartão e Leitora", meta: "kit completo" },
      { name: "CNPJ A3 2 Anos em Token", meta: "USB token" },
      { name: "CNPJ A3 2 Anos Sem Mídia", meta: "reaproveite sua mídia" },
    ],
  },
  {
    title: "CPF",
    subtitle: "Para pessoa física",
    icon: User,
    accent: "linear-gradient(135deg, oklch(0.7 0.22 260), oklch(0.78 0.18 305))",
    items: [
      { name: "CPF A1", meta: "1 ano · arquivo digital" },
      { name: "CPF A3 1 Ano em Cartão", meta: "smart card" },
      { name: "CPF A3 1 Ano em Cartão e Leitora", meta: "kit completo" },
      { name: "CPF A3 1 Ano em Token", meta: "USB token" },
      { name: "CPF A3 1 Ano Sem Mídia", meta: "reaproveite sua mídia" },
      { name: "CPF A3 2 Anos em Cartão", meta: "smart card" },
      { name: "CPF A3 2 Anos em Cartão e Leitora", meta: "kit completo" },
      { name: "CPF A3 2 Anos em Token", meta: "USB token" },
      { name: "CPF A3 2 Anos Sem Mídia", meta: "reaproveite sua mídia" },
      { name: "CPF A3 3 Anos em Cartão", meta: "smart card" },
      { name: "CPF A3 3 Anos em Cartão e Leitora", meta: "kit completo" },
      { name: "CPF A3 3 Anos em Token", meta: "USB token" },
      { name: "CPF A3 3 Anos Sem Mídia", meta: "reaproveite sua mídia" },
    ],
  },
  {
    title: "NF & Bird ID",
    subtitle: "Nota fiscal e identidade digital",
    icon: Cpu,
    accent: "var(--gradient-accent)",
    items: [
      { name: "NF A1", meta: "1 ano · arquivo digital" },
      { name: "Bird ID 5000 Transações", meta: "5 anos · nuvem" },
    ],
  },
];

const benefits = [
  "Validação 100% online por videoconferência",
  "Compatível com SEFAZ, Receita Federal, e-CAC e prefeituras",
  "Suporte técnico dedicado durante toda a emissão",
  "Aceito por todos os principais órgãos e sistemas fiscais",
];

function CertificadoDigital() {
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
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4 flex items-center gap-2">
            <KeyRound className="w-3.5 h-3.5" /> Certificado Digital
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Emita seu <span className="gradient-text">certificado digital</span> com quem entende do assunto.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Modelos A1 e A3 para CNPJ, CPF, NF e Bird ID — em token, cartão, leitora ou sem mídia. Escolha o modelo
            ideal para sua operação e emita em minutos, com validação online e suporte especializado do início ao fim.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className="mt-0.5 w-5 h-5 rounded-md grid place-items-center bg-primary-glow/15 ring-1 ring-primary-glow/30 shrink-0">
                  <Check className="w-3 h-3 text-primary-glow" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#modelos"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
            >
              Emitir agora <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-glow" /> Emissão 100% online e segura
            </div>
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section id="modelos" className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Todos os modelos <span className="gradient-text">disponíveis</span>.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Escolha entre A1 (arquivo digital) ou A3 (token, cartão, leitora ou sem mídia) para o titular certo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {groups.map(({ title, subtitle, icon: Icon, accent, items }) => (
            <div key={title} className="glass-card p-6 md:p-7 flex flex-col hover:-translate-y-1 transition">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-11 h-11 rounded-xl grid place-items-center shrink-0"
                  style={{ background: accent, boxShadow: "var(--shadow-glow)" }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </span>
                <div>
                  <div className="font-display text-2xl font-bold leading-none">{title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>
                </div>
              </div>

              <ul className="space-y-2 flex-1">
                {items.map((it) => {
                  const MediaIcon = it.name.includes("Token")
                    ? Usb
                    : it.name.includes("Leitora")
                      ? HardDrive
                      : it.name.includes("Cartão")
                        ? CreditCard
                        : it.name.includes("Sem Mídia")
                          ? Cloud
                          : it.name.startsWith("Bird")
                            ? Cpu
                            : FileText;
                  return (
                    <li
                      key={it.name}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 hover:border-primary-glow/30 hover:bg-white/[0.06] transition"
                    >
                      <span className="mt-0.5 w-7 h-7 rounded-lg grid place-items-center bg-white/5 ring-1 ring-white/10 shrink-0">
                        <MediaIcon className="w-3.5 h-3.5 text-primary-glow" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-foreground leading-tight">{it.name}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">{it.meta}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card p-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Emissão 100% online</span> — validação por videoconferência
            disponível.
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-accent-foreground hover:scale-[1.02] transition"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            Solicitar certificado <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
