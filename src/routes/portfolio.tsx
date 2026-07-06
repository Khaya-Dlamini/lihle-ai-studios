import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import lumen from "@/assets/portfolio-lumen.png.asset.json";
import artist from "@/assets/portfolio-artist.png.asset.json";
import fashion from "@/assets/portfolio-fashion.jpg.asset.json";
import potArts from "@/assets/portfolio-pot-arts.png.asset.json";
import marketing from "@/assets/portfolio-marketing.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Lihle Websites" },
      { name: "description", content: "Selected projects from Lihle Websites — modern websites for healthcare, artists, fashion, arts nonprofits and marketing agencies, crafted with AI-assisted workflows." },
      { property: "og:title", content: "Portfolio — Lihle Websites" },
      { property: "og:description", content: "Selected modern web projects crafted with React, TypeScript and AI." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  { img: lumen.url, title: "Lumen Dental", tag: "Healthcare", desc: "Considered, calm website for a modern dental practice — clear services and easy online booking." },
  { img: artist.url, title: "Nadia Voss", tag: "Artist Portfolio", desc: "A visual-first portfolio for a contemporary painter — quiet layout, loud imagery." },
  { img: fashion.url, title: "Atelier Nine", tag: "Fashion Portfolio", desc: "Editorial fashion portfolio with fullscreen lookbooks and refined typography." },
  { img: potArts.url, title: "Pot of Moving Arts", tag: "NPC / Arts", desc: "Nonprofit theatre & dance company site with classes, events and a donation flow." },
  { img: marketing.url, title: "Northline Marketing", tag: "Marketing Agency", desc: "Bold agency site with case studies, services and lead-generation focus." },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow label="portfolio" className="justify-center" />
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">Work that ships and performs.</h1>
          <p className="mt-5 text-lg text-muted-foreground">A selection of recent projects across healthcare, arts, fashion and marketing.</p>
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
