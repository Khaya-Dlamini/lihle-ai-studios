import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Wand2, Gauge, BadgeDollarSign, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lihle Websites" },
      { name: "description", content: "We build modern AI-powered websites — fast, beautiful, SEO-ready." },
      { property: "og:title", content: "Services — Lihle Websites" },
      { property: "og:description", content: "We build modern AI-powered websites." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const features = [
  { icon: Bot, title: "AI-Powered Design", desc: "AI-assisted design, copy and imagery tailored to your brand." },
  { icon: Zap, title: "Built for Speed", desc: "Modern React stack tuned for 95+ Lighthouse performance." },
  { icon: Search, title: "SEO Ready", desc: "Structured data, sitemaps and metadata engineered for ranking." },
  { icon: Sparkles, title: "Conversion Focused", desc: "Clean UX and clear calls-to-action that turn visitors into customers." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">We build AI websites.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            One focus, done exceptionally well. Every project we ship is a modern, AI-powered website —
            crafted end-to-end from strategy to launch.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><s.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl surface-charcoal px-8 py-16 md:px-16 md:py-20">
          <div className="absolute inset-0 mesh-bg opacity-60" />
          <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Let's talk about your site.</h2>
              <p className="mt-3 max-w-lg text-white/70">Free consultation, no pressure — we'll map out a plan that fits your goals and budget.</p>
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
