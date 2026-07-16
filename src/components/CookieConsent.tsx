import { useEffect, useState } from "react";
import { Cookie, Shield, BarChart3, Megaphone, X, Check } from "lucide-react";

type Prefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "ef_cookie_consent_v1";

function loadPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
}

function savePrefs(p: Prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ necessary: true, analytics: true, marketing: false });

  useEffect(() => {
    const existing = loadPrefs();
    if (!existing) {
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    } else {
      setPrefs(existing);
    }
    const openHandler = () => {
      setShowPrefs(true);
      setOpen(true);
    };
    window.addEventListener("open-cookie-preferences", openHandler);
    return () => window.removeEventListener("open-cookie-preferences", openHandler);
  }, []);

  const acceptAll = () => {
    const p: Prefs = { necessary: true, analytics: true, marketing: true };
    savePrefs(p);
    setPrefs(p);
    setOpen(false);
    setShowPrefs(false);
  };
  const rejectAll = () => {
    const p: Prefs = { necessary: true, analytics: false, marketing: false };
    savePrefs(p);
    setPrefs(p);
    setOpen(false);
    setShowPrefs(false);
  };
  const saveChoice = () => {
    savePrefs(prefs);
    setOpen(false);
    setShowPrefs(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl bg-[oklch(0.18_0.08_295)]/95 backdrop-blur-xl ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
        {!showPrefs ? (
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[oklch(0.68_0.22_300)] to-[oklch(0.82_0.18_75)] flex items-center justify-center shadow-lg">
              <Cookie className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-display text-lg font-semibold">Este site usa cookies 🍪</h3>
              <p className="mt-1 text-sm text-white/75 leading-relaxed">
                Usamos cookies para melhorar sua experiência, lembrar suas preferências e entender como você usa nosso site.
                Você pode aceitar todos, recusar os opcionais ou personalizar. Em conformidade com a LGPD.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={acceptAll}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[oklch(0.82_0.18_75)] to-[oklch(0.75_0.20_45)] text-[oklch(0.2_0.05_60)] font-semibold text-sm hover:brightness-105 transition shadow-lg"
                >
                  <Check className="w-4 h-4" /> Aceitar todos
                </button>
                <button
                  onClick={rejectAll}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 text-white font-medium text-sm hover:bg-white/15 transition ring-1 ring-white/15"
                >
                  Apenas essenciais
                </button>
                <button
                  onClick={() => setShowPrefs(true)}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-white/85 font-medium text-sm hover:text-white transition"
                >
                  Personalizar
                </button>
              </div>
            </div>
            <button
              onClick={rejectAll}
              aria-label="Fechar"
              className="hidden sm:flex shrink-0 w-8 h-8 rounded-lg items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white font-display text-lg font-semibold flex items-center gap-2">
                  <Cookie className="w-5 h-5" /> Preferências de cookies
                </h3>
                <p className="mt-1 text-sm text-white/70">Escolha quais categorias você aceita. Você pode alterar a qualquer momento.</p>
              </div>
              <button
                onClick={() => setShowPrefs(false)}
                aria-label="Voltar"
                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <PrefRow
                icon={<Shield className="w-4 h-4" />}
                title="Essenciais"
                desc="Necessários para o funcionamento do site (login, segurança, navegação). Sempre ativos."
                checked
                disabled
              />
              <PrefRow
                icon={<BarChart3 className="w-4 h-4" />}
                title="Análise e desempenho"
                desc="Ajudam a entender como o site é usado para melhorarmos a experiência."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <PrefRow
                icon={<Megaphone className="w-4 h-4" />}
                title="Marketing"
                desc="Personalizam anúncios e conteúdos com base no seu interesse."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-2 justify-end">
              <button
                onClick={rejectAll}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 text-white font-medium text-sm hover:bg-white/15 transition ring-1 ring-white/15"
              >
                Recusar opcionais
              </button>
              <button
                onClick={saveChoice}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-[oklch(0.2_0.05_295)] font-semibold text-sm hover:bg-white/90 transition"
              >
                Salvar preferências
              </button>
              <button
                onClick={acceptAll}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[oklch(0.82_0.18_75)] to-[oklch(0.75_0.20_45)] text-[oklch(0.2_0.05_60)] font-semibold text-sm hover:brightness-105 transition shadow-lg"
              >
                <Check className="w-4 h-4" /> Aceitar todos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PrefRow({
  icon,
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className={`flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] ring-1 ring-white/10 ${disabled ? "opacity-90" : "hover:bg-white/[0.07] cursor-pointer"}`}>
      <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-semibold">{title}</div>
        <div className="text-white/65 text-xs mt-0.5">{desc}</div>
      </div>
      <span className="relative inline-flex shrink-0 mt-1">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className={`w-10 h-6 rounded-full transition ${checked ? "bg-gradient-to-r from-[oklch(0.68_0.22_300)] to-[oklch(0.82_0.18_75)]" : "bg-white/20"} ${disabled ? "opacity-70" : ""}`} />
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition ${checked ? "translate-x-4" : ""}`} />
      </span>
    </label>
  );
}

export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-cookie-preferences"));
  }
}
