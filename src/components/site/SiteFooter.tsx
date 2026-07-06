import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { GithubMark, InstagramMark, LinkedinMark, GmailMark } from "./BrandIcon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Logo size="md" />
          <p className="max-w-sm text-sm text-muted-foreground">
            Modern websites built smarter with AI. We design and ship fast,
            conversion-focused experiences for ambitious brands.
          </p>
          <div className="flex gap-2">
            <a href="mailto:hello@lihlewebsites.com" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"><GmailMark size={16} /></a>
            <a href="https://github.com" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"><GithubMark size={16} /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"><InstagramMark size={16} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"><LinkedinMark size={16} /></a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Get started</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/book" className="hover:text-foreground">Book a project</Link></li>
            <li><a href="mailto:hello@lihlewebsites.com" className="hover:text-foreground">hello@lihlewebsites.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lihle Websites. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}
