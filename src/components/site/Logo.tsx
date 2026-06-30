import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-charcoal";
  const subColor = variant === "light" ? "text-white/60" : "text-muted-foreground";
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Lihle Websites home">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-glow transition-transform group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 6v18h14" />
          <circle cx="10" cy="6" r="1.6" fill="currentColor" />
          <circle cx="24" cy="24" r="1.6" fill="currentColor" />
          <path d="M14 14h4M16 14v6" opacity="0.6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
          Lihle<span className="text-primary">.</span>
        </span>
        <span className={`text-[10px] uppercase tracking-[0.18em] ${subColor}`}>Websites</span>
      </span>
    </Link>
  );
}
