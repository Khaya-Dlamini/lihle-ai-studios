import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import work1 from "@/assets/portfolio-1.jpg";
import work2 from "@/assets/portfolio-2.jpg";
import work3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Lihle Websites" },
      { name: "description", content: "Selected projects from Lihle Websites — modern React websites, e-commerce builds and analytics dashboards crafted with AI-assisted workflows." },
      { property: "og:title", content: "Portfolio — Lihle Websites" },
      { property: "og:description", content: "Selected modern web projects crafted with React, TypeScript and AI." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  { img: work1, title: "Nimbus — SaaS Landing", tag: "Marketing site", desc: "Conversion-focused launch page for an AI SaaS, built with React + Vite." },
  { img: work2, title: "Verdant — Boutique Store", tag: "E-commerce", desc: "Premium product storefront with custom CMS integration and lightning-fast UX." },
  { img: work3, title: "Pulse — Analytics App", tag: "Product UI", desc: "Dashboard UI for a data analytics product, with rich charts and real-time data." },
  { img: work1, title: "Atlas — Studio Site", tag: "Agency", desc: "Brand-first portfolio site featuring smooth scroll and case studies." },
  { img: work2, title: "Bloom — Lifestyle Brand", tag: "E-commerce", desc: "DTC brand experience with editorial storytelling and AI-curated recommendations." },
  { img: work3, title: "Vector — Fintech Dashboard", tag: "Product UI", desc: "Trading dashboard with custom data viz and refined dark interface." },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">Work that ships and performs.</h1>
          <p className="mt-5 text-lg text-muted-foreground">A selection of recent projects across SaaS, e-commerce and product UI.</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.title + i} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} width={1280} height={896} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                <h2 className="mt-1 text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg"><Link to="/book">Start your project</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
