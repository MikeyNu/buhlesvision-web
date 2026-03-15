import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected works and case studies from Buhle's Vision.",
};

type PortfolioPageProps = {
  searchParams: Promise<{ view?: string }>;
};

export default async function PortfolioPage({
  searchParams,
}: PortfolioPageProps) {
  const params = await searchParams;
  const view = params.view === "case-studies" ? "case-studies" : "all";
  const projects = await getProjects();
  const filteredProjects =
    view === "case-studies"
      ? projects.filter((project) => project.isCaseStudy)
      : projects;

  return (
    <div className="relative bg-background-dark pb-24 text-slate-100">
      <header className="relative border-b border-white/5 px-6 pb-24 pt-52">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-12 text-8xl font-extrabold leading-[0.85] tracking-tighter md:text-[10rem]">
            SELECTED
            <br />
            <span className="italic text-primary">WORKS</span>
          </h1>
          <div className="flex flex-col justify-between gap-12 border-t border-white/10 pt-12 md:flex-row md:items-end">
            <p className="max-w-xl text-xl leading-relaxed text-slate-400">
              We transform ambitious brands through high-end editorial design and
              strategic digital presence. Our vision is your competitive edge.
            </p>
            <div className="flex gap-4">
              <Link
                className={`rounded-full border px-8 py-3 text-xs font-bold uppercase tracking-widest ${
                  view === "all"
                    ? "border-primary bg-primary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                href="/portfolio?view=all"
              >
                All Projects
              </Link>
              <Link
                className={`rounded-full border px-8 py-3 text-xs font-bold uppercase tracking-widest ${
                  view === "case-studies"
                    ? "border-primary bg-primary text-white"
                    : "border-slate-700 text-slate-400 hover:border-primary hover:text-primary"
                }`}
                href="/portfolio?view=case-studies"
              >
                Case Studies
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-40 -z-10 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[160px]" />
        </div>
      </header>

      <main className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-12 gap-y-32 md:grid-cols-2">
            {filteredProjects.slice(0, 4).map((project, index) => (
              <article className={index % 2 === 1 ? "group md:mt-48" : "group"} key={project.slug}>
                <div className="relative mb-8 aspect-[4/5] overflow-hidden border border-white/5 bg-background-deepest">
                  <Image
                    alt={project.title}
                    className="h-full w-full object-cover opacity-40 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:opacity-60"
                    height={1000}
                    src={project.coverImage}
                    width={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
                  {index === 0 ? (
                    <div className="absolute left-8 top-8">
                      <span className="rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-tighter text-white">
                        Issue 01
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-4 text-5xl font-extrabold uppercase tracking-tighter transition-colors group-hover:text-primary">
                      {project.title}
                    </h2>
                    <p className="border-l-2 border-primary pl-4 text-lg italic text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-y border-white/10 py-8 text-[10px] uppercase tracking-[0.2em]">
                    <div>
                      <span className="mb-2 block text-slate-600">Scope</span>
                      <span className="font-bold text-white">{project.scope}</span>
                    </div>
                    <div>
                      <span className="mb-2 block text-slate-600">Impact</span>
                      <span className="font-bold text-primary">{project.impact}</span>
                    </div>
                    <div>
                      <span className="mb-2 block text-slate-600">Industry</span>
                      <span className="font-bold text-white">{project.industry}</span>
                    </div>
                    <div>
                      <span className="mb-2 block text-slate-600">Focus</span>
                      <span className="font-bold text-white">{project.focus}</span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex text-xs font-bold uppercase tracking-widest text-primary"
                    href={`/portfolio/${project.slug}`}
                  >
                    View Case Detail
                  </Link>
                </div>
              </article>
            ))}

            {filteredProjects[4] ? (
              <article className="group mt-24 md:col-span-2" key={filteredProjects[4].slug}>
                <div className="relative mb-12 aspect-[21/9] overflow-hidden border border-white/5 bg-background-deepest">
                  <Image
                    alt={filteredProjects[4].title}
                    className="h-full w-full object-cover opacity-30 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:opacity-50"
                    fill
                    src={filteredProjects[4].coverImage}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="text-[12rem] font-black uppercase tracking-tighter text-primary/10 md:text-[20rem]">
                      {filteredProjects[4].title}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
                </div>
                <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-12 md:flex-row">
                  <div className="flex-1">
                    <h2 className="mb-4 text-6xl font-extrabold uppercase leading-none tracking-tighter transition-colors group-hover:text-primary md:text-8xl">
                      {filteredProjects[4].title}
                    </h2>
                    <p className="border-l-2 border-primary pl-4 text-xl italic text-slate-400">
                      {filteredProjects[4].subtitle}
                    </p>
                  </div>
                  <div className="flex gap-16 border-y border-white/10 py-8 text-[10px] uppercase tracking-[0.3em] md:border-l md:border-y-0 md:pl-16">
                    <div>
                      <span className="mb-3 block text-slate-600">Impact</span>
                      <span className="text-2xl font-extrabold tracking-tighter text-primary">
                        {filteredProjects[4].impact}
                      </span>
                    </div>
                    <div>
                      <span className="mb-3 block text-slate-600">Industry</span>
                      <span className="text-lg font-bold tracking-tighter text-white">
                        {filteredProjects[4].industry}
                      </span>
                    </div>
                    <div>
                      <span className="mb-3 block text-slate-600">Focus</span>
                      <span className="text-lg font-bold tracking-tighter text-white">
                        {filteredProjects[4].focus}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </main>

      <section className="overflow-hidden border-t border-white/10 bg-background-deepest px-6 py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-16 text-sm font-bold uppercase tracking-[0.6em] text-slate-600">
            Next Project
          </h2>
          <Link className="group relative mb-40 inline-block" href="/contact">
            <span className="block text-7xl font-black uppercase leading-[0.85] tracking-tighter transition-colors group-hover:text-primary md:text-[12rem]">
              Let&apos;s Build it.
            </span>
            <span className="mt-12 block text-2xl font-bold uppercase tracking-widest text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Send an inquiry →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
