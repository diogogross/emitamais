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
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "Emissor de Notas Fiscais Online + Certificado Digital A1" },
      {
        name: "description",
        content:
          "Emita NFe, NFCe, NFSe, CTe, MDFe e CIOT em segundos. Certificado Digital A1 CPF ou CNPJ por R$ 129,90, 100% online, sem token e sem sair de casa.",
      },
      {
        name: "keywords",
        content:
          "emissor de notas fiscais, emissor de nota fiscal online, sistema emissor de NFe, NFCe online, NFSe online, CTe, MDFe, CIOT, certificado digital A1, certificado digital CNPJ, certificado digital CPF, certificado digital 129,90, emitir nota fiscal, emitir NFe, emissor fiscal",
      },
      { name: "author", content: "Emissor Fiscal" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "google", content: "notranslate" },
      { property: "og:site_name", content: "Emissor Fiscal" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Emissor de Notas Fiscais Online + Certificado Digital A1" },
      { property: "og:description", content: "NFe, NFCe, NFSe, CTe, MDFe e CIOT em segundos. Certificado Digital A1 CPF/CNPJ por R$ 129,90 — 100% online." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Emissor de Notas Fiscais Online + Certificado Digital A1" },
      { name: "twitter:description", content: "NFe, NFCe, NFSe, CTe, MDFe e CIOT em segundos. Certificado Digital A1 CPF/CNPJ por R$ 129,90." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14bc8027-cdd7-4c7b-bf2c-d91349be351d/id-preview-0ee3ed8f--e17eda4c-f80b-47a5-ac6e-787cf4adb403.lovable.app-1783840968565.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14bc8027-cdd7-4c7b-bf2c-d91349be351d/id-preview-0ee3ed8f--e17eda4c-f80b-47a5-ac6e-787cf4adb403.lovable.app-1783840968565.png" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14bc8027-cdd7-4c7b-bf2c-d91349be351d/id-preview-0ee3ed8f--e17eda4c-f80b-47a5-ac6e-787cf4adb403.lovable.app-1783840968565.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14bc8027-cdd7-4c7b-bf2c-d91349be351d/id-preview-0ee3ed8f--e17eda4c-f80b-47a5-ac6e-787cf4adb403.lovable.app-1783840968565.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: indexCss },
      { rel: "icon", href: "/__l5e/assets-v1/704b38d6-7a8e-43ae-a08d-dd51dfde9ad4/logo-emissor-fiscal.png", type: "image/png" },
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
              "@id": "https://emissorfiscal.lovable.app/#organization",
              name: "Emissor Fiscal",
              url: "https://emissorfiscal.lovable.app/",
              logo: "https://emissorfiscal.lovable.app/__l5e/assets-v1/704b38d6-7a8e-43ae-a08d-dd51dfde9ad4/logo-emissor-fiscal.png",
              description:
                "Sistema emissor de notas fiscais eletrônicas (NFe, NFCe, NFSe, CTe, MDFe, CIOT) e certificado digital A1 CPF e CNPJ.",
              areaServed: "BR",
            },
            {
              "@type": "WebSite",
              "@id": "https://emissorfiscal.lovable.app/#website",
              url: "https://emissorfiscal.lovable.app/",
              name: "Emissor Fiscal",
              inLanguage: "pt-BR",
              publisher: { "@id": "https://emissorfiscal.lovable.app/#organization" },
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
    </QueryClientProvider>
  );
}
