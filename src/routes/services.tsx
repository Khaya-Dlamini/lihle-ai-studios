import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Bot, Code2, Gauge, Layers, Search, ShoppingBag, Smartphone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lihle Websites" },
      { name: "description", content: "Premium web design and development services: React websites, AI-assisted builds, SEO, UI/UX, e-commerce and ongoing support." },
      { property: "og:title", content: "Services — Lihle Websites" },
      { property: "og:description", content: "Premium web design and development services with React, AI, SEO and UI/UX." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Custom Website Development", desc: "Hand-crafted React, Vite and TypeScript builds — fast, accessible and built to scale." },
  { icon: Bot, title: "AI-Assisted Web Development", desc: "We integrate AI throughout design and delivery so you ship more, faster, without losing craft." },
  { icon: Search, title: "SEO & Structured Data", desc: "Technical SEO, schema.org structured data, sitemaps and Core Web Vitals tuned for ranking." },
  { icon: Layers, title: "UI / UX Design", desc: "Clean, modern interfaces grounded in research and conversion best practices." },
  { icon: Smartphone, title: "Responsive Web Design", desc: "Pixel-perfect on every screen — from mobile to ultrawide displays." },
  { icon: ShoppingBag, title: "Landing & E-commerce", desc: "High-converting marketing sites, product pages and storefronts." },
  { icon: Gauge, title: "Performance Optimisation", desc: "Auditing, refactoring and shipping for 95+ Lighthouse scores." },
  { icon: Sparkles, title: "Care & Growth", desc: "Ongoing improvements, analytics and AI-driven content workflows." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">Everything you need to launch a premium website.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Strategy, design, engineering and AI workflows — under one roof.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><s.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl surface-charcoal px-8 py-14 md:px-16 md:py-20">
          <div className="absolute inset-0 mesh-bg opacity-60" />
          <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Not sure which service fits?</h2>
              <p className="mt-3 max-w-lg text-white/70">Book a free consultation and we'll map out a plan that matches your goals and budget.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="shadow-glow"><Link to="/book">Book a consultation</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"><Link to="/contact">Contact us</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
