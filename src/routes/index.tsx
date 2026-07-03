import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Zap, Search, Award, Rocket, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroBg from "@/assets/hero-bg.jpg";
import work1 from "@/assets/portfolio-1.jpg";
import work2 from "@/assets/portfolio-2.jpg";
import portrait from "@/assets/lihle-portrait.jpg.asset.json";

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

// Beveled / cut-corner button (graphic-designer feel)
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

        <div className="container-page relative flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Modern <span className="italic font-light text-white/80">websites</span>
              <br />
              built <span className="text-gradient">smarter</span>
              <br />
              with AI.
            </h1>
            <p className="mt-5 max-w-md text-sm text-white/70 md:text-base">
              A premium digital studio building fast, beautiful websites powered by AI.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BevelLink to="/book">Book a project</BevelLink>
              <BevelLink to="/portfolio" variant="ghost">View my work</BevelLink>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME — intro card inspired by reference */}
      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border surface-charcoal p-6 md:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src={portrait.url}
                alt="Lihle — Frontend Developer & AI Enthusiast"
                className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-2 ring-primary/40 md:h-24 md:w-24"
              />
              <div className="min-w-0">
                <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Lihle</h2>
                <p className="mt-1 text-sm font-medium text-primary md:text-base">Frontend Developer &amp; AI Enthusiast</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-white/60">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Available for projects
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">
              I build premium, conversion-focused websites that combine beautiful design with powerful
              technology. My work sits at the intersection of modern frontend engineering and AI —
              every project is faster, smarter, and more impactful.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: Award, stat: "3+", label: "Years Building" },
                { icon: Rocket, stat: "20+", label: "Projects Shipped" },
                { icon: Users, stat: "100%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center md:p-5">
                  <s.icon className="mx-auto h-4 w-4 text-primary md:h-5 md:w-5" />
                  <p className="mt-2 font-display text-lg font-semibold text-white md:text-2xl">{s.stat}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/55 md:text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — horizontal scroll on mobile, grid on md+ */}
      <section className="pt-4 pb-6 md:pt-6 md:pb-8">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">We build AI-powered websites.</h2>
          </div>
        </div>

        <div className="mt-10 md:container-page">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {[
              { icon: Bot, title: "AI-First Design", desc: "AI-assisted design and copy, tuned for your brand." },
              { icon: Zap, title: "Built for Speed", desc: "React + Vite. 95+ Lighthouse out of the box." },
              { icon: Search, title: "SEO Ready", desc: "Structured data, sitemaps and metadata for ranking." },
            ].map((s) => (
              <div
                key={s.title}
                className="group w-[68%] sm:w-[54%] md:w-auto shrink-0 snap-start rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-lg md:min-w-0 md:p-6"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:h-10 md:w-10">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-sm font-semibold md:text-base">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK — 2 items, horizontal scroll on mobile */}
      <section className="bg-muted/40 pt-14 pb-6 md:pt-16 md:pb-8">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Recent Projects</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-medium text-primary hover:underline">All projects →</Link>
          </div>
        </div>

        <div className="mt-10 md:container-page">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0">
            {[
              { img: work1, title: "SaaS Landing", tag: "Marketing" },
              { img: work2, title: "Boutique Store", tag: "E-commerce" },
            ].map((p) => (
              <article
                key={p.title}
                className="group relative w-[68%] sm:w-[54%] md:w-auto shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card md:min-w-0"
              >
                <img src={p.img} alt={p.title} loading="lazy" className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-72 lg:h-80" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 md:p-5">
                  <p className="text-xs uppercase tracking-widest text-primary-glow">{p.tag}</p>
                  <h3 className="mt-1 text-base font-semibold text-white md:text-lg">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — compact card */}
      <section className="container-page py-10 md:py-12">
        <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl surface-charcoal px-4 py-5 text-center md:px-6 md:py-6">
          <div className="absolute inset-0 mesh-bg opacity-60" />
          <div className="relative">
            <h2 className="font-display text-lg font-semibold text-white md:text-xl">Ready to launch something exceptional?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/70">We'll respond within one business day.</p>
            <div className="mt-5">
              <Link
                to="/book"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90 md:px-6 md:py-2.5"
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
