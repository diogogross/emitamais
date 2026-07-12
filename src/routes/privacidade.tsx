import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import logoEmissor from "@/assets/logo-emissor-fiscal.png.asset.json";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Emissor Fiscal" },
      {
        name: "description",
        content:
          "Política de Privacidade do Emissor Fiscal em conformidade com a LGPD e as diretrizes do Google. Saiba como coletamos, usamos e protegemos seus dados.",
      },
      { property: "og:title", content: "Política de Privacidade — Emissor Fiscal" },
      {
        property: "og:description",
        content:
          "Como o Emissor Fiscal trata dados pessoais, cookies, finalidades, bases legais e direitos do titular segundo a LGPD.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://emissorfiscal.lovable.app/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://emissorfiscal.lovable.app/privacidade" }],
  }),
  component: PrivacidadePage,
});

const sections = [
  {
    id: "quem-somos",
    title: "1. Quem somos",
    body: (
      <>
        <p>
          O <strong>Emissor Fiscal</strong> ("nós", "nosso" ou "plataforma") é um serviço online de emissão de
          documentos fiscais (NFe, NFCe, NFSe, CTe, CTeOS, MDFe, NFPe e CIOT) e comercialização de certificados
          digitais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as
          informações pessoais dos usuários da nossa plataforma e do nosso site.
        </p>
        <p className="mt-3">
          Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 —
          LGPD), o Marco Civil da Internet (Lei nº 12.965/2014) e as diretrizes do Google para editores e
          anunciantes (Google Publisher Policies e Google AdSense Program Policies).
        </p>
      </>
    ),
  },
  {
    id: "dados-coletados",
    title: "2. Dados que coletamos",
    body: (
      <>
        <p>Coletamos as seguintes categorias de dados pessoais:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>
            <strong>Dados cadastrais:</strong> nome completo, CPF, CNPJ, razão social, e-mail, telefone,
            endereço e dados bancários (quando aplicável para faturamento).
          </li>
          <li>
            <strong>Dados de acesso:</strong> credenciais de login, senha criptografada, logs de acesso, endereço
            IP, tipo de navegador, sistema operacional, data e hora de conexão.
          </li>
          <li>
            <strong>Dados fiscais:</strong> informações necessárias à emissão de documentos fiscais, incluindo
            certificados digitais (A1/A3), inscrição estadual, regime tributário e dados de clientes/produtos.
          </li>
          <li>
            <strong>Dados de navegação:</strong> páginas visitadas, tempo de permanência, cliques e interações,
            coletados por meio de cookies e tecnologias similares.
          </li>
          <li>
            <strong>Comunicações:</strong> mensagens enviadas ao suporte, formulários preenchidos e histórico de
            atendimento.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "3. Finalidades do tratamento",
    body: (
      <>
        <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>Prestar o serviço de emissão de documentos fiscais contratado.</li>
          <li>Emitir e gerenciar certificados digitais.</li>
          <li>Validar identidade em processos de emissão por videoconferência.</li>
          <li>Enviar comunicações operacionais, notificações e atualizações do serviço.</li>
          <li>Realizar cobrança, faturamento e emissão de notas fiscais de venda.</li>
          <li>Prevenir fraudes, garantir a segurança da plataforma e cumprir obrigações legais.</li>
          <li>Melhorar a experiência de uso, mediante análise de métricas agregadas de navegação.</li>
          <li>Enviar comunicações de marketing, mediante consentimento e com opção de descadastro.</li>
        </ul>
      </>
    ),
  },
  {
    id: "bases-legais",
    title: "4. Bases legais",
    body: (
      <>
        <p>O tratamento dos seus dados pessoais é realizado com fundamento nas seguintes bases legais da LGPD:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li><strong>Execução de contrato</strong> (art. 7º, V) — para prestar os serviços contratados.</li>
          <li><strong>Cumprimento de obrigação legal</strong> (art. 7º, II) — para atender exigências fiscais, tributárias e regulatórias.</li>
          <li><strong>Legítimo interesse</strong> (art. 7º, IX) — para segurança, prevenção a fraudes e melhoria dos serviços.</li>
          <li><strong>Consentimento</strong> (art. 7º, I) — para envio de comunicações de marketing e cookies não essenciais.</li>
        </ul>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "5. Compartilhamento de dados",
    body: (
      <>
        <p>
          Não vendemos seus dados pessoais. Podemos compartilhá-los com terceiros nas seguintes situações:
        </p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>
            <strong>Autoridades fiscais</strong> (SEFAZ, Receita Federal, prefeituras) — para transmissão dos
            documentos fiscais emitidos.
          </li>
          <li>
            <strong>Autoridades Certificadoras (AC)</strong> credenciadas pelo ICP-Brasil — para emissão de
            certificados digitais.
          </li>
          <li>
            <strong>Provedores de infraestrutura</strong> — hospedagem em nuvem, envio de e-mail, gateways de
            pagamento e ferramentas de analytics, todos sob obrigações contratuais de confidencialidade.
          </li>
          <li>
            <strong>Autoridades judiciais ou administrativas</strong> — mediante ordem judicial ou requisição
            legal.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies e tecnologias similares",
    body: (
      <>
        <p>
          Utilizamos cookies próprios e de terceiros para operar o site, medir audiência e personalizar conteúdo.
          Em conformidade com as diretrizes do Google e a LGPD, categorizamos os cookies em:
        </p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>
            <strong>Essenciais:</strong> necessários ao funcionamento da plataforma (autenticação, sessão,
            segurança). Não podem ser desativados.
          </li>
          <li>
            <strong>Analíticos:</strong> nos ajudam a entender o uso da plataforma (ex.: Google Analytics).
            Coletam dados de forma agregada e anônima.
          </li>
          <li>
            <strong>Publicidade:</strong> quando aplicável, utilizados por parceiros como o Google para exibir
            anúncios relevantes. O Google, como fornecedor terceiro, utiliza cookies para veicular anúncios com
            base em visitas anteriores dos usuários ao nosso site e a outros sites da internet.
          </li>
        </ul>
        <p className="mt-3">
          Você pode gerenciar suas preferências de cookies pelas configurações do seu navegador ou, quando
          aplicável, pelo banner de consentimento exibido no primeiro acesso. Você pode optar por não usar
          cookies do Google acessando as{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-glow underline"
          >
            Configurações de anúncios do Google
          </a>{" "}
          ou visitando{" "}
          <a
            href="https://www.aboutads.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-glow underline"
          >
            www.aboutads.info
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "direitos",
    title: "7. Seus direitos como titular",
    body: (
      <>
        <p>Nos termos da LGPD (art. 18), você pode a qualquer momento solicitar:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5">
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
          <li>Portabilidade dos dados a outro fornecedor;</li>
          <li>Eliminação dos dados tratados com base no consentimento;</li>
          <li>Informação sobre entidades com as quais compartilhamos seus dados;</li>
          <li>Revogação do consentimento.</li>
        </ul>
        <p className="mt-3">
          Para exercer qualquer desses direitos, envie um pedido para o e-mail informado na seção de contato.
        </p>
      </>
    ),
  },
  {
    id: "retencao",
    title: "8. Retenção e segurança",
    body: (
      <>
        <p>
          Retemos seus dados pessoais pelo tempo necessário ao cumprimento das finalidades descritas e das
          obrigações legais aplicáveis — em especial, o prazo mínimo de <strong>5 (cinco) anos</strong> para
          documentos fiscais, conforme legislação tributária.
        </p>
        <p className="mt-3">
          Adotamos medidas técnicas e administrativas de segurança compatíveis com os padrões de mercado:
          criptografia em trânsito (TLS 1.2+) e em repouso, controle de acesso baseado em função, monitoramento
          contínuo, backups periódicos e políticas internas de privacidade.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "9. Crianças e adolescentes",
    body: (
      <p>
        Nossa plataforma é destinada exclusivamente a pessoas maiores de 18 anos ou legalmente capazes de
        contratar. Não coletamos, de forma consciente, dados de crianças ou adolescentes.
      </p>
    ),
  },
  {
    id: "transferencia",
    title: "10. Transferência internacional",
    body: (
      <p>
        Alguns dos nossos fornecedores de infraestrutura podem estar localizados fora do Brasil. Nesses casos,
        garantimos que a transferência internacional ocorra apenas para países com nível adequado de proteção ou
        mediante cláusulas contratuais que assegurem os direitos previstos na LGPD.
      </p>
    ),
  },
  {
    id: "alteracoes",
    title: "11. Alterações desta política",
    body: (
      <p>
        Podemos atualizar esta Política de Privacidade a qualquer momento. A versão vigente estará sempre
        disponível nesta página, com a data da última atualização. Alterações relevantes serão comunicadas por
        e-mail ou aviso na plataforma.
      </p>
    ),
  },
  {
    id: "contato",
    title: "12. Encarregado de Dados (DPO) e contato",
    body: (
      <>
        <p>
          Para dúvidas, solicitações relativas a seus dados pessoais ou reclamações sobre o tratamento realizado,
          entre em contato com nosso Encarregado pelo Tratamento de Dados Pessoais (DPO):
        </p>
        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
          <div><strong>E-mail:</strong> privacidade@emissorfiscal.com.br</div>
          <div className="mt-1"><strong>Empresa:</strong> Emissor Fiscal</div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD)
          através do site{" "}
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-glow underline"
          >
            gov.br/anpd
          </a>
          .
        </p>
      </>
    ),
  },
];

function PrivacidadePage() {
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
          <ShieldCheck className="w-3.5 h-3.5" /> Privacidade
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
          Política de <span className="gradient-text">Privacidade</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: 12 de julho de 2026 · Em conformidade com a LGPD e as diretrizes do Google.
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
            Leia também nossos{" "}
            <Link to="/termos" className="text-foreground font-medium underline underline-offset-4">
              Termos de Uso
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
