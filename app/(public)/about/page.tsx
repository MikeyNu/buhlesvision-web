import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { coreServicesList, philosophyPillars } from "@/lib/content/site-content";
import { MaterialIcon } from "@/components/site/material-icon";

export const metadata: Metadata = {
  title: "About",
  description: "Buhle's Vision agency story, philosophy, and core services.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32">
      <section className="mx-auto mb-32 w-full max-w-7xl px-6 lg:mb-48">
        <div className="editorial-grid gap-6">
          <div className="col-span-full lg:col-span-10">
            <span className="mb-8 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              About the Agency
            </span>
            <h1 className="mb-12 text-5xl font-extrabold leading-[1.1] md:text-7xl lg:text-8xl">
              Crafting the{" "}
              <span className="font-light italic text-primary/80">
                aesthetic future
              </span>{" "}
              of digital commerce through intentional design.
            </h1>
          </div>
          <div className="col-span-full lg:col-span-6 lg:col-start-6">
            <p className="text-xl font-light leading-relaxed text-stone-400 md:text-2xl lg:indent-16">
              Buhle&apos;s Vision is a creative powerhouse operating at the
              intersection of high-end editorial aesthetics and functional
              digital strategy. We don&apos;t just build brands; we cultivate visual
              legacies that resonate with the modern luxury consumer.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 w-full max-w-[1400px] px-6 lg:mb-48">
        <div className="group relative aspect-[21/9] overflow-hidden rounded-xl">
          <Image
            alt="Modern minimalist office interior with orange accents"
            className="h-full w-full object-cover brightness-75 grayscale transition-all duration-700 group-hover:grayscale-0"
            height={900}
            src="/images/about-office.jpg"
            width={1800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
          <div className="absolute bottom-10 left-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-sm uppercase tracking-widest text-white">
                Johannesburg • London • Digital
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 w-full max-w-7xl px-6 lg:mb-48">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Our Philosophy
          </h2>
          <p className="max-w-md font-medium text-stone-400">
            Four core pillars that define our approach to every project,
            ensuring radical clarity and future-proof results.
          </p>
        </div>
        <div className="grid grid-cols-1 border-t border-primary/20 md:grid-cols-2 lg:grid-cols-4">
          {philosophyPillars.map((pillar, index) => (
            <article
              className={`border-primary/10 pb-16 pt-8 ${
                index === philosophyPillars.length - 1
                  ? "md:pl-8"
                  : index === 0
                    ? "md:pr-8"
                    : "md:px-8"
              } border-b md:border-b-0`}
              key={pillar.number}
            >
              <span className="mb-6 block text-4xl font-bold text-primary">
                {pillar.number}
              </span>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-light leading-relaxed text-stone-400">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-32 overflow-hidden bg-background-deepest py-32 lg:mb-48 lg:py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              What We Do
            </span>
            <h2 className="text-5xl font-extrabold tracking-tighter md:text-6xl">
              Core Services
            </h2>
          </div>
          <div className="space-y-0">
            {coreServicesList.map((service, index) => (
              <Link
                className={`group flex cursor-pointer flex-col items-center justify-between border-white/10 py-12 transition-all duration-500 hover:border-primary md:flex-row ${
                  index === 0
                    ? "border-t"
                    : index === coreServicesList.length - 1
                      ? "border-b border-t"
                      : "border-t"
                }`}
                href="/services"
                key={service}
              >
                <div className="flex w-full items-center gap-12">
                  <span className="text-sm font-bold text-white/40 transition-colors group-hover:text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl font-bold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-4 md:text-5xl">
                    {service}
                  </h3>
                </div>
                <MaterialIcon
                  className="hidden text-primary opacity-0 transition-opacity group-hover:opacity-100 md:block"
                  name="arrow_forward"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 w-full max-w-7xl px-6 lg:mb-48">
        <div className="editorial-grid items-center">
          <div className="col-span-full mb-12 md:col-span-5 md:mb-0">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-xl bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
              <Image
                alt="Elegant professional woman portrait in high-end studio lighting"
                className="relative w-full rounded-xl grayscale transition-all duration-700 hover:grayscale-0"
                height={1000}
                src="/images/about-founder.jpg"
                width={700}
              />
            </div>
          </div>
          <div className="col-span-full md:col-span-6 md:col-start-7">
            <span className="mb-8 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Founder&apos;s Note
            </span>
            <blockquote className="mb-8 text-2xl font-light italic leading-snug md:text-4xl">
              &quot;Design is not just what we see, but the narrative we create
              between the consumer and the craft. We are here to make that
              narrative unforgettable.&quot;
            </blockquote>
            <div>
              <p className="text-xl font-bold uppercase tracking-widest">
                Buhle Ndlovu
              </p>
              <p className="font-medium text-stone-500">
                Creative Director &amp; Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-24 w-full max-w-5xl px-6">
        <div className="rounded-xl bg-primary p-12 text-center text-white md:p-24">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tighter md:text-6xl">
            Ready to elevate your vision?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-white/80 md:text-2xl">
            Join the ranks of elite brands redefining the digital landscape.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              className="rounded-full bg-background-dark px-10 py-5 font-bold uppercase tracking-widest text-white hover:scale-105"
              href="/contact"
            >
              Start a Project
            </Link>
            <Link
              className="rounded-full border border-white/20 bg-white/10 px-10 py-5 font-bold uppercase tracking-widest text-white hover:bg-white/20"
              href="/portfolio"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

