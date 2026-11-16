import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Check, ChevronDown,
  CircleHelp, FileCheck2, Handshake, Layers3, LockKeyhole, Menu, Network,
  Rocket, ShieldCheck, Sparkles, TrendingUp, Wallet, X
} from "lucide-react";

const WHATSAPP_PARTNERS =
  "https://wa.me/5554991193146?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Programa%20de%20Parceiros%20EmitaGo.";

const partnerImages = {
  hero: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=82",
  meeting: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=82",
  workspace: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=82",
};

const documents = ["NF-e", "NFC-e", "NFS-e", "CT-e", "CT-e OS", "MDF-e", "NFP-e"];

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Programa de Parceiros | Revenda de Sistema Fiscal White Label | EmitaGo" },
      {
        name: "description",
        content:
          "Revenda a solução fiscal EmitaGo com sua estratégia comercial. Parceiros a partir de 5 CNPJs ativos: custo de R$ 40 por CNPJ no mês de uso e liberdade para definir seu preço.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "EmitaGo" },
      { property: "og:title", content: "Seja parceiro EmitaGo | Sua carteira, seu preço" },
      {
        property: "og:description",
        content:
          "Amplie seu portfólio com uma solução fiscal para revender. Custo parceiro de R$ 40 por CNPJ ativo, a partir de 5 CNPJs.",
      },
      { property: "og:url", content: "https://www.emitago.com.br/parceiros" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Programa de Parceiros EmitaGo" },
      {
        name: "twitter:description",
        content: "Revenda uma solução fiscal, defina seu preço e desenvolva sua carteira de clientes.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.emitago.com.br/parceiros" },
      { rel: "alternate", hrefLang: "pt-BR", href: "https://www.emitago.com.br/parceiros" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Programa de Parceiros EmitaGo",
          url: "https://www.emitago.com.br/parceiros",
          inLanguage: "pt-BR",
          description:
            "Programa de revenda de solução fiscal EmitaGo para parceiros com carteira mínima de cinco CNPJs ativos.",
          isPartOf: { "@type": "WebSite", name: "EmitaGo", url: "https://www.emitago.com.br/" },
          about: { "@type": "Thing", name: "Revenda de software fiscal" },
        }),
      },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const [clients, setClients] = useState(20);
  const [resalePrice, setResalePrice] = useState("69.90");
  const [mobileOpen, setMobileOpen] = useState(false);
  const numericPrice = Math.max(0, Number(resalePrice) || 0);
  const revenue = useMemo(() => clients * numericPrice, [clients, numericPrice]);
  const cost = clients * 40;
  const margin = revenue - cost;
  const money = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090b18] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegação principal">
          <Link to="/" className="flex items-center gap-3" aria-label="EmitaGo — página inicial">
            <img src="/logo%20transparente%20letra%20braca.png" alt="EmitaGo" width={142} height={44} className="h-10 w-auto object-contain" />
            <span className="hidden border-l border-white/15 pl-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200 sm:block">Parceiros</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#modelo" className="transition hover:text-white">Como funciona</a>
            <a href="#vantagens" className="transition hover:text-white">Vantagens</a>
            <a href="#simulador" className="transition hover:text-white">Simulador</a>
            <a href="#duvidas" className="transition hover:text-white">Dúvidas</a>
          </div>
          <a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-violet-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-violet-300 md:inline-flex">
            Quero ser parceiro <ArrowUpRight className="h-4 w-4" />
          </a>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="grid gap-1 border-t border-white/10 px-5 py-3 md:hidden">
            {[
              ["Como funciona", "#modelo"],
              ["Vantagens", "#vantagens"],
              ["Simulador", "#simulador"],
              ["Dúvidas", "#duvidas"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-white/5">{label}</a>
            ))}
            <a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="mt-2 rounded-xl bg-violet-400 px-4 py-3 text-center text-sm font-bold text-slate-950">Quero ser parceiro</a>
          </div>
        )}
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_15%_15%,rgba(124,58,237,.32),transparent_45%),radial-gradient(ellipse_at_85%_70%,rgba(14,165,233,.16),transparent_42%),linear-gradient(135deg,#101326,#090b18_65%)]" />
          <div className="absolute right-[-12rem] top-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full border border-violet-300/10" />
          <div className="absolute right-[-7rem] top-[-5rem] -z-10 h-[24rem] w-[24rem] rounded-full border border-violet-300/10" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
                <Sparkles className="h-4 w-4" /> Programa de parceiros EmitaGo
              </div>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Sua carteira de clientes pode valer <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">muito mais.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Ofereça uma solução fiscal completa ao seu mercado, fortaleça o relacionamento com seus clientes e defina o preço da sua própria revenda.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-400 px-7 py-4 font-bold text-slate-950 shadow-[0_12px_45px_rgba(139,92,246,.25)] transition hover:-translate-y-0.5 hover:bg-violet-300">
                  Quero conhecer a parceria <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#simulador" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/5">
                  Simular minha margem
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300" /> Você define seu preço</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300" /> Pré-pago por uso</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300" /> A partir de 5 CNPJs</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-500/25 to-sky-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl">
                <img src={partnerImages.hero} alt="Equipe de profissionais reunida em ambiente de trabalho — imagem ilustrativa do programa de parceiros" width={1400} height={1050} fetchPriority="high" className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[470px]" />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#101326]/90 p-5 shadow-xl backdrop-blur-xl sm:bottom-9 sm:left-9 sm:right-9">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">Condição para parceiros</p>
                      <p className="mt-1 text-3xl font-bold">R$ 40<span className="text-base font-medium text-slate-400"> / CNPJ ativo</span></p>
                      <p className="mt-1 text-xs text-slate-400">No mês de utilização · mínimo de 5 CNPJs</p>
                    </div>
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-violet-400/15 text-violet-200"><Handshake className="h-7 w-7" /></div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">Imagem ilustrativa. Substituiremos por telas reais do EmitaGo na próxima etapa.</p>
            </div>
          </div>
          <div className="border-y border-white/10 bg-white/[0.025]">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-6 text-center sm:grid-cols-4 lg:px-8">
              {[
                ["R$ 40", "custo por CNPJ ativo"],
                ["5+", "CNPJs para a condição"],
                ["Livre", "preço definido por você"],
                ["Pré-pago", "pague pelo mês de uso"],
              ].map(([value, label]) => (
                <div key={label}><p className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</p><p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="modelo" className="scroll-mt-24 bg-[#0d1020] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3">
                <img src={partnerImages.meeting} alt="Profissionais conversando em reunião — imagem ilustrativa" width={900} height={1100} loading="lazy" className="h-64 w-full rounded-3xl object-cover sm:h-80" />
                <img src={partnerImages.workspace} alt="Ambiente de trabalho moderno — imagem ilustrativa" width={900} height={1100} loading="lazy" className="mt-10 h-64 w-full rounded-3xl object-cover sm:h-80" />
              </div>
              <div className="mt-4 rounded-2xl border border-violet-300/20 bg-violet-300/[0.07] p-5">
                <p className="text-sm leading-7 text-violet-100">Você constrói a relação comercial com seus clientes. A EmitaGo fornece a solução fiscal dentro do modelo de parceria acordado.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Um novo produto no seu portfólio</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Você já tem o relacionamento. <span className="text-violet-300">Agora pode ampliar o que oferece.</span></h2>
              <p className="mt-6 text-base leading-8 text-slate-300">Se você atende empresas, contabilidades ou negócios locais, pode apresentar uma plataforma de emissão fiscal como mais uma solução para a sua carteira — sem precisar desenvolver um sistema do zero.</p>
              <div className="mt-8 space-y-5">
                {[
                  [Network, "Aproveite sua rede", "Apresente a solução a clientes que já confiam no seu trabalho."],
                  [Wallet, "Tenha liberdade comercial", "Seu custo é definido pela condição de parceiro. O preço de revenda fica a seu critério."],
                  [Layers3, "Amplie seu portfólio", "Inclua documentos fiscais para diferentes tipos de operação, conforme os recursos disponíveis."],
                ].map(([Icon, title, desc]) => {
                  const ItemIcon = Icon as typeof Network;
                  return <div key={title as string} className="flex gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-200"><ItemIcon className="h-5 w-5" /></div><div><h3 className="font-semibold text-white">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{desc as string}</p></div></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="vantagens" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Uma parceria com lógica simples</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Estrutura para você vender. Liberdade para crescer.</h2>
              <p className="mt-5 leading-7 text-slate-400">Você não precisa criar um emissor fiscal, manter integrações ou construir tudo do início. Concentre sua energia em desenvolver o relacionamento comercial.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                [TrendingUp, "Sua própria margem", "Defina o preço de revenda de acordo com sua estratégia e com o valor que entrega ao cliente."],
                [FileCheck2, "Vários documentos", "Uma solução com documentos fiscais para diferentes operações empresariais."],
                [ShieldCheck, "Tecnologia fiscal", "Utilize uma plataforma dedicada à rotina de emissão e gestão de documentos fiscais."],
                [Handshake, "Modelo de parceria", "Condições comerciais específicas para quem trabalha com uma carteira de empresas."],
              ].map(([Icon, title, desc]) => {
                const ItemIcon = Icon as typeof TrendingUp;
                return <article key={title as string} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/[0.06]"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-400/10 text-violet-200"><ItemIcon className="h-6 w-6" /></div><h3 className="mt-6 text-lg font-bold">{title as string}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{desc as string}</p></article>;
              })}
            </div>
            <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#11152a] lg:grid-cols-[.9fr_1.1fr]">
              <div className="p-8 sm:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Solução fiscal em um só portfólio</p>
                <h3 className="mt-4 font-display text-3xl font-bold">Atenda diferentes necessidades com uma única parceria.</h3>
                <p className="mt-5 leading-7 text-slate-400">Apresente os documentos disponíveis conforme o perfil e a operação de cada cliente. A disponibilidade de cada emissão depende das integrações e configurações aplicáveis.</p>
                <div className="mt-8 flex flex-wrap gap-2">{documents.map((doc) => <span key={doc} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">{doc}</span>)}</div>
                <p className="mt-5 text-xs leading-5 text-slate-500">O CIOT possui recursos relacionados conforme a operação e a integração disponível.</p>
              </div>
              <div className="relative min-h-[320px]">
                <img src={partnerImages.team} alt="Equipe colaborando em um projeto — imagem ilustrativa" width={1200} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#11152a] via-[#11152a]/35 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#0b1020]/85 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-sky-200">Uma solução, diferentes segmentos</p>
                  <p className="mt-2 text-lg font-semibold">Comércio · Serviços · Transporte · Indústria</p>
                  <p className="mt-1 text-xs text-slate-400">Imagem ilustrativa — substituível por capturas reais do sistema.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="simulador" className="scroll-mt-24 bg-gradient-to-br from-[#21133b] via-[#15152d] to-[#0b1020] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-200">Faça suas contas</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Quanto pode sobrar na sua revenda?</h2>
              <p className="mt-5 leading-8 text-slate-300">Simule o resultado bruto considerando o custo parceiro de R$ 40 por CNPJ ativo e o preço que você pretende praticar.</p>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"><CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-violet-200" /><p className="text-sm leading-6 text-slate-400">O simulador é uma estimativa comercial. Não representa lucro líquido nem inclui impostos, atendimento, marketing ou outras despesas da sua operação.</p></div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-[#090d1c]/80 p-6 shadow-2xl sm:p-9">
              <div className="flex items-center justify-between gap-4"><h3 className="text-xl font-bold">Simulador de revenda</h3><span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">Interativo</span></div>
              <div className="mt-8">
                <div className="flex items-center justify-between gap-4"><label htmlFor="partner-clients" className="text-sm text-slate-300">CNPJs ativos no mês</label><span className="font-display text-2xl font-bold text-white">{clients}</span></div>
                <input id="partner-clients" type="range" min="5" max="200" step="1" value={clients} onChange={(event) => setClients(Number(event.target.value))} className="mt-4 w-full accent-violet-400" />
                <div className="mt-1 flex justify-between text-xs text-slate-500"><span>5 CNPJs</span><span>200 CNPJs</span></div>
              </div>
              <div className="mt-8">
                <label htmlFor="partner-price" className="text-sm text-slate-300">Preço de revenda por CNPJ / mês</label>
                <div className="mt-2 flex items-center rounded-xl border border-white/15 bg-white/5 px-4"><span className="text-slate-400">R$</span><input id="partner-price" type="number" min="0" step="0.01" value={resalePrice} onChange={(event) => setResalePrice(event.target.value)} className="w-full bg-transparent px-3 py-4 text-xl font-bold text-white outline-none" /></div>
              </div>
              <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="flex justify-between gap-4 text-sm"><span className="text-slate-400">Receita estimada de revenda</span><strong>{money(revenue)}</strong></div>
                <div className="flex justify-between gap-4 text-sm"><span className="text-slate-400">Custo com a EmitaGo</span><strong>{money(cost)}</strong></div>
                <div className="border-t border-white/10 pt-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Diferença bruta estimada</p><p className="mt-1 font-display text-4xl font-bold text-emerald-300">{money(margin)}</p></div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">Cálculo ilustrativo: ({money(numericPrice)} − R$ 40,00) × {clients} CNPJs ativos. Valores negativos indicam preço abaixo do custo parceiro.</p>
              <a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-violet-300">Quero conversar sobre parceria <ArrowRight className="h-5 w-5" /></a>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-white/10">
                <img src={partnerImages.workspace} alt="Espaço profissional de trabalho — imagem ilustrativa" width={1200} height={900} loading="lazy" className="h-[360px] w-full object-cover sm:h-[460px]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Comece com clareza</p>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Uma parceria que começa com um próximo passo simples.</h2>
                <div className="mt-8 space-y-6">
                  {[
                    ["01", "Conte sobre sua operação", "Explique seu negócio, seu público e quantos CNPJs pretende atender."],
                    ["02", "Alinhe as condições", "Nossa equipe apresenta o funcionamento, a condição comercial e o escopo da parceria."],
                    ["03", "Estruture sua revenda", "Com as condições alinhadas, você organiza sua oferta e define seu preço para os clientes."],
                  ].map(([number, title, desc]) => <div key={number} className="flex gap-4"><span className="font-display text-2xl font-bold text-violet-300">{number}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{desc}</p></div></div>)}
                </div>
                <a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full border border-violet-300/40 px-6 py-3.5 font-semibold text-violet-100 transition hover:bg-violet-300/10">Falar com a equipe de parcerias <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="scroll-mt-24 bg-[#0d1020] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Perguntas frequentes</p><h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Tudo mais claro antes de começar.</h2><p className="mt-5 leading-7 text-slate-400">Veja as respostas iniciais sobre o modelo de revenda. As condições completas são alinhadas no contato comercial.</p></div>
            <div className="space-y-3">
              {[
                ["Quanto custa para ser parceiro?", "A condição apresentada é de R$ 40 por CNPJ ativo no mês de utilização, para parceiros com pelo menos 5 CNPJs ativos. O pagamento é pré-pago, conforme as condições comerciais alinhadas."],
                ["Posso definir meu próprio preço de revenda?", "Sim. O parceiro define o preço que deseja praticar na revenda. A diferença entre o preço cobrado do cliente e o custo parceiro é uma margem bruta, antes das despesas da operação."],
                ["Preciso pagar por CNPJs que não vou utilizar?", "O modelo apresentado considera o CNPJ ativo no mês de utilização. O parceiro paga antecipadamente os CNPJs que pretende utilizar naquele período, conforme o acordo comercial."],
                ["Quais documentos fiscais estão disponíveis?", "A plataforma contempla NF-e, NFC-e, NFS-e, CT-e, CT-e OS, MDF-e e NFP-e, além de recursos relacionados ao CIOT conforme a operação. A disponibilidade de cada recurso deve ser confirmada para o perfil do cliente."],
                ["A EmitaGo define o preço que devo cobrar?", "Não. Você tem liberdade para definir o preço de revenda. A condição de aquisição junto à EmitaGo é alinhada no início da parceria."],
                ["A parceria inclui personalização com minha marca e domínio próprio?", "O escopo de personalização, identidade visual, domínio e demais recursos deve ser confirmado com a equipe antes da contratação. Não presumimos que todos esses itens estejam incluídos em qualquer modalidade."],
              ].map(([question, answer]) => <details key={question} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 open:border-violet-300/25 open:bg-violet-300/[0.04]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white [&::-webkit-details-marker]:hidden">{question}<ChevronDown className="h-5 w-5 shrink-0 text-violet-300 transition group-open:rotate-180" /></summary><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-5 py-20 text-center md:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,.28),transparent_62%)]" />
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-violet-200"><Rocket className="h-7 w-7" /></div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Seu próximo passo começa aqui</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">Leve uma nova solução para a sua carteira de clientes.</h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">Converse com a equipe EmitaGo, entenda as condições para parceiros e avalie como incluir a revenda fiscal no seu negócio.</p>
            <a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-violet-400 px-8 py-4 font-bold text-slate-950 shadow-[0_12px_45px_rgba(139,92,246,.22)] transition hover:-translate-y-0.5 hover:bg-violet-300">Quero ser parceiro EmitaGo <ArrowRight className="h-5 w-5" /></a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070914] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <Link to="/" className="flex items-center gap-3"><img src="/logo%20transparente%20letra%20braca.png" alt="EmitaGo" width={120} height={36} className="h-8 w-auto object-contain" /><span className="text-xs text-slate-500">Programa de Parceiros</span></Link>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-500"><Link to="/" className="hover:text-white">Página inicial</Link><Link to="/blog" className="hover:text-white">Blog</Link><Link to="/privacidade" className="hover:text-white">Privacidade</Link><Link to="/termos" className="hover:text-white">Termos</Link></div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} EmitaGo</p>
        </div>
      </footer>
    </div>
  );
}
