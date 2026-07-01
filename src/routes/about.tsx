import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Brain, Code2, Database, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lihle Websites" },
      { name: "description", content: "A frontend-first studio combining React, TypeScript and AI to build modern digital experiences." },
      { property: "og:title", content: "About — Lihle Websites" },
      { property: "og:description", content: "A frontend-first studio combining React, TypeScript and AI." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const interests = [
  { icon: Code2, title: "Frontend Engineering", desc: "React, Vite, TypeScript, Tailwind CSS." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Practical AI integrations for the web." },
  { icon: Database, title: "Data Science", desc: "Data-driven products and analytics." },
  { icon: Rocket, title: "Shipping Products", desc: "From idea to deployment, fast." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Decorative design */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklab, var(--color-primary) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-primary) 12%, transparent) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
        </div>

        <div className="container-page grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</span>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">A frontend-first studio for the AI era.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              I'm Lihle — a frontend developer building modern, performant websites for ambitious brands.
              Lihle Websites blends great design with production-grade engineering and an AI-assisted workflow.
            </p>
            <p className="mt-4 text-muted-foreground">
              I specialise in React, Vite, TypeScript and Tailwind CSS, with a deep focus on responsive design,
              SEO, accessibility and UI/UX. I'm passionate about AI, machine learning and data science.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link to="/book">Work with me</Link></Button>
              <Button asChild variant="outline"><Link to="/services">Services</Link></Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 to-primary-glow/20 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-card shadow-lg">
              <div className="absolute inset-0 surface-charcoal" />
              <div className="absolute inset-0 mesh-bg opacity-80" />
              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex items-center justify-between text-white/60 text-xs uppercase tracking-widest">
                  <span>Lihle · 2026</span>
                  <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse-glow" />
                </div>
                <div>
                  <p className="font-display text-4xl font-semibold text-white md:text-5xl leading-tight">
                    Design. <br /> Engineer. <br /> <span className="text-gradient">Automate.</span>
                  </p>
                  <p className="mt-6 text-sm text-white/60">
                    A frontend engineer merging craft with AI to ship faster, smarter websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">What I focus on</h2>
            <p className="mt-3 text-muted-foreground">A modern toolkit, used with intention.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {interests.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><s.icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
