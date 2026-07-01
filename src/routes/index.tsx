import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Bot, Zap, Search, Gauge } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import work1 from "@/assets/portfolio-1.jpg";
import work2 from "@/assets/portfolio-2.jpg";
import work3 from "@/assets/portfolio-3.jpg";

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

function HomePage() {
  return (
    <SiteLayout transparentHeader>
      {/* Hero — full-bleed background */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/60 to-charcoal/90" />

        <div className="container-page relative flex min-h-screen flex-col items-center justify-center py-32 text-center">
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Modern Websites
            <br />
            <span className="text-gradient">Built Smarter</span> with AI
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
            A premium digital studio building fast, beautiful websites powered by AI.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/book">Book a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/portfolio">View my work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What we do — single focus */}
      <section className="container-page py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">We build AI-powered websites.</h2>
          <p className="mt-4 text-muted-foreground">One focus, done exceptionally well — modern, fast websites designed and built with AI.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: Bot, title: "AI-First Design", desc: "AI-assisted design and copy, tuned for your brand and audience." },
            { icon: Zap, title: "Built for Speed", desc: "React, Vite and Tailwind — 95+ Lighthouse out of the box." },
            { icon: Search, title: "SEO Ready", desc: "Structured data, sitemaps and metadata engineered for ranking." },
          ].map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work — asymmetric */}
      <section className="bg-muted/40 py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Recent work</span>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Selected projects</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-medium text-primary hover:underline">All projects →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-6 md:grid-rows-2">
            {[
              { img: work1, title: "SaaS Landing", tag: "Marketing", cls: "md:col-span-4 md:row-span-2" },
              { img: work2, title: "Boutique Store", tag: "E-commerce", cls: "md:col-span-2" },
              { img: work3, title: "Analytics Dashboard", tag: "Product UI", cls: "md:col-span-2" },
            ].map((p) => (
              <article key={p.title} className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${p.cls}`}>
                <img src={p.img} alt={p.title} loading="lazy" className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-5">
                  <p className="text-xs uppercase tracking-widest text-primary-glow">{p.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl surface-charcoal px-8 py-16 text-center md:px-16 md:py-24">
          <div className="absolute inset-0 mesh-bg opacity-70" />
          <div className="relative">
            <Gauge className="mx-auto h-10 w-10 text-primary-glow" />
            <h2 className="mt-5 font-display text-3xl font-semibold text-white md:text-5xl">Ready to launch something exceptional?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">Tell us about your project — we'll respond within one business day.</p>
            <div className="mt-8">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/book">Book your project <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
