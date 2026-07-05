import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
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

  // Both overlay (light hero) and scrolled states use dark-on-light glass now
  const glassClass = "border-charcoal/10 bg-white/70 text-charcoal";
  const linkIdle = "text-charcoal/60 hover:text-charcoal";
  const linkActive = "data-[status=active]:text-charcoal data-[status=active]:bg-charcoal/5";
  const btnClass = "text-charcoal";
  const mobileItemClass = "text-charcoal/85 hover:bg-charcoal/5";
  void isOverlay;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page mt-3 flex items-center justify-between gap-3">
        <Logo variant="dark" size="md" />

        <div
          className={`hidden md:flex items-center gap-1 rounded-full border pl-2 pr-1.5 py-1.5 backdrop-blur-xl backdrop-saturate-150 shadow-lg ${glassClass}`}
        >
          <nav className="flex items-center gap-1" aria-label="Primary">
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
          <Button asChild className="ml-1 h-9 rounded-full px-5 shadow-glow">
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
