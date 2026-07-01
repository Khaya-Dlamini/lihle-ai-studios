import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lihle Websites" },
      { name: "description", content: "Get in touch with Lihle Websites. Email us, send a message or book a project consultation." },
      { property: "og:title", content: "Contact — Lihle Websites" },
      { property: "og:description", content: "Get in touch with Lihle Websites to start a project or consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Let's build something great together.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you have a brief or just an idea, we'd love to hear from you.
              Reach out and we'll respond within one business day.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@lihlewebsites.com" className="font-medium text-foreground hover:text-primary">hello@lihlewebsites.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">Available on request</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted-foreground">Studio</p>
                  <p className="font-medium text-foreground">Remote · Working globally</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl surface-charcoal p-8 md:p-12">
            <div className="absolute inset-0 mesh-bg opacity-50" />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Ready to start?</h2>
              <p className="mt-3 text-white/70">Use our booking form to share your project details. It only takes a couple of minutes.</p>
              <div className="mt-8">
                <Button asChild size="lg" className="shadow-glow">
                  <Link to="/book">Book a project <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
