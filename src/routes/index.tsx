import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, Search, Gauge, Bot, Layers, CheckCircle2 } from "lucide-react";
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
      { name: "description", content: "Premium digital agency designing fast, accessible, conversion-focused websites with React, TypeScript and AI-assisted development." },
      { property: "og:title", content: "Lihle Websites — Modern Websites Built Smarter with AI" },
      { property: "og:description", content: "Premium digital agency designing fast, accessible, conversion-focused websites with React, TypeScript and AI." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stack = ["React", "Vite", "TypeScript", "Tailwind CSS", "AI Tooling", "SEO", "UI/UX", "APIs", "Git", "Deployment"];

const services = [
  { icon: Code2, title: "Modern Web Development", desc: "Production-grade React, Vite and TypeScript builds engineered for speed and scale." },
  { icon: Bot, title: "AI-Assisted Delivery", desc: "We pair human craft with AI tooling to ship better websites, faster." },
  { icon: Search, title: "SEO & Performance", desc: "Technical SEO, structured data and Core Web Vitals tuned from day one." },
  { icon: Layers, title: "UI / UX Design", desc: "Clean, accessible interfaces designed to convert visitors into customers." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden surface-charcoal">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
        <div className="container-page relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
              <Sparkles className="h-3.5 w-3.5" /> AI-Powered Web Agency
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Modern Websites
              <br />
              <span className="text-gradient">Built Smarter</span> with AI
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
              Lihle Websites is a premium digital studio crafting fast,
              conversion-focused experiences with React, TypeScript and AI-assisted
              development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/book">Book a project <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link to="/portfolio">View work</Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "98+", v: "Lighthouse" },
                { k: "24/7", v: "Performance" },
                { k: "AI", v: "Workflow" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-semibold text-white">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-widest text-white/50">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <img src={work1} alt="Premium website built by Lihle Websites" width={1280} height={896} className="rounded-2xl" loading="eager" />
            </div>
          </div>
        </div>
        {/* Marquee stack */}
        <div className="relative border-y border-white/10 bg-charcoal/60 py-5">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/50">
            {stack.map((s) => (<span key={s}>{s}</span>))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-5xl">A modern stack. A smarter process.</h2>
          <p className="mt-4 text-muted-foreground">From strategy to launch, we blend craft, code and AI to deliver websites that perform.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline"><Link to="/services">Explore all services <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Recent work</span>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Selected projects</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-medium text-primary hover:underline">All projects →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { img: work1, title: "SaaS Landing", tag: "Marketing" },
              { img: work2, title: "Boutique E-commerce", tag: "Shopify · Custom" },
              { img: work3, title: "Analytics Dashboard", tag: "Product UI" },
            ].map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} width={1280} height={896} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our process</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Designed to ship. Engineered to convert.</h2>
            <p className="mt-4 text-muted-foreground">Every project follows a focused, transparent workflow — from discovery to launch and beyond.</p>
            <ul className="mt-6 space-y-3">
              {["Discovery & strategy", "UI/UX design", "AI-assisted build", "SEO, testing & launch"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { n: "01", t: "Discover", d: "Goals, audience, scope." },
              { n: "02", t: "Design", d: "Wireframes & UI system." },
              { n: "03", t: "Build", d: "React + AI workflow." },
              { n: "04", t: "Launch", d: "SEO, analytics, ship." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-3xl font-semibold text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl surface-charcoal px-8 py-14 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 mesh-bg opacity-60" />
          <div className="relative">
            <Gauge className="mx-auto h-10 w-10 text-primary-glow" />
            <h2 className="mt-5 font-display text-3xl font-semibold text-white md:text-5xl">Ready to launch something exceptional?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">Tell us about your project. We'll respond within one business day with next steps.</p>
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
