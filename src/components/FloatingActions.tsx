import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Altere aqui: número no formato internacional, apenas dígitos (ex.: 5511999999999)
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre o Emissor Fiscal.";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY + window.innerHeight;
        const total = document.documentElement.scrollHeight;
        // Mostra a partir da metade da página
        setShowTop(scrolled / total > 0.5);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={`grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-background/80 text-foreground shadow-lg backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-background ${
          showTop ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition hover:scale-105 hover:bg-[#20ba57]"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.32c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.19.28-.71.9-.87 1.08-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48h-.53c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.14.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.77.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33zM16.02 4C9.4 4 4 9.38 4 15.99c0 2.11.56 4.16 1.62 5.97L4 28l6.19-1.62a12 12 0 0 0 5.83 1.48h.01c6.62 0 12-5.38 12-11.99C28.03 9.38 22.65 4 16.02 4zm0 21.87h-.01a9.9 9.9 0 0 1-5.06-1.38l-.36-.22-3.67.96.98-3.58-.24-.37a9.86 9.86 0 0 1-1.52-5.28c0-5.46 4.44-9.9 9.89-9.9 2.64 0 5.13 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.46-4.44 9.88-9.9 9.88z" />
        </svg>
      </a>
    </div>
  );
}
