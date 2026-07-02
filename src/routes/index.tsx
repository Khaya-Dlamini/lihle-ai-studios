import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Zap, Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroBg from "@/assets/hero-bg.jpg";
import work1 from "@/assets/portfolio-1.jpg";
import work2 from "@/assets/portfolio-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lihle Websites — Modern Websites Built Smarter with AI" },
      { name: "description", content: "AI-powered digital agency crafting fast, conversion-focused websites with modern technology." },
      { property: "og:title", content: "Lihle Websites — Modern Websites Built Smarter with AI" },
      { property: "og:description", content: "AI-powered digital agency crafting fast, conversion-focused websites." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

// Beveled / cut-corner button (graphic-designer feel, referencing user's bracketed tag)
function BevelLink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  const clip =
    "[clip-path:polygon(14px_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%,0_14px)]";
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all";
  const style =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
      : "bg-white/5 text-white ring-1 ring-inset ring-white/25 hover:bg-white/10 backdrop-blur";
  return (
    <Link to={to} className={`${base} ${style} ${clip}`}>
      [ {children} ]
    </Link>
  );
}

function HomePage() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO — asymmetric, text anchored bottom-left */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/70 to-charcoal/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_55%)]" />

        {/* corner marks — designer detail */}
        <div className="pointer-events-none absolute inset-4 hidden md:block">
          <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-white/30" />
          <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-white/30" />
          <span className="absolute left-0 bottom-0 h-6 w-6 border-l border-b border-white/30" />
          <span className="absolute right-0 bottom-0 h-6 w-6 border-r border-b border-white/30" />
        </div>

        {/* vertical index label */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/50 md:block">
          Lihle / 001 — AI Studio
        </div>

        <div className="container-page relative flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-primary-glow">
              <span className="h-px w-10 bg-primary-glow/60" />
              Studio · Est. 2025
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Modern <span className="italic font-light text-white/80">websites</span>
              <br />
              built <span className="text-gradient">smarter</span>
              <br />
              with AI.
            </h1>
            <p className="mt-6 max-w-md text-sm text-white/70 md:text-base">
              A premium digital studio building fast, beautiful websites powered by AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BevelLink to="/book">Book a project</BevelLink>
              <BevelLink to="/portfolio" variant="ghost">View my work</BevelLink>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — horizontal scroll on mobile, grid on md+ */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">We build AI-powered websites.</h2>
            <p className="mt-3 text-muted-foreground">One focus, done exceptionally well.</p>
          </div>
        </div>

        <div className="mt-10 md:container-page">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {[
              { icon: Bot, title: "AI-First Design", desc: "AI-assisted design and copy, tuned for your brand." },
              { icon: Zap, title: "Built for Speed", desc: "React + Vite. 95+ Lighthouse out of the box." },
              { icon: Search, title: "SEO Ready", desc: "Structured data, sitemaps and metadata for ranking." },
            ].map((s) => (
              <div
                key={s.title}
                className="group min-w-[75%] shrink-0 snap-start rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg sm:min-w-[55%] md:min-w-0 md:p-7"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-semibold md:text-lg">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK — 2 items, horizontal scroll on mobile */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Recent work</span>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Selected projects</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-medium text-primary hover:underline">All projects →</Link>
          </div>
        </div>

        <div className="mt-10 md:container-page">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0">
            {[
              { img: work1, title: "SaaS Landing", tag: "Marketing" },
              { img: work2, title: "Boutique Store", tag: "E-commerce" },
            ].map((p) => (
              <article
                key={p.title}
                className="group relative min-w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card sm:min-w-[65%] md:min-w-0"
              >
                <img src={p.img} alt={p.title} loading="lazy" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-5">
                  <p className="text-xs uppercase tracking-widest text-primary-glow">{p.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — compact card */}
      <section className="container-page py-16 md:py-20">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl surface-charcoal px-6 py-8 text-center md:px-10 md:py-10">
          <div className="absolute inset-0 mesh-bg opacity-60" />
          <div className="relative">
            <h2 className="font-display text-xl font-semibold text-white md:text-2xl">Ready to launch something exceptional?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/70">We'll respond within one business day.</p>
            <div className="mt-5">
              <Link
                to="/book"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
              >
                Book your project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
