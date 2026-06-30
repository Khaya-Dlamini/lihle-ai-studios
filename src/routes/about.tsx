import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Brain, Code2, Database, Rocket } from "lucide-react";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lihle Websites" },
      { name: "description", content: "Meet the team behind Lihle Websites — a frontend-first studio combining React, TypeScript and AI to ship modern digital experiences." },
      { property: "og:title", content: "About — Lihle Websites" },
      { property: "og:description", content: "A frontend-first studio combining React, TypeScript and AI to ship modern digital experiences." },
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
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
            <img src={founder} alt="Lihle, founder of Lihle Websites" width={1024} height={1280} className="relative rounded-3xl object-cover shadow-lg" loading="eager" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</span>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">A frontend-first studio for the AI era.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              I'm Lihle — a Frontend Developer building modern, performant websites
              for ambitious brands. Lihle Websites blends great design with
              production-grade engineering and an AI-assisted workflow.
            </p>
            <p className="mt-4 text-muted-foreground">
              I specialise in React, Vite, TypeScript and Tailwind CSS, with a deep
              focus on responsive design, SEO, accessibility, UI/UX, APIs and
              deployment. I'm passionate about AI / Machine Learning and data
              science, and I bring that curiosity into every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link to="/book">Work with me</Link></Button>
              <Button asChild variant="outline"><Link to="/services">Services</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-24">
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
