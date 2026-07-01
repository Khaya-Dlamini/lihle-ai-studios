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

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page mt-3">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 backdrop-blur-xl backdrop-saturate-150 shadow-lg">
          <Logo variant="light" />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white data-[status=active]:text-white data-[status=active]:bg-white/10"
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
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white"
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
          <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
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
