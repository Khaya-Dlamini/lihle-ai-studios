import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Wand2, Gauge, BadgeDollarSign, Target } from "lucide-react";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

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
  { icon: Wand2, title: "Custom built websites", desc: "AI-assisted design, copy and imagery tailored to your brand.", surface: "bg-fuchsia-500/10 border-fuchsia-400/40 hover:border-fuchsia-400/70", tile: "bg-fuchsia-500/15 text-fuchsia-500" },
  { icon: Gauge, title: "We build websites fast", desc: "From brief to live launch in days, not months — powered by modern tooling.", surface: "bg-sky-500/10 border-sky-400/40 hover:border-sky-400/70", tile: "bg-sky-500/15 text-sky-500" },
  { icon: BadgeDollarSign, title: "Affordable & Transparent", desc: "Premium websites priced to fit real-world budgets.", surface: "bg-amber-400/10 border-amber-400/40 hover:border-amber-400/70", tile: "bg-amber-400/20 text-amber-600" },
  { icon: Target, title: "Conversion Focused", desc: "Clean UX and clear calls-to-action that turn visitors into customers.", surface: "bg-emerald-500/10 border-primary/40 hover:border-primary/70", tile: "bg-primary/15 text-primary" },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow label="services" />
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">We build AI websites.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            One focus, done exceptionally well. Every project we ship is a modern, AI-powered website —
            crafted end-to-end from strategy to launch.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((s) => (
            <div key={s.title} className={`group clip-bevel border p-6 transition-all hover:shadow-lg ${s.surface}`}>
              <div className={`inline-flex h-11 w-11 clip-bevel-sm items-center justify-center ${s.tile}`}><s.icon className="h-5 w-5" /></div>
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
