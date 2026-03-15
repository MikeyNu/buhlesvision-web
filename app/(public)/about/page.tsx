import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { coreServicesList, philosophyPillars } from "@/lib/content/site-content";
import { MaterialIcon } from "@/components/site/material-icon";

export const metadata: Metadata = {
  title: "About",
  description: "Buhle's Vision agency story, philosophy, and core services.",
};

const cofounders = [
  {
    name: "Mthokozisi Sanele Mbakane",
    role: "Cofounder & Creative Director, Buhles Vision",
    description:
      "Mthokozisi is a results-driven creative leader with a passion for digital innovation. As Cofounder and Creative Director of Buhles Vision, he drives the agency's strategic vision and oversees creative direction, ensuring impactful marketing solutions for clients.",
    marker: "MSM",
  },
  {
    name: "Tshepiso Pitso",
    role: "Cofounder & Operational Director, Buhle's Vision",
    description:
      "Tshepiso is a strategic and results-oriented leader with a passion for operational excellence. As Operational Director of Buhle's Vision, she ensures that every project runs seamlessly, overseeing processes, client delivery, and day-to-day operations to guarantee impactful outcomes for clients.",
    marker: "TP",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="pb-20 pt-24 md:pb-24 md:pt-32">
      <section className="site-container section-space-y-tight">
        <div className="editorial-grid gap-6">
          <div className="col-span-full lg:col-span-10">
            <span className="mb-8 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              About the Agency
            </span>
            <h1 className="mb-12 text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl">
              Crafting the{" "}
              <span className="font-light italic text-primary/80">
                aesthetic future
              </span>{" "}
              of digital commerce through intentional design.
            </h1>
          </div>
          <div className="col-span-full lg:col-span-6 lg:col-start-6">
            <p className="text-lg font-light leading-relaxed text-stone-400 sm:text-xl md:text-2xl lg:indent-16">
              Buhle&apos;s Vision is a creative powerhouse operating at the
              intersection of high-end editorial aesthetics and functional
              digital strategy. We don&apos;t just build brands; we cultivate visual
              legacies that resonate with the modern luxury consumer.
            </p>
          </div>
        </div>
      </section>

      <section className="site-container-wide section-space-y-tight">
        <div className="group relative aspect-[21/9] overflow-hidden rounded-xl">
          <Image
            alt="Modern minimalist office interior with orange accents"
            className="h-full w-full object-cover brightness-75 grayscale transition-all duration-700 group-hover:grayscale-0"
            height={900}
            src="/images/about-office.jpg"
            width={1800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-sm uppercase tracking-widest text-white">
                Kempton Park • Gauteng • Digital
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container section-space-y-tight">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
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

      <section className="section-space-y overflow-hidden bg-background-deepest">
        <div className="site-container">
          <div className="mb-24">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              What We Do
            </span>
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Core Services
            </h2>
          </div>
          <div className="space-y-0">
            {coreServicesList.map((service, index) => (
              <Link
                className={`group flex cursor-pointer flex-col items-start justify-between gap-6 border-white/10 py-12 transition-all duration-500 hover:border-primary md:flex-row md:items-center ${
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

      <section className="site-container section-space-y-tight">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Leadership
            </span>
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Two Co-Founders, One Vision
            </h2>
          </div>
          <p className="max-w-xl text-lg font-light leading-relaxed text-stone-400">
            Buhle&apos;s Vision is led by two co-founders who align creative
            direction with operational precision to deliver measurable growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cofounders.map((cofounder, index) => (
            <article
              className="group relative overflow-hidden rounded-xl border border-primary/20 bg-background-deepest p-8 md:p-10"
              key={cofounder.name}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 text-8xl font-black uppercase text-primary/10 transition-transform duration-500 group-hover:scale-105">
                {cofounder.marker}
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/30 to-transparent" />
              <span className="mb-6 inline-flex rounded-full border border-primary/40 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Co-Founder {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                {cofounder.name}
              </h3>
              <p className="mb-6 border-l-2 border-primary pl-4 text-sm font-semibold uppercase tracking-wider text-stone-300">
                {cofounder.role}
              </p>
              <p className="font-light leading-relaxed text-stone-400">
                {cofounder.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container-reading mb-24">
        <div className="rounded-xl bg-primary p-8 text-center text-white sm:p-12 md:p-24">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-6xl">
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
