import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const progressRef = useRef<HTMLDivElement>(null);
  const [clients,setClients]=useState(20);
  const [resalePrice,setResalePrice]=useState("69.90");
  const [mobileOpen,setMobileOpen]=useState(false);
  const [faq,setFaq]=useState(0);
  const price=Math.max(0,Number(resalePrice.replace(",","."))||0);
  const revenue=clients*price, cost=clients*40, margin=revenue-cost;
  const money=(v:number)=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
  useEffect(() => {
    const bar = progressRef.current;
    let ticking = false;
    const update = () => {
      ticking = false;
      if (!bar) return;
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? root.scrollTop / max : 0})`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -80px 0px" });
    document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  const questions=[
    ["Posso usar a logo da minha contabilidade?","Sim. O programa permite apresentar a solução com a identidade visual do seu escritório. Os detalhes de aplicação da marca são alinhados na adesão."],
    ["Qual é o custo para o parceiro?","R$ 40 por CNPJ ativo, por mês de utilização, na condição para carteiras a partir de 5 CNPJs. A equipe confirma as condições comerciais na adesão."],
    ["Eu escolho quanto cobrar dos meus clientes?","Sim. Você define seu preço de revenda. A diferença entre a receita e o custo parceiro representa sua margem bruta, antes de impostos e demais despesas."],
    ["Preciso pagar nos meses em que não usar?","O modelo é pré-pago por mês de utilização. O custo considera os CNPJs ativos no período contratado."],
    ["Quais documentos estão disponíveis?","NF-e, NFC-e, NFS-e, CT-e, CT-e OS, MDF-e e NFP-e, conforme operação, configuração e integrações aplicáveis."]
  ];
  return <div className="min-h-screen overflow-x-hidden bg-[#f7f9fc] text-[#17243b]">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#142947] text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4" aria-label="Navegação principal">
        <Link to="/" className="flex items-center gap-3" aria-label="EmitaGo — página inicial">
          <img src="/logo%20transparente%20letra%20braca.png" alt="EmitaGo" width={142} height={44} className="w-36 sm:w-40 h-12 object-contain drop-shadow-[0_4px_12px_rgba(59,130,246,0.5)]"/>
          <span className="hidden border-l border-white/20 pl-3 text-xs font-bold uppercase tracking-[.18em] text-sky-200 sm:block">Parceiros</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#contabilidades" className="hover:text-white">Para contabilidades</a><a href="#modelo" className="hover:text-white">Como funciona</a><a href="#simulador" className="hover:text-white">Simulador</a><a href="#duvidas" className="hover:text-white">Dúvidas</a>
        </div>
        <a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="hidden md:inline-flex group items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition">Quero ser parceiro <ArrowUpRight className="h-4 w-4"/></a>
        <button type="button" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-background/70 backdrop-blur" aria-label={mobileOpen?"Fechar menu":"Abrir menu"} aria-expanded={mobileOpen} onClick={()=>setMobileOpen(v=>!v)}>{mobileOpen?<X/>:<Menu/>}</button>
      </nav>
      {mobileOpen&&<div className="md:hidden mx-4 mt-1 rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl backdrop-blur-xl">{[["Para contabilidades","#contabilidades"],["Como funciona","#modelo"],["Simulador","#simulador"],["Dúvidas","#duvidas"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMobileOpen(false)} className="rounded-lg px-3 py-3 text-sm text-white hover:bg-white/10">{label}</a>)}<a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="mt-2 rounded-lg bg-[#f18ab6] p-3 text-center font-bold text-[#14233d]">Quero ser parceiro</a></div>}
    </header>
    <main>
      <section className="relative isolate overflow-hidden section-dark w-full" data-reveal="up">
        <div className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#dcecff] blur-3xl"/><div className="absolute -bottom-48 left-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#fde6f0] blur-3xl"/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-28 md:pb-24 md:pt-36 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#d8e5f4] bg-[#f2f7fd] px-3.5 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-[#285b91]"><BadgeCheck className="h-4 w-4"/> Programa de parceiros EmitaGo</div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-.04em] text-foreground sm:text-5xl lg:text-[3.65rem]">Sua contabilidade pode oferecer mais. <span className="text-[#2876c7]">Com a sua marca.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Leve uma solução de emissão fiscal para o portfólio do seu escritório. Apresente aos seus clientes com a identidade visual da sua contabilidade e tenha liberdade para definir seu preço de revenda.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2876c7] px-7 py-4 font-extrabold text-white shadow-lg shadow-blue-900/15 hover:bg-[#1f66b0]">Quero conhecer o programa <ArrowRight className="h-5 w-5"/></a><a href="#simulador" className="inline-flex items-center justify-center rounded-lg border border-[#cbd7e6] bg-white px-7 py-4 font-bold text-[#243b5c] hover:border-[#2876c7]">Simular minha margem</a></div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white/80"><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Sua identidade visual</span><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Você define o preço</span><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Pré-pago por uso</span></div>
          </div>
          <div className="relative"><div className="overflow-hidden rounded-[1.6rem] border border-[#dce5ef] bg-white p-2 shadow-[0_28px_80px_rgba(24,49,82,.16)]"><img src={partnerImages.hero} alt="Equipe profissional reunida em ambiente de trabalho — imagem ilustrativa" width={1400} height={1050} fetchPriority="high" className="h-[340px] w-full rounded-[1.2rem] object-cover sm:h-[450px]"/><div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5 shadow-xl sm:bottom-8 sm:left-8 sm:right-8"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-[#2876c7]">Condição para escritórios parceiros</p><p className="mt-1 text-3xl font-extrabold text-[#14233d]">R$ 40 <span className="text-sm font-semibold text-[#68778c]">/ CNPJ ativo</span></p><p className="mt-1 text-xs text-[#68778c]">Por mês de utilização · condição a partir de 5 CNPJs</p></div></div><p className="mt-3 text-center text-xs text-[#7b8798]">Imagem ilustrativa. Telas reais do EmitaGo podem substituir esta imagem.</p></div>
        </div>
        <div className="border-y border-[#e4ebf3] bg-[#f7f9fc]"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-6 text-center sm:grid-cols-4 lg:px-8">{[["R$ 40","por CNPJ ativo"],["5+","CNPJs na condição parceiro"],["Livre","preço de revenda"],["Pré-pago","mês de utilização"]].map(([v,l])=><div key={l}><p className="text-2xl font-extrabold text-[#18365b] sm:text-3xl">{v}</p><p className="mt-1 text-xs text-[#6b7b91] sm:text-sm">{l}</p></div>)}</div></div>
      </section>
      <section id="contabilidades" className="section-light section-connector w-full scroll-mt-24" data-reveal="left"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-2 gap-4"><img src={partnerImages.meeting} alt="Profissionais em reunião — imagem ilustrativa" width={900} height={1100} loading="lazy" className="h-60 w-full rounded-xl object-cover sm:h-80"/><img src={partnerImages.workspace} alt="Escritório profissional — imagem ilustrativa" width={900} height={1100} loading="lazy" className="mt-10 h-60 w-full rounded-xl object-cover sm:h-80"/></div>
        <div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#2876c7]">Feito para escritórios contábeis</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight text-foreground">Seu cliente já confia na sua contabilidade. <span className="text-[#2876c7]">Amplie essa relação.</span></h2><p className="mt-6 leading-8 text-[#596a80]">Ofereça uma ferramenta para a rotina fiscal das empresas atendidas. Fortaleça o relacionamento, amplie seu portfólio e crie uma nova frente comercial — sem desenvolver um emissor do zero.</p>
          <div className="mt-8 space-y-5">{[[Network,"Sua identidade na apresentação","Apresente a ferramenta aos seus clientes utilizando a logo da sua contabilidade."],[Wallet,"Liberdade para montar sua oferta","Seu custo parceiro é definido. O preço de revenda fica a seu critério."],[Layers3,"Mais valor para sua carteira","Ofereça documentos fiscais para diferentes operações empresariais, conforme a disponibilidade."]].map(([Icon,title,desc])=>{const I=Icon as typeof Network;return <div key={title as string} className="flex gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#e7f1fc] text-[#2876c7]"><I className="h-5 w-5"/></div><div><h3 className="font-extrabold text-[#1b2d48]">{title as string}</h3><p className="mt-1 text-sm leading-6 text-[#68788e]">{desc as string}</p></div></div>})}</div>
        </div>
      </div></section>
      <section id="modelo" className="section-dark section-connector w-full scroll-mt-24" data-reveal="scale"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#2876c7]">Um modelo direto e transparente</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">Como funciona a parceria</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{[["01","Converse com a equipe","Alinhe o perfil da sua carteira, a aplicação da marca e as condições comerciais."],["02","Apresente aos seus clientes","Inclua a solução fiscal no portfólio do escritório e defina sua estratégia de revenda."],["03","Desenvolva sua carteira","Acompanhe os CNPJs ativos e trabalhe sua oferta conforme a demanda dos clientes."]].map(([n,t,d])=><article key={n} className="border-t-2 border-[#2876c7] bg-[#f7f9fc] p-7"><p className="text-sm font-extrabold tracking-widest text-[#e17aa8]">{n}</p><h3 className="mt-5 text-xl font-extrabold text-[#1b2d48]">{t}</h3><p className="mt-3 text-sm leading-7 text-[#68788e]">{d}</p></article>)}</div>
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 glass-card lg:grid-cols-[.85fr_1.15fr]"><div className="bg-[#142947] p-8 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#a9d2ff]">Documentos fiscais</p><h3 className="mt-4 text-2xl font-extrabold text-white">Uma plataforma para diferentes rotinas empresariais.</h3><p className="mt-4 text-sm leading-7 text-slate-300">Apresente os recursos conforme a necessidade e a operação de cada empresa atendida.</p><div className="mt-7 flex flex-wrap gap-2">{documents.map(d=><span key={d} className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold">{d}</span>)}</div><p className="mt-5 text-xs text-slate-400">A disponibilidade depende das integrações e configurações aplicáveis.</p></div><div className="relative min-h-[300px]"><img src={partnerImages.team} alt="Equipe colaborando em um projeto — imagem ilustrativa" width={1200} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-[#142947]/70 to-transparent"/><div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-5 shadow-xl"><p className="text-xs font-bold uppercase tracking-wider text-[#2876c7]">Para sua carteira de empresas</p><p className="mt-2 text-lg font-extrabold text-[#1b2d48]">Comércio · Serviços · Transporte · Indústria</p><p className="mt-1 text-xs text-[#748196]">Imagem ilustrativa — substituível por capturas reais do sistema.</p></div></div></div>
      </div></section>
      <section id="simulador" className="section-light section-connector w-full scroll-mt-24" data-reveal="right"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#2876c7]">Planeje sua oferta</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">Quanto pode render sua carteira?</h2><p className="mt-5 leading-8 text-muted-foreground">Escolha quantos CNPJs pretende atender e o preço mensal de revenda. O cálculo mostra a diferença bruta entre sua receita e o custo parceiro.</p><p className="mt-7 rounded-lg border border-[#d3dfeb] bg-white p-4 text-sm leading-6 text-[#62738a]"><strong className="text-[#1b2d48]">Importante:</strong> exemplo ilustrativo. A margem não desconta impostos, atendimento, vendas ou outros custos da sua operação.</p></div>
        <div className="glass-card glow-ring rounded-3xl p-6 sm:p-9"><div className="grid gap-7 sm:grid-cols-2"><div><label htmlFor="partner-clients" className="text-sm font-bold text-[#344a67]">CNPJs ativos</label><p className="mt-1 text-3xl font-extrabold text-[#14233d]">{clients}</p><input id="partner-clients" type="range" min="5" max="100" value={clients} onChange={e=>setClients(Number(e.target.value))} className="mt-4 w-full accent-[#2876c7]"/><div className="mt-1 flex justify-between text-xs text-[#8290a2]"><span>5</span><span>100</span></div></div><div><label htmlFor="partner-price" className="text-sm font-bold text-[#344a67]">Preço por CNPJ / mês</label><div className="mt-3 flex items-center rounded-lg border border-[#cbd8e6] px-3"><span className="font-semibold text-[#7b899a]">R$</span><input id="partner-price" inputMode="decimal" value={resalePrice} onChange={e=>setResalePrice(e.target.value)} className="w-full bg-transparent px-2 py-3 text-xl font-extrabold text-[#14233d] outline-none"/></div><p className="mt-2 text-xs text-[#8290a2]">Você define o valor cobrado.</p></div></div>
          <div className="mt-8 border-t border-[#e6edf4] pt-7"><div className="grid gap-4 sm:grid-cols-3"><div><p className="text-xs font-bold uppercase text-[#8290a2]">Receita estimada</p><p className="mt-2 text-xl font-extrabold text-[#1b2d48]">{money(revenue)}</p></div><div><p className="text-xs font-bold uppercase text-[#8290a2]">Custo parceiro</p><p className="mt-2 text-xl font-extrabold text-[#1b2d48]">{money(cost)}</p></div><div className="rounded-lg bg-[#eaf6f1] p-3"><p className="text-xs font-bold uppercase text-[#287b5b]">Margem bruta</p><p className={margin>=0?"mt-2 text-xl font-extrabold text-[#18734f]":"mt-2 text-xl font-extrabold text-[#b43c54]"}>{money(margin)}</p></div></div><div className="mt-6 flex items-center justify-between rounded-lg bg-[#142947] px-5 py-4 text-white"><span className="text-sm font-semibold text-slate-200">Custo por CNPJ ativo</span><span className="text-xl font-extrabold">R$ 40,00</span></div></div><a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2876c7] px-6 py-4 font-extrabold text-white hover:bg-[#1f66b0]">Quero conversar sobre a parceria <ArrowUpRight className="h-4 w-4"/></a>
        </div>
      </div></section>
      <section id="duvidas" className="section-dark section-connector w-full scroll-mt-24" data-reveal="up"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#2876c7]">Perguntas frequentes</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">Tudo claro antes de começar.</h2><p className="mt-5 leading-7 text-muted-foreground">Nossa equipe pode explicar as condições e os próximos passos para o seu escritório.</p><a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-[#2876c7]">Falar com a equipe <ArrowUpRight className="h-4 w-4"/></a></div><div className="glass-card rounded-2xl divide-y divide-white/10 border border-white/10 px-6">{questions.map(([q,a],i)=><div key={q} className="py-5"><button type="button" className="flex w-full items-center justify-between gap-4 text-left font-bold text-foreground" aria-expanded={faq===i} onClick={()=>setFaq(faq===i?-1:i)}>{q}<ChevronDown className={faq===i?"h-5 w-5 rotate-180 text-[#2876c7]":"h-5 w-5 text-[#2876c7]"}/></button>{faq===i&&<p className="mt-3 max-w-3xl pr-8 text-sm leading-7 text-muted-foreground">{a}</p>}</div>)}</div></div></section>
      <section className="section-dark section-connector w-full" data-reveal="scale"><div className="max-w-7xl mx-auto px-6 py-24"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#a9d2ff]">Programa de Parceiros EmitaGo</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">Sua contabilidade pronta para oferecer mais uma solução.</h2><p className="mt-4 leading-7 text-slate-300">Conheça as condições para levar a emissão fiscal ao portfólio do seu escritório.</p></div><a href={WHATSAPP_PARTNERS} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-4 font-semibold text-accent-foreground hover:scale-[1.02] transition" style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}>Quero ser parceiro <ArrowUpRight className="h-5 w-5"/></a></div></section>
    </main>
    <footer className="border-t border-[#e2e9f1] bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8"><Link to="/" className="inline-flex items-center rounded-md bg-[#142947] px-4 py-2"><img src="/logo%20transparente%20letra%20braca.png" alt="EmitaGo" width={125} height={38} className="h-8 w-auto object-contain"/></Link><p className="text-xs text-[#7b8798]">© {new Date().getFullYear()} EmitaGo. Todos os direitos reservados.</p><Link to="/" className="text-sm font-bold text-[#2876c7]">Conhecer o EmitaGo</Link></div></footer>
  </div>;
}
