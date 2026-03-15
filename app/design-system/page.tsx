import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BrandLockup } from "@/components/site/brand-lockup";
import { MaterialIcon } from "@/components/site/material-icon";

export const metadata: Metadata = {
  title: "Design System",
  description: "Internal design language guide for Buhle's Vision.",
};

export default function DesignSystemPage() {
  return (
    <div className="bg-background-dark text-stone-200">
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <BrandLockup
              iconSize="sm"
              nameClassName="text-lg"
              subtitleClassName="text-[8px]"
            />
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest md:flex">
            <a href="#principles">Principles</a>
            <a href="#foundation">Foundation</a>
            <a href="#components">Components</a>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] text-primary">
              v1.0.4
            </span>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-20">
        <header className="mb-32 max-w-4xl">
          <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Design Language System
          </h2>
          <h1 className="font-editorial text-7xl leading-none text-white lg:text-8xl">
            Crafting <span className="italic text-primary">High-End</span> Digital
            Experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone-400">
            A comprehensive visual DNA for Buhle&apos;s Vision. Our system balances
            editorial elegance with high-performance utility, ensuring
            consistency across every digital touchpoint.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-16">
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-32 flex flex-col gap-8">
              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">
                  Foundations
                </h3>
                <ul className="flex flex-col gap-4 text-sm font-medium">
                  <li>
                    <a className="group flex items-center justify-between hover:text-primary" href="#color">
                      Color Theory
                      <MaterialIcon className="text-xs opacity-0 group-hover:opacity-100" name="arrow_forward" outlined />
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center justify-between hover:text-primary" href="#typography">
                      Typography Scale
                      <MaterialIcon className="text-xs opacity-0 group-hover:opacity-100" name="arrow_forward" outlined />
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center justify-between hover:text-primary" href="#iconography">
                      Iconography
                      <MaterialIcon className="text-xs opacity-0 group-hover:opacity-100" name="arrow_forward" outlined />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="col-span-12 flex flex-col gap-40 lg:col-span-9">
            <section id="color">
              <div className="mb-12 flex items-baseline gap-4 border-b border-primary/10 pb-6">
                <span className="font-mono text-sm italic text-primary">01.</span>
                <h2 className="font-editorial text-4xl">Color Palette</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  ["#ff531f", "Electric Ginger", "Primary CTA / Brand Accent", "bg-primary"],
                  ["#1a2a40", "Midnight Depth", "Secondary Brand Blue", "bg-brand-blue"],
                  ["#3d322e", "Neutral Clay", "Background & Type Foundation", "bg-neutral-slate"],
                ].map(([hex, title, subtitle, colorClass]) => (
                  <article className="flex flex-col gap-4" key={title}>
                    <div className={`flex h-64 items-end rounded-xl p-6 ${colorClass}`}>
                      <span className="font-mono text-sm font-bold text-white">{hex}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight">{title}</h4>
                      <p className="text-sm uppercase text-stone-400">{subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="typography">
              <div className="mb-12 flex items-baseline gap-4 border-b border-primary/10 pb-6">
                <span className="font-mono text-sm italic text-primary">02.</span>
                <h2 className="font-editorial text-4xl">Typography Scale</h2>
              </div>
              <div className="space-y-16">
                <div>
                  <p className="mb-8 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Editorial Display / Playfair Display
                  </p>
                  <div className="space-y-8">
                    <h3 className="font-editorial text-7xl text-white">Display Heading XL</h3>
                    <h4 className="font-editorial text-5xl text-white">Editorial Heading L</h4>
                    <h5 className="font-editorial text-3xl text-white">Section Title Medium</h5>
                  </div>
                </div>
                <div>
                  <p className="mb-8 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Modern Sans / Plus Jakarta Sans
                  </p>
                  <p className="max-w-3xl text-2xl font-light leading-relaxed">
                    Body Large: The intersection of art and commerce requires a
                    delicate balance of aesthetics and technical precision.
                  </p>
                </div>
              </div>
            </section>

            <section id="components">
              <div className="mb-12 flex items-baseline gap-4 border-b border-primary/10 pb-6">
                <span className="font-mono text-sm italic text-primary">03.</span>
                <h2 className="font-editorial text-4xl">Interactive Components</h2>
              </div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="space-y-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                    Button Variants
                  </h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white">
                      Primary Action
                    </button>
                    <button className="rounded border-2 border-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-widest text-white">
                      Secondary Blue
                    </button>
                  </div>
                </div>
                <div className="space-y-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                    Theme Adaptivity
                  </h4>
                  <div className="flex h-48 overflow-hidden rounded-xl border border-primary/10">
                    <div className="flex w-1/2 items-center justify-center bg-white">
                      <div className="h-12 w-12 rounded-lg bg-primary" />
                    </div>
                    <div className="flex w-1/2 items-center justify-center bg-background-dark">
                      <div className="h-12 w-12 rounded-lg bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="iconography">
              <div className="mb-12 flex items-baseline gap-4 border-b border-primary/10 pb-6">
                <span className="font-mono text-sm italic text-primary">04.</span>
                <h2 className="font-editorial text-4xl">Visual Language</h2>
              </div>
              <div className="grid grid-cols-4 gap-8 md:grid-cols-8">
                {[
                  "visibility",
                  "auto_awesome",
                  "campaign",
                  "insights",
                  "brush",
                  "public",
                  "rocket_launch",
                  "fingerprint",
                ].map((icon) => (
                  <div className="flex flex-col items-center gap-3" key={icon}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20">
                      <MaterialIcon className="text-primary" name={icon} outlined />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-stone-500">
                      {icon.replace("_", " ")}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl bg-brand-blue p-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue via-brand-blue/60 to-primary/10" />
                <div className="relative z-10 space-y-8 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
                    Application Preview
                  </p>
                  <h2 className="font-editorial text-6xl text-white">
                    Visualizing Innovation
                  </h2>
                  <Link
                    className="rounded-full bg-primary px-10 py-5 text-sm font-bold uppercase tracking-widest text-white"
                    href="/contact"
                  >
                    Start Project
                  </Link>
                </div>
                <Image
                  alt="Abstract architectural lines in deep blue"
                  className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
                  fill
                  src="/images/dsg-pattern.jpg"
                />
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-primary/10 bg-background-dark py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="flex flex-col gap-2">
            <BrandLockup iconSize="sm" nameClassName="text-base" />
            <span className="text-[10px] uppercase tracking-widest text-stone-500">
              © 2026 Design System v1.0. All Rights Reserved.
            </span>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-widest">
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://behance.net">Behance</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
