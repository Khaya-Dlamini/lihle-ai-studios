import { createFileRoute, Link } from "@tanstack/react-router";
import { Wand2, Target, BadgeDollarSign, AppWindow, LayoutPanelTop, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
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

// Reusable beveled card shape (matches hero visual language)
const CARD_BEVEL =
  "[clip-path:polygon(14px_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%,0_14px)]";
const TILE_BEVEL =
  "[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]";

function CodeCTA({
  to,
  label,
  tone = "primary",
}: {
  to: string;
  label: string;
  tone?: "primary" | "ghost";
}) {
  const style =
    tone === "primary"
      ? "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
      : "bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/15";
  return (
    <Link
      to={to}
      className={`inline-flex items-center px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest transition-colors ${TILE_BEVEL} ${style}`}
    >
      [ {label} ]
    </Link>
  );
}

function Laptop() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Lid */}
      <div className="relative rounded-t-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-lg bg-[oklch(0.16_0.02_250)] ring-1 ring-white/10">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3 rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60">hero.tsx</div>
          </div>

          {/* Code body */}
          <div className="grid grid-cols-[auto_1fr] gap-x-3 px-3 py-3 font-mono text-[10px] leading-5 sm:text-[11px] sm:leading-6 md:text-xs md:leading-7">
            <div className="select-none text-right text-white/25">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="min-w-0 text-white/85">
              <div><span className="text-white/40">// Modern websites, shipped smarter</span></div>
              <div>
                <span className="text-fuchsia-300">import</span>{" "}
                <span className="text-white">{"{ Studio }"}</span>{" "}
                <span className="text-fuchsia-300">from</span>{" "}
                <span className="text-amber-300">"lihle"</span>
                <span className="text-white/60">;</span>
              </div>
              <div>
                <span className="text-fuchsia-300">export</span>{" "}
                <span className="text-sky-300">function</span>{" "}
                <span className="text-emerald-300">Hero</span>
                <span className="text-white/60">() {"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-fuchsia-300">return</span>{" "}
                <span className="text-white/60">(</span>
              </div>
              <div className="pl-8"><span className="text-white/60">&lt;</span><span className="text-emerald-300">Studio</span><span className="text-white/60">&gt;</span></div>
              <div className="flex flex-wrap items-center gap-2 pl-12">
                <CodeCTA to="/book" label="Book a Project" />
                <CodeCTA to="/portfolio" label="View my work" tone="ghost" />
              </div>
              <div className="pl-8"><span className="text-white/60">&lt;/</span><span className="text-emerald-300">Studio</span><span className="text-white/60">&gt;</span></div>
              <div className="pl-4"><span className="text-white/60">);</span></div>
              <div><span className="text-white/60">{"}"}</span><span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-primary align-middle animate-caret" /></div>
            </div>
          </div>
        </div>
        {/* Notch/camera */}
        <div className="absolute inset-x-0 top-1 mx-auto h-1 w-16 rounded-full bg-black/40" />
      </div>
      {/* Base */}
      <div className="relative mx-auto h-3 w-[105%] -translate-x-[2.5%] rounded-b-xl bg-gradient-to-b from-neutral-700 to-neutral-900 ring-1 ring-white/10">
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-lg bg-black/60" />
      </div>
      <div className="mx-auto h-1 w-[92%] rounded-b-full bg-black/50 blur-[1px]" />
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO — laptop centerpiece */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_60%)]" />

        <div className="container-page relative flex min-h-screen flex-col items-center justify-center pt-28 pb-14 md:pt-32 md:pb-16">
          <div className="max-w-3xl text-center">
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Modern <span className="italic font-light text-white/80">websites</span>{" "}
              built <span className="text-gradient">smarter</span> with AI.
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/70 md:text-base">
              A premium digital studio building fast, affordable, and beautiful websites — powered by AI.
            </p>
          </div>

          <div className="mt-8 w-full md:mt-12">
            <Laptop />
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="container-page pt-14 pb-6 md:pt-16 md:pb-8">
        <div className="mx-auto max-w-4xl">
          <div className={`graphic-card p-6 md:p-10 ${CARD_BEVEL}`}>
            {/* diagonal accent */}
            <div className="pointer-events-none absolute -right-10 top-6 h-40 w-40 rotate-45 bg-primary/15 blur-2xl" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src={portrait.url}
                alt="Khayelihle Dlamini — Vibe coder & Front-end dev"
                className={`h-20 w-20 shrink-0 object-cover ring-2 ring-primary/40 md:h-24 md:w-24 ${TILE_BEVEL}`}
              />
              <div className="min-w-0">
                <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Khayelihle Dlamini</h2>
                <p className="mt-1 text-sm font-medium text-primary md:text-base">Vibe coder & Front-end dev</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-white/60">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Available for projects
                </p>
              </div>
            </div>
            <p className="relative mt-6 text-sm leading-relaxed text-white/75 md:text-base">
              I'm Khaya, a vibe coder who builds premium, AI-powered websites that are modern and designed to convert. I blend creative ideas, cutting-edge AI tools, and my knack for design to deliver results you can be proud of. And when I step away from the keyboard, you'll find me playing the flute and&nbsp;violin.
            </p>
            <div className="relative mt-6 grid grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: Sparkles, stat: "3+", label: "Years Building" },
                { icon: Layers, stat: "5+", label: "Projects" },
                { icon: HeartHandshake, stat: "98.2%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className={`border border-white/10 bg-white/5 p-3 text-center md:p-5 ${CARD_BEVEL}`}>
                  <div className={`mx-auto inline-flex h-8 w-8 items-center justify-center bg-primary/15 text-primary md:h-10 md:w-10 ${TILE_BEVEL}`}>
                    <s.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <p className="mt-2 font-display text-lg font-semibold text-white md:text-2xl">{s.stat}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/55 md:text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="pt-4 pb-2 md:pt-6 md:pb-4">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">We build AI-powered websites.</h2>
          </div>
        </div>

        <div className="mt-10 md:container-page">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {[
              { icon: Wand2, title: "Custom built websites", desc: "AI-assisted design, tuned for your brand." },
              { icon: Gauge, title: "Built for Speed", desc: "React + Vite. 95+ Lighthouse out of the box." },
              { icon: BadgeDollarSign, title: "Affordable transparent pricing", desc: "Premium websites that fit your budget." },
            ].map((s) => (
              <div
                key={s.title}
                className={`group w-[68%] sm:w-[54%] md:w-auto shrink-0 snap-start border border-primary/20 bg-card p-4 transition-all hover:border-primary/60 hover:shadow-lg md:min-w-0 md:p-6 ${CARD_BEVEL}`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground ${TILE_BEVEL}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold md:text-base">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
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
                className={`group relative w-[68%] sm:w-[54%] md:w-auto shrink-0 snap-start overflow-hidden border border-primary/20 bg-card md:min-w-0 ${CARD_BEVEL}`}
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

      {/* CTA */}
      <section className="container-page py-10 md:py-12">
        <div className={`graphic-card relative mx-auto max-w-xl overflow-hidden px-4 py-5 text-center md:px-6 md:py-6 ${CARD_BEVEL}`}>
          <div className="pointer-events-none absolute -left-8 -bottom-8 h-32 w-32 rotate-12 bg-primary/20 blur-2xl" />
          <div className="relative">
            <h2 className="font-display text-lg font-semibold text-white md:text-xl">Ready to launch something exceptional?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/70">We'll respond within two business day.</p>
            <div className="mt-5">
              <Link
                to="/book"
                className={`inline-flex items-center justify-center bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-glow transition-colors hover:bg-primary/90 ${TILE_BEVEL}`}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
