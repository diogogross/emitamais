import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Sparkles } from "lucide-react";
import logoEmissor from "@/assets/logo-emissor-fiscal.png.asset.json";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Emissor Fiscal" },
      {
        name: "description",
        content:
          "Termos e condições de uso da plataforma Emissor Fiscal: cadastro, planos, responsabilidades, propriedade intelectual, cancelamento e foro.",
      },
      { property: "og:title", content: "Termos de Uso — Emissor Fiscal" },
      {
        property: "og:description",
        content:
          "Condições que regem a contratação e uso da plataforma Emissor Fiscal para emissão de documentos fiscais e certificados digitais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://emissorfiscal.lovable.app/termos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://emissorfiscal.lovable.app/termos" }],
  }),
  component: TermosPage,
});

const sections = [
  {
    id: "aceitacao",
    title: "1. Aceitação dos termos",
    body: (
      <>
        <p>
          Ao acessar, cadastrar-se ou utilizar a plataforma <strong>Emissor Fiscal</strong> ("plataforma",
          "serviço", "nós"), você ("usuário", "contratante") declara ter lido, compreendido e aceito integralmente
          estes Termos de Uso e nossa{" "}
          <Link to="/privacidade" className="text-primary-glow underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <p className="mt-3">
          Caso não concorde com qualquer disposição, você deve interromper imediatamente o uso da plataforma.
        </p>
      </>
    ),
  },
  {
    id: "objeto",
    title: "2. Objeto",
    body: (
      <p>
        O Emissor Fiscal é um serviço online (SaaS) que permite a emissão, gestão e armazenamento de documentos
        fiscais eletrônicos (NFe, NFCe, NFSe, CTe, CTeOS, MDFe, NFPe, CIOT) e a intermediação para aquisição de
        certificados digitais (A1 e A3) junto a Autoridades Certificadoras (AC) credenciadas pelo ICP-Brasil.
      </p>
    ),
  },
  {
    id: "cadastro",
    title: "3. Cadastro e conta",
    body: (
      <>
        <p>Para utilizar a plataforma, o usuário deve:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>Ser maior de 18 anos ou possuir capacidade legal para contratar;</li>
          <li>Fornecer informações verdadeiras, completas e atualizadas;</li>
          <li>Manter a confidencialidade das credenciais de acesso;</li>
          <li>Notificar imediatamente qualquer uso não autorizado da conta.</li>
        </ul>
        <p className="mt-3">
          O usuário é o único responsável por todas as atividades realizadas em sua conta.
        </p>
      </>
    ),
  },
  {
    id: "planos",
    title: "4. Planos, preços e pagamento",
    body: (
      <>
        <p>
          Os planos, funcionalidades e valores estão disponíveis na plataforma e podem ser alterados mediante
          aviso prévio de 30 (trinta) dias, sem prejuízo dos contratos vigentes.
        </p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>A cobrança é recorrente, conforme periodicidade escolhida (mensal, semestral ou anual).</li>
          <li>O não pagamento em até 5 (cinco) dias da data de vencimento poderá suspender o acesso ao serviço.</li>
          <li>Reajustes anuais serão aplicados com base no IPCA/IBGE ou índice que vier a substituí-lo.</li>
          <li>
            O usuário poderá cancelar o plano a qualquer momento, sem multa, respeitado o período já pago.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "responsabilidades",
    title: "5. Responsabilidades do usuário",
    body: (
      <>
        <p>O usuário se compromete a:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>Utilizar a plataforma de forma lícita, ética e em conformidade com a legislação aplicável;</li>
          <li>Manter certificado digital válido e configurar corretamente parâmetros fiscais de sua empresa;</li>
          <li>Conferir o conteúdo dos documentos fiscais antes da transmissão às autoridades competentes;</li>
          <li>Não utilizar a plataforma para fraude, sonegação, evasão fiscal ou qualquer atividade ilícita;</li>
          <li>Não realizar engenharia reversa, cópia, revenda ou redistribuição do serviço.</li>
        </ul>
      </>
    ),
  },
  {
    id: "responsabilidades-plataforma",
    title: "6. Responsabilidades e limites do Emissor Fiscal",
    body: (
      <>
        <p>Comprometemo-nos a:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>Manter a plataforma disponível com <strong>SLA de 99,5%</strong> mensal, salvo manutenções programadas;</li>
          <li>Adotar medidas técnicas de segurança compatíveis com os padrões de mercado;</li>
          <li>Prestar suporte técnico nos canais e horários informados no plano contratado.</li>
        </ul>
        <p className="mt-3">
          O Emissor Fiscal não se responsabiliza por: (i) indisponibilidade dos webservices da SEFAZ ou de
          prefeituras; (ii) informações incorretas fornecidas pelo usuário; (iii) uso indevido da plataforma;
          (iv) prejuízos indiretos, lucros cessantes ou danos decorrentes de caso fortuito ou força maior.
        </p>
      </>
    ),
  },
  {
    id: "propriedade",
    title: "7. Propriedade intelectual",
    body: (
      <p>
        Todo o conteúdo da plataforma — marca, logotipo, interface, código-fonte, textos, imagens e
        documentação — é de propriedade exclusiva do Emissor Fiscal, protegido pelas leis brasileiras de
        propriedade intelectual (Lei 9.279/1996 e Lei 9.610/1998). É vedada qualquer reprodução, distribuição ou
        exploração sem autorização prévia e por escrito.
      </p>
    ),
  },
  {
    id: "dados",
    title: "8. Dados e privacidade",
    body: (
      <p>
        O tratamento de dados pessoais é regido pela nossa{" "}
        <Link to="/privacidade" className="text-primary-glow underline">
          Política de Privacidade
        </Link>
        , parte integrante destes Termos. Ao aceitar estes Termos, o usuário declara conhecer e concordar com as
        práticas ali descritas, em conformidade com a LGPD.
      </p>
    ),
  },
  {
    id: "suspensao",
    title: "9. Suspensão e cancelamento",
    body: (
      <>
        <p>
          Poderemos suspender ou encerrar o acesso do usuário à plataforma, com ou sem aviso prévio, nas
          seguintes hipóteses:
        </p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>Descumprimento destes Termos ou da Política de Privacidade;</li>
          <li>Inadimplência superior a 30 (trinta) dias;</li>
          <li>Suspeita de fraude, atividade ilícita ou uso abusivo;</li>
          <li>Ordem judicial ou administrativa.</li>
        </ul>
        <p className="mt-3">
          Após o cancelamento, os dados fiscais permanecerão armazenados pelos prazos legais aplicáveis e
          poderão ser exportados pelo usuário mediante solicitação.
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "10. Alterações destes Termos",
    body: (
      <p>
        Podemos atualizar estes Termos a qualquer momento. A versão vigente será sempre publicada nesta página,
        com a data da última alteração. O uso continuado da plataforma após alteração relevante implica
        aceitação da nova versão.
      </p>
    ),
  },
  {
    id: "foro",
    title: "11. Legislação aplicável e foro",
    body: (
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca da
        sede da contratada como competente para dirimir quaisquer controvérsias, com renúncia expressa a qualquer
        outro, por mais privilegiado que seja.
      </p>
    ),
  },
  {
    id: "contato",
    title: "12. Contato",
    body: (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
        <div><strong>Empresa:</strong> Emissor Fiscal</div>
        <div className="mt-1"><strong>E-mail:</strong> contato@emissorfiscal.com.br</div>
        <div className="mt-1"><strong>Suporte:</strong> suporte@emissorfiscal.com.br</div>
      </div>
    ),
  },
];

function TermosPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "var(--gradient-hero)" }}>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold">
            <img src={logoEmissor.url} alt="Emissor Fiscal" width={36} height={36} className="w-9 h-9 object-contain drop-shadow-[0_4px_12px_rgba(139,92,246,0.5)]" />
            <span>Emissor <span className="gradient-text">Fiscal</span></span>
          </Link>
          <Link to="/" className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4 flex items-center gap-2">
          <FileText className="w-3.5 h-3.5" /> Termos
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
          Termos de <span className="gradient-text">Uso</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: 12 de julho de 2026 · Leia atentamente antes de contratar.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
        {sections.map((s) => (
          <article key={s.id} id={s.id} className="glass-card p-6 md:p-8 scroll-mt-24">
            <h2 className="font-display text-2xl font-bold mb-3">{s.title}</h2>
            <div className="text-muted-foreground leading-relaxed">{s.body}</div>
          </article>
        ))}

        <div className="glass-card p-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary-glow" />
            Consulte também nossa{" "}
            <Link to="/privacidade" className="text-foreground font-medium underline underline-offset-4">
              Política de Privacidade
            </Link>
            .
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-accent-foreground hover:scale-[1.02] transition"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
        </div>
      </section>
    </div>
  );
}
