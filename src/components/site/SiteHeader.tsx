import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOverlay = overlay && !scrolled;

  const glassClass = isOverlay
    ? "border-white/15 bg-white/10 text-white"
    : "border-charcoal/10 bg-white/70 text-charcoal";

  const linkIdle = isOverlay
    ? "text-white/75 hover:text-white"
    : "text-charcoal/60 hover:text-charcoal";

  const linkActive = isOverlay
    ? "data-[status=active]:text-white data-[status=active]:bg-white/15"
    : "data-[status=active]:text-charcoal data-[status=active]:bg-charcoal/5";

  const btnClass = isOverlay ? "text-white" : "text-charcoal";

  const mobileItemClass = isOverlay
    ? "text-white/85 hover:bg-white/10"
    : "text-charcoal/85 hover:bg-charcoal/5";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page mt-3 flex items-center justify-between gap-3">
        <Logo variant={isOverlay ? "light" : "dark"} size="md" />

        <nav
          className={`hidden md:flex items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-xl backdrop-saturate-150 shadow-lg ${glassClass}`}
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${linkIdle} ${linkActive}`}
              activeProps={{ "data-status": "active" } as never}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="shadow-glow rounded-full">
            <Link to="/book">Book a Project</Link>
          </Button>
        </div>

        <button
          type="button"
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ${btnClass}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden container-page mt-2">
          <div className={`rounded-2xl border p-3 backdrop-blur-xl ${glassClass}`}>
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${mobileItemClass}`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/book" onClick={() => setOpen(false)}>Book a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
