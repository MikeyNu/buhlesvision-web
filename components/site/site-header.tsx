"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/lib/content/site-content";
import { cn } from "@/lib/utils/cn";
import { BrandLockup } from "./brand-lockup";
import { MaterialIcon } from "./material-icon";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerBgClass = "bg-background-deepest";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        headerBgClass,
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link className="flex items-center gap-2" href="/">
          <BrandLockup
            iconSize="sm"
            nameClassName="text-lg"
            subtitleClassName="text-[6px] tracking-[0.14em]"
          />
        </Link>

        <nav className="hidden items-center gap-12 text-xs font-semibold uppercase tracking-widest md:flex">
          {navLinks.map((item) => (
            <Link
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-stone-100",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden rounded-full bg-primary px-6 py-2 text-xs font-bold uppercase tracking-widest text-white hover:brightness-110 md:inline-flex"
            href="/contact"
          >
            Inquire
          </Link>
          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-stone-700 text-stone-100 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <MaterialIcon className="text-base" name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0",
          headerBgClass,
        )}
        id="mobile-menu"
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 text-xs font-semibold uppercase tracking-widest">
          {navLinks.map((item) => (
            <Link
              className={cn(
                "rounded border border-stone-800 px-3 py-3",
                pathname === item.href
                  ? "border-primary text-primary"
                  : "text-stone-100",
              )}
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="rounded bg-primary px-3 py-3 text-center text-white"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
