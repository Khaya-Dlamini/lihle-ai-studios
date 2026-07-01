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
      <section className="container-page py-24">
        <div className="mx-auto max-w-3xl text-center">
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
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild><Link to="/book">Work with me</Link></Button>
            <Button asChild variant="outline"><Link to="/services">Services</Link></Button>
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
