import { useState } from "react";
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

  const shellClass = overlay
    ? "border-white/15 bg-white/10 text-white"
    : "border-charcoal/10 bg-white/70 text-charcoal";
  const linkIdle = overlay ? "text-white/70 hover:text-white" : "text-charcoal/60 hover:text-charcoal";
  const linkActive = overlay ? "data-[status=active]:text-white data-[status=active]:bg-white/10" : "data-[status=active]:text-charcoal data-[status=active]:bg-charcoal/5";
  const btnClass = overlay ? "text-white" : "text-charcoal";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page mt-3">
        <div className={`flex h-14 items-center justify-between rounded-2xl border px-4 backdrop-blur-xl backdrop-saturate-150 shadow-lg ${shellClass}`}>
          <Logo variant={overlay ? "light" : "dark"} />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${linkIdle} ${linkActive}`}
                activeProps={{ "data-status": "active" } as never}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild size="sm" className="shadow-glow">
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
      </div>
      {open && (
        <div className="md:hidden container-page mt-2">
          <div className={`rounded-2xl border p-3 backdrop-blur-xl ${shellClass}`}>
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${overlay ? "text-white/85 hover:bg-white/10" : "text-charcoal/85 hover:bg-charcoal/5"}`}
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
