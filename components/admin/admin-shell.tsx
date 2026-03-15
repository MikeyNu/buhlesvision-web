"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

import { BrandLockup } from "@/components/site/brand-lockup";
import { signOutAdmin } from "@/lib/actions/auth";
import { cn } from "@/lib/utils/cn";

type AdminShellProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/inquiries", label: "Inquiries" },
];

export function AdminShell({ children }: AdminShellProps) {
  const currentPath = usePathname();

  return (
    <div className="min-h-screen bg-background-deep px-6 py-10 text-stone-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col justify-between gap-6 border-b border-stone-800 pb-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              CMS / Admin
            </p>
            <BrandLockup
              className="pt-2"
              iconSize="sm"
              nameClassName="text-lg"
              subtitleClassName="text-[8px]"
            />
          </div>
          <form action={signOutAdmin}>
            <button
              className="rounded border border-stone-700 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary"
              type="submit"
            >
              Sign Out
            </button>
          </form>
        </header>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="space-y-2">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "block rounded border px-4 py-3 text-xs font-bold uppercase tracking-widest",
                  currentPath === item.href
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-stone-800 text-stone-300 hover:border-primary/50",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </aside>
          <section>{children}</section>
        </div>
      </div>
    </div>
  );
}
