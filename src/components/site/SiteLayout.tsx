import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader overlay={transparentHeader} />
      <main className={`flex-1 ${transparentHeader ? "" : "pt-20"}`}>{children}</main>
      <SiteFooter />
    </div>
  );
}
