import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

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
        href="https://wa.me/5554991193146?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20o%20EmitaGo."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com especialista pelo WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 hover:bg-primary/90"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}
