import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import indexCss from "../index.css?url";

import { FloatingActions } from "../components/FloatingActions";
import brandMark from "@/assets/emita-mark.svg";
import ogImage from "@/assets/hero-person.webp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("Erro no limite da aplicação:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro ao carregar o conteúdo. Tente novamente ou volte para a página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0f0722" },
      { title: "EmitaGo | Emissor de Notas Fiscais Online" },
      {
        name: "description",
        content:
          "Emita NFe, NFCe, NFSe, CTe, MDFe e CIOT online. Certificado Digital A1 para CPF ou CNPJ, com emissão online por videoconferência.",
      },
      { name: "author", content: "EmitaGo" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "google", content: "notranslate" },
      { property: "og:site_name", content: "EmitaGo" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Emissor de Notas Fiscais Online | NFe, NFCe, NFSe, CTe e MDFe" },
      { property: "og:description", content: "NFe, NFCe, NFSe, CTe, MDFe e CIOT online. Certificado Digital A1 CPF/CNPJ com emissão online." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Emissor de Notas Fiscais Online | NFe, NFCe, NFSe, CTe e MDFe" },
      { name: "twitter:description", content: "NFe, NFCe, NFSe, CTe, MDFe e CIOT online. Certificado Digital A1 CPF/CNPJ com emissão online." },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: "EmitaGo — emissor de notas fiscais online" },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "EmitaGo — emissor de notas fiscais online" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: indexCss },
      { rel: "icon", href: brandMark, type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://emitago.com.br/#organization",
              name: "EmitaGo",
              alternateName: "EmitaGo",
              url: "https://emitago.com.br/",
              logo: {
                "@type": "ImageObject",
                url: "https://emitago.com.br/favicon-emita.svg",
              },
              description:
                "Sistema emissor de notas fiscais eletrônicas (NFe, NFCe, NFSe, CTe, MDFe, CIOT) e certificado digital A1 CPF e CNPJ.",
              areaServed: "BR",
            },
            {
              "@type": "WebSite",
              "@id": "https://emitago.com.br/#website",
              url: "https://emitago.com.br/",
              name: "EmitaGo",
              alternateName: "EmitaGo",
              inLanguage: "pt-BR",
              publisher: { "@id": "https://emitago.com.br/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <FloatingActions />
    </QueryClientProvider>
  );
}
