import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background-dark text-stone-100">
      <SiteHeader />
      <main className="min-w-0">{children}</main>
      <SiteFooter />
    </div>
  );
}

